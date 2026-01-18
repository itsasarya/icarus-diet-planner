import type { Food } from "@/types/food";
import youngCoconutImg from "@/assets/foods/young_coconut.png";

const youngCoconut: Food = {
  id: "young_coconut",
  name: "Young Coconut",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 25 },
    { id: "food_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 2 },
    { id: "water_when_consumed", value: 10 },
  ],
  image: youngCoconutImg,
};

export default youngCoconut;
