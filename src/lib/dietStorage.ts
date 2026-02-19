import type { SavedDiet } from "@/types/diet";

const KEY = "saved-diets";

export function getDiets(): SavedDiet[] {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveDiet(diet: SavedDiet) {
  const diets = getDiets();
  const existingIndex = diets.findIndex((d) => d.id === diet.id);
  if (existingIndex > -1) {
    diets[existingIndex] = diet;
  } else {
    diets.push(diet);
  }
  localStorage.setItem(KEY, JSON.stringify(diets));
}

export function deleteDiet(id: string) {
  const diets = getDiets().filter((d) => d.id !== id);
  localStorage.setItem(KEY, JSON.stringify(diets));
}
