import type { Food } from "@/types/food";
import honeyImg from "@/assets/foods/honey.png";

const honey: Food = {
  id: "honey",
  name: "Honey",
  stomachCost: 1,
  durationSec: 60,
  buffs: [
    { id: "maximum_stamina", value: 50 },
    { id: "food_effects_duration", value: 10 },
  ],
  instantEffects: [
    { id: "nutrition", value: 20 },
  ],
  image: honeyImg,
  craftedAt: [
    {
      id: "mortar_and_pestle",
      name: "Mortar and Pestle",
      image: "mortar_and_pestle.png"
    },
    {
      id: "beehive_extractor",
      name: "Beehive Extractor",
      image: "beehive_extractor.png"
    },
    {
      id: "material_processor",
      name: "Material Processor",
      image: "material_processor.png"
    },
    {
      id: "windmill",
      name: "Windmill",
      image: "windmill.png"
    },
  ],
};

export default honey;
