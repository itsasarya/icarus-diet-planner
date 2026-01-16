import type { Food } from "@/types/food";
import meatPieImg from "@/assets/foods/meat_pie.png";

const meatPie: Food = {
  id: "meat_pie",
  name: "Meat Pie",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "exposure_resistance", value: 15 },
    { id: "health_regenration", value: 15 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: meatPieImg,
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

export default meatPie;
