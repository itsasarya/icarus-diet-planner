import type { Food } from "@/types/food";
import driedTomatoImg from "@/assets/foods/dried_tomato.png";

const driedTomato: Food = {
  id: "dried_tomato",
  name: "Dried Tomato",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "health_regenration", value: 30 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: driedTomatoImg,
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

export default driedTomato;
