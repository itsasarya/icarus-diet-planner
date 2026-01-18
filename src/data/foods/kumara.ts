import type { Food } from "@/types/food";
import kumaraImg from "@/assets/foods/kumara.png";

const kumara: Food = {
  id: "kumara",
  name: "Kumara",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: kumaraImg,
};

export default kumara;
