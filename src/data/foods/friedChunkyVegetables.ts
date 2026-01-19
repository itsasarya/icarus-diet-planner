import type { Food } from "@/types/food";
import friedChunkyVegetablesImg from "@/assets/foods/fried_chunky_vegetables.png";

const friedChunkyVegetables: Food = {
  id: "fried_chunky_vegetables",
  name: "Fried Chunky Vegetables",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 150 },
    { id: "exposure_resistance", value: 10 },
    { id: "melee_attack_speed", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: friedChunkyVegetablesImg,
  craftedAt: [
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
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

export default friedChunkyVegetables;
