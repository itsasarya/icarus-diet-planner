import type { Food } from "@/types/food";
import matureCoconutImg from "@/assets/foods/mature_coconut.png";

const matureCoconut: Food = {
  id: "mature_coconut",
  name: "Mature Coconut",
  stomachCost: 0,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 50 },
    { id: "food_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 10 },
    { id: "water_when_consumed", value: 2 },
  ],
  image: matureCoconutImg,
};

export default matureCoconut;
