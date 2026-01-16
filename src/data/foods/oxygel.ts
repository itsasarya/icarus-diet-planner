import type { Food } from "@/types/food";
import oxygelImg from "@/assets/foods/oxygel.png";

const oxygel: Food = {
  id: "oxygel",
  name: "Oxygel",
  stomachCost: 0,
  buffs: [
  ],
  instantEffects: [
    { id: "oxygen", value: 150 },
  ],
  image: oxygelImg,
};

export default oxygel;
