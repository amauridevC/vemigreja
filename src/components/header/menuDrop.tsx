import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Menu } from 'lucide-react';
import Link from "next/link";
  



export default function MenuDrop() {
    return (
        <div className="flex md:hidden">
        <DropdownMenu>
            <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Bem vindo a vem!</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                     <Link href="/cadastro">Cadastro</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/login">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/">Inicio</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/ministerios">Ministério</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/raizes">Raizes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/ofertas">Ofertas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/eventos">Eventos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/gc">GCs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                     <Link href="/editar">editar</Link>
                </DropdownMenuItem>                
            </DropdownMenuContent>
        </DropdownMenu>
</div>

    )
}