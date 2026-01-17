import type { Food } from "@/types/food";
import wineImg from "@/assets/foods/wine.png";

const wine: Food = {
  id: "wine",
  name: "Wine",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 125 },
  ],
  instantEffects: [
    { id: "hydration", value: 40 },
  ],
  image: wineImg,
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

export default wine;
