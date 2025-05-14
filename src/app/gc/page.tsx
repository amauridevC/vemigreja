import CardGc from "@/components/cards/cardGc";
import { Container } from "@/components/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Roboto, Montserrat, Londrina_Outline, Pacifico } from 'next/font/google'
import Link from "next/link";

import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Titulo from "@/components/titulo";

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: ['400', '400'], 
  })

export default function Gc() {
    return(
        <div>
            <main>
               <section className={`${pacifico.className}  bg-gradient-to-r from-[#FA541C] to-[#FFF1EC] h-96 flex w-full justify-center items-center`}>
                 <h1 className="text-white text-4xl text-center">Conheça os gc's da nossa igreja!</h1>
               </section>
               
               <section className="mt-10">
                 <Container>
                 <Titulo
                       titulo="START"
                        descricao="ministerio de jovens de 12 a 30 anos"
                   />
            <div className="grid grid-cols-2 md:grid-cols-5 md:gap-5 " >
                 
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
              
                 
                </div>
                 </Container>
               </section>
               <section className="mt-10">
                 <Container>
                 <Titulo
                       titulo="HYPE"
                        descricao="ministerio de jovens de 12 a 30 anos"
                   />
            <div className="grid grid-cols-2 md:grid-cols-5 md:gap-5" >
                 
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                
                 
                </div>
                 </Container>
               </section>
               <section className="mt-10">
                 <Container>
                 <Titulo
                       titulo="INSPIRE"
                        descricao="ministerio de jovens de 12 a 30 anos"
                   />
            <div className="grid grid-cols-2 md:grid-cols-5 md:gap-5 mb-5 " >
                 
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
          
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 
                </div>
                 </Container>
               </section>
               <section className="mt-10">
                 <Container>
                 <Titulo
                       titulo="NOS"
                        descricao="ministerio de jovens de 12 a 30 anos"
                   />
            <div className="grid grid-cols-2 md:grid-cols-5 md:gap-5 " >
                 
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                 <CardGc
                    bannerUrl="/banner.png"
                    logoUrl="/hype college logo.png"
                    gc="GC dos atraidos"
                    genero="Masculino"
                    ministerio="Hypeland"
                    lider="Kaio Jabs"
                 />
                </div>
                 </Container>
               </section>
            </main>
            
            
        </div>
    )
}