import type { Food } from "@/types/food";
import grilledFreshwaterFilletImg from "@/assets/foods/grilled_freshwater_fillet.png";

const grilledFreshwaterFillet: Food = {
  id: "grilled_freshwater_fillet",
  name: "Grilled Freshwater Fillet",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "health_when_consumed", value: 15 },
    { id: "maximum_health", value: 75 },
    { id: "health_regenration", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 120 },
  ],
  image: grilledFreshwaterFilletImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default grilledFreshwaterFillet;
