import type { Food } from "@/types/food";
import avocadoImg from "@/assets/foods/avocado.png";

const avocado: Food = {
  id: "avocado",
  name: "Avocado",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: avocadoImg,
};

export default avocado;
