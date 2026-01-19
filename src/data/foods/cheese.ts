import type { Food } from "@/types/food";
import cheeseImg from "@/assets/foods/cheese.png";

const cheese: Food = {
  id: "cheese",
  name: "Cheese",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 100 },
    { id: "shared_experience_gained", value: 10 },
    { id: "health_regeneration", value: 25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: cheeseImg,
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

export default cheese;
