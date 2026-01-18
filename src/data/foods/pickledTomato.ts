import type { Food } from "@/types/food";
import pickledTomatoImg from "@/assets/foods/pickled_tomato.png";

const pickledTomato: Food = {
  id: "pickled_tomato",
  name: "Pickled Tomato",
  stomachCost: 0,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "health_regeneration", value: 20 },
    { id: "shared_experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: pickledTomatoImg,
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

export default pickledTomato;
