import type { Food } from "@/types/food";
import berrySeedBarImg from "@/assets/foods/berry_seed_bar.png";

const berrySeedBar: Food = {
  id: "berry_seed_bar",
  name: "Berry & Seed Bar",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_consumed_by_tool_actions", value: -10 },
    { id: "water_effects_duration", value: 15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
    { id: "water_when_consumed", value: 20 },
  ],
  image: berrySeedBarImg,
  craftedAt: [
    {
      id: "character_crafting",
      name: "Character Crafting",
      image: "character_crafting.png"
    },
  ],
};

export default berrySeedBar;
