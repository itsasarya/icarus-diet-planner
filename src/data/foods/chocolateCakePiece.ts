import type { Food } from "@/types/food";
import chocolateCakePieceImg from "@/assets/foods/chocolate_cake_piece.png";

const chocolateCakePiece: Food = {
  id: "chocolate_cake_piece",
  name: "Chocolate Cake Piece",
  stomachCost: 1,
  durationSec: 1200,
  buffs: [
    { id: "maximum_health", value: 300 },
    { id: "maximum_stamina", value: 200 },
    { id: "experience_gained", value: 25 },
    { id: "stamina_regeneration", value: 200 },
    { id: "health_regeneration", value: 200 },
    { id: "food_consumption", value: 15 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: chocolateCakePieceImg,
};

export default chocolateCakePiece;
