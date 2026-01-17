import type { Food } from "@/types/food";
import youngCoconutImg from "@/assets/foods/young_coconut.png";

const youngCoconut: Food = {
  id: "young_coconut",
  name: "Young Coconut",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 25 },
  ],
  instantEffects: [
    { id: "nutrition", value: 2 },
    { id: "hydration", value: 10 },
  ],
  image: youngCoconutImg,
};

export default youngCoconut;
