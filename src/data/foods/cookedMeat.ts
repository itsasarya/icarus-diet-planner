import type { Food } from "@/types/food";
import cookedMeatImg from "@/assets/foods/cooked_meat.png";

const cookedMeat: Food = {
  id: "cooked_meat",
  name: "Cooked Meat",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "health_regeneration", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
    { id: "health_when_consumed", value: 20 },
  ],
  image: cookedMeatImg,
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

export default cookedMeat;
