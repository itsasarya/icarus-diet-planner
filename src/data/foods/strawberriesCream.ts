import type { Food } from "@/types/food";
import strawberriesCreamImg from "@/assets/foods/strawberries_cream.png";

const strawberriesCream: Food = {
  id: "strawberries_cream",
  name: "Strawberries & Cream",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 50 },
    { id: "maximum_stamina", value: 100 },
    { id: "experience_gained", value: 30 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: strawberriesCreamImg,
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

export default strawberriesCream;
