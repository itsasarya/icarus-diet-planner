"""Parse the Statistics table rendered from the Icarus Wiki Food page."""

from __future__ import annotations

from html.parser import HTMLParser
import re

STATISTICS_COLUMNS = (
    "FOOD ITEM",
    "RESTORES",
    "COMBINED +MAX",
    "BUFF DURATION",
    "SPOIL TIME",
    "MAX STAMINA",
    "STAMINA REGEN %",
    "MAX HEALTH",
    "HEALTH REGEN %",
    "EXP GAIN %",
    "MISCELLANEOUS",
)

STAT_BUFF_COLUMNS = {
    "MAX STAMINA": ("maximum_stamina", "flat"),
    "STAMINA REGEN %": ("stamina_regeneration", "percent"),
    "MAX HEALTH": ("maximum_health", "flat"),
    "HEALTH REGEN %": ("health_regeneration", "percent"),
    "EXP GAIN %": ("experience_gained", "percent"),
}

MISC_BUFF_IDS = {
    "bacterialafflictionsduration": "bacterial_afflictions_duration",
    "chancetofindadditionalstone": "chance_to_find_additional_stone",
    "chancetoresistcavesickness": "chance_to_resist_cave_sickness",
    "chargespeed": "charge_speed",
    "craftingspeed": "crafting_speed",
    "criticaldamage": "critical_damage",
    "explosivedamage": "explosive_damage",
    "exposureresistance": "exposure_resistance",
    "fallingresistance": "falling_resistance",
    "foodconsumption": "food_consumption",
    "foodeffectsduration": "food_effects_duration",
    "healthregeneration": "health_regeneration",
    "maximumhealth": "maximum_health",
    "maximumstamina": "maximum_stamina",
    "meleeattackspeed": "melee_attack_speed",
    "meleedamage": "melee_damage",
    "movementspeed": "movement_speed",
    "oxygenconsumption": "oxygen_consumption",
    "projectiledamage": "projectile_damage",
    "reloadspeed": "reload_speed",
    "sharedexperiencegained": "shared_experience_gained",
    "staminaconsumedbyactions": "stamina_consumed_by_actions",
    "staminaconsumedbytoolactions": "stamina_consumed_by_tool_actions",
    "staminaregeneration": "stamina_regeneration",
    "waterconsumption": "water_consumption",
    "watereffectsduration": "water_effects_duration",
    "yieldfrombutcheringanimals": "yield_from_butchering_animals",
    "yieldfromforaging": "yield_from_foraging",
    "ctotemperature": "c_to_temperature",
}

SUPPORTED_BUFF_IDS = {
    "bacterial_afflictions_duration",
    "c_to_temperature",
    "chance_to_find_additional_stone",
    "chance_to_resist_cave_sickness",
    "charge_speed",
    "crafting_speed",
    "critical_damage",
    "experience_gained",
    "exposure_resistance",
    "falling_resistance",
    "food_consumption",
    "food_effects_duration",
    "health_regeneration",
    "maximum_health",
    "maximum_stamina",
    "melee_attack_speed",
    "melee_damage",
    "movement_speed",
    "over_encumbrance_penalty",
    "oxygen_consumption",
    "parasitic_afflictions_duration",
    "projectile_damage",
    "reload_speed",
    "shared_experience_gained",
    "stamina_consumed_by_actions",
    "stamina_consumed_by_tool_actions",
    "stamina_regeneration",
    "water_consumption",
    "water_effects_duration",
    "yield_from_butchering_animals",
}


def _clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", value).strip()


def _normalize_label(value: str) -> str:
    return re.sub(r"[^a-z0-9]", "", value.casefold())


def _number(value: str) -> float:
    match = re.search(r"[+-]?\d+(?:\.\d+)?", value.replace(",", ""))
    return float(match.group()) if match else 0


def _parse_restores(value: str) -> list[dict[str, int | str]]:
    effect_ids = {
        "food": "food_when_consumed",
        "health": "health_when_consumed",
        "oxygen": "oxygen_when_consumed",
        "stamina": "stamina_when_consumed",
        "water": "water_when_consumed",
    }
    effects = []
    for amount, label in re.findall(
        r"([+-]?\d+)\s*(Food|Health|Oxygen|Stamina|Water)\b", value, re.I
    ):
        numeric_value = int(amount)
        if numeric_value:
            effects.append({"id": effect_ids[label.casefold()], "value": numeric_value})
    return effects


def normalize_statistics_rows(
    rows: list[dict[str, str]],
) -> dict[str, dict[str, object]]:
    """Convert table rows to app catalog overlays keyed by stable food id."""
    normalized: dict[str, dict[str, object]] = {}
    for row in rows:
        name = row["FOOD ITEM"]
        food_id = re.sub(r"[^a-z0-9]+", "_", name.casefold()).strip("_")
        buffs: dict[str, float] = {}
        for column, (buff_id, _) in STAT_BUFF_COLUMNS.items():
            value = _number(row[column])
            if value:
                buffs[buff_id] = value

        wiki_effects: dict[str, dict[str, object]] = {}
        for line in row["MISCELLANEOUS"].split("<br>"):
            line = _clean_text(line)
            if not line or line.casefold() == "n/a":
                continue

            matches = list(re.finditer(r"(?<![\w.])([+-]?\d+(?:\.\d+)?)\s*(%)?", line))
            if not matches:
                effect_id = "wiki_" + re.sub(r"[^a-z0-9]+", "_", line.casefold()).strip(
                    "_"
                )
                wiki_effects[effect_id] = {
                    "id": effect_id,
                    "name": line,
                    "value": None,
                    "unit": "text",
                }
                continue

            for index, match in enumerate(matches):
                label_end = (
                    matches[index + 1].start()
                    if index + 1 < len(matches)
                    else len(line)
                )
                label = _clean_text(line[match.end() : label_end]).strip(" :-")
                label = re.split(
                    r"\b(?:while|when|during|if)\b", label, maxsplit=1, flags=re.I
                )[0]
                label = _clean_text(label)
                if not label:
                    continue

                value = float(match.group(1))
                unit = "percent" if match.group(2) else "flat"
                canonical_key = _normalize_label(label)
                if (
                    canonical_key in MISC_BUFF_IDS
                    and MISC_BUFF_IDS[canonical_key] in SUPPORTED_BUFF_IDS
                ):
                    buff_id = MISC_BUFF_IDS[canonical_key]
                    buffs[buff_id] = value
                    continue

                effect_id = "wiki_" + re.sub(
                    r"[^a-z0-9]+", "_", label.casefold()
                ).strip("_")
                wiki_effects[effect_id] = {
                    "id": effect_id,
                    "name": label,
                    "value": value,
                    "unit": unit,
                }

        duration = int(_number(row["BUFF DURATION"]))
        normalized[food_id] = {
            "id": food_id,
            "name": name,
            "durationSec": duration,
            "buffs": [
                {"id": key, "value": value} for key, value in sorted(buffs.items())
            ],
            "instantEffects": _parse_restores(row["RESTORES"]),
            "wikiEffects": list(wiki_effects.values()),
        }

    return normalized


class _StatisticsTableParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.heading_depth = 0
        self.heading_text: list[str] = []
        self.in_statistics = False
        self.table_depth = 0
        self.rows: list[list[tuple[str, list[str]]]] = []
        self.image_urls: dict[str, str] = {}
        self.row: list[tuple[str, list[str]]] | None = None
        self.row_image_url: str | None = None
        self.cell: tuple[str, list[str]] | None = None
        self.anchor_depth = 0
        self.anchor_title: str | None = None
        self.anchor_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if tag in {"h2", "h3"} and self.table_depth == 0:
            self.heading_depth = 1
            self.heading_text = []
        elif self.heading_depth and tag in {"h2", "h3"}:
            self.heading_depth += 1

        if tag == "table" and self.in_statistics:
            if (
                self.table_depth == 0
                and "wikitable" in attributes.get("class", "").split()  # type: ignore
            ):
                self.table_depth = 1
            elif self.table_depth:
                self.table_depth += 1
        elif self.table_depth:
            if tag == "tr":
                self.row = []
                self.row_image_url = None
            elif tag in {"th", "td"} and self.row is not None:
                self.cell = (tag, [])
            elif tag == "img" and self.cell is not None and self.row is not None:
                if not self.row and self.row_image_url is None:
                    source = attributes.get("src") or attributes.get("data-src")
                    if source:
                        self.row_image_url = (
                            "https:" + source if source.startswith("//") else source
                        )
            elif tag == "br" and self.cell is not None:
                self.cell[1].append("\n")
            elif tag == "a" and self.cell is not None:
                self.anchor_depth += 1
                self.anchor_title = attributes.get("title")
                self.anchor_text = []

    def handle_endtag(self, tag: str) -> None:
        if self.table_depth:
            if tag == "a" and self.anchor_depth and self.cell is not None:
                self.anchor_depth -= 1
                anchor_text = _clean_text("".join(self.anchor_text))
                candidate = _clean_text(self.anchor_title or anchor_text)
                if candidate:
                    self.cell[1].append(candidate)
                self.anchor_title = None
                self.anchor_text = []
            elif tag in {"th", "td"} and self.cell is not None and self.row is not None:
                cell_tag, pieces = self.cell
                self.row.append((cell_tag, pieces))
                self.cell = None
            elif tag == "tr" and self.row is not None:
                self.rows.append(self.row)
                if self.row and self.row_image_url:
                    candidates = [
                        _clean_text(piece)
                        for piece in self.row[0][1]
                        if _clean_text(piece)
                    ]
                    item_name = max(candidates, key=len, default="")
                    if item_name:
                        self.image_urls[item_name] = self.row_image_url
                self.row = None
                self.row_image_url = None
            elif tag == "table":
                self.table_depth -= 1
                if self.table_depth == 0:
                    self.in_statistics = False

        if self.heading_depth and tag in {"h2", "h3"}:
            self.heading_depth -= 1
            if self.heading_depth == 0:
                heading = _clean_text("".join(self.heading_text)).casefold()
                heading = heading.split("[edit", maxsplit=1)[0].strip()
                self.in_statistics = heading == "statistics"

    def handle_data(self, data: str) -> None:
        if self.heading_depth:
            self.heading_text.append(data)
        if self.cell is not None:
            self.cell[1].append(data)
            if self.anchor_depth:
                self.anchor_text.append(data)


def parse_statistics_table_with_images(
    html: str,
) -> tuple[list[dict[str, str]], dict[str, str]]:
    """Return table rows and image URLs embedded in FOOD ITEM cells."""
    parser = _StatisticsTableParser()
    parser.feed(html)

    if not parser.rows:
        raise ValueError("Food Statistics table was not found in the wiki HTML")

    header = tuple(
        _clean_text(" ".join(pieces)).upper() for _, pieces in parser.rows[0]
    )
    if header != STATISTICS_COLUMNS:
        raise ValueError(f"Unexpected Food Statistics columns: {header!r}")

    records: list[dict[str, str]] = []
    for row_number, cells in enumerate(parser.rows[1:], start=2):
        if len(cells) != len(STATISTICS_COLUMNS):
            raise ValueError(
                f"Food Statistics row {row_number} has {len(cells)} cells; "
                f"expected {len(STATISTICS_COLUMNS)}"
            )

        values: list[str] = []
        for column_number, (_, pieces) in enumerate(cells):
            if column_number == 0:
                # The item cell may contain both an icon link and a text link.
                candidates = [
                    _clean_text(piece) for piece in pieces if _clean_text(piece)
                ]
                value = max(candidates, key=len, default="")
            else:
                if column_number == 10:
                    value = " <br> ".join(
                        clean_line
                        for piece in "".join(pieces).splitlines()
                        if (clean_line := _clean_text(piece))
                    )
                else:
                    value = _clean_text(" ".join(pieces))
            values.append(value)

        if not any(values):
            continue
        if not values[0]:
            raise ValueError(f"Food Statistics row {row_number} has no food name")
        records.append(dict(zip(STATISTICS_COLUMNS, values, strict=True)))

    return records, parser.image_urls


def parse_statistics_table(html: str) -> list[dict[str, str]]:
    """Return normalized table rows, failing loudly when the wiki shape changes."""
    records, _ = parse_statistics_table_with_images(html)
    return records
