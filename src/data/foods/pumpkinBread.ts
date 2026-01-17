import type { Food } from "@/types/food";
import pumpkinBreadImg from "@/assets/foods/pumpkin_bread.png";

const pumpkinBread: Food = {
  id: "pumpkin_bread",
  name: "Pumpkin Bread",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "exposure_resistance", value: 15 },
    { id: "experience_gained", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: pumpkinBreadImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default pumpkinBread;
