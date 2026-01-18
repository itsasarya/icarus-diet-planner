import type { Food } from "@/types/food";
import honeySmokedBaconImg from "@/assets/foods/honey_smoked_bacon.png";

const honeySmokedBacon: Food = {
  id: "honey_smoked_bacon",
  name: "Honey Smoked Bacon",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_stamina", value: 75 },
    { id: "maximum_health", value: 75 },
    { id: "health_regeneration", value: 20 },
    { id: "food_consumption", value: -25 },
    { id: "experience_gained", value: 15 },
    { id: "food_effects_duration", value: 25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: honeySmokedBaconImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default honeySmokedBacon;
