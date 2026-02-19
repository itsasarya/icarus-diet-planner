"use client";
import { useEffect } from "react";
import type { ExtraStomachSlot } from "@/types/extraSlots";

import FoodGrid from "@/components/foodGrid";
import BuffFilter from "@/components/buffFilter";
import PlayerSetup from "@/components/playerSetup";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import usePlannerController from "@/lib/usePlannerController";

export default function Home() {
  const planner = usePlannerController();
  const [extraSlot, setExtraSlot] = useLocalStorage<ExtraStomachSlot>(
    "player-slots",
    { talent: false, mod: false },
  );
  const BASE_SLOTS = 3;
  const slots = BASE_SLOTS + Number(extraSlot.talent) + Number(extraSlot.mod);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const load = params.get("load");
      if (load) planner.diets.load(load);
    } catch (e) {
      // ignore (server-side or invalid URL)
    }
    // depend only on the stable load function to avoid effect looping
  }, [planner.diets.load]);

  return (
    <main className="w-full grid grid-cols-1 gap-3 p-3 md:gap-4 md:p-4 lg:grid-cols-[280px_minmax(0,1fr)_320px] lg:gap-6 lg:p-4">
      {/* MOBILE */}
      <section className="lg:hidden">
        <div className="flex justify-between">
          <Drawer direction="left">
            <DrawerTrigger asChild>
              <Button variant="outline">Buff Filter</Button>
            </DrawerTrigger>
            <DrawerContent className="p-8">
              <BuffFilter
                activeFilter={planner.filters.active}
                onFilterChange={planner.filters.toggle}
              />
            </DrawerContent>
          </Drawer>
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="outline">Player Setup</Button>
            </DrawerTrigger>
            <DrawerContent className="p-8">
              <PlayerSetup
                selectedFoods={planner.foods.selected}
                onRemoveFood={planner.foods.remove}
                slots={slots}
                extraSlot={extraSlot}
                setExtraSlot={setExtraSlot}
                onClearFoods={() =>
                  planner.foods.selected.forEach((f) =>
                    planner.foods.remove(f.id),
                  )
                }
                onSaveDiet={planner.diets.save}
              />
            </DrawerContent>
          </Drawer>
        </div>
        <FoodGrid
          activeFilter={planner.filters.active}
          selectedFoods={planner.foods.selected}
          maxSlots={slots}
          onAddFood={planner.foods.add}
        />
      </section>
      {/* DESKTOP FILTER */}
      <section className="hidden lg:block">
        <BuffFilter
          activeFilter={planner.filters.active}
          onFilterChange={planner.filters.toggle}
        />
      </section>
      {/* DESKTOP GRID */}
      <div className="hidden lg:block">
        <FoodGrid
          activeFilter={planner.filters.active}
          selectedFoods={planner.foods.selected}
          maxSlots={slots}
          onAddFood={planner.foods.add}
        />
      </div>
      {/* DESKTOP PLAYER SETUP */}
      <section className="hidden lg:block">
        <PlayerSetup
          selectedFoods={planner.foods.selected}
          onRemoveFood={planner.foods.remove}
          slots={slots}
          extraSlot={extraSlot}
          setExtraSlot={setExtraSlot}
          onClearFoods={() =>
            planner.foods.selected.forEach((f) => planner.foods.remove(f.id))
          }
          onSaveDiet={planner.diets.save}
        />
      </section>
    </main>
  );
}
