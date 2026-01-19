import type { Food } from "@/types/food";
import mixedBerriesImg from "@/assets/foods/mixed_berries.png";

const mixedBerries: Food = {
  id: "mixed_berries",
  name: "Mixed Berries",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "water_consumption", value: -10 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: mixedBerriesImg,
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

export default mixedBerries;
