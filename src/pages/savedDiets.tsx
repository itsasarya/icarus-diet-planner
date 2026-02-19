import { useEffect, useState } from "react";
import { getDiets, deleteDiet, saveDiet } from "@/lib/dietStorage";
import TagBadge from "@/components/tagBadge";
import { Buffs } from "@/data/buffs";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import type { SavedDiet } from "@/types/diet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FoodBuffSummary from "@/components/buffSummary";
import { Share } from "lucide-react";
import { toast } from "sonner";

export default function SavedDietsPage() {
  const [diets, setDiets] = useState<SavedDiet[]>([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    setDiets(getDiets());
  }, []);

  function handleDelete(id: string) {
    deleteDiet(id);
    setDiets(getDiets());
  }

  function openEdit(diet: SavedDiet) {
    setEditId(diet.id);
    setEditName(diet.name);
    // initialize selected tags from diet or derive from foods
    const derived = Array.from(
      new Set(
        diet.foods
          .flatMap((f) => f.buffs ?? [])
          .map((b) => Buffs[b.id]?.tag)
          .filter(Boolean),
      ),
    ) as string[];
    setSelectedTags(
      diet.tags && diet.tags.length > 0
        ? diet.tags.slice(0, 3)
        : derived.slice(0, 3),
    );
    setEditOpen(true);
  }

  function handleSaveEdit() {
    if (!editId) return;
    const diet = diets.find((d) => d.id === editId);
    if (!diet) return;
    const updated = { ...diet, name: editName, tags: selectedTags.slice(0, 3) };
    saveDiet(updated);
    setDiets(getDiets());
    setEditOpen(false);
    setEditId(null);
    setEditName("");
  }

  function toggleEditTag(tag: string) {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag);
      if (prev.length >= 3) return prev;
      return [...prev, tag];
    });
  }

  function handleCopyLink(id: string) {
    try {
      const url = `${window.location.origin}/?load=${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      toast.success("Copied", { position: "top-center" });
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Saved Diets</h1>

      {diets.length === 0 && (
        <p className="text-muted-foreground">No saved diets yet.</p>
      )}

      <ScrollArea className="h-[70vh] pr-3">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diets.map((diet, i) => (
            <motion.div
              key={diet.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="rounded-2xl shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-base">
                    {diet.name || "Unnamed Diet"}
                  </CardTitle>

                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => handleDelete(diet.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                {(diet.tags?.length ?? 0) > 0 && (
                  <CardDescription className="px-2">
                    <div className="hidden sm:flex gap-1">
                      {(diet.tags ?? []).map((t) => (
                        <TagBadge key={t} tag={t} />
                      ))}
                    </div>
                  </CardDescription>
                )}

                <Separator />
                <CardContent className="space-y-2 text-sm">
                  {diet.foods.map((food) => (
                    <div
                      key={food.id}
                      className="flex items-center justify-left gap-2"
                    >
                      <img
                        src={food.image}
                        alt={food.name}
                        height="24px"
                        width="24px"
                      />
                      <span>{food.name}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Sheet>
                    <SheetTrigger>
                      <Button>Details</Button>
                    </SheetTrigger>
                    <SheetContent>
                      <SheetHeader>
                        <SheetTitle>{diet.name}</SheetTitle>
                        <SheetDescription className="p-4">
                          <FoodBuffSummary selectedFoods={diet.foods} />
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => openEdit(diet)}
                    >
                      <Pencil />
                    </Button>

                    <Button
                      size="icon"
                      variant="secondary"
                      onClick={() => handleCopyLink(diet.id)}
                    >
                      <Share />
                    </Button>
                    {copiedId === diet.id}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Diet</DialogTitle>
            <DialogDescription className="sr-only">
              Edit diet name and tags.
            </DialogDescription>
          </DialogHeader>

          <Input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />

          {/* Tag selector for edit */}
          {editId && (
            <div className="mt-3">
              <div className="text-sm text-muted-foreground mb-2">
                Tags (max 3)
              </div>
              <div className="flex gap-2 flex-wrap">
                {(() => {
                  const diet = diets.find((d) => d.id === editId);
                  const available = diet
                    ? (Array.from(
                        new Set(
                          diet.foods
                            .flatMap((f) => f.buffs ?? [])
                            .map((b) => Buffs[b.id]?.tag)
                            .filter(Boolean),
                        ),
                      ) as string[])
                    : [];

                  return (available.length ? available : selectedTags).map(
                    (t) => (
                      <button
                        key={t}
                        onClick={() => toggleEditTag(t)}
                        className={`cursor-pointer ${selectedTags.includes(t) ? "opacity-100" : "opacity-60"}`}
                      >
                        <TagBadge tag={t} />
                      </button>
                    ),
                  );
                })()}
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>
            <Button disabled={!editName.trim()} onClick={handleSaveEdit}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
