import type { Food } from "@/types/food";
import berryJamImg from "@/assets/foods/berry_jam.png";

const berryJam: Food = {
  id: "berry_jam",
  name: "Berry Jam",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 125 },
    { id: "water_consumption", value: -20 },
    { id: "shared_experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 40 },
  ],
  image: berryJamImg,
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

export default berryJam;
