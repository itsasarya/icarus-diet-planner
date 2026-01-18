import type { Food } from "@/types/food";
import squashImg from "@/assets/foods/squash.png";

const squash: Food = {
  id: "squash",
  name: "Squash",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: squashImg,
};

export default squash;
