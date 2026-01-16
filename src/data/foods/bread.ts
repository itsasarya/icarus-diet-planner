import type { Food } from "@/types/food";
import breadImg from "@/assets/foods/bread.png";

const bread: Food = {
  id: "bread",
  name: "Bread",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "health_when_consumed", value: 10 },
    { id: "maximum_stamina", value: 125 },
  ],
  instantEffects: [
    { id: "nutrition", value: 80 },
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
