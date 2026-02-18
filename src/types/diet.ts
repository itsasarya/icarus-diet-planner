import type { Food } from "@/types/food";

export type SavedDiet = {
  id: string;
  name: string;
  foods: Food[];
  createdAt: number;
};
