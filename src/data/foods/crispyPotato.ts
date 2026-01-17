import type { Food } from "@/types/food";
import crispyPotatoImg from "@/assets/foods/crispy_potato.png";

const crispyPotato: Food = {
  id: "crispy_potato",
  name: "Crispy Potato",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "melee_attack_speed", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: crispyPotatoImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default crispyPotato;
