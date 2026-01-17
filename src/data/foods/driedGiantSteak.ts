import type { Food } from "@/types/food";
import driedGiantSteakImg from "@/assets/foods/dried_giant_steak.png";

const driedGiantSteak: Food = {
  id: "dried_giant_steak",
  name: "Dried Giant Steak",
  stomachCost: 1,
  buffs: [
    { id: "maximum_health", value: 100 },
    { id: "health_regenration", value: 25 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: driedGiantSteakImg,
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

export default driedGiantSteak;
