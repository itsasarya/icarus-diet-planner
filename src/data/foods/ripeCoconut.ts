import type { Food } from "@/types/food";
import ripeCoconutImg from "@/assets/foods/ripe_coconut.png";

const ripeCoconut: Food = {
  id: "ripe_coconut",
  name: "Ripe Coconut",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "food_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 8 },
    { id: "water_when_consumed", value: 8 },
  ],
  image: ripeCoconutImg,
};

export default ripeCoconut;
