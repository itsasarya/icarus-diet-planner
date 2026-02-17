import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import App from "@/App.tsx";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import { BrowserRouter } from "react-router-dom"
import { SearchProvider } from "@/context/search-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <BrowserRouter>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </SearchProvider>
  </StrictMode>
)
