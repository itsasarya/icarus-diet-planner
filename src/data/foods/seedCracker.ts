import type { Food } from "@/types/food";
import seedCrackerImg from "@/assets/foods/seed_cracker.png";

const seedCracker: Food = {
  id: "seed_cracker",
  name: "Seed Cracker",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 100 },
    { id: "stamina_consumed_by_tool_actions", value: -15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
    { id: "health_when_consumed", value: 10 },
  ],
  image: seedCrackerImg,
  craftedAt: [
    {
      id: "cooking_station",
      name: "Cooking Station",
      image: "cooking_station.png"
    },
  ],
};

export default seedCracker;
