import type { BuffId, EffectId } from "@/types/buff";
import type { Food } from "@/types/food";
import type { SavedDiet } from "@/types/diet";

export type PlannerFilters = {
  active: Set<BuffId | EffectId>;
  toggle: (id: BuffId | EffectId) => void;
  clear: () => void;
};

export type PlannerFoods = {
  selected: Food[];
  add: (food: Food) => void;
  remove: (id: string) => void;
};

export type PlannerDiets = {
  list: SavedDiet[];
  save: (name: string, id?: string, tags?: string[]) => void;
  load: (id: string) => void;
  delete: (id: string) => void;
};

export type PlannerController = {
  filters: PlannerFilters;
  foods: PlannerFoods;
  diets: PlannerDiets;
};
