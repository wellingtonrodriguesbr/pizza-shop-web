import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          Pizza Shop
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Wellington Rodrigues</span>
          <span className="text-xs font-normal text-muted-foreground">
            wr_rodrigues@outlook.com.br
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Building className="mr-2 w-4 h-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400 hover:text-rose-500 hover:dark:text-rose-400">
          <LogOut className="mr-2 w-4 h-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
