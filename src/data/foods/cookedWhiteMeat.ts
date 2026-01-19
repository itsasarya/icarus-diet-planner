import type { Food } from "@/types/food";
import cookedWhiteMeatImg from "@/assets/foods/cooked_white_meat.png";

const cookedWhiteMeat: Food = {
  id: "cooked_white_meat",
  name: "Cooked White Meat",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 100 },
    { id: "maximum_health", value: 150 },
    { id: "exposure_resistance", value: 20 },
    { id: "experience_gained", value: 5 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: cookedWhiteMeatImg,
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

export default cookedWhiteMeat;
