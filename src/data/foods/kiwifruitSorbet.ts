import type { Food } from "@/types/food";
import kiwifruitSorbetImg from "@/assets/foods/kiwifruit_sorbet.png";

const kiwifruitSorbet: Food = {
  id: "kiwifruit_sorbet",
  name: "Kiwifruit Sorbet",
  stomachCost: 1,
  durationSec: 800,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "experience_gained", value: 30 },
    { id: "chance_to_resist_cave_sickness", value: 45 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
    { id: "water_when_consumed", value: 100 },
  ],
  image: kiwifruitSorbetImg,
  craftedAt: [
    {
      id: "marble_kitchen_bench",
      name: "Marble Kitchen Bench",
      image: "marble_kitchen_bench.png"
    },
  ],
};

export default kiwifruitSorbet;
