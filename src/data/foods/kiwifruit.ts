import type { Food } from "@/types/food";
import kiwifruitImg from "@/assets/foods/kiwifruit.png";

const kiwifruit: Food = {
  id: "kiwifruit",
  name: "Kiwifruit",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 50 },
    { id: "chance_to_resist_cave_sickness", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
    { id: "hydration", value: 60 },
  ],
  image: kiwifruitImg,
};

export default kiwifruit;
