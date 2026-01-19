import type { Food } from "@/types/food";
import driedFattyTBoneImg from "@/assets/foods/dried_fatty_t_bone.png";

const driedFattyTBone: Food = {
  id: "dried_fatty_t_bone",
  name: "Dried Fatty T-Bone",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "yield_from_butchering_animals", value: 25 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: driedFattyTBoneImg,
  craftedAt: [
    {
      id: "drying_rack",
      name: "Drying Rack",
      image: "drying_rack.png"
    },
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default driedFattyTBone;
