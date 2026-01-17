import type { Food } from "@/types/food";
import bigBreakfastImg from "@/assets/foods/big_breakfast.png";

const bigBreakfast: Food = {
  id: "big_breakfast",
  name: "Big Breakfast",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "maximum_stamina", value: 75 },
    { id: "bonus_stone_chance_pct", value: 15 },
    { id: "health_regenration", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
  ],
  image: bigBreakfastImg,
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

export default bigBreakfast;
