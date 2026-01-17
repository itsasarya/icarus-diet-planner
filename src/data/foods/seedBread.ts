import type { Food } from "@/types/food";
import seedBreadImg from "@/assets/foods/seed_bread.png";

const seedBread: Food = {
  id: "seed_bread",
  name: "Seed Bread",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "health_when_consumed", value: 10 },
    { id: "maximum_stamina", value: 150 },
    { id: "stamina_consumed_by_tool_actions", value: -20 },
  ],
  instantEffects: [
    { id: "nutrition", value: 80 },
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
