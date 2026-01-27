"use client";
import "./App.css";

import { useState } from "react";

import type { BuffId, EffectId } from "@/types/buff";
import type { Food } from "@/types/food";
import type { ExtraStomachSlot } from "./types/extraSlots";

import FoodGrid from "@/components/foodGrid";
import BuffFilter from "@/components/buffFilter";
import PlayerSetup from "@/components/playerSetup";
import Navbar from "@/components/navbar";
import { useLocalStoragge } from "./lib/useLocalStorage";

function App() {
  const [extraSlot, setExtraSlot] = useLocalStoragge<ExtraStomachSlot>(
    "player-slots",
    {
      talent: false,
      mod: false,
    },
  );

  const BASE_Slots = 3;
  const slots = BASE_Slots + Number(extraSlot.talent) + Number(extraSlot.mod);

  const [filter, setFilter] = useState<Set<BuffId | EffectId>>(new Set());
  const [selectedFoods, setSelectedFoods] = useState<Food[]>([]);
  const addFood = (food: Food) => {
    setSelectedFoods((prev) =>
      prev.length < slots && !prev.some((f) => f.id === food.id)
        ? [...prev, food]
        : prev,
    );
  };

  const handleClearFoods = () => {
    setSelectedFoods([]);
  };

  const removeFood = (id: string) => {
    setSelectedFoods((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <>
      <Navbar />
      <div
        className="
    grid
    grid-cols-1
    gap-4
    lg:grid-cols-[380px_minmax(0,1fr)_380px]
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
            extraSlot={extraSlot}
            setExtraSlot={setExtraSlot}
            onClearFoods={handleClearFoods}
          />
        </div>
      </div>
    </>
  );
}

export default App;
