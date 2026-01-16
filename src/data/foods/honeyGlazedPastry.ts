import type { Food } from "@/types/food";
import honeyGlazedPastryImg from "@/assets/foods/honey_glazed_pastry.png";

const honeyGlazedPastry: Food = {
  id: "honey_glazed_pastry",
  name: "Honey Glazed Pastry",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "food_effects_duration", value: 35 },
    { id: "experience_gained", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: honeyGlazedPastryImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default honeyGlazedPastry;
