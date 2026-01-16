import type { Food } from "@/types/food";
import rawSoftMeatImg from "@/assets/foods/raw_soft_meat.png";

const rawSoftMeat: Food = {
  id: "raw_soft_meat",
  name: "Raw Soft Meat",
  stomachCost: 0,
  buffs: [
  ],
  instantEffects: [
    { id: "nutrition", value: 20 },
  ],
  image: rawSoftMeatImg,
};

export default rawSoftMeat;
