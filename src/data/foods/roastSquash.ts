import type { Food } from "@/types/food";
import roastSquashImg from "@/assets/foods/roast_squash.png";

const roastSquash: Food = {
  id: "roast_squash",
  name: "Roast Squash",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "melee_damage", value: 5 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: roastSquashImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default roastSquash;
