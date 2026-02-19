import {
  Item,
  ItemMedia,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "./ui/item";
import { X } from "lucide-react";
import type { Food } from "@/types/food";
import { Separator } from "@/components/ui/separator";
import SaveControls from "@/components/saveControls";

type PlayerSetupProp = {
  selectedFoods: Food[];
  onRemoveFood: (id: string) => void;
  onClearFoods: () => void;
  onSaveDiet: (name: string, id?: string, tags?: string[]) => void;
};

export default function SelectedFoodList({
  selectedFoods,
  onRemoveFood,
  onClearFoods,
  onSaveDiet,
}: PlayerSetupProp) {
  return (
    <>
      <Separator className="my-3" />
      <div className="space-y-1">
        {selectedFoods.map((food) => (
          <Item key={food.id} variant="outline" className="mb-2">
            <ItemMedia>
              <img src={food.image} width={24} height={24} alt={food.name} />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{food.name}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <button
                onClick={() => {
                  onRemoveFood(food.id);
                }}
                className="rounded-md p-1 text-muted-foreground hover:bg-destructive hover:text-secondary-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </ItemActions>
          </Item>
        ))}
        <Separator className="my-3" />
        <SaveControls
          selectedFoods={selectedFoods}
          onSaveDiet={onSaveDiet}
          onClearFoods={onClearFoods}
        />
      </div>
    </>
  );
}
