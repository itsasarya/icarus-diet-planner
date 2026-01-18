import type { Food } from "@/types/food";
import potatoAndCarrotFriesImg from "@/assets/foods/potato_and_carrot_fries.png";

const potatoAndCarrotFries: Food = {
  id: "potato_and_carrot_fries",
  name: "Potato and Carrot Fries",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "maximum_health", value: 150 },
    { id: "health_regeneration", value: 10 },
    { id: "food_consumption", value: -10 },
    { id: "projectile_damage", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: potatoAndCarrotFriesImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default potatoAndCarrotFries;
