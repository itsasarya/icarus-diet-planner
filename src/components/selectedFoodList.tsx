import {
  Item,
  ItemMedia,
  ItemActions,
  ItemContent,
  ItemTitle,
} from "./ui/item";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import type { Food } from "@/types/food";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

type PlayerSetupProp = {
  selectedFoods: Food[];
  onRemoveFood: (id: string) => void;
  onClearFoods: () => void;
};

export default function SelectedFoodList({
  selectedFoods,
  onRemoveFood,
  onClearFoods,
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
                  trackEvent(`remove-food:${food.id}`);
                  onRemoveFood(food.id);
                }}
                className="rounded-md p-1 text-muted-foreground hover:bg-destructive hover:text-secondary-foreground"
                aria-label="Remove food"
              >
                <X className="h-4 w-4" />
              </button>
            </ItemActions>
          </Item>
        ))}
        <Separator />
        <div className="flex justify-around m-2">
          {/* <Button variant="default" className="w-5/12">
            Save
          </Button> */}
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => {
              trackEvent("remove-all-foods");
              onClearFoods();
            }}
            disabled={selectedFoods.length === 0}
          >
            Remove All
          </Button>
        </div>
      </div>
    </>
  );
}
