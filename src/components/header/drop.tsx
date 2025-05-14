import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

  export default function DropDown() {
    return (
      <NavigationMenu className="w-full">
        <NavigationMenuList className="w-full">
          <NavigationMenuItem className="w-full">
            <NavigationMenuTrigger className="w-full text-black text-md">
              Ministerios
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col text-center  ">
              <NavigationMenuLink className="w-full  hover:bg-[#FA541C] hover:text-white" href="hype">
                HYPE
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full  hover:bg-[#FA541C] hover:text-white">
              
              NÓS
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full hover:bg-[#FA541C] hover:text-white">  
              ONE
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full  hover:bg-[#FA541C] hover:text-white">
                Instituto Vem
              
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full  hover:bg-[#FA541C] hover:text-white">
              RENOVO
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full  hover:bg-[#FA541C] hover:text-white">
              START
              </NavigationMenuLink>
              <NavigationMenuLink className="w-full  hover:bg-[#FA541C] hover:text-white">
                Vamos Construir
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  