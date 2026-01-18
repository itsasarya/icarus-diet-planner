import type { Food } from "@/types/food";
import kiwifruitJamImg from "@/assets/foods/kiwifruit_jam.png";

const kiwifruitJam: Food = {
  id: "kiwifruit_jam",
  name: "Kiwifruit Jam",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 125 },
    { id: "experience_gained", value: 20 },
    { id: "chance_to_resist_cave_sickness", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 75 },
  ],
  image: kiwifruitJamImg,
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

export default kiwifruitJam;
