import type { Food } from "@/types/food";
import endurogelImg from "@/assets/foods/endurogel.png";

const endurogel: Food = {
  id: "endurogel",
  name: "Endurogel",
  stomachCost: 0,
  buffs: [
    { id: "stamina_when_consumed", value: 50 },
  ],
  instantEffects: [
  ],
  image: endurogelImg,
};

export default endurogel;
