import type { Food } from "@/types/food";
import tomatoEggBowlImg from "@/assets/foods/tomato_egg_bowl.png";

const tomatoEggBowl: Food = {
  id: "tomato_egg_bowl",
  name: "Tomato & Egg Bowl",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "chance_to_find_additional_stone", value: 15 },
    { id: "projectile_damage", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: tomatoEggBowlImg,
  craftedAt: [
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

export default tomatoEggBowl;
