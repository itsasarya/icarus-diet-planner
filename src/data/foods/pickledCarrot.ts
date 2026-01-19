import type { Food } from "@/types/food";
import pickledCarrotImg from "@/assets/foods/pickled_carrot.png";

const pickledCarrot: Food = {
  id: "pickled_carrot",
  name: "Pickled Carrot",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "projectile_damage", value: 20 },
    { id: "shared_experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: pickledCarrotImg,
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

export default pickledCarrot;
