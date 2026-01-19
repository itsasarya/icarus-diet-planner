import type { Food } from "@/types/food";
import vegetablePieImg from "@/assets/foods/vegetable_pie.png";

const vegetablePie: Food = {
  id: "vegetable_pie",
  name: "Vegetable Pie",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 150 },
    { id: "stamina_consumed_by_actions", value: -15 },
    { id: "melee_damage", value: 15 },
    { id: "health_regeneration", value: 15 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: vegetablePieImg,
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

export default vegetablePie;
