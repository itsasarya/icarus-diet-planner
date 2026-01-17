import type { Food } from "@/types/food";
import cookedGameyMeatImg from "@/assets/foods/cooked_gamey_meat.png";

const cookedGameyMeat: Food = {
  id: "cooked_gamey_meat",
  name: "Cooked Gamey Meat",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_stamina", value: 100 },
    { id: "maximum_health", value: 150 },
    { id: "melee_damage", value: 15 },
    { id: "experience_gained", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: cookedGameyMeatImg,
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

export default cookedGameyMeat;
