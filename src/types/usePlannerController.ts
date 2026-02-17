import { useCallback, useEffect, useState } from "react";
import type { BuffId, EffectId } from "@/types/buff";
import type { Food } from "@/types/food";
import type { PlannerController } from "@/types/plannerTypes";
import type { SavedDiet } from "./diet";
import { deleteDiet, getDiets, saveDiet } from "@/lib/dietStorage";

export default function usePlannerController(): PlannerController {
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
        setSelectedFoods(prev => prev.some(f => f.id === food.id) ? prev : [...prev, food])
    }, [])

    const remove = useCallback((id: string) => {
        setSelectedFoods(prev => prev.filter(f => f.id !== id))
    }, [])

    // Diet save
    const [savedDiets, setSavedDiets] = useState<SavedDiet[]>([])
    useEffect(() => {
        setSavedDiets(getDiets());
    }, [])

    const saveCurrentDiet = useCallback((name: string) => {
        const diet = {
            id: crypto.randomUUID(),
            name,
            foods: selectedFoods,
            createdAt: Date.now()
        }

        saveDiet(diet);
        setSavedDiets(prev => [...prev, diet])
    }, [selectedFoods])

    const loadDiet = useCallback((id: string) => {
        const diet = savedDiets.find(d => d.id === id);
        if (diet) setSelectedFoods(diet.foods)
    }, [])

    const removeDiet = useCallback((id: string) => {
        deleteDiet(id);
        setSavedDiets(prev => prev.filter(d => d.id !== id))
    }, [])

    return {
        filters: { active: activeFilter, toggle, clear },
        foods: { selected: selectedFoods, add, remove },
        diets: { list: savedDiets, save: saveCurrentDiet, load: loadDiet, delete: removeDiet }
    }
}