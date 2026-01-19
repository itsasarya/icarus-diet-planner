import type { Food } from "@/types/food";
import { Buffs } from "@/data/buffs";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type React from "react";

export function FoodSheet({
  food,
  trigger,
}: {
  food: Food;
  trigger: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{food.name}</SheetTitle>
        </SheetHeader>
        <ul>
          {food.instantEffects?.map((effect) => {
            return (
              <li key={effect.id}>
                {effect.value} {Buffs[effect.id].name}
              </li>
            );
          })}
        </ul>
        <div className="my-4" />
        <ul>
          {food.buffs?.map((buff) => {
            return (
              <li key={buff.id}>
                {buff.value} {Buffs[buff.id].name}
              </li>
            );
          })}
        </ul>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
