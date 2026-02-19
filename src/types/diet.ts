import type { Food } from "@/types/food";

export type SavedDiet = {
  id: string;
  name: string;
  foods: Food[];
  tags?: string[];
  createdAt: number;
};
