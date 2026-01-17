import type { Food } from "@/types/food";
import fruitSnackPackImg from "@/assets/foods/fruit_snack_pack.png";

const fruitSnackPack: Food = {
  id: "fruit_snack_pack",
  name: "Fruit Snack Pack",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "chance_to_resist_cave_sickness", value: 15 },
    { id: "water_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 25 },
    { id: "hydration", value: 50 },
  ],
  image: fruitSnackPackImg,
  craftedAt: [
    {
      id: "cooking_station",
      name: "Cooking Station",
      image: "cooking_station.png"
    },
    {
      id: "kitchen_bench",
      name: "Kitchen Bench",
      image: "kitchen_bench.png"
    },
    {
      id: "marble_kitchen_bench",
      name: "Marble Kitchen Bench",
      image: "marble_kitchen_bench.png"
    },
  ],
};

export default fruitSnackPack;
