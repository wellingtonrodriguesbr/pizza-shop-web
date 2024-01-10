import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <header className="border-b">
      <div className="flex items-center w-full h-16 p-6 gap-6">
        <Pizza className="w-6 h-6" />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center gap-6">
          <NavLink to="/">
            <Home className="w-4 h-4" />
            Dashboard
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="w-4 h-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
