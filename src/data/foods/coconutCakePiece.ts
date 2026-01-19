import type { Food } from "@/types/food";
import coconutCakePieceImg from "@/assets/foods/coconut_cake_piece.png";

const coconutCakePiece: Food = {
  id: "coconut_cake_piece",
  name: "Coconut Cake Piece",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 250 },
    { id: "maximum_stamina", value: 250 },
    { id: "experience_gained", value: 25 },
    { id: "stamina_consumed_by_tool_actions", value: -40 },
    { id: "health_regeneration", value: 50 },
    { id: "crafting_speed", value: 50 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: coconutCakePieceImg,
};

export default coconutCakePiece;
