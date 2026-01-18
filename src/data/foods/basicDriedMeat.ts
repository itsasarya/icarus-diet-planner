import type { Food } from "@/types/food";
import basicDriedMeatImg from "@/assets/foods/basic_dried_meat.png";

const basicDriedMeat: Food = {
  id: "basic_dried_meat",
  name: "Basic Dried Meat",
  stomachCost: 1,
  durationSec: 320,
  buffs: [
    { id: "health_when_consumed", value: 200 },
    { id: "maximum_health", value: 75 },
    { id: "health_regeneration", value: 20 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: basicDriedMeatImg,
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

export default basicDriedMeat;
