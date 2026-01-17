import type { Food } from "@/types/food";
import potatoAndCarrotFriesImg from "@/assets/foods/potato_and_carrot_fries.png";

const potatoAndCarrotFries: Food = {
  id: "potato_and_carrot_fries",
  name: "Potato and Carrot Fries",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "health_regenration", value: 10 },
    { id: "projectile_damage", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
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
