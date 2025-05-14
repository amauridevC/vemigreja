import Cardcardcard from "@/components/cardcardcard";
import { CourseCard } from "@/components/cards/cardMinisterio2";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Ministerios() {
    return (
        <div>
             <section className= "bg-gradient-to-r from-[#FA541C] to-[#FFF1EC] h-96 flex w-full justify-center items-center">
                 <h1 className="text-white text-4xl text-center">Ministerios</h1>
               </section>
               <section className="mt-10">
                <Container >
                <div className="space-y-6 mb-10">
                <Cardcardcard/>
                <Cardcardcard/>
                <Cardcardcard/>
                <Cardcardcard/>
                </div>


                </Container>
               </section>
        </div>
    )
}