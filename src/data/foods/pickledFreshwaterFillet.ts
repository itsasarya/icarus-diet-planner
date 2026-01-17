import type { Food } from "@/types/food";
import pickledFreshwaterFilletImg from "@/assets/foods/pickled_freshwater_fillet.png";

const pickledFreshwaterFillet: Food = {
  id: "pickled_freshwater_fillet",
  name: "Pickled Freshwater Fillet",
  stomachCost: 0,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "health_regenration", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
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
