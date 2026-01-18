import type { Food } from "@/types/food";
import tomatoImg from "@/assets/foods/tomato.png";

const tomato: Food = {
  id: "tomato",
  name: "Tomato",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
    { id: "water_when_consumed", value: 10 },
  ],
  image: tomatoImg,
};

export default tomato;
