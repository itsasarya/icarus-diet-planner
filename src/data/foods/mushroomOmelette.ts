import type { Food } from "@/types/food";
import mushroomOmeletteImg from "@/assets/foods/mushroom_omelette.png";

const mushroomOmelette: Food = {
  id: "mushroom_omelette",
  name: "Mushroom Omelette",
  stomachCost: 1,
  durationSec: 990,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "bonus_stone_chance_pct", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
  ],
  image: mushroomOmeletteImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default mushroomOmelette;
