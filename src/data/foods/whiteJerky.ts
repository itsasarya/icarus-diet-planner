import type { Food } from "@/types/food";
import whiteJerkyImg from "@/assets/foods/white_jerky.png";

const whiteJerky: Food = {
  id: "white_jerky",
  name: "White Jerky",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 125 },
    { id: "maximum_stamina", value: 75 },
    { id: "exposure_resistance", value: 15 },
    { id: "food_consumption", value: -25 },
    { id: "health_regeneration", value: 50 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: whiteJerkyImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default whiteJerky;
