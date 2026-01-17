import type { Food } from "@/types/food";
import chocolateCakePieceImg from "@/assets/foods/chocolate_cake_piece.png";

const chocolateCakePiece: Food = {
  id: "chocolate_cake_piece",
  name: "Chocolate Cake Piece",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 300 },
    { id: "maximum_stamina", value: 200 },
    { id: "experience_gained", value: 25 },
    { id: "health_regenration", value: 200 },
  ],
  instantEffects: [
    { id: "nutrition", value: 200 },
  ],
  image: chocolateCakePieceImg,
};

export default chocolateCakePiece;
