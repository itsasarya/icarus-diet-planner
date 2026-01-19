import type { Food } from "@/types/food";
import driedFreshwaterFilletImg from "@/assets/foods/dried_freshwater_fillet.png";

const driedFreshwaterFillet: Food = {
  id: "dried_fresh_water_fillet",
  name: "Dried Freshwater Fillet",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 75 },
    {id:"stamina_regeneration", value:15},
    { id: "food_consumption", value: -25 },
    {id:"health_regeneration", value:5}
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: driedFreshwaterFilletImg,
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

export default driedFreshwaterFillet;
