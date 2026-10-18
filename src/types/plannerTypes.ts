import type { Food } from "@/types/food";
import type { SavedDiet } from "@/types/diet";

export type PlannerFoods = {
  selected: Food[];
  add: (food: Food) => void;
  remove: (id: string) => void;
  replace: (foods: Food[]) => void;
};

export type PlannerDiets = {
  list: SavedDiet[];
  save: (name: string, id?: string, tags?: string[]) => void;
  load: (id: string) => void;
  delete: (id: string) => void;
};

export type PlannerController = {
  foods: PlannerFoods;
  diets: PlannerDiets;
};
