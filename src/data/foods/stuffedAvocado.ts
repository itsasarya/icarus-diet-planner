import type { Food } from "@/types/food";
import stuffedAvocadoImg from "@/assets/foods/stuffed_avocado.png";

const stuffedAvocado: Food = {
  id: "stuffed_avocado",
  name: "Stuffed Avocado",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "health_regeneration", value: 10 },
    { id: "food_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: stuffedAvocadoImg,
  craftedAt: [
    {
      id: "cooking_station",
      name: "Cooking Station",
      image: "cooking_station.png"
    },
  ],
};

export default stuffedAvocado;
