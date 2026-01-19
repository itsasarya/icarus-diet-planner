import type { Food } from "@/types/food";
import pickledEggsImg from "@/assets/foods/pickled_eggs.png";

const pickledEggs: Food = {
  id: "pickled_eggs",
  name: "Pickled Eggs",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "chance_to_find_additional_stone", value: 20 },
    { id: "shared_experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: pickledEggsImg,
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

export default pickledEggs;
