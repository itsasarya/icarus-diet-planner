import type { Food } from "@/types/food";
import pavlovaImg from "@/assets/foods/pavlova.png";

const pavlova: Food = {
  id: "pavlova",
  name: "Pavlova",
  stomachCost: 1,
  durationSec: 800,
  buffs: [
    { id: "maximum_health", value: 125 },
    { id: "maximum_stamina", value: 75 },
    { id: "bonus_stone_chance_pct", value: 20 },
    { id: "chance_to_resist_cave_sickness", value: 20 },
    { id: "reload_speed", value: 10 },
    { id: "charge_speed", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 200 },
  ],
  image: pavlovaImg,
  craftedAt: [
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default pavlova;
