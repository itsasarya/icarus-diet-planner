import type { Food } from "@/types/food";
import fishPieImg from "@/assets/foods/fish_pie.png";

const fishPie: Food = {
  id: "fish_pie",
  name: "Fish Pie",
  stomachCost: 0,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "health_regenration", value: 5 },
    { id: "exposure_resistance", value: 5 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: fishPieImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default fishPie;
