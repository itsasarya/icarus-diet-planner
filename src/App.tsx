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
import Footer from "@/components/footer";
import { useLocalStorage } from "./lib/useLocalStorage";

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
          gap-4
          lg:grid-cols-[380px_minmax(0,1fr)_380px]
          lg:gap-6
          min-h-screen
          p-4
        "
      >
        <section>
          <BuffFilter activeFilter={filter} onFilterChange={setFilter} />
        </section>

        <section>
          <FoodGrid
            activeFilter={filter}
            selectedFoods={selectedFoods}
            maxSlots={slots}
            onAddFood={addFood}
          />
        </section>

        <section>
          <PlayerSetup
            selectedFoods={selectedFoods}
            onRemoveFood={removeFood}
            slots={slots}
            extraSlot={extraSlot}
            setExtraSlot={setExtraSlot}
            onClearFoods={handleClearFoods}
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
