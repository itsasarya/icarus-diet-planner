import type { Food } from "@/types/food";
import coffeeSmokedFattyTBoneImg from "@/assets/foods/coffee_smoked_fatty_t_bone.png";

const coffeeSmokedFattyTBone: Food = {
  id: "coffee_smoked_fatty_t_bone",
  name: "Coffee Smoked Fatty T-bone",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 175 },
    { id: "yield_from_butchering_animals", value: 50 },
    { id: "food_consumption", value: -25 },
    { id: "health_regeneration", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: coffeeSmokedFattyTBoneImg,
  craftedAt: [
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default coffeeSmokedFattyTBone;
