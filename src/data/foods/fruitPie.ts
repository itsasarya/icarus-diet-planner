import type { Food } from "@/types/food";
import fruitPieImg from "@/assets/foods/fruit_pie.png";

const fruitPie: Food = {
  id: "fruit_pie",
  name: "Fruit Pie",
  stomachCost: 0,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 150 },
    { id: "oxygen_consumption", value: -15 },
    { id: "water_consumption", value: -15 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: fruitPieImg,
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

export default fruitPie;
