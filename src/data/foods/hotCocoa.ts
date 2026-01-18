import type { Food } from "@/types/food";
import hotCocoaImg from "@/assets/foods/hot_cocoa.png";

const hotCocoa: Food = {
  id: "hot_cocoa",
  name: "Hot Cocoa",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "food_consumption", value: -25 },
    { id: "c_to_temperature", value: 10 },
  ],
  instantEffects: [
    { id: "water_when_consumed", value: 300 },
  ],
  image: hotCocoaImg,
};

export default hotCocoa;
