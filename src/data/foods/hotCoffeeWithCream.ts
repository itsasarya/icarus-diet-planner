import type { Food } from "@/types/food";
import hotCoffeeWithCreamImg from "@/assets/foods/hot_coffee_with_cream.png";

const hotCoffeeWithCream: Food = {
  id: "hot_coffee_with_cream",
  name: "Hot Coffee with Cream",
  stomachCost: 0,
  durationSec: 300,
  buffs: [
    { id: "maximum_stamina", value: 25 },
  ],
  instantEffects: [
  ],
  image: hotCoffeeWithCreamImg,
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
      id: "art_deco_fireplace",
      name: "Art Deco Fireplace",
      image: "art_deco_fireplace.png"
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
      id: "wood_burner",
      name: "Wood Burner",
      image: "wood_burner.png"
    },
    {
      id: "mxc_campfire",
      name: "MXC Campfire",
      image: "mxc_campfire.png"
    },
    {
      id: "mxc_camping_cooker",
      name: "MXC Camping Cooker",
      image: "mxc_camping_cooker.png"
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

export default hotCoffeeWithCream;
