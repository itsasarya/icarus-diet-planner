import type { Food } from "@/types/food";
import stewImg from "@/assets/foods/stew.png";

const stew: Food = {
  id: "stew",
  name: "Stew",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 75 },
    { id: "health_regeneration", value: 10 },
    { id: "stamina_regeneration", value: 10 },
    { id: "projectile_damage", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
    { id:"water_when_consumed", value: 25}
  ],
  image: stewImg,
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

export default stew;
