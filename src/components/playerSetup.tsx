import type { Dispatch, SetStateAction } from "react";
import { Checkbox } from "./ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "./ui/field";
import { Separator } from "@/components/ui/separator";
import type { Food } from "@/types/food";
import type { ExtraStomachSlot } from "@/types/extraSlots";
import FoodBuffSummery from "@/components/foodBuffSummary";
import SelectedFoodList from "@/components/selectedFoodList";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

type PlayerSetupProp = {
  selectedFoods: Food[];
  onRemoveFood: (id: string) => void;
  slots: number;
  extraSlot: ExtraStomachSlot;
  setExtraSlot: Dispatch<SetStateAction<ExtraStomachSlot>>;
  onClearFoods: () => void;
};

export default function PlayerSetup({
  selectedFoods,
  onRemoveFood,
  extraSlot,
  slots,
  setExtraSlot,
  onClearFoods,
}: PlayerSetupProp) {
  return (
    <>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Player Setup</FieldLegend>
          <FieldDescription>
            Add talent and armor mod slot here. Max slots: {slots}
          </FieldDescription>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox
                id="talent-slot"
                name="talent-slot"
                checked={extraSlot.talent}
                onCheckedChange={(checked) =>
                  setExtraSlot((prev) => ({
                    ...prev,
                    talent: Boolean(checked),
                  }))
                }
              />
              <FieldLabel htmlFor="talent-slot">Talent Slot</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="mod-slot"
                name="mod-slot"
                checked={extraSlot.mod}
                onCheckedChange={(checked) =>
                  setExtraSlot((prev) => ({
                    ...prev,
                    mod: Boolean(checked),
                  }))
                }
              />
              <FieldLabel htmlFor="mod-slot">Armor mod Slot</FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
      {selectedFoods.length > 0 && (
        <div className="m-2">
          <Separator />
          <Tabs defaultValue="selectedFoods">
            <TabsList className="w-full">
              <TabsTrigger value="selectedFoods">Selected Foods</TabsTrigger>
              <TabsTrigger value="modifiers">Modifiers</TabsTrigger>
            </TabsList>
            <TabsContent value="selectedFoods">
              <SelectedFoodList
                selectedFoods={selectedFoods}
                onRemoveFood={onRemoveFood}
                onClearFoods={onClearFoods}
              />
            </TabsContent>
            <TabsContent value="modifiers">
              <FoodBuffSummery selectedFoods={selectedFoods} />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </>
  );
}
