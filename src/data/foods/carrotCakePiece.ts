import type { Food } from "@/types/food";
import carrotCakePieceImg from "@/assets/foods/carrot_cake_piece.png";

const carrotCakePiece: Food = {
  id: "carrot_cake_piece",
  name: "Carrot Cake Piece",
  stomachCost: 1,
  durationSec: 200,
  buffs: [
    { id: "maximum_health", value: 100 },
    { id: "maximum_stamina", value: 100 },
    { id: "experience_gained", value: 25 },
    { id: "charge_speed", value: 30 },
    { id: "reload_speed", value: 30 },
    { id: "health_regeneration", value: 50 },
    { id: "projectile_damage", value: 50 },
  ],
  instantEffects: [
    { id: "food_when_consumed", value: 200 },
  ],
  image: carrotCakePieceImg,
};

export default carrotCakePiece;
