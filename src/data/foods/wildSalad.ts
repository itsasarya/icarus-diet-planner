import type { Food } from "@/types/food";
import wildSaladImg from "@/assets/foods/wild_salad.png";

const wildSalad: Food = {
  id: "wild_salad",
  name: "Wild Salad",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "exposure_resistance", value: 10 },
    { id: "melee_damage", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: wildSaladImg,
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

export default wildSalad;
