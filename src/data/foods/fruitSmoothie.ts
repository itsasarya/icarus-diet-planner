import type { Food } from "@/types/food";
import fruitSmoothieImg from "@/assets/foods/fruit_smoothie.png";

const fruitSmoothie: Food = {
  id: "fruit_smoothie",
  name: "Fruit Smoothie",
  stomachCost: 0,
  durationSec: 300,
  buffs: [
    { id: "experience_gained", value: 10 },
    { id: "chance_to_resist_cave_sickness", value: 30 },
  ],
  instantEffects: [
    { id: "hydration", value: 300 },
  ],
  image: fruitSmoothieImg,
  craftedAt: [
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

export default fruitSmoothie;
