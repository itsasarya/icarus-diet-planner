import type { Food } from "@/types/food";
import cookedFattyTBoneImg from "@/assets/foods/cooked_fatty_t_bone.png";

const cookedFattyTBone: Food = {
  id: "cooked_fatty_t_bone",
  name: "Cooked Fatty T-Bone",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_stamina", value: 100 },
    { id: "maximum_health", value: 150 },
    { id: "yield_from_butchering_animals", value: 40 },
    { id: "experience_gained", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: cookedFattyTBoneImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
    {
      id: "firepit",
      name: "Firepit",
      image: "firepit.png"
    },
    {
      id: "fireplace",
      name: "Fireplace",
      image: "fireplace.png"
    },
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default cookedFattyTBone;
