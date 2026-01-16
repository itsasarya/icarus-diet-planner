import type { Food } from "@/types/food";
import mushroomSoupImg from "@/assets/foods/mushroom_soup.png";

const mushroomSoup: Food = {
  id: "mushroom_soup",
  name: "Mushroom Soup",
  stomachCost: 0,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
  ],
  image: mushroomSoupImg,
  craftedAt: [
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
  ],
};

export default mushroomSoup;
