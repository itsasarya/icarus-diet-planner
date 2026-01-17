import type { Food } from "@/types/food";
import jarredHoneyImg from "@/assets/foods/jarred_honey.png";

const jarredHoney: Food = {
  id: "jarred_honey",
  name: "Jarred Honey",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 125 },
    { id: "food_effects_duration", value: 20 },
    { id: "shared_experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "nutrition", value: 40 },
  ],
  image: jarredHoneyImg,
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

export default jarredHoney;
