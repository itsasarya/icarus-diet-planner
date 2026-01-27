import type { Dispatch, SetStateAction } from "react";
import { Checkbox } from "./ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from "./ui/field";
import { Separator } from "./ui/separator";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "./ui/item";
import type { Food } from "@/types/food";
import { X } from "lucide-react";

type PlayerSetupProp = {
  selectedFoods: Food[];
  onRemoveFood: (id: string) => void;
  slots: number;
  setSlots: Dispatch<SetStateAction<number>>;
};

export default function PlayerSetup({
  selectedFoods,
  onRemoveFood,
  slots,
  setSlots,
}: PlayerSetupProp) {
  return (
    <div>
      <FieldGroup className="p-2">
        <FieldLegend>Player Setup</FieldLegend>
        <FieldDescription>
          Add talent and armor mod slot here. <br />
          Max slots: {slots}
        </FieldDescription>
        <Separator />
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox
              id="talent-slot"
              name="talent-slot"
              onCheckedChange={(checked) => {
                checked
                  ? setSlots((prev) => prev + 1)
                  : setSlots((prev) => prev - 1);
              }}
            />
            <FieldLabel htmlFor="talent-slot">Talent Slot</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="mod-slot"
              name="mod-slot"
              onCheckedChange={(checked) => {
                checked
                  ? setSlots((prev) => prev + 1)
                  : setSlots((prev) => prev - 1);
              }}
            />
            <FieldLabel htmlFor="mod-slot">Armor mod Slot</FieldLabel>
          </Field>
        </FieldGroup>
      </FieldGroup>
      <Separator />
      {selectedFoods.length > 0 && (
        <div className="m-2">
          Selected Food
          {selectedFoods.map((food) => (
            <Item key={food.id} variant="outline">
              <ItemMedia>
                <img src={food.image} width={24} height={24} alt={food.name} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{food.name}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ItemActions>
                  <button
                    onClick={() => onRemoveFood(food.id)}
                    className="rounded-md p-1 text-muted-foreground hover:bg-destructive hover:text-secondary-foreground"
                    aria-label="Remove food"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </ItemActions>
              </ItemActions>
            </Item>
          ))}
        </div>
      )}
    </div>
  );
}
