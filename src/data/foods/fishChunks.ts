import type { Food } from "@/types/food";
import fishChunksImg from "@/assets/foods/fish_chunks.png";

const fishChunks: Food = {
  id: "fish_chunks",
  name: "Fish Chunks",
  stomachCost: 0,
  buffs: [
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 15 },
  ],
  image: fishChunksImg,
  craftedAt: [
    {
      id: "butchery_bench",
      name: "Butchery Bench",
      image: "butchery_bench.png"
    },
  ],
};

export default fishChunks;
