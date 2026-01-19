import type { Food } from "@/types/food";
import plainJerkyImg from "@/assets/foods/plain_jerky.png";

const plainJerky: Food = {
  id: "plain_jerky",
  name: "Plain Jerky",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "health_regeneration", value: 60 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: plainJerkyImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default plainJerky;
