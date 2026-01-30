"use client";
import "./App.css";

import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";

import type { BuffId, EffectId } from "@/types/buff";
import type { Food } from "@/types/food";
import type { ExtraStomachSlot } from "./types/extraSlots";

import FoodGrid from "@/components/foodGrid";
import BuffFilter from "@/components/buffFilter";
import PlayerSetup from "@/components/playerSetup";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useLocalStorage } from "./lib/useLocalStorage";
import { Drawer, DrawerContent, DrawerTrigger } from "./components/ui/drawer";
import { Button } from "./components/ui/button";
import { trackEvent } from "@/lib/analytics";

function App() {
  const [extraSlot, setExtraSlot] = useLocalStorage<ExtraStomachSlot>(
    "player-slots",
    {
      talent: false,
      mod: false,
    },
  );

  const [selectedFoods, setSelectedFoods] = useLocalStorage<Food[]>(
    "selected-foods",
    [],
  );

  const BASE_SLOTS = 3;
  const slots = BASE_SLOTS + Number(extraSlot.talent) + Number(extraSlot.mod);

  const [filter, setFilter] = useState<Set<BuffId | EffectId>>(new Set());

  const addFood = (food: Food) => {
    setSelectedFoods((prev) =>
      prev.length < slots && !prev.some((f) => f.id === food.id)
        ? [...prev, food]
        : prev,
    );
  };

  const removeFood = (id: string) => {
    setSelectedFoods((prev) => prev.filter((f) => f.id !== id));
  };

  const handleClearFoods = () => {
    setSelectedFoods([]);
  };

  return (
    <>
      <Navbar />

      <main
        className="
          grid
          grid-cols-1
          gap-3
          p-3
          md:gap-4
          md:p-4
          lg:grid-cols-[380px_minmax(0,1fr)_380px]
          lg:gap-6
          lg:p-4
          min-h-screen
        "
      >
        {/* Mobile */}
        <section className="lg:hidden ">
          <div className="flex justify-between">
            <Drawer direction="left">
              <DrawerTrigger asChild className="lg:hidden">
                <Button
                  variant="outline"
                  onClick={() => trackEvent("open-drawer:filters")}
                >
                  Buff Filter
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-8 ">
                <BuffFilter activeFilter={filter} onFilterChange={setFilter} />
              </DrawerContent>
            </Drawer>
            <Drawer direction="right">
              <DrawerTrigger asChild className="lg:hidden">
                <Button
                  variant="outline"
                  onClick={() => trackEvent("open-drawer:setup")}
                >
                  Player Setup
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-8">
                <PlayerSetup
                  selectedFoods={selectedFoods}
                  onRemoveFood={removeFood}
                  slots={slots}
                  extraSlot={extraSlot}
                  setExtraSlot={setExtraSlot}
                  onClearFoods={handleClearFoods}
                />
              </DrawerContent>
            </Drawer>
          </div>

          <FoodGrid
            activeFilter={filter}
            selectedFoods={selectedFoods}
            maxSlots={slots}
            onAddFood={addFood}
          />
        </section>
        {/* destop */}
        <section>
          <div className="hidden lg:block">
            <BuffFilter activeFilter={filter} onFilterChange={setFilter} />
          </div>
        </section>

        <div className="hidden lg:block">
          <FoodGrid
            activeFilter={filter}
            selectedFoods={selectedFoods}
            maxSlots={slots}
            onAddFood={addFood}
          />
        </div>
        <section>
          <div className="hidden lg:block">
            <PlayerSetup
              selectedFoods={selectedFoods}
              onRemoveFood={removeFood}
              slots={slots}
              extraSlot={extraSlot}
              setExtraSlot={setExtraSlot}
              onClearFoods={handleClearFoods}
            />
          </div>
        </section>
      </main>

      <Footer />
      <Analytics />
    </>
  );
}

export default App;
