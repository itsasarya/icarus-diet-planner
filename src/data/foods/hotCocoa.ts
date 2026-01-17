import type { Food } from "@/types/food";
import hotCocoaImg from "@/assets/foods/hot_cocoa.png";

const hotCocoa: Food = {
  id: "hot_cocoa",
  name: "Hot Cocoa",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
  ],
  instantEffects: [
    { id: "hydration", value: 300 },
  ],
  image: hotCocoaImg,
};

export default hotCocoa;
