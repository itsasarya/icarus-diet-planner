import type { Food } from "@/types/food";
import shepherdSRollImg from "@/assets/foods/shepherd_s_roll.png";

const shepherdSRoll: Food = {
  id: "shepherd_s_roll",
  name: "Shepherd's Roll",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 150 },
    { id: "maximum_stamina", value: 150 },
    { id: "health_regenration", value: 15 },
    { id: "melee_attack_speed", value: 15 },
    { id: "projectile_damage", value: 15 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 150 },
  ],
  image: shepherdSRollImg,
  craftedAt: [
    {
      id: "biofuel_stove",
      name: "Biofuel Stove",
      image: "biofuel_stove.png"
    },
  ],
};

export default shepherdSRoll;
