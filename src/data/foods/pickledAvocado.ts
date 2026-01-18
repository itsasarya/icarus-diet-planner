import type { Food } from "@/types/food";
import pickledAvocadoImg from "@/assets/foods/pickled_avocado.png";

const pickledAvocado: Food = {
  id: "pickled_avocado",
  name: "Pickled Avocado",
  stomachCost: 0,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "food_consumption", value: -20 },
    { id: "shared_experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: pickledAvocadoImg,
  craftedAt: [
    {
      id: "kitchen_bench",
      name: "Kitchen Bench",
      image: "kitchen_bench.png"
    },
    {
      id: "marble_kitchen_bench",
      name: "Marble Kitchen Bench",
      image: "marble_kitchen_bench.png"
    },
  ],
};

export default pickledAvocado;
