import type { Food } from "@/types/food";
import tomatoSoupImg from "@/assets/foods/tomato_soup.png";

const tomatoSoup: Food = {
  id: "tomato_soup",
  name: "Tomato Soup",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 100 },
    { id: "health_regeneration", value: 20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
    { id: "water_when_consumed", value: 25 },
  ],
  image: tomatoSoupImg,
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
  ],
};

export default tomatoSoup;
