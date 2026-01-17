import type { Food } from "@/types/food";
import driedSaltwaterFilletImg from "@/assets/foods/dried_saltwater_fillet.png";

const driedSaltwaterFillet: Food = {
  id: "dried_saltwater_fillet",
  name: "Dried Saltwater Fillet",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 75 },
    { id: "exposure_resistance", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: driedSaltwaterFilletImg,
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

export default driedSaltwaterFillet;
