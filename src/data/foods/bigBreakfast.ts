import type { Food } from "@/types/food";
import bigBreakfastImg from "@/assets/foods/big_breakfast.png";

const bigBreakfast: Food = {
  id: "big_breakfast",
  name: "Big Breakfast",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 225 },
    { id: "maximum_stamina", value: 75 },
    { id: "chance_to_find_additional_stone", value: 25 },
    { id: "food_consumption", value: -15 },
    { id: "health_regeneration", value: 15 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
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
