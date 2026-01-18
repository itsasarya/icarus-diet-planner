import type { Food } from "@/types/food";
import watermelonImg from "@/assets/foods/watermelon.png";

const watermelon: Food = {
  id: "watermelon",
  name: "Watermelon",
  stomachCost: 1,
  buffs: [
    { id: "maximum_stamina", value: 50 },
    { id: "water_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
    { id: "water_when_consumed", value: 60 },
  ],
  image: watermelonImg,
};

export default watermelon;
