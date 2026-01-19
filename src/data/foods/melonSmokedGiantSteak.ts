import type { Food } from "@/types/food";
import melonSmokedGiantSteakImg from "@/assets/foods/melon_smoked_giant_steak.png";

const melonSmokedGiantSteak: Food = {
  id: "melon_smoked_giant_steak",
  name: "Melon Smoked Giant Steak",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 125 },
    { id: "maximum_stamina", value: 75 },
    { id: "health_regeneration", value: 100 },
    { id: "food_consumption", value: -25 },
    { id: "oxygen_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: melonSmokedGiantSteakImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default melonSmokedGiantSteak;
