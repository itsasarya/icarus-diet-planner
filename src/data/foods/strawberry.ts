import type { Food } from "@/types/food";
import strawberryImg from "@/assets/foods/strawberry.png";

const strawberry: Food = {
  id: "strawberry",
  name: "Strawberry",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: strawberryImg,
};

export default strawberry;
