import type { Food } from "@/types/food";
import heartySaladImg from "@/assets/foods/hearty_salad.png";

const heartySalad: Food = {
  id: "hearty_salad",
  name: "Hearty Salad",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "health_regeneration", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: heartySaladImg,
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

export default heartySalad;
