import type { Food } from "@/types/food";
import shepherdSPieImg from "@/assets/foods/shepherd_s_pie.png";

const shepherdSPie: Food = {
  id: "shepherd_s_pie",
  name: "Shepherd's Pie",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "maximum_stamina", value: 75 },
    { id: "health_regenration", value: 40 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: shepherdSPieImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default shepherdSPie;
