import type { Food } from "@/types/food";
import micromealImg from "@/assets/foods/microMeal.png";

const micromeal: Food = {
  id: "micromeal",
  name: "MicroMeal",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "stamina_regeneration", value: 10 },
    { id: "health_regeneration", value: 10 },
    { id: "water_consumption", value: -10 },
    { id: "food_consumption", value: -10 },
    { id: "oxygen_consumption", value: -10 },
  ],
  instantEffects: [{ id: "food_when_consumed", value: 100 }],
  image: micromealImg,
};

export default micromeal;
