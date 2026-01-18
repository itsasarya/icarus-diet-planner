import type { Food } from "@/types/food";
import chargrilledChickenImg from "@/assets/foods/chargrilled_chicken.png";

const chargrilledChicken: Food = {
  id: "chargrilled_chicken",
  name: "Chargrilled Chicken",
  stomachCost: 1,
  durationSec: 1800,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 100 },
    { id: "exposure_resistance", value: 10 },
    { id: "chance_to_find_additional_stone", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: chargrilledChickenImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
    {
      id: "firepit",
      name: "Firepit",
      image: "firepit.png"
    },
    {
      id: "fireplace",
      name: "Fireplace",
      image: "fireplace.png"
    },
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
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
      id: "biofuel_fireplace",
      name: "Biofuel Fireplace",
      image: "biofuel_fireplace.png"
    },
    {
      id: "electric_fireplace",
      name: "Electric Fireplace",
      image: "electric_fireplace.png"
    },
    {
      id: "mxc_camping_cooker",
      name: "MXC Camping Cooker",
      image: "mxc_camping_cooker.png"
    },
    {
      id: "mxc_campfire",
      name: "MXC Campfire",
      image: "mxc_campfire.png"
    },
    {
      id: "art_deco_fireplace",
      name: "Art Deco Fireplace",
      image: "art_deco_fireplace.png"
    },
    {
      id: "wood_burner",
      name: "Wood Burner",
      image: "wood_burner.png"
    },
  ],
};

export default chargrilledChicken;
