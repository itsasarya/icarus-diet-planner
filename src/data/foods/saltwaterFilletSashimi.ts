import type { Food } from "@/types/food";
import saltwaterFilletSashimiImg from "@/assets/foods/saltwater_fillet_sashimi.png";

const saltwaterFilletSashimi: Food = {
  id: "saltwater_fillet_sashimi",
  name: "Saltwater Fillet Sashimi",
  stomachCost: 1,
  durationSec: 900,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "maximum_stamina", value: 75 },
    { id: "exposure_resistance", value: 5 },
    { id: "projectile_damage", value: 5 },
  ],
  instantEffects: [
    { id: "nutrition", value: 100 },
  ],
  image: saltwaterFilletSashimiImg,
  craftedAt: [
    {
      id: "cooking_station",
      name: "Cooking Station",
      image: "cooking_station.png"
    },
    {
      id: "kitchen_bench",
      name: "Kitchen Bench",
      image: "kitchen_bench.png"
    },
    {
      id: "marble_kitchen_bench",
      name: "Marble Kitchen Bench",
      image: "marble_kitchen_bench.png"
    },
  ],
};

export default saltwaterFilletSashimi;
