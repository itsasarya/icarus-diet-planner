import type { Food } from "@/types/food";
import scrambledEggsImg from "@/assets/foods/scrambled_eggs.png";

const scrambledEggs: Food = {
  id: "scrambled_eggs",
  name: "Scrambled Eggs",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "health_when_consumed", value: 10 },
    { id: "maximum_health", value: 50 },
    { id: "maximum_stamina", value: 100 },
    { id: "chance_to_find_additional_stone", value: 25 },
    { id: "experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: scrambledEggsImg,
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

export default scrambledEggs;
