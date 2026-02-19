import type { Food } from "@/types/food";
import type { BuffId } from "@/types/buff";
import { Buffs } from "@/data/buffs";
import { useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import SaveControls from "@/components/saveControls";

type Props = {
  selectedFoods: Food[];
  onSaveDiet?: (name: string, id?: string, tags?: string[]) => void;
  onClearFoods?: () => void;
};

export default function FoodBuffSummary({
  selectedFoods,
  onSaveDiet,
  onClearFoods,
}: Props) {
  const combinedBuffs = useMemo(() => {
    const map = new Map<BuffId, number>();

    for (const food of selectedFoods) {
      for (const buff of food.buffs ?? []) {
        map.set(buff.id, (map.get(buff.id) ?? 0) + buff.value);
      }
    }

    return Array.from(map.entries())
      .filter(([, value]) => value !== 0)
      .sort(([a], [b]) => Buffs[a].name.localeCompare(Buffs[b].name));
  }, [selectedFoods]);

  if (combinedBuffs.length === 0) return null;

  return (
    <>
      <Separator className="my-3" />
      <div className="space-y-1">
        {combinedBuffs.map(([buffId, value]) => {
          const buff = Buffs[buffId];
          if (!buff) return null;

          return (
            <div key={buffId} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{buff.name}</span>
              <span className="font-medium">
                {value > 0 && "+"}
                {value}
                {buff.buffUnit === "percent" && "%"}
              </span>
            </div>
          );
        })}
      </div>
      <Separator className="my-3" />
      {(onSaveDiet || onClearFoods) && (
        <SaveControls
          selectedFoods={selectedFoods}
          onSaveDiet={onSaveDiet}
          onClearFoods={onClearFoods}
        />
      )}
    </>
  );
}
