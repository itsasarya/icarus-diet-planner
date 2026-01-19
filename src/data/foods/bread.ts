import type { Food } from "@/types/food";
import breadImg from "@/assets/foods/bread.png";

const bread: Food = {
  id: "bread",
  name: "Bread",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 125 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 80 },
    { id: "health_when_consumed", value: 10 },
  ],
  image: breadImg,
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

export default bread;
