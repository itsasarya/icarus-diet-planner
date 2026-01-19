import type { Food } from "@/types/food";
import crispyBaconImg from "@/assets/foods/crispy_bacon.png";

const crispyBacon: Food = {
  id: "crispy_bacon",
  name: "Crispy Bacon",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "experience_gained", value: 15 },
    { id: "maximum_health", value: 90 },
    { id: "maximum_stamina", value: 90 },
    { id: "critical_damage", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 150 },
    { id: "health_when_consumed", value: 30 },
  ],
  image: crispyBaconImg,
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
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
  ],
};

export default crispyBacon;
