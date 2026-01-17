import type { Food } from "@/types/food";
import rhubarbImg from "@/assets/foods/rhubarb.png";

const rhubarb: Food = {
  id: "rhubarb",
  name: "Rhubarb",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "nutrition", value: 20 },
  ],
  image: rhubarbImg,
};

export default rhubarb;
