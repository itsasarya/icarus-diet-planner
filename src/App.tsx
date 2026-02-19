"use client";
import "./App.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import SavedDiets from "./pages/savedDiets";
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/saved-diets/" element={<SavedDiets />} />
        </Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
