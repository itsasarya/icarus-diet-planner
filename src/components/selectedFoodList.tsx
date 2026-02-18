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
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type PlayerSetupProp = {
  selectedFoods: Food[]; 
  onRemoveFood: (id: string) => void;
  onClearFoods: () => void;
  onSaveDiet: (name: string) => void;
};

export default function SelectedFoodList({
  selectedFoods,
  onRemoveFood,
  onClearFoods,
  onSaveDiet,
}: PlayerSetupProp) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

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
        <Separator />
        <div className="flex flex-col m-2 gap-2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="w-full" disabled={selectedFoods.length === 0}>
                Save
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Save Diet</DialogTitle>
              </DialogHeader>

              <Input
                placeholder="Diet name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />

              <DialogFooter>
                <Button variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button
                  disabled={!name.trim()}
                  onClick={() => {
                    onSaveDiet(name.trim());
                    setName("");
                    setOpen(false);
                  }}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button
            variant="destructive"
            className="w-full"
            disabled={selectedFoods.length === 0}
            onClick={() => {
              onClearFoods();
            }}
          >
            Remove All
          </Button>
        </div>
      </div>
    </>
  );
}
