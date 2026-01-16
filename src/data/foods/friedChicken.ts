import type { Food } from "@/types/food";
import friedChickenImg from "@/assets/foods/fried_chicken.png";

const friedChicken: Food = {
  id: "fried_chicken",
  name: "Fried Chicken",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 200 },
    { id: "maximum_stamina", value: 150 },
    { id: "exposure_resistance", value: 15 },
    { id: "bonus_stone_chance_pct", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
  ],
  image: friedChickenImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default friedChicken;
