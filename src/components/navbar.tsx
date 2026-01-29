import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="mx-auto flex h-12 gap-2 items-center justify-between px-3 sm:h-14 sm:px-4">
        <h1 className="text-base font-semibold sm:text-lg">
          Icarus Food Planner
        </h1>
        <ModeToggle />
      </nav>
      <Separator />
    </header>
  );
}
