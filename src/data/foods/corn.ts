import type { Food } from "@/types/food";
import cornImg from "@/assets/foods/corn.png";

const corn: Food = {
  id: "corn",
  name: "Corn",
  stomachCost: 0,
  buffs: [
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: cornImg,
};

export default corn;
