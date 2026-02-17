import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearch } from "@/context/search-context";
import { ButtonGroup } from "./ui/button-group";

export default function Navbar() {
  const { query, setQuery } = useSearch();
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="w-full flex h-12 gap-2 items-center justify-between px-4 sm:h-14 sm:px-6">
        <h1 className="text-base font-semibold sm:text-lg">
          Icarus Food Planner
        </h1>
        <div className="flex gap-2">
          <Button asChild variant="ghost">
            <Link to="/" className="px-4">
              Home
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/saved-diets" className="px-4">
              Saved Diets
            </Link>
          </Button>
          <ButtonGroup>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type to search..."
              className="w-3xs"
            />
            <Button variant="outline" onClick={() => setQuery("")}>
              Clear
            </Button>
          </ButtonGroup>
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </header>
  );
}
