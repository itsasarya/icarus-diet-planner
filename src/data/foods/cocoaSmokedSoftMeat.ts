import type { Food } from "@/types/food";
import cocoaSmokedSoftMeatImg from "@/assets/foods/cocoa_smoked_soft_meat.png";

const cocoaSmokedSoftMeat: Food = {
  id: "cocoa_smoked_soft_meat",
  name: "Cocoa Smoked Soft Meat",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_stamina", value: 175 },
    { id: "stamina_regeneration", value: 100 },
    { id: "food_consumption", value: -40 },
    { id: "health_regeneration", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: cocoaSmokedSoftMeatImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default cocoaSmokedSoftMeat;
