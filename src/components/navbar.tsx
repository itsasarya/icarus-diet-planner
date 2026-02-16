import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="w-full flex h-12 gap-2 items-center justify-between px-4 sm:h-14 sm:px-6">
        <h1 className="text-base font-semibold sm:text-lg">
          Icarus Food Planner
        </h1>
        <div className="flex gap-2">
          <Button asChild variant="ghost"><Link to="/" className="px-4">Home</Link></Button>
          <Button asChild variant="ghost"><Link to="/saved-diets" className="px-4">Saved Diets</Link></Button>          
          <ModeToggle />
        </div>
      </nav>
      <Separator />
    </header>
  );
}
