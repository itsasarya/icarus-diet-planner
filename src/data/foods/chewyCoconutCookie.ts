import type { Food } from "@/types/food";
import chewyCoconutCookieImg from "@/assets/foods/chewy_coconut_cookie.png";

const chewyCoconutCookie: Food = {
  id: "chewy_coconut_cookie",
  name: "Chewy Coconut Cookie",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_stamina", value: 175 },
    { id: "charge_speed", value: 15 },
    { id: "reload_speed", value: 30 },
    { id: "crafting_speed", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 25 },
    { id: "hydration", value: 50 },
  ],
  image: chewyCoconutCookieImg,
  craftedAt: [
    {
      id: "electric_stove",
      name: "Electric Stove",
      image: "electric_stove.png"
    },
  ],
};

export default chewyCoconutCookie;
