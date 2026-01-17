import type { Food } from "@/types/food";
import honeyMeadImg from "@/assets/foods/honey_mead.png";

const honeyMead: Food = {
  id: "honey_mead",
  name: "Honey Mead",
  stomachCost: 1,
  buffs: [
    { id: "maximum_stamina", value: 125 },
    { id: "food_effects_duration", value: 30 },
  ],
  instantEffects: [
    { id: "hydration", value: 50 },
  ],
  image: honeyMeadImg,
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

export default honeyMead;
