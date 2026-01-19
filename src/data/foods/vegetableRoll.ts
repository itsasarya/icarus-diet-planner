import type { Food } from "@/types/food";
import vegetableRollImg from "@/assets/foods/vegetable_roll.png";

const vegetableRoll: Food = {
  id: "vegetable_roll",
  name: "Vegetable Roll",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 150 },
    { id: "oxygen_consumption", value: -30 },
    { id: "exposure_resistance", value: 15 },
    { id: "health_regeneration", value: 30 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: vegetableRollImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default vegetableRoll;
