import foods from "@/data/foods";
import { Buffs } from "@/data/buffs";
import { Button } from "@/components/ui/button";
import type { BuffId, EffectId } from "@/types/buff";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import type { Food } from "@/types/food";
import { BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";

type Props = {
  activeFilter: Set<BuffId | EffectId>;
  selectedFoods: Food[];
  maxSlots: number;
  onAddFood: (food: Food) => void;
};

export default function FoodGrid({
  activeFilter,
  maxSlots,
  selectedFoods,
  onAddFood,
}: Props) {
  const filteredFoods = useMemo(() => {
    if (activeFilter.size === 0) return foods;

    return foods.filter((food) =>
      food.buffs?.some((buff) => activeFilter.has(buff.id)),
    );
  }, [activeFilter]);

  const isLimitReached = selectedFoods.length >= maxSlots;
  const isAlreadySelected = (id: string) =>
    selectedFoods.some((f) => f.id === id);

  return (
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Foods</FieldLegend>
        <FieldDescription>
          Click a food to view buffs and add it to your diet
        </FieldDescription>

        <ScrollArea className="h-[75vh] p-2">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredFoods.map((food) => {
              const alreadyAdded = isAlreadySelected(food.id);

              return (
                <Field
                  key={food.id}
                  className="flex flex-col items-center gap-2"
                >
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="relative h-48 w-48 overflow-hidden p-0"
                        aria-label={`View buffs for ${food.name}`}
                      >
                        <img
                          src={food.image}
                          alt={food.name}
                          className="h-full w-full object-cover"
                        />

                        {alreadyAdded && (
                          <Badge
                            variant="secondary"
                            className="absolute right-2 top-2"
                          >
                            <BadgeCheck className="h-4 w-4" />
                          </Badge>
                        )}
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-64">
                      <h4 className="font-medium">{food.name}</h4>
                      <Separator />

                      <div className="mt-2 space-y-1 text-sm">
                        {food.buffs?.map((buff) => {
                          const buffMeta = Buffs[buff.id];
                          const isActive = activeFilter.has(buff.id);

                          return (
                            <div
                              key={buff.id}
                              className="flex items-center justify-between"
                            >
                              <span>
                                {buff.value > 0 ? "+" : ""}
                                {buff.value}
                                {buffMeta.buffUnit === "percent" && "%"}{" "}
                                {buffMeta.name}
                              </span>

                              {isActive && (
                                <Badge variant="ghost">
                                  <BadgeCheck className="h-4 w-4" />
                                </Badge>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <Button
                        variant="secondary"
                        disabled={alreadyAdded || isLimitReached}
                        onClick={() => onAddFood(food)}
                        className="mt-3 w-full"
                      >
                        {alreadyAdded
                          ? "Added"
                          : isLimitReached
                            ? "Slots Full"
                            : "Add to diet"}
                      </Button>
                    </PopoverContent>
                  </Popover>

                  <FieldLabel className="w-full text-center text-sm">
                    {food.name}
                  </FieldLabel>
                </Field>
              );
            })}
          </div>
        </ScrollArea>
      </FieldSet>
    </FieldGroup>
  );
}
