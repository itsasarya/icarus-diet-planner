import type { Food } from "@/types/food";
import hotTeaImg from "@/assets/foods/hot_tea.png";

const hotTea: Food = {
  id: "hot_tea",
  name: "Hot Tea",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "health_regeneration", value: 25 },
    { id: "c_to_temperature", value: 10 },
  ],
  instantEffects: [
    { id: "water_when_consumed", value: 300 },
  ],
  image: hotTeaImg,
};

export default hotTea;
