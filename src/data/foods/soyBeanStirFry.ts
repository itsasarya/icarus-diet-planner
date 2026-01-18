import type { Food } from "@/types/food";
import soyBeanStirFryImg from "@/assets/foods/soy_bean_stir_fry.png";

const soyBeanStirFry: Food = {
  id: "soy_bean_stir_fry",
  name: "Soy Bean Stir-Fry",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 75 },
    { id: "projectile_damage", value: 10 },
    { id: "stamina_regeneration", value: 10 },
    { id: "health_regeneration", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: soyBeanStirFryImg,
  craftedAt: [
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
  ],
};

export default soyBeanStirFry;
