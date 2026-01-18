import type { Food } from "@/types/food";
import saltwaterFishFilletImg from "@/assets/foods/saltwater_fish_fillet.png";

const saltwaterFishFillet: Food = {
  id: "saltwater_fish_fillet",
  name: "Saltwater Fish Fillet",
  stomachCost: 0,
  buffs: [
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 15 },
  ],
  image: saltwaterFishFilletImg,
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

export default saltwaterFishFillet;
