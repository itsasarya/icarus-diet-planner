import type { Food } from "@/types/food";
import grilledSaltwaterFilletImg from "@/assets/foods/grilled_saltwater_fillet.png";

const grilledSaltwaterFillet: Food = {
  id: "grilled_saltwater_fillet",
  name: "Grilled Saltwater Fillet",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "health_when_consumed", value: 15 },
    { id: "maximum_health", value: 75 },
    { id: "stamina_regeneration", value: 15 },
    { id: "exposure_resistance", value: 5 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 120 },
  ],
  image: grilledSaltwaterFilletImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default grilledSaltwaterFillet;
