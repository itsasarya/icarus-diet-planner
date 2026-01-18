import type { Food } from "@/types/food";
import ultramealImg from "@/assets/foods/ultra_meal.png";

const ultrameal: Food = {
  id: "ultrameal",
  name: "UltraMeal",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "stamina_regeneration", value: 10 },
    { id: "health_regeneration", value: 10 },
    { id: "water_consumption", value: -10 },
    { id: "food_consumption", value: -10 },
    { id: "oxygen_consumption", value: -10 },
  ],
  instantEffects: [{ id: "food_when_consumed", value: 200 }],
  image: ultramealImg,
};

export default ultrameal;
