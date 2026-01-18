import type { Food } from "@/types/food";
import mushroomImg from "@/assets/foods/mushroom.png";

const mushroom: Food = {
  id: "mushroom",
  name: "Mushroom",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: mushroomImg,
};

export default mushroom;
