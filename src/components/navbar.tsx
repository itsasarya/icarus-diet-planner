import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearch } from "@/context/search-context";
import { ButtonGroup } from "./ui/button-group";
import { Search, X } from "lucide-react";

export default function Navbar() {
  const { query, setQuery } = useSearch();
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="mx-auto flex w-full max-w-400 flex-wrap items-center justify-between gap-x-4 gap-y-2 px-3 py-2 sm:px-5 lg:flex-nowrap lg:px-7">
        <h1 className="shrink-0 text-base font-semibold sm:text-lg">
          Icarus Food Planner
        </h1>
        <div className="flex w-full min-w-0 flex-wrap items-center gap-2 lg:w-auto lg:flex-nowrap">
          <div className="order-1 flex shrink-0 items-center gap-1">
            <Button asChild variant="ghost" size="sm">
              <Link to="/">Planner</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link to="/saved-diets">Saved</Link>
            </Button>
          </div>
          <ButtonGroup className="order-3 min-w-0 basis-full lg:order-2 lg:w-72 lg:basis-auto lg:flex-none">
            <span className="flex h-9 items-center border-y border-l px-2 text-muted-foreground" aria-hidden="true">
              <Search className="size-4" />
            </span>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Food, ingredient, buff..."
              aria-label="Search foods, ingredients, and effects"
              className="min-w-0 rounded-l-none pl-1"
            />
            {query && (
              <Button variant="outline" size="icon" onClick={() => setQuery("")} aria-label="Clear search" title="Clear search">
                <X />
              </Button>
            )}
          </ButtonGroup>
          <div className="order-2 ml-auto lg:order-3 lg:ml-0">
            <ModeToggle />
          </div>
        </div>
      </nav>
      <Separator />
    </header>
  );
}
