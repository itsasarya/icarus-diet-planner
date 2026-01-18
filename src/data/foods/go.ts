import type { Food } from "@/types/food";
import goImg from "@/assets/foods/go.png";

const go: Food = {
  id: "go",
  name: "Go",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "health_regeneration", value: 10 },
    { id: "water_consumption", value: -10 },
    { id: "oxygen_consumption", value: -10 },
  ],
  instantEffects: [
    { id: "water_when_consumed", value: 100 },
  ],
  image: goImg,
};

export default go;
