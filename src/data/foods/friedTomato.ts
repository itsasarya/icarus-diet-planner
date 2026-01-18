import type { Food } from "@/types/food";
import friedTomatoImg from "@/assets/foods/fried_tomato.png";

const friedTomato: Food = {
  id: "fried_tomato",
  name: "Fried Tomato",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "health_regeneration", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: friedTomatoImg,
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
      id: "firepit",
      name: "Firepit",
      image: "firepit.png"
    },
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
      id: "wood_burner",
      name: "Wood Burner",
      image: "wood_burner.png"
    },
    {
      id: "mxc_campfire",
      name: "MXC Campfire",
      image: "mxc_campfire.png"
    },
  ],
};

export default friedTomato;
