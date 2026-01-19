import type { Food } from "@/types/food";
import seedBreadImg from "@/assets/foods/seed_bread.png";

const seedBread: Food = {
  id: "seed_bread",
  name: "Seed Bread",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "stamina_consumed_by_tool_actions", value: -20 },
    { id: "experience_gained", value: 15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 80 },
    { id: "health_when_consumed", value: 10 },
  ],
  image: seedBreadImg,
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
  ],
};

export default seedBread;
