import type { Food } from "@/types/food";
import honeyTeaImg from "@/assets/foods/honey_tea.png";

const honeyTea: Food = {
  id: "honey_tea",
  name: "Honey Tea",
  stomachCost: 0,
  durationSec: 300,
  buffs: [
    { id: "parasitic_afflictions_duration", value: -25 },
    { id: "food_effects_duration", value: 20 },
  ],
  instantEffects: [
  ],
  image: honeyTeaImg,
};

export default honeyTea;
