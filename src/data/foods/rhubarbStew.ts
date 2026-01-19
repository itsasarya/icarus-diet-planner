import type { Food } from "@/types/food";
import rhubarbStewImg from "@/assets/foods/rhubarb_stew.png";

const rhubarbStew: Food = {
  id: "rhubarb_stew",
  name: "Rhubarb Stew",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 225 },
    { id: "oxygen_consumption", value: -10 },
    { id: "water_consumption", value: -10 },
    { id: "stamina_consumed_by_actions", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
    { id: "water_when_consumed", value: 25 },
  ],
  image: rhubarbStewImg,
  craftedAt: [
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

export default rhubarbStew;
