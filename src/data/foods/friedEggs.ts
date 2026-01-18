import type { Food } from "@/types/food";
import friedEggsImg from "@/assets/foods/fried_eggs.png";

const friedEggs: Food = {
  id: "fried_eggs",
  name: "Fried Eggs",
  stomachCost: 1,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "chance_to_find_additional_stone", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: friedEggsImg,
  craftedAt: [
    {
      id: "art_deco_fireplace",
      name: "Art Deco Fireplace",
      image: "art_deco_fireplace.png"
    },
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
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
      id: "mxc_campfire",
      name: "MXC Campfire",
      image: "mxc_campfire.png"
    },
    {
      id: "mxc_camping_cooker",
      name: "MXC Camping Cooker",
      image: "mxc_camping_cooker.png"
    },
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
    {
      id: "wood_burner",
      name: "Wood Burner",
      image: "wood_burner.png"
    },
  ],
};

export default friedEggs;
