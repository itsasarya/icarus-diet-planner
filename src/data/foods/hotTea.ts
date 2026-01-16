import type { Food } from "@/types/food";
import hotTeaImg from "@/assets/foods/hot_tea.png";

const hotTea: Food = {
  id: "hot_tea",
  name: "Hot Tea",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "health_regenration", value: 25 },
  ],
  instantEffects: [
    { id: "hydration", value: 300 },
  ],
  image: hotTeaImg,
};

export default hotTea;
