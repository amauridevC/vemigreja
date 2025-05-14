import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


import { Roboto, Montserrat, Londrina_Outline, Pacifico } from 'next/font/google'
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import Link from "next/link";


const pacifico = Pacifico({
    subsets: ['latin'],
    weight: ['400', '400'], 
   
  })

export default function Cadastro(){
    return (
        <Container>
        <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
           <div className="border shadow rounded-lg grid grid-cols-1 sm:grid-cols-2 flex-grow">
              <div className="p-4 order-2 sm:order-2">
                <h1 className={`${pacifico.className}  mb-2  text-[#FF6C00] text-center sm:text-2xl `}>Seja bem-vindo a sua nova casa!</h1>
               <form className=" flex flex-col space-y-3">
                 <Input placeholder="Nome" type="text" />
                 <Input placeholder="E-mail" type="email" />
                 <Input placeholder="Senha" type="password" />
                 <Input placeholder="Confirmar senha" type="password" />
                 <Select>
                        <SelectTrigger className="w-full rounded-lg">
                            <SelectValue placeholder="Tipo de membro" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectLabel>Selecione uma opção</SelectLabel>
                            <SelectItem value="apple"  >Membro comum</SelectItem>
                            <SelectItem value="banana">Líder de GC</SelectItem>
                            <SelectItem value="blueberry">Admin</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                 <div className="flex-col space-y-3">
                    <Button className="rounded-lg bg-[#FF6C00] w-full hover:bg-[#25464E]" type="submit">Realizar cadastro</Button>
                    <Link href="/login">
                        <Button className="rounded-lg bg-[#FF6C00] w-full hover:bg-[#25464E] " type="button">Login</Button>
                    </Link>
                 </div>
               </form>
               </div>
               <div className="w-full flex order-1 sm:order-2 bg-[#FFF8EC] ">
                   <Image
                        src="/logovemigreja.png"
                        alt="teste"
                        width={400}
                        height={100}
                        className=" rounded-t-lg sm:rounded-r-lg  sm:rounded-l-none w-full flex"
                    />
                </div>
           </div>
           
        </div>
        </Container>
    )
}