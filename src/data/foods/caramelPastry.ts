import type { Food } from "@/types/food";
import caramelPastryImg from "@/assets/foods/caramel_pastry.png";

const caramelPastry: Food = {
  id: "caramel_pastry",
  name: "Caramel Pastry",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 150 },
    { id: "charge_speed", value: 25 },
    { id: "reload_speed", value: 25 },
    { id: "experience_gained", value: 15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 50 },
  ],
  image: caramelPastryImg,
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

export default caramelPastry;
