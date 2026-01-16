import type { Food } from "@/types/food";
import cheeseRollImg from "@/assets/foods/cheese_roll.png";

const cheeseRoll: Food = {
  id: "cheese_roll",
  name: "Cheese Roll",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 125 },
    { id: "experience_gained", value: 10 },
    { id: "health_regenration", value: 25 },
  ],
  instantEffects: [
    { id: "nutrition", value: 120 },
  ],
  image: cheeseRollImg,
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

export default cheeseRoll;
