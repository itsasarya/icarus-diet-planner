import type { Food } from "@/types/food";
import grilledPumpkinImg from "@/assets/foods/grilled_pumpkin.png";

const grilledPumpkin: Food = {
  id: "grilled_pumpkin",
  name: "Grilled Pumpkin",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "exposure_resistance", value: 5 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: grilledPumpkinImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default grilledPumpkin;
