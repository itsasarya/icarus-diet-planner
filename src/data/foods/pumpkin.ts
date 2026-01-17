import type { Food } from "@/types/food";
import pumpkinImg from "@/assets/foods/pumpkin.png";

const pumpkin: Food = {
  id: "pumpkin",
  name: "Pumpkin",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "nutrition", value: 20 },
  ],
  image: pumpkinImg,
};

export default pumpkin;
