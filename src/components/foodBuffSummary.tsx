import type { Food } from "@/types/food";
import type { BuffId } from "@/types/buff";
import { Buffs } from "@/data/buffs";
import { useMemo } from "react";
import { Separator } from "@/components/ui/separator";

type Props = {
  selectedFoods: Food[];
};

export default function FoodBuffSummery({ selectedFoods }: Props) {
  const combinedBuffs = useMemo(() => {
    const map = new Map<BuffId, number>();

    selectedFoods.forEach((food) => {
      food.buffs?.forEach((buff) => {
        map.set(buff.id, (map.get(buff.id) ?? 0) + buff.value);
      });
    });
    return Array.from(map.entries());
  }, [selectedFoods]);
  if (combinedBuffs.length === 0) return null;
  return (
    <>
      <Separator className="my-3" />

      <div className="space-y-1">
        {combinedBuffs.map(([buffId, value]) => {
          const buff = Buffs[buffId];

          return (
            <div key={buffId} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{buff.name}:</span>
              <span className="font-medium">
                {value > 0 && "+"}
                {value}
                {buff.buffUnit === "percent" && "%"}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
