import type { Food } from "@/types/food";
import driedWhiteMeatImg from "@/assets/foods/dried_white_meat.png";

const driedWhiteMeat: Food = {
  id: "dried_white_meat",
  name: "Dried White Meat",
  stomachCost: 1,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "exposure_resistance", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: driedWhiteMeatImg,
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

export default driedWhiteMeat;
