import type { Food } from "@/types/food";
import strawberryJamImg from "@/assets/foods/strawberry_jam.png";

const strawberryJam: Food = {
  id: "strawberry_jam",
  name: "Strawberry Jam",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 125 },
    { id: "experience_gained", value: 20 },
  ],
  instantEffects: [
    { id: "nutrition", value: 40 },
  ],
  image: strawberryJamImg,
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

export default strawberryJam;
