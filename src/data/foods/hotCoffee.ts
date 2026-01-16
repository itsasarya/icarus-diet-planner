import type { Food } from "@/types/food";
import hotCoffeeImg from "@/assets/foods/hot_coffee.png";

const hotCoffee: Food = {
  id: "hot_coffee",
  name: "Hot Coffee",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 10 },
  ],
  instantEffects: [
    { id: "hydration", value: 300 },
  ],
  image: hotCoffeeImg,
};

export default hotCoffee;
