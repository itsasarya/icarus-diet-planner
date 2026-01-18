import type { Food } from "@/types/food";
import stringyJerkyImg from "@/assets/foods/stringy_jerky.png";

const stringyJerky: Food = {
  id: "stringy_jerky",
  name: "Stringy Jerky",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 125 },
    { id: "health_regeneration", value: 50 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: stringyJerkyImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default stringyJerky;
