import type { Food } from "@/types/food";
import watermelonLollypopImg from "@/assets/foods/watermelon_lollypop.png";

const watermelonLollypop: Food = {
  id: "watermelon_lollypop",
  name: "Watermelon Lollypop",
  stomachCost: 0,
  durationSec: 300,
  buffs: [
  ],
  instantEffects: [
    { id: "nutrition", value: 10 },
  ],
  image: watermelonLollypopImg,
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

export default watermelonLollypop;
