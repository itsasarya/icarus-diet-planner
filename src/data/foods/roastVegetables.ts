import type { Food } from "@/types/food";
import roastVegetablesImg from "@/assets/foods/roast_vegetables.png";

const roastVegetables: Food = {
  id: "roast_vegetables",
  name: "Roast Vegetables",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 225 },
    { id: "exposure_resistance", value: 10 },
    { id: "melee_damage", value: 10 },
    {id:"projectile_damage", value:10}
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: roastVegetablesImg,
  craftedAt: [
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
  ],
};

export default roastVegetables;
