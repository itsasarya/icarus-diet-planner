import type { Food } from "@/types/food";
import bananaImg from "@/assets/foods/banana.png";

const banana: Food = {
  id: "banana",
  name: "Banana",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "food_consumption", value: -10 },
    { id: "maximum_stamina", value: 100 },
  ],
  instantEffects: [
  ],
  image: bananaImg,
};

export default banana;
