import type { Food } from "@/types/food";
import freshwaterFilletCurryImg from "@/assets/foods/freshwater_fillet_curry.png";

const freshwaterFilletCurry: Food = {
  id: "freshwater_fillet_curry",
  name: "Freshwater Fillet Curry",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "health_regeneration", value: 15 },
    { id: "stamina_regeneration", value: 15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: freshwaterFilletCurryImg,
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

export default freshwaterFilletCurry;
