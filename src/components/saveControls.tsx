import { useState } from "react";
import TagBadge from "@/components/tagBadge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Buffs } from "@/data/buffs";
import type { Food } from "@/types/food";
import { Separator } from "./ui/separator";

type Props = {
  selectedFoods: Food[];
  onSaveDiet?: (name: string, id?: string, tags?: string[]) => void;
  onClearFoods?: () => void;
};

export default function SaveControls({
  selectedFoods,
  onSaveDiet,
  onClearFoods,
}: Props) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const availableTags = Array.from(
    new Set(
      selectedFoods
        .flatMap((f) => f.buffs ?? [])
        .map((b) => Buffs[b.id]?.tag)
        .filter(Boolean),
    ),
  ) as string[];

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag);
      if (prev.length >= 3) return prev;
      return [...prev, tag];
    });
  }

  return (
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
            <DialogDescription>
              Enter a name and optional tags to save this diet.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          {availableTags.length > 0 && (
            <div className="flex gap-2 mb-3 flex-wrap">
              {availableTags.map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTag(t)}
                  className={`cursor-pointer ${selectedTags.includes(t) ? "opacity-100" : "opacity-60"}`}
                >
                  <TagBadge tag={t} />
                </button>
              ))}
            </div>
          )}

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
                onSaveDiet?.(name.trim(), undefined, selectedTags);
                setName("");
                setSelectedTags([]);
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
        onClick={() => onClearFoods?.()}
      >
        Remove All
      </Button>
    </div>
  );
}
