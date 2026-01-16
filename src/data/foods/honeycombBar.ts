import type { Food } from "@/types/food";
import honeycombBarImg from "@/assets/foods/honeycomb_bar.png";

const honeycombBar: Food = {
  id: "honeycomb_bar",
  name: "Honeycomb Bar",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "stamina_consumed_by_tool_actions", value: -10 },
    { id: "food_effects_duration", value: 15 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
    { id: "hydration", value: 20 },
  ],
  image: honeycombBarImg,
  craftedAt: [
    {
      id: "character_crafting",
      name: "Character Crafting",
      image: "character_crafting.png"
    },
  ],
};

export default honeycombBar;
