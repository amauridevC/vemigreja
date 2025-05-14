import { Roboto, Montserrat, Londrina_Outline } from 'next/font/google'
import Link from "next/link";
import { Container } from '../container';
import DropDown from './drop';
import MenuDrop from './menuDrop';
import { User } from 'lucide-react';
import { LogOut } from 'lucide-react';


const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], 
  })
  
  const londrina = Londrina_Outline({
    subsets: ['latin'],
    weight: ['400', '400'], 
  })
  
  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '500'],
  })

export default function Header(){


return (
    <div>
       <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-sm fixed top-0 z-50">
                <Container>
                    <div className="w-full flex items-center justify-between max-w-7x1 mx-auto">
                        <Link href="/">
                            <img src="/vemlogo1.png" alt="Logo" className="w-30 md:w-45 justify-start" />
                        </Link>
                        <nav className={`${roboto.className} hidden  items-center gap-4  text-black sm:flex `}>
                            <Link href="/" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">Inicio</Link>                 
                            {/* <DropDown/> */}
                            <Link href="/ministerios" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">Ministerios</Link>
                            <Link href="/raizes" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">Raizes</Link>
                            <Link href="/ofertas" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">Ofertas</Link>
                            <Link href="/eventos" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">Eventos</Link>
                            <Link href="/gc" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">GCs</Link>
                            <Link href="/editar" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110">Editar</Link>
                            <Link href="/cadastro" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110"> <User size={20}/></Link>
                            <Link href="/cadastro" className="hover:text-[#FF6C00] duration-300 transform hover:scale-110"> <LogOut size={20}/></Link>
                           
                        </nav>
                        <MenuDrop/>
                       
                    </div>
                    
                </Container>
        </header>
        <div className="h-20"></div>
    </div>
    )
}