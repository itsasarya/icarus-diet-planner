import type { Food } from "@/types/food";
import fishChunkStewImg from "@/assets/foods/fish_chunk_stew.png";

const fishChunkStew: Food = {
  id: "fish_chunk_stew",
  name: "Fish Chunk Stew",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_regeneration", value: 10 },
    { id: "stamina_consumed_by_actions", value: -10 },
    { id: "melee_damage", value: 5 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: fishChunkStewImg,
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

export default fishChunkStew;
