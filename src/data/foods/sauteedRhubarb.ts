import type { Food } from "@/types/food";
import sauteedRhubarbImg from "@/assets/foods/sauteed_rhubarb.png";

const sauteedRhubarb: Food = {
  id: "sauteed_rhubarb",
  name: "Sauteed Rhubarb",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "oxygen_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: sauteedRhubarbImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default sauteedRhubarb;
