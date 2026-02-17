import { useEffect, useState } from "react";
import { getDiets, deleteDiet } from "@/lib/dietStorage";
import type { SavedDiet } from "@/types/diet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function SavedDietsPage() {
  const [diets, setDiets] = useState<SavedDiet[]>([]);

  useEffect(() => {
    setDiets(getDiets());
  }, []);

  function handleDelete(id: string) {
    deleteDiet(id);
    setDiets(getDiets());
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
              </Card>
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
