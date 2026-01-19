import type { Food } from "@/types/food";
import driedKiwifruitChipsImg from "@/assets/foods/dried_kiwifruit_chips.png";

const driedKiwifruitChips: Food = {
  id: "dried_kiwifruit_chips",
  name: "Dried Kiwifruit Chips",
  stomachCost: 1,
  durationSec:1200,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "chance_to_resist_cave_sickness", value: 10 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: driedKiwifruitChipsImg,
  craftedAt: [
    {
      id: "drying_rack",
      name: "Drying Rack",
      image: "drying_rack.png"
    },
    {
      id: "smoker",
      name: "Smoker",
      image: "smoker.png"
    },
  ],
};

export default driedKiwifruitChips;
