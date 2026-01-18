import type { Food } from "@/types/food";
import steamedFishImg from "@/assets/foods/steamed_fish.png";

const steamedFish: Food = {
  id: "steamed_fish",
  name: "Steamed Fish",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "health_when_consumed", value: 30 },
    { id: "maximum_health", value: 75 },
    { id: "stamina_regeneration", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 80 },
  ],
  image: steamedFishImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
    {
      id: "fireplace",
      name: "Fireplace",
      image: "fireplace.png"
    },
    {
      id: "art_deco_fireplace",
      name: "Art Deco Fireplace",
      image: "art_deco_fireplace.png"
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
      id: "stone_brick_fireplace",
      name: "Stone Brick Fireplace",
      image: "stone_brick_fireplace.png"
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
      id: "firepit",
      name: "Firepit",
      image: "firepit.png"
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
      id: "wood_burner",
      name: "Wood Burner",
      image: "wood_burner.png"
    },
  ],
};

export default steamedFish;
