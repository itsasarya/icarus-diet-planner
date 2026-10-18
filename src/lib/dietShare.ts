import type { Food } from "@/types/food";

type DietSharePayload = {
  version: 1;
  name: string;
  foodIds: string[];
  tags: string[];
};

export type SharedDiet = {
  name: string;
  foods: Food[];
  tags: string[];
};

export function parseDietShare(
  value: string,
  catalog: Food[],
): SharedDiet | null {
  try {
    const payload: unknown = JSON.parse(value);
    if (!payload || typeof payload !== "object") return null;

    const candidate = payload as Partial<DietSharePayload>;
    if (
      candidate.version !== 1 ||
      typeof candidate.name !== "string" ||
      !Array.isArray(candidate.foodIds) ||
      !candidate.foodIds.every((id) => typeof id === "string") ||
      !Array.isArray(candidate.tags) ||
      !candidate.tags.every((tag) => typeof tag === "string")
    ) {
      return null;
    }

    const foodById = new Map(catalog.map((food) => [food.id, food]));
    const foods = candidate.foodIds
      .map((id) => foodById.get(id))
      .filter((food): food is Food => food !== undefined);

    if (foods.length !== candidate.foodIds.length || foods.length === 0) return null;

    return {
      name: candidate.name,
      foods,
      tags: candidate.tags.slice(0, 3),
    };
  } catch {
    return null;
  }
}