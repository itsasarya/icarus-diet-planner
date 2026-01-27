import foods from "@/data/foods";
import { Buffs } from "@/data/buffs";
import { Button } from "@/components/ui/button";
import type { BuffId, EffectId } from "@/types/buff";
import { Field, FieldGroup, FieldLabel } from "./ui/field";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import type { Food } from "@/types/food";

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
  const filteredFoods =
    activeFilter.size === 0
      ? foods
      : foods.filter((food) =>
          food.buffs?.some((buff) => activeFilter.has(buff.id)),
        );

  const isLimitReached = selectedFoods.length >= maxSlots;
  const isAlreadySelected = (id: string) =>
    selectedFoods.some((f) => f.id === id);
  return (
    <ScrollArea className="h-dvh p-2">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filteredFoods.map((food) => (
          <FieldGroup key={food.id}>
            <Field className="flex flex-col items-center gap-1">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon" className="h-48 w-48">
                    <img src={food.image} alt={food.name} />
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-64">
                  <h4 className="font-medium">{food.name}</h4>
                  <Separator />
                  <div className="mt-2 space-y-1 text-sm">
                    {food.buffs?.map((buff) => (
                      <div key={buff.id}>
                        {buff.value > 0 ? `+${buff.value}` : `${buff.value}`}
                        {Buffs[buff.id].buffUnit === "percent" && `%`}{" "}
                        {Buffs[buff.id].name}
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="secondary"
                    disabled={isLimitReached || isAlreadySelected(food.id)}
                    onClick={() => onAddFood(food)}
                  >
                    {isAlreadySelected(food.id)
                      ? "Added"
                      : isLimitReached
                        ? "Slots Full"
                        : "Add to diet"}
                  </Button>
                </PopoverContent>
              </Popover>
              <FieldLabel htmlFor={food.id} className="w-full text-center">
                {food.name}
              </FieldLabel>
            </Field>
          </FieldGroup>
        ))}
      </div>
    </ScrollArea>
  );
}
