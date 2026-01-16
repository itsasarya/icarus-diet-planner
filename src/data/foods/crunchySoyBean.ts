import type { Food } from "@/types/food";
import crunchySoyBeanImg from "@/assets/foods/crunchy_soy_bean.png";

const crunchySoyBean: Food = {
  id: "crunchy_soy_bean",
  name: "Crunchy Soy Bean",
  stomachCost: 1,
  durationSec: 600,
  buffs: [
    { id: "maximum_health", value: 75 },
    { id: "health_regenration", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 50 },
  ],
  image: crunchySoyBeanImg,
  craftedAt: [
    {
      id: "campfire",
      name: "Campfire",
      image: "campfire.png"
    },
    {
      id: "fireplace",
      name: "Fireplace",
      image: "fireplace.png"
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
  ],
};

export default crunchySoyBean;
