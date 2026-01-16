import type { Food } from "@/types/food";
import fruitMuffinImg from "@/assets/foods/fruit_muffin.png";

const fruitMuffin: Food = {
  id: "fruit_muffin",
  name: "Fruit Muffin",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 225 },
    { id: "water_consumption", value: -20 },
    { id: "experience_gained", value: 35 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: fruitMuffinImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default fruitMuffin;
