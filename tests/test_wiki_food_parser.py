import unittest
from pathlib import Path

from wiki_food_parser import (
    STATISTICS_COLUMNS,
    normalize_statistics_rows,
    parse_statistics_table,
    parse_statistics_table_with_images,
)


class StatisticsTableParserTests(unittest.TestCase):
    def setUp(self) -> None:
        fixture = Path(__file__).parent / "fixtures" / "food_statistics.html"
        self.html = fixture.read_text(encoding="utf-8")

    def test_parses_rows_and_all_statistics_columns(self) -> None:
        rows = parse_statistics_table(self.html)

        self.assertEqual(len(rows), 4)
        self.assertEqual(tuple(rows[0]), STATISTICS_COLUMNS)
        self.assertEqual(rows[0]["FOOD ITEM"], "Bacon Butty")
        self.assertEqual(rows[1]["FOOD ITEM"], "Berry & Seed Bar")
        self.assertEqual(
            rows[1]["MISCELLANEOUS"],
            "-10% Stamina Consumed by Tool Actions <br> -10% Water Consumption",
        )
        self.assertEqual(rows[2]["SPOIL TIME"], "N/A")
        self.assertEqual(rows[3]["FOOD ITEM"], "Raw Food")

    def test_captures_table_icon_urls(self) -> None:
        _, images = parse_statistics_table_with_images(self.html)

        self.assertEqual(
            images["Bacon Butty"],
            "https://icarus.wiki.gg/images/b/b1/Bacon.png",
        )

    def test_normalizes_stats_restores_and_new_effects(self) -> None:
        rows = normalize_statistics_rows(parse_statistics_table(self.html))

        bacon = rows["bacon_butty"]
        self.assertIn({"id": "maximum_stamina", "value": 125.0}, bacon["buffs"])
        self.assertIn({"id": "critical_damage", "value": 25.0}, bacon["buffs"])
        self.assertEqual(
            rows["beer"]["instantEffects"], [{"id": "water_when_consumed", "value": 40}]
        )
        berry_effects = rows["berry_seed_bar"]["buffs"]
        self.assertIn(
            {"id": "stamina_consumed_by_tool_actions", "value": -10.0}, berry_effects
        )
        self.assertIn({"id": "water_consumption", "value": -10.0}, berry_effects)

    def test_fails_if_required_column_changes(self) -> None:
        malformed = self.html.replace("EXP GAIN %", "EXPERIENCE %")

        with self.assertRaisesRegex(ValueError, "Unexpected Food Statistics columns"):
            parse_statistics_table(malformed)

    def test_fails_if_table_is_missing(self) -> None:
        with self.assertRaisesRegex(ValueError, "table was not found"):
            parse_statistics_table("<h2>Overview</h2><p>No table</p>")

    def test_unmodeled_numeric_effect_stays_filterable_as_wiki_effect(self) -> None:
        rows = parse_statistics_table(self.html)
        rows[0]["MISCELLANEOUS"] = "+5% Explosive Damage"

        bacon = normalize_statistics_rows(rows)["bacon_butty"]
        self.assertNotIn("explosive_damage", {buff["id"] for buff in bacon["buffs"]})
        self.assertEqual(bacon["wikiEffects"][0]["name"], "Explosive Damage")


if __name__ == "__main__":
    unittest.main()
