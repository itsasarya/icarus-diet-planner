import type { Food } from "@/types/food";
import matureCoconutImg from "@/assets/foods/mature_coconut.png";

const matureCoconut: Food = {
  id: "mature_coconut",
  name: "Mature Coconut",
  stomachCost: 0,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 50 },
  ],
  instantEffects: [
    { id: "nutrition", value: 10 },
    { id: "hydration", value: 2 },
  ],
  image: matureCoconutImg,
};

export default matureCoconut;
