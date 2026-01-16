import type { Food } from "@/types/food";
import baconButtyImg from "@/assets/foods/bacon_butty.png";

const baconButty: Food = {
  id: "bacon_butty",
  name: "Bacon Butty",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 125 },
    { id: "health_regenration", value: 25 },
    { id: "experience_gained", value: 25 },
    { id: "critical_damage", value: 25 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: baconButtyImg,
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

export default baconButty;
