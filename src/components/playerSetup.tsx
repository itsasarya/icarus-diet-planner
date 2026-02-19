import type { Dispatch, SetStateAction } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import type { Food } from "@/types/food";
import type { ExtraStomachSlot } from "@/types/extraSlots";
import FoodBuffSummary from "@/components/buffSummary";
import SelectedFoodList from "@/components/selectedFoodList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type PlayerSetupProps = {
  selectedFoods: Food[];
  onRemoveFood: (id: string) => void;
  slots: number;
  extraSlot: ExtraStomachSlot;
  setExtraSlot: Dispatch<SetStateAction<ExtraStomachSlot>>;
  onClearFoods: () => void;
  onSaveDiet: (name: string, id?: string, tags?: string[]) => void;
};

export default function PlayerSetup({
  selectedFoods,
  onRemoveFood,
  extraSlot,
  slots,
  setExtraSlot,
  onClearFoods,
  onSaveDiet,
}: PlayerSetupProps) {
  return (
    <div className="px-4">
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Player Setup</FieldLegend>
          <FieldDescription>
            Configure extra slots. Max slots: {slots}
          </FieldDescription>

          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox
                id="talent-slot"
                checked={extraSlot.talent}
                onCheckedChange={(checked) => {
                  setExtraSlot((prev) => ({
                    ...prev,
                    talent: Boolean(checked),
                  }));
                }}
              />
              <FieldLabel htmlFor="talent-slot">Talent Slot</FieldLabel>
            </Field>

            <Field orientation="horizontal">
              <Checkbox
                id="mod-slot"
                checked={extraSlot.mod}
                onCheckedChange={(checked) => {
                  setExtraSlot((prev) => ({
                    ...prev,
                    mod: Boolean(checked),
                  }));
                }}
              />
              <FieldLabel htmlFor="mod-slot">Armor Mod Slot</FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>

      {selectedFoods.length > 0 && (
        <div className="m-2">
          <Separator />

          <Tabs defaultValue="selected">
            <TabsList className="w-full">
              <TabsTrigger value="selected">Selected Foods</TabsTrigger>
              <TabsTrigger value="modifiers">Modifiers</TabsTrigger>
            </TabsList>

            <TabsContent value="selected">
              <SelectedFoodList
                selectedFoods={selectedFoods}
                onRemoveFood={onRemoveFood}
                onClearFoods={onClearFoods}
                onSaveDiet={onSaveDiet}
              />
            </TabsContent>

            <TabsContent value="modifiers">
              <FoodBuffSummary
                selectedFoods={selectedFoods}
                onSaveDiet={onSaveDiet}
                onClearFoods={onClearFoods}
              />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
}
