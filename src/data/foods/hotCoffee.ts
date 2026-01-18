import type { Food } from "@/types/food";
import hotCoffeeImg from "@/assets/foods/hot_coffee.png";

const hotCoffee: Food = {
  id: "hot_coffee",
  name: "Hot Coffee",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "c_to_temperature", value: 10 },
    { id: "maximum_stamina", value: 10 },
    { id: "stamina_regeneration", value: 10 },
  ],
  instantEffects: [
    { id: "water_when_consumed", value: 300 },
  ],
  image: hotCoffeeImg,
};

export default hotCoffee;
