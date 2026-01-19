import type { Food } from "@/types/food";
import driedRhubarbImg from "@/assets/foods/dried_rhubarb.png";

const driedRhubarb: Food = {
  id: "dried_rhubarb",
  name: "Dried Rhubarb",
  stomachCost: 1,
  durationSec:1200,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "oxygen_consumption", value: -30 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: driedRhubarbImg,
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

export default driedRhubarb;
