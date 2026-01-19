import type { Food } from "@/types/food";
import sweetcornSoupImg from "@/assets/foods/sweetcorn_soup.png";

const sweetcornSoup: Food = {
  id: "sweetcorn_soup",
  name: "Sweetcorn Soup",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 100 },
    { id: "stamina_consumed_by_actions", value: -20 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
    { id: "water_when_consumed", value:25}
  ],
  image: sweetcornSoupImg,
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

export default sweetcornSoup;
