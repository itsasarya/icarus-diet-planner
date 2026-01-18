import type { Food } from "@/types/food";
import cookedStringyMeatImg from "@/assets/foods/cooked_stringy_meat.png";

const cookedStringyMeat: Food = {
  id: "cooked_stringy_meat",
  name: "Cooked Stringy Meat",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_stamina", value: 100 },
    { id: "maximum_health", value: 150 },
    { id: "melee_attack_speed", value: 20 },
    { id: "experience_gained", value: 5 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: cookedStringyMeatImg,
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

export default cookedStringyMeat;
