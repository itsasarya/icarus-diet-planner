import type { Food } from "@/types/food";
import searedMushroomImg from "@/assets/foods/seared_mushroom.png";

const searedMushroom: Food = {
  id: "seared_mushroom",
  name: "Seared Mushroom",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 75 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: searedMushroomImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default searedMushroom;
