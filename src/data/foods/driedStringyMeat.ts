import type { Food } from "@/types/food";
import driedStringyMeatImg from "@/assets/foods/dried_stringy_meat.png";

const driedStringyMeat: Food = {
  id: "dried_stringy_meat",
  name: "Dried Stringy Meat",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "melee_attack_speed", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: driedStringyMeatImg,
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

export default driedStringyMeat;
