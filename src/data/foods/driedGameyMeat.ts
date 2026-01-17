import type { Food } from "@/types/food";
import driedGameyMeatImg from "@/assets/foods/dried_gamey_meat.png";

const driedGameyMeat: Food = {
  id: "dried_gamey_meat",
  name: "Dried Gamey Meat",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "melee_damage", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: driedGameyMeatImg,
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

export default driedGameyMeat;
