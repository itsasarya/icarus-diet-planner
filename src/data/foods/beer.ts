import type { Food } from "@/types/food";
import beerImg from "@/assets/foods/beer.png";

const beer: Food = {
  id: "beer",
  name: "Beer",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "stamina_regeneration", value: 100 },
    { id: "maximum_stamina", value: 125 },
  ],
  instantEffects: [
    { id: "water_when_consumed", value: 40 },
  ],
  image: beerImg,
  craftedAt: [
    {
      id: "kitchen_bench",
      name: "Kitchen Bench",
      image: "kitchen_bench.png"
    },
    {
      id: "marble_kitchen_bench",
      name: "Marble Kitchen Bench",
      image: "marble_kitchen_bench.png"
    },
  ],
};

export default beer;
