import { ModeToggle } from "./ui/mode-toggle";
import { Separator } from "./ui/separator";

export default function Navbar() {
  return (
    <>
      <div className="justify-between w-full flex mb-2">
        <div className="text-3xl">Icarus Food Planner</div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <Separator />
    </>
  );
}
