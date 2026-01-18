import type { Food } from "@/types/food";
import pickledFreshwaterFilletImg from "@/assets/foods/pickled_freshwater_fillet.png";

const pickledFreshwaterFillet: Food = {
  id: "pickled_freshwater_fillet",
  name: "Pickled Freshwater Fillet",
  stomachCost: 0,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "stamina_regeneration", value: 30 },
    { id: "health_regeneration", value: 10 },
    { id: "shared_experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: pickledFreshwaterFilletImg,
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

export default pickledFreshwaterFillet;
