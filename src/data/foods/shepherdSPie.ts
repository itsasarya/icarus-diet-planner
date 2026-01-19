import type { Food } from "@/types/food";
import shepherdSPieImg from "@/assets/foods/shepherd_s_pie.png";

const shepherdSPie: Food = {
  id: "shepherd_s_pie",
  name: "Shepherd's Pie",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "maximum_stamina", value: 75 },
    { id: "health_regeneration", value: 40 },
    { id: "food_consumption", value: -20 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
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
