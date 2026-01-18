import type { Food } from "@/types/food";
import freshwaterFishFilletImg from "@/assets/foods/freshwater_fish_fillet.png";

const freshwaterFishFillet: Food = {
  id: "freshwater_fish_fillet",
  name: "Freshwater Fish Fillet",
  stomachCost: 0,
  buffs: [
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 15 },
  ],
  image: freshwaterFishFilletImg,
  craftedAt: [
    {
      id: "basic_fishing_bench",
      name: "Basic Fishing Bench",
      image: "basic_fishing_bench.png"
    },
    {
      id: "butchery_bench",
      name: "Butchery Bench",
      image: "butchery_bench.png"
    },
  ],
};

export default freshwaterFishFillet;
