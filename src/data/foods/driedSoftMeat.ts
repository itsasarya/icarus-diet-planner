import type { Food } from "@/types/food";
import driedSoftMeatImg from "@/assets/foods/dried_soft_meat.png";

const driedSoftMeat: Food = {
  id: "dried_soft_meat",
  name: "Dried Soft Meat",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_stamina", value: 100 },
    { id: "stamina_regeneration", value: 15 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: driedSoftMeatImg,
  craftedAt: [
    {
      id: "drying_rack",
      name: "Drying Rack",
      image: "drying_rack.png"
    },
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default driedSoftMeat;
