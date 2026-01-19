import type { Food } from "@/types/food";
import energyBarImg from "@/assets/foods/energy_bar.png";

const energyBar: Food = {
  id: "energy_bar",
  name: "Energy Bar",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 100 },
    { id: "stamina_consumed_by_tool_actions", value: -10 },
    { id: "charge_speed", value: 10 },
    { id: "reload_speed", value: 10 },
    { id: "food_consumption", value: -25 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 100 },
  ],
  image: energyBarImg,
};

export default energyBar;
