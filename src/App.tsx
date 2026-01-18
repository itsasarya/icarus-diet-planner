"use client";

import { ThemeProvider } from "./components/theme-provider";
import { useState } from "react";
import "./App.css";

import FoodGrid from "./components/foodGrid";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <FoodGrid />
    </ThemeProvider>
  );
}

export default App;
