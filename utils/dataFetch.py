import time
import json
import re
import requests
import mwparserfromhell
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

BASE_URL = "https://icarus.fandom.com/api.php"
START_TIME = time.time()

# ----------------------------
# Request-safe session
# ----------------------------
def create_session():
    session = requests.Session()
    retries = Retry(
        total=5,
        backoff_factor=1,
        status_forcelist=[429, 500, 502, 503, 504]
    )
    session.mount("https://", HTTPAdapter(max_retries=retries))
    session.headers.update({
        "User-Agent": "IcarusFoodDataBot/4.0 (tool-grade JSON)"
    })
    return session

session = create_session()

def log(level, msg):
    print(f"[{level}] {msg}")

# ----------------------------
# Helpers
# ----------------------------
def slugify(text):
    return re.sub(r"[^a-z0-9]+", "_", text.lower()).strip("_")

def extract_seconds(text):
    if not text:
        return 0
    sec = 0
    h = re.search(r"(\d+)\s*h", text)
    m = re.search(r"(\d+)\s*m", text)
    s = re.search(r"(\d+)\s*s", text)
    if h: sec += int(h.group(1)) * 3600
    if m: sec += int(m.group(1)) * 60
    if s: sec += int(s.group(1))
    return sec

def clean_text(value):
    if not value:
        return ""
    value = re.sub(r"\{\{.*?\}\}", "", value)
    value = re.sub(r"\[\[|\]\]", "", value)
    return value.strip()

def extract_benches(value):
    if not value:
        return []
    matches = re.findall(r"\{\{ItemIconLink\|([^}]+)\}\}", value)
    return [m.strip() for m in matches if m.strip()]

# ----------------------------
# Canonical Buff IDs
# ----------------------------
BUFF_MAP = {
    "maximum health": "max_health",
    "maximum stamina": "max_stamina",
    "critical damage": "crit_damage_pct",
    "experience gained": "exp_gain_pct",
    "shared experience gained": "shared_exp_pct",
    "chance to resist cave sickness": "cave_sickness_resist_pct",
    "exposure resistance": "exposure_resistance_pct",
    "movement speed": "movement_speed_pct",
    "charge speed": "charge_speed_pct",
    "reload speed": "reload_speed_pct",
    "crafting speed": "crafting_speed_pct",
    "food consumption": "food_consumption_pct",
    "water consumption": "water_consumption_pct",
    "oxygen consumption": "oxygen_consumption_pct",
    "yield from butchering animals": "butchering_yield_pct",
    "overencumberance penalty": "overencumber_penalty_pct",
}

# ----------------------------
# Attribute parser
# ----------------------------
def parse_attributes(text):
    buffs = []
    instant = []
    consumes_space = 0
    nutrition = 0
    hydration = 0

    if not text:
        return buffs, instant, consumes_space, nutrition, hydration

    lines = re.split(r"(?:<br\s*/?>|\*)", text)

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Consumes space
        if "consumes" in line.lower() and "space" in line.lower():
            consumes_space = 1
            continue

        # Nutrition / Hydration
        if "food when consumed" in line.lower():
            m = re.search(r"(-?\d+)", line)
            if m:
                nutrition = int(m.group(1))
            continue
        if "water when consumed" in line.lower():
            m = re.search(r"(-?\d+)", line)
            if m:
                hydration = int(m.group(1))
            continue

        # Mining bonus
        if "chance to find additional" in line.lower():
            m = re.search(r"(-?\d+)%.*additional\s+(\w+)", line.lower())
            if m:
                buffs.append({
                    "id": f"bonus_{m.group(2)}_chance_pct",
                    "value": int(m.group(1))
                })
            continue

        # Percent buffs
        if "%" in line:
            m = re.search(r"(-?\d+)%\s*(.+)", line)
            if m:
                value = int(m.group(1))
                label = m.group(2).lower().replace("-", "").strip()
                buff_id = BUFF_MAP.get(label)
                if buff_id:
                    buffs.append({"id": buff_id, "value": value})
            continue

        # Flat numeric buffs
        m = re.search(r"(-?\d+)\s*(.+)", line)
        if m:
            value = int(m.group(1))
            label = m.group(2).lower().replace("-", "").strip()
            buff_id = BUFF_MAP.get(label)
            if buff_id:
                buffs.append({"id": buff_id, "value": value})

    return buffs, instant, consumes_space, nutrition, hydration

# ----------------------------
# Get food pages
# ----------------------------
def get_food_pages():
    pages = []
    cmcontinue = None

    while True:
        params = {
            "action": "query",
            "list": "categorymembers",
            "cmtitle": "Category:Food",
            "cmlimit": 500,
            "format": "json"
        }
        if cmcontinue:
            params["cmcontinue"] = cmcontinue

        data = session.get(BASE_URL, params=params).json()
        pages.extend(data["query"]["categorymembers"])

        if "continue" not in data:
            break
        cmcontinue = data["continue"]["cmcontinue"]
        time.sleep(1)

    log("INFO", f"Found {len(pages)} food pages")
    return pages

# ----------------------------
# Extract food
# ----------------------------
def extract_food(title):
    try:
        params = {
            "action": "query",
            "prop": "revisions",
            "rvprop": "content",
            "rvslots": "main",
            "titles": title,
            "redirects": 1,
            "format": "json"
        }

        page = next(iter(session.get(BASE_URL, params=params).json()["query"]["pages"].values()))
        text = page["revisions"][0]["slots"]["main"]["*"]

        wikicode = mwparserfromhell.parse(text)

        for template in wikicode.filter_templates():
            if template.name.strip().lower() == "consumables":
                raw = {p.name.strip(): str(p.value) for p in template.params}

                buffs, instant, consumes_space, nutrition, hydration = parse_attributes(raw.get("attributes", ""))

                duration = extract_seconds(raw.get("duration", ""))
                benches = extract_benches(raw.get("bench", ""))

                if duration > 0 and not buffs:
                    log("WARN", f"{title} has duration but no buffs")

                # Add nutrition/hydration to instantEffects
                if nutrition != 0:
                    instant.append({"id": "nutrition", "value": nutrition})
                if hydration != 0:
                    instant.append({"id": "hydration", "value": hydration})

                return {
                    "id": slugify(title),
                    "name": title,
                    "stomachCost": consumes_space,
                    "durationSec": duration,
                    "buffs": buffs,
                    "instantEffects": instant,
                    "craftedAt": benches,
                    "image": f"{slugify(title)}.png",
                    "source": "icarus_wiki"
                }, None

        return None, "no consumables template"

    except Exception as e:
        return None, str(e)

# ----------------------------
# Main
# ----------------------------
def run():
    foods = []
    parsed = skipped = errors = 0

    pages = get_food_pages()

    for i, p in enumerate(pages, 1):
        food, reason = extract_food(p["title"])
        if food:
            foods.append(food)
            parsed += 1
            log("OK", f"{i}/{len(pages)} {p['title']} → {len(food['buffs'])} buffs")
        else:
            skipped += 1
            log("SKIP", f"{i}/{len(pages)} {p['title']} → {reason}")

        time.sleep(1)

    elapsed = round(time.time() - START_TIME, 2)
    log("DONE", f"Parsed: {parsed} | Skipped: {skipped} | Errors: {errors} | Time: {elapsed}s")

    with open("foods.json", "w", encoding="utf-8") as f:
        json.dump(foods, f, indent=2, ensure_ascii=False)

    log("INFO", f"Saved {len(foods)} foods to foods.json")

if __name__ == "__main__":
    run()
