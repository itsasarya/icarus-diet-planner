import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="mx-auto flex h-14 w-full items-center justify-between px-4">
        <h1 className="text-lg font-semibold sm:text-xl">
          Icarus Food Planner
        </h1>

        <ModeToggle />
      </nav>
      <Separator />
    </header>
  );
}
