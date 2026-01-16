import type { Food } from "@/types/food";
import flatbreadImg from "@/assets/foods/flatbread.png";

const flatbread: Food = {
  id: "flatbread",
  name: "Flatbread",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "health_when_consumed", value: 10 },
    { id: "water_consumption", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: flatbreadImg,
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
  ],
};

export default flatbread;
