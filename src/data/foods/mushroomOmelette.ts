import type { Food } from "@/types/food";
import mushroomOmeletteImg from "@/assets/foods/mushroom_omelette.png";

const mushroomOmelette: Food = {
  id: "mushroom_omelette",
  name: "Mushroom Omelette",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "chance_to_find_additional_stone", value: 15 },
    { id: "stamina_regeneration", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
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
