import type { Food } from "@/types/food";
import gorseTeaImg from "@/assets/foods/gorse_tea.png";

const gorseTea: Food = {
  id: "gorse_tea",
  name: "Gorse Tea",
  stomachCost: 0,
  durationSec: 300,
  buffs: [
    { id: "water_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "hydration", value: 300 },
  ],
  image: gorseTeaImg,
};

export default gorseTea;
