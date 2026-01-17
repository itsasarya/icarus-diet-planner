import type { Food } from "@/types/food";
import strawberryHardCandyImg from "@/assets/foods/strawberry_hard_candy.png";

const strawberryHardCandy: Food = {
  id: "strawberry_hard_candy",
  name: "Strawberry Hard Candy",
  stomachCost: 0,
  durationSec: 120,
  buffs: [
    { id: "movement_speed", value: 25 },
  ],
  instantEffects: [
    { id: "nutrition", value: 10 },
  ],
  image: strawberryHardCandyImg,
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
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
  ],
};

export default strawberryHardCandy;
