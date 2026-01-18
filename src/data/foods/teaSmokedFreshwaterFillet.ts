import type { Food } from "@/types/food";
import teaSmokedFreshwaterFilletImg from "@/assets/foods/tea_smoked_freshwater_fillet.png";

const teaSmokedFreshwaterFillet: Food = {
  id: "tea_smoked_freshwater_fillet",
  name: "Tea Smoked Freshwater Fillet",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_regeneration", value: 25 },
    { id: "health_regeneration", value: 50 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: teaSmokedFreshwaterFilletImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default teaSmokedFreshwaterFillet;
