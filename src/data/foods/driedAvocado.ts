import driedavocadoImg from "@/assets/foods/dried_avocado.png"
import type { Food } from "@/types/food"

const driedAvocado: Food={
    id: "dried_avocado",
    name: "Dried Avocado",
    stomachCost: 1,
    durationSec: 1200,
    buffs: [
        { id: "maximum_stamina", value: 75 },
        {id:"food_consumption", value:-40}
    ],
    instantEffects: [
        {id:"food_when_consumed",value:50},
    ],
    image: driedavocadoImg,
    craftedAt: [
        {
            id: "smoker",
            name: "Smoker",
            image:"smoker.png"
        },
        {
            id: "drying_rack",
            name: "Drying rack",
            image:"drying_rack.png"
        }
    ]
    
}

export default driedAvocado