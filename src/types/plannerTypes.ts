import type { BuffId,EffectId } from "@/types/buff";
import type { Food } from "@/types/food";

export type PlannerFilters = {
    active: Set<BuffId | EffectId>
    toggle: (id: BuffId | EffectId) => void
    clear: ()=>void
}

export type PlannerFoods = {
    selected: Food[]
    add: (food: Food) => void
    remove: (id: string) => void
}

export type PlannerController = {
    filters: PlannerFilters
    foods: PlannerFoods
}