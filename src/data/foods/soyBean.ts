import type { Food } from "@/types/food";
import soyBeanImg from "@/assets/foods/soy_bean.png";

const soyBean: Food = {
  id: "soy_bean",
  name: "Soy Bean",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_health", value: 30 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 20 },
  ],
  image: soyBeanImg,
};

export default soyBean;
