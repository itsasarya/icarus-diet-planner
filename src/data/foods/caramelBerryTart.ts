import type { Food } from "@/types/food";
import caramelBerryTartImg from "@/assets/foods/caramel_berry_tart.png";

const caramelBerryTart: Food = {
  id: "caramel_berry_tart",
  name: "Caramel Berry Tart",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "charge_speed", value: 15 },
    { id: "reload_speed", value: 15 },
    { id: "chance_to_resist_cave_sickness", value: 15 },
    { id: "water_consumption", value: -35 },
    { id: "chance_to_find_additional_stone", value: 10 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: caramelBerryTartImg,
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

export default caramelBerryTart;
