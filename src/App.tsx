"use client";
import "./App.css";

import FoodGrid from "@/components/foodGrid";
import BuffFilter from "@/components/buffFilter";
import PlayerSetup from "@/components/playerSetup";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useState } from "react";
import type { BuffId, EffectId } from "@/types/buff";
import type { Food } from "./types/food";

function App() {
  const [filter, setFilter] = useState<Set<BuffId | EffectId>>(new Set());
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
  const [slots, setSlots] = useState<number>(3);
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
  return (
    <>
      <ModeToggle />
      <div
        className="
    grid
    grid-cols-1
    gap-4
    lg:grid-cols-[380px_minmax(0,1fr)_260px]
    lg:gap-6
    min-h-dvh
    p-4
  "
      >
        <div className="order-1 lg:order-0">
          <BuffFilter onFilterChange={setFilter} activeFilter={filter} />
        </div>
        <div className="order-2 lg:order-0">
          <FoodGrid
            activeFilter={filter}
            selectedFoods={selectedFoods}
            maxSlots={slots}
            onAddFood={addFood}
          />
        </div>
        <div className="order-3 lg:order-0">
          <PlayerSetup
            selectedFoods={selectedFoods}
            onRemoveFood={removeFood}
            slots={slots}
            setSlots={setSlots}
          />
        </div>
      </div>
    </>
  );
}

export default App;
