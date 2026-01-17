import type { Food } from "@/types/food";
import creamedCornImg from "@/assets/foods/creamed_corn.png";

const creamedCorn: Food = {
  id: "creamed_corn",
  name: "Creamed Corn",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "maximum_health", value: 150 },
    { id: "stamina_consumed_by_actions", value: -10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
  ],
  image: creamedCornImg,
  craftedAt: [
    {
      id: "cooking_station",
      name: "Cooking Station",
      image: "cooking_station.png"
    },
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

export default creamedCorn;
