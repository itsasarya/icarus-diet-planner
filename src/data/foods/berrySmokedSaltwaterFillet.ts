import type { Food } from "@/types/food";
import berrySmokedSaltwaterFilletImg from "@/assets/foods/berry_smoked_saltwater_fillet.png";

const berrySmokedSaltwaterFillet: Food = {
  id: "berry_smoked_saltwater_fillet",
  name: "Berry Smoked Saltwater Fillet",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "exposure_resistance", value: 5 },
    { id: "water_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "nutrition", value: 200 },
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
