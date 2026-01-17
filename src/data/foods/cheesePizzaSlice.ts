import type { Food } from "@/types/food";
import cheesePizzaSliceImg from "@/assets/foods/cheese_pizza_slice.png";

const cheesePizzaSlice: Food = {
  id: "cheese_pizza_slice",
  name: "Cheese Pizza Slice",
  stomachCost: 1,
  durationSec: 500,
  buffs: [
    { id: "maximum_health", value: 125 },
    { id: "maximum_stamina", value: 75 },
    { id: "shared_experience_gained", value: 10 },
    { id: "experience_gained", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: cheesePizzaSliceImg,
  craftedAt: [
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default cheesePizzaSlice;
