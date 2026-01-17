import type { Food } from "@/types/food";
import chocChipCookieImg from "@/assets/foods/choc_chip_cookie.png";

const chocChipCookie: Food = {
  id: "choc_chip_cookie",
  name: "Choc-Chip Cookie",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_stamina", value: 175 },
    { id: "charge_speed", value: 30 },
    { id: "reload_speed", value: 15 },
    { id: "bonus_stone_chance_pct", value: 10 },
    { id: "experience_gained", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 75 },
  ],
  image: chocChipCookieImg,
  craftedAt: [
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default chocChipCookie;
