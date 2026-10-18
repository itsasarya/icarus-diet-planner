"""Fetch and normalize the Icarus Wiki food Statistics table."""

from __future__ import annotations

import json
from pathlib import Path
import re
import time
from urllib.parse import urljoin, urlparse

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

from wiki_food_parser import (
    normalize_statistics_rows,
    parse_statistics_table_with_images,
)

API_URL = "https://icarus.wiki.gg/api.php"
OUTPUT_PATH = Path("src/data/foods/wiki-statistics.json")
IMAGE_ROOT = Path("public/food-images")
RAW_FOOD_ID = "raw_food"


def create_session() -> requests.Session:
    session = requests.Session()
    retry = Retry(
        total=5,
        backoff_factor=2,
        status_forcelist=(429, 500, 502, 503, 504),
        allowed_methods=("GET",),
        respect_retry_after_header=True,
    )
    session.mount("https://", HTTPAdapter(max_retries=retry))
    return session


def fetch_statistics_html(session: requests.Session) -> str:
    response = session.get(
        API_URL,
        params={"action": "parse", "page": "Food", "prop": "text", "format": "json"},
        timeout=30,
    )
    response.raise_for_status()
    return response.json()["parse"]["text"]["*"]


def fetch_page_images(session: requests.Session, titles: list[str]) -> dict[str, str]:
    images: dict[str, str] = {}
    for offset in range(0, len(titles), 50):
        batch = titles[offset : offset + 50]
        response = session.get(
            API_URL,
            params={
                "action": "query",
                "prop": "pageimages",
                "piprop": "original",
                "redirects": 1,
                "titles": "|".join(batch),
                "format": "json",
            },
            timeout=30,
        )
        response.raise_for_status()
        for page in response.json().get("query", {}).get("pages", {}).values():
            title = page.get("title")
            image = page.get("original", {}).get("source")
            if title and image:
                images[title] = image
    return images


def fetch_matching_file_images(
    session: requests.Session, titles: list[str]
) -> dict[str, str]:
    resolved: dict[str, str] = {}
    for title in titles:
        time.sleep(1)
        response = session.get(
            API_URL,
            params={
                "action": "query",
                "prop": "images",
                "imlimit": "max",
                "titles": title,
                "format": "json",
            },
            timeout=30,
        )
        response.raise_for_status()
        target = re.sub(r"[^a-z0-9]", "", title.casefold())
        candidates = []
        for page in response.json().get("query", {}).get("pages", {}).values():
            for image in page.get("images", []):
                filename = image.get("title", "").removeprefix("File:")
                normalized = re.sub(r"[^a-z0-9]", "", Path(filename).stem.casefold())
                if normalized == target or normalized.startswith(target):
                    candidates.append(image["title"])

        if not candidates:
            continue

        image_response = session.get(
            API_URL,
            params={
                "action": "query",
                "prop": "imageinfo",
                "iiprop": "url",
                "titles": candidates[0],
                "format": "json",
            },
            timeout=30,
        )
        image_response.raise_for_status()
        for page in image_response.json().get("query", {}).get("pages", {}).values():
            if page.get("imageinfo"):
                resolved[title] = page["imageinfo"][0]["url"]
                break
    return resolved


def build_overlay(session: requests.Session) -> dict[str, dict[str, object]]:
    rows, table_images = parse_statistics_table_with_images(
        fetch_statistics_html(session)
    )
    overlay = normalize_statistics_rows(rows)
    # The wiki consolidates many distinct raw items into this single row. Those
    # items already have their own app records, so do not create a synthetic one.
    overlay.pop(RAW_FOOD_ID, None)

    existing_catalog = (
        json.loads(OUTPUT_PATH.read_text(encoding="utf-8"))
        if OUTPUT_PATH.exists()
        else {}
    )
    existing_by_name = {
        re.sub(r"[^a-z0-9]", "", str(record.get("name", "")).casefold()): record
        for record in existing_catalog.values()
    }
    existing_ids = set(existing_catalog)
    existing_names = set(existing_by_name)

    for food_id, record in list(overlay.items()):
        name_key = re.sub(r"[^a-z0-9]", "", str(record["name"]).casefold())
        previous = existing_catalog.get(food_id) or existing_by_name.get(name_key)
        if previous:
            previous_id = str(previous.get("id", food_id))
            overlay[previous_id] = {
                **previous,
                **record,
                "id": previous_id,
                "name": previous.get("name", record["name"]),
            }
            if previous_id != food_id:
                del overlay[food_id]
        else:
            record.setdefault("stomachCost", 1)

    for food_id, record in existing_catalog.items():
        overlay.setdefault(food_id, record)

    new_records = [
        record
        for record in overlay.values()
        if record["id"] not in existing_ids
        and re.sub(r"[^a-z0-9]", "", str(record["name"]).casefold())
        not in existing_names
    ]
    new_titles = [str(record["name"]) for record in new_records]
    images = fetch_page_images(session, new_titles)
    images.update(
        {
            title: table_images[title]
            for title in new_titles
            if title not in images and title in table_images
        }
    )
    missing_titles = [title for title in new_titles if title not in images]
    images.update(fetch_matching_file_images(session, missing_titles))

    for record in overlay.values():
        image_url = images.get(str(record["name"]))
        if image_url:
            image_url = urljoin("https://icarus.wiki.gg", image_url)
            extension = Path(urlparse(image_url).path).suffix.lower()
            if extension not in {".png", ".jpg", ".jpeg", ".webp"}:
                extension = ".png"
            local_path = IMAGE_ROOT / f"{record['id']}{extension}"
            IMAGE_ROOT.mkdir(parents=True, exist_ok=True)
            response = session.get(image_url, timeout=45)
            response.raise_for_status()
            local_path.write_bytes(response.content)
            record["imageUrl"] = f"/food-images/{local_path.name}"
        normalized_name = re.sub(r"[^a-z0-9]", "", str(record["name"]).casefold())
        if (
            record["id"] not in existing_ids
            and normalized_name not in existing_names
            and not image_url
        ):
            raise ValueError(f"New food {record['name']!r} has no wiki image")

    return overlay


def validate_overlay(overlay: dict[str, dict[str, object]]) -> None:
    if not overlay:
        raise ValueError("Wiki Statistics table produced no food records")

    seen_names: set[str] = set()
    for food_id, record in overlay.items():
        name = str(record.get("name", ""))
        if not food_id or not re.fullmatch(r"[a-z0-9_]+", food_id):
            raise ValueError(f"Unsafe food id generated for {name!r}: {food_id!r}")
        if not name or name.casefold() in seen_names:
            raise ValueError(f"Missing or duplicate food name for id {food_id!r}")
        seen_names.add(name.casefold())
        if not isinstance(record.get("buffs"), list) or not isinstance(
            record.get("instantEffects"), list
        ):
            raise ValueError(f"Malformed normalized data for {name}")


def main() -> None:
    with create_session() as session:
        session.headers.update(
            {
                "User-Agent": "IcarusFoodPlannerDataSync/1.0 (weekly wiki statistics sync)"
            }
        )
        overlay = build_overlay(session)
    validate_overlay(overlay)

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    serialized = json.dumps(overlay, indent=2, ensure_ascii=True, sort_keys=True) + "\n"
    OUTPUT_PATH.write_text(serialized, encoding="utf-8")
    print(f"Wrote statistics for {len(overlay)} foods to {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
