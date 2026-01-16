import type { Food } from "@/types/food";
import broiledKumaraImg from "@/assets/foods/broiled_kumara.png";

const broiledKumara: Food = {
  id: "broiled_kumara",
  name: "Broiled Kumara",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "melee_attack_speed", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: broiledKumaraImg,
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

export default broiledKumara;
