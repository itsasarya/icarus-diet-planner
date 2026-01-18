import type { Food } from "@/types/food";
import smashedAvocadoToastImg from "@/assets/foods/smashed_avocado_toast.png";

const smashedAvocadoToast: Food = {
  id: "smashed_avocado_toast",
  name: "Smashed Avocado Toast",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "food_consumption", value: -25 },
    { id: "experience_gained", value: 15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
    { id: "water_when_consumed", value: 100 },
  ],
  image: smashedAvocadoToastImg,
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

export default smashedAvocadoToast;
