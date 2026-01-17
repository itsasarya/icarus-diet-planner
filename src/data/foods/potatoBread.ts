import type { Food } from "@/types/food";
import potatoBreadImg from "@/assets/foods/potato_bread.png";

const potatoBread: Food = {
  id: "potato_bread",
  name: "Potato Bread",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "experience_gained", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: potatoBreadImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default potatoBread;
