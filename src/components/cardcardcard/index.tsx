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

export default function Cardcardcard(){
    return (
        <Container>
        <div className="flex justify-center items-center ">
           <div className="border shadow rounded-lg grid grid-cols-1 sm:grid-cols-2 flex-grow ">
                    <div className="w-full flex bg-[#FFF8EC] sm:h-70">
                            <Image
                                    src="/banner.png"
                                    alt="teste"
                                    width={800}
                                    height={100}
                                    className=" rounded-t-lg  sm:rounded-l-lg sm:rounded-r-none w-full flex "
                                />
                    </div>
                <div className="">
                    <div className="flex flex-col sm:mt-0 sm:mr-4 w-full p-3 sm:p-8 h-full justify-center">
                    
                        <h2 className="text-black font-bold text-xl flex-wrap flex">teste</h2>
                     
                        <p className="text-black">
                            teste da descrição
                        </p>
                        <div className="flex flex-row justify-between mt-6 ">
                            <Link href="/">
                            <button className="border-2 border-[#FF6C00] rounded-full text-[#FF6C00] text-sm font-bold px-4 py-2 hover:border-[#25464E] hover:bg-[#25464E] duration-300">
                                Saiba mais
                            </button>
                            </Link>
                            <Link href="teste">
                            <button className="border-2 border-[#FF6C00] rounded-full text-white text-sm bg-[#FF6C00] font-bold px-4 py-2 hover:border-[#25464E] hover:bg-[#25464E] duration-300">
                                contatar lider
                            </button>
                            </Link>
                        </div>
                     </div>
               </div>
           </div>
           
        </div>
        </Container>
    )
}