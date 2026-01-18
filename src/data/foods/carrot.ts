import type { Food } from "@/types/food";
import carrotImg from "@/assets/foods/carrot.png";

const carrot: Food = {
  id: "carrot",
  name: "Carrot",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: carrotImg,
};

export default carrot;
