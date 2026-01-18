import type { Food } from "@/types/food";
import wildBerryImg from "@/assets/foods/wild_berry.png";

const wildBerry: Food = {
  id: "wild_berry",
  name: "Wild Berry",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 50 },
    { id: "water_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 4 },
    { id: "water_when_consumed", value: 2 },
  ],
  image: wildBerryImg,
};

export default wildBerry;
