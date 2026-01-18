import type { Food } from "@/types/food";
import roastChickenImg from "@/assets/foods/roast_chicken.png";

const roastChicken: Food = {
  id: "roast_chicken",
  name: "Roast Chicken",
  stomachCost: 1,
  durationSec: 3000,
  buffs: [
    { id: "maximum_health", value: 250 },
    { id: "maximum_stamina", value: 200 },
    { id: "exposure_resistance", value: 25 },
    { id: "chance_to_find_additional_stone", value: 25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: roastChickenImg,
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
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
    {
      id: "mxc_camping_cooker",
      name: "MXC Camping Cooker",
      image: "mxc_camping_cooker.png"
    },
  ],
};

export default roastChicken;
