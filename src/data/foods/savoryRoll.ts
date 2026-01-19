import type { Food } from "@/types/food";
import savoryRollImg from "@/assets/foods/savory_roll.png";

const savoryRoll: Food = {
  id: "savory_roll",
  name: "Savory Roll",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "maximum_stamina", value: 75 },
    { id: "food_consumption", value: -30 },
    { id: "stamina_regeneration", value: 15 },
    { id: "health_regeneration", value: 30 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: savoryRollImg,
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

export default savoryRoll;
