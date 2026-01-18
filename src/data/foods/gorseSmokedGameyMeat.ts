import type { Food } from "@/types/food";
import gorseSmokedGameyMeatImg from "@/assets/foods/gorse_smoked_gamey_meat.png";

const gorseSmokedGameyMeat: Food = {
  id: "gorse_smoked_gamey_meat",
  name: "Gorse Smoked Gamey Meat",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 100 },
    { id: "maximum_stamina", value: 100 },
    { id: "melee_damage", value: 25 },
    { id: "health_regeneration", value: 20 },
    { id: "food_consumption", value: -25 },
    { id: "water_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: gorseSmokedGameyMeatImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default gorseSmokedGameyMeat;
