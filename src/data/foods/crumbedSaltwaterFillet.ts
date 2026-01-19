import type { Food } from "@/types/food";
import crumbedSaltwaterFilletImg from "@/assets/foods/crumbed_saltwater_fillet.png";

const crumbedSaltwaterFillet: Food = {
  id: "crumbed_saltwater_fillet",
  name: "Crumbed Saltwater Fillet",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_regeneration", value: 15 },
    { id: "exposure_resistance", value: 5 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
  ],
  image: crumbedSaltwaterFilletImg,
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

export default crumbedSaltwaterFillet;
