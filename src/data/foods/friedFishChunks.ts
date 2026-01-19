import type { Food } from "@/types/food";
import friedFishChunksImg from "@/assets/foods/fried_fish_chunks.png";

const friedFishChunks: Food = {
  id: "fried_fish_chunks",
  name: "Fried Fish Chunks",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "stamina_regeneration", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 80 },
    { id: "health_when_consumed", value: 15 },
  ],
  image: friedFishChunksImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
  ],
};

export default friedFishChunks;
