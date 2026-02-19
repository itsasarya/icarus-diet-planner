import { useCallback, useEffect, useState } from "react";
import type { BuffId, EffectId } from "@/types/buff";
import type { Food } from "@/types/food";
import type { PlannerController } from "@/types/plannerTypes";
import type { SavedDiet } from "@/types/diet";
import { deleteDiet, getDiets, saveDiet } from "@/lib/dietStorage";
import { Buffs } from "@/data/buffs";
import { useLocalStorage } from "@/lib/useLocalStorage";

export default function usePlannerController(): PlannerController {
  const [activeFilter, setActiveFilters] = useState<Set<BuffId | EffectId>>(
    new Set(),
  );

  const toggle = useCallback((id: BuffId | EffectId) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const clear = useCallback(() => {
    setActiveFilters(new Set());
  }, []);

  const [selectedFoods, setSelectedFoods] = useLocalStorage<Food[]>(
    "selected-foods",
    [],
  );

  const add = useCallback((food: Food) => {
    setSelectedFoods((prev) =>
      prev.some((f) => f.id === food.id) ? prev : [...prev, food],
    );
  }, []);

  const remove = useCallback((id: string) => {
    setSelectedFoods((prev) => prev.filter((f) => f.id !== id));
  }, []);

  // Diet save
  const [savedDiets, setSavedDiets] = useState<SavedDiet[]>([]);
  useEffect(() => {
    setSavedDiets(getDiets());
  }, []);

  const saveCurrentDiet = useCallback(
    (name: string, id?: string, tags?: string[]) => {
      // if tags provided use them, else derive from selected foods (max 3)
      const derived = Array.from(
        new Set(
          selectedFoods
            .flatMap((f) => f.buffs ?? [])
            .map((b) => Buffs[b.id]?.tag)
            .filter(Boolean),
        ),
      ).slice(0, 3) as string[];

      const useTags = tags && tags.length > 0 ? tags.slice(0, 3) : derived;

      const diet = {
        id: id ?? crypto.randomUUID(),
        name,
        foods: selectedFoods,
        tags: useTags,
        createdAt: Date.now(),
      };

      saveDiet(diet);
      setSavedDiets((prev) => {
        const exists = prev.findIndex((d) => d.id === diet.id);
        if (exists > -1) {
          const next = [...prev];
          next[exists] = diet;
          return next;
        }
        return [...prev, diet];
      });
    },
    [selectedFoods],
  );

  const loadDiet = useCallback((id: string) => {
    // read from storage to ensure we can load from share links before state hydration
    const diets = getDiets();
    const diet = diets.find((d) => d.id === id);
    if (diet) setSelectedFoods(diet.foods);
  }, []);

  const removeDiet = useCallback((id: string) => {
    deleteDiet(id);
    setSavedDiets((prev) => prev.filter((d) => d.id !== id));
  }, []);

  return {
    filters: { active: activeFilter, toggle, clear },
    foods: { selected: selectedFoods, add, remove },
    diets: {
      list: savedDiets,
      save: saveCurrentDiet,
      load: loadDiet,
      delete: removeDiet,
    },
  };
}
