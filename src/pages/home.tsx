"use client";
import { useEffect } from "react";
import type { ExtraStomachSlot } from "@/types/extraSlots";

import FoodGrid from "@/components/foodGrid";
import PlayerSetup from "@/components/playerSetup";
import { useLocalStorage } from "@/lib/useLocalStorage";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import usePlannerController from "@/lib/usePlannerController";
import { Settings2 } from "lucide-react";
import foods from "@/data/foods";
import { parseDietShare } from "@/lib/dietShare";

export default function Home() {
  const planner = usePlannerController();
  const loadDiet = planner.diets.load;
  const replaceFoods = planner.foods.replace;
  const [extraSlot, setExtraSlot] = useLocalStorage<ExtraStomachSlot>(
    "player-slots",
    { talent: false, mod: false },
  );
  const BASE_SLOTS = 3;
  const slots = BASE_SLOTS + Number(extraSlot.talent) + Number(extraSlot.mod);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const shared = params.get("share");
      if (shared) {
        const diet = parseDietShare(shared, foods);
        if (diet) {
          replaceFoods(diet.foods);
          return;
        }
      }
      const load = params.get("load");
      if (load) loadDiet(load);
    } catch {
      // ignore (server-side or invalid URL)
    }
    // depend only on the stable load function to avoid effect looping
  }, [loadDiet, replaceFoods]);

  const clearFoods = () =>
    planner.foods.selected.forEach((food) => planner.foods.remove(food.id));

  return (
    <main className="mx-auto grid w-full max-w-400 grid-cols-1 gap-4 px-3 py-4 sm:px-5 lg:h-[calc(100svh-4rem)] lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_minmax(230px,300px)] lg:grid-rows-[minmax(0,1fr)] lg:items-stretch lg:gap-5 lg:overflow-hidden lg:px-5 2xl:gap-7 2xl:px-7">
      {new URLSearchParams(window.location.search).get("share") && (
        <div className="col-span-full border-l-2 border-primary px-3 py-2 text-sm" role="status">
          Loaded shared diet: <span className="font-semibold">
            {parseDietShare(new URLSearchParams(window.location.search).get("share") ?? "", foods)?.name}
          </span>
        </div>
      )}
      <div className="flex items-center justify-between gap-3 lg:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Settings2 className="size-4" />
              Diet ({planner.foods.selected.length}/{slots})
            </Button>
          </DrawerTrigger>
          <DrawerContent className="w-[min(92vw,26rem)] overflow-y-auto px-4 pb-6">
            <DrawerHeader>
              <DrawerTitle>Diet setup</DrawerTitle>
              <DrawerDescription>Manage slots and selected foods.</DrawerDescription>
            </DrawerHeader>
            <PlayerSetup
              idPrefix="mobile-player"
              selectedFoods={planner.foods.selected}
              onRemoveFood={planner.foods.remove}
              slots={slots}
              extraSlot={extraSlot}
              setExtraSlot={setExtraSlot}
              onClearFoods={clearFoods}
              onSaveDiet={planner.diets.save}
            />
          </DrawerContent>
        </Drawer>
      </div>

      <section className="min-h-0 min-w-0 overflow-hidden lg:h-full">
        <FoodGrid
          selectedFoods={planner.foods.selected}
          maxSlots={slots}
          onAddFood={planner.foods.add}
        />
      </section>

      <aside className="hidden min-h-0 min-w-0 lg:block lg:h-full">
        <div className="h-full min-h-0">
          <PlayerSetup
            idPrefix="desktop-player"
            selectedFoods={planner.foods.selected}
            onRemoveFood={planner.foods.remove}
            slots={slots}
            extraSlot={extraSlot}
            setExtraSlot={setExtraSlot}
            onClearFoods={clearFoods}
            onSaveDiet={planner.diets.save}
          />
        </div>
      </aside>
    </main>
  );
}
