import type { Food } from "@/types/food";
import cookedBaconImg from "@/assets/foods/cooked_bacon.png";

const cookedBacon: Food = {
  id: "cooked_bacon",
  name: "Cooked Bacon",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "experience_gained", value: 15 },
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: cookedBaconImg,
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

export default cookedBacon;
