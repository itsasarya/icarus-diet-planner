import { useCallback, useState } from "react";
import type {BuffId, EffectId } from "@/types/buff";
import type { Food } from "@/types/food";
import type { PlannerController } from "@/types/plannerTypes";

export default function usePlannerController(): PlannerController{
    const [activeFilter, setActiveFilters] = useState<Set<BuffId | EffectId>>(new Set())

    const toggle = useCallback((id: BuffId | EffectId) => {
        setActiveFilters(prev => {
            const next = new Set(prev)
            next.has(id) ? next.delete(id) : next.add(id)
            return next
        })
    }, [])
    
    const clear = useCallback(() => {
        setActiveFilters(new Set())
    }, [])

    const [selectedFoods, setSelectedFoods] = useState<Food[]>([])

    const add = useCallback((food: Food) => {
        setSelectedFoods(prev=> prev.some(f=> f.id === food.id)? prev:[...prev, food])
    }, [])

    const remove = useCallback((id: string) => {
        setSelectedFoods(prev=>prev.filter(f=>f.id!==id))
    }, [])
    
    return {
        filters: { active: activeFilter, toggle, clear },
        foods: { selected: selectedFoods, add, remove },
    }
}