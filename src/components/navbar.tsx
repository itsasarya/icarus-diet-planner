import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <>
      <div className="justify-between w-full flex">
        <div className="text-3xl">Icarus Food Planner</div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
