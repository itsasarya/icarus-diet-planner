import type { Food } from "@/types/food";
import barbecueCarrotImg from "@/assets/foods/barbecue_carrot.png";

const barbecueCarrot: Food = {
  id: "barbecue_carrot",
  name: "Barbecue Carrot",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_stamina", value: 75 },
    { id: "projectile_damage", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: barbecueCarrotImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
    {
      id: "firepit",
      name: "Firepit",
      image: "firepit.png"
    },
    {
      id: "fireplace",
      name: "Fireplace",
      image: "fireplace.png"
    },
    {
      id: "potbelly_stove",
      name: "Potbelly Stove",
      image: "potbelly_stove.png"
    },
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

export default barbecueCarrot;
