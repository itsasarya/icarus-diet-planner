import type { Food } from "@/types/food";
import cocoaSmokedSoftMeatImg from "@/assets/foods/cocoa_smoked_soft_meat.png";

const cocoaSmokedSoftMeat: Food = {
  id: "cocoa_smoked_soft_meat",
  name: "Cocoa Smoked Soft Meat",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_stamina", value: 175 },
    { id: "health_regenration", value: 20 },
  ],
  instantEffects: [
    { id: "nutrition", value: 200 },
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
