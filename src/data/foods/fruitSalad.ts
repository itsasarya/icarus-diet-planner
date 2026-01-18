import type { Food } from "@/types/food";
import fruitSaladImg from "@/assets/foods/fruit_salad.png";

const fruitSalad: Food = {
  id: "fruit_salad",
  name: "Fruit Salad",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "oxygen_consumption", value: -10 },
    { id: "water_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: fruitSaladImg,
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

export default fruitSalad;
