import type { Food } from "@/types/food";
import charredCornImg from "@/assets/foods/charred_corn.png";

const charredCorn: Food = {
  id: "charred_corn",
  name: "Charred Corn",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_consumed_by_actions", value: -10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: charredCornImg,
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

export default charredCorn;
