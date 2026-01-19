import type { Food } from "@/types/food";
import berrySmokedSaltwaterFilletImg from "@/assets/foods/berry_smoked_saltwater_fillet.png";

const berrySmokedSaltwaterFillet: Food = {
  id: "berry_smoked_saltwater_fillet",
  name: "Berry Smoked Saltwater Fillet",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_regeneration", value: 25 },
    { id: "exposure_resistance", value: 5 },
    { id: "water_consumption", value: -25 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: berrySmokedSaltwaterFilletImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default berrySmokedSaltwaterFillet;
