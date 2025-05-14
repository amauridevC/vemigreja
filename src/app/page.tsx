import {
 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Container } from "@/components/container";
import ReactPlayer from "react-player";
import CardMinisterio from "@/components/cards/cardMinisterio";
import CardPastores from "@/components/cards/cardPastores";
import VideoComponent from "@/components/videoinicio";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Titulo from "@/components/titulo";

export default function Home() {
  return (
    <div >
      <main >
         <section className="bg-black h-96 flex w-full ">
          <video width="00" src="vemigreja.mp4" className="w-full object-cover" autoPlay loop muted >
          </video> 
         </section>
         <section className="mt-30 mb-30 ">
          <div >
          <Container>
            <Titulo
              titulo="Nossa historia"
              descricao="a historia da nossa igreja e até onde o senhor tem nos ajudado!"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <VideoComponent/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <div className="flex justify-center flex-col items-center mt-10">
            <Image
              src="/ondavem.png"
              alt="Logo"
              className="w-50 mt-10  "
              width={500}
              height={500}
            />
            </div>
            </Container>
            </div>
         </section>
         <section className="mt-10 bg-[#F5F5F5] flex flex-col mb-10">

          <div >
            <Container>
            <Titulo
              titulo="Pastores"
              descricao="a historia da nossa igreja e até onde o senhor tem nos ajudado!"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 mb-25">
              <CardPastores
                pastores="Osvir e Erica Thomaz"
                description="Pastor sênior da igreja "
                imageUrl="/ana.jpg"
              />
              <CardPastores
                pastores="Oseias e Fabi"
                description="Pastores da igreja "
                imageUrl="/erika.jpg"
              />
               <CardPastores
                pastores="Sostenes e Ana"
                description="Pastores da igreja "
                imageUrl="/fabi.jpg"
              />
               <CardPastores
                pastores="Ricardo e Josi"
                description="Pastores da igreja "
                imageUrl="/jose.jpg"
              />
            </div>

            </Container>
          </div>
         </section>
          <section className="mt-10 ">
          <Container>
          <Titulo
              titulo="Ministerios"
              descricao="a historia da nossa igreja e até onde o senhor tem nos ajudado!"
            />
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-25">
             <CardMinisterio
                title="HYPE"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/HYPE VAZADO.png"
                footerText="Lideres: lucas leão e Clara"
              />
              <CardMinisterio
                title="Instituto vem"
                description="Nosso ministerio de jovens de 18 a 30 test anos "
                imageUrl="/institutovem.png"
                footerText="Lideres: lucas leão e Clara"
              />
              <CardMinisterio
                title="Vamos construir"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/vamos.png"
                footerText="Lideres: lucas leão e Clara"
             />
             <CardMinisterio
                title="NÓS"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/nos.png"
                footerText="Lideres: lucas leão e Clara"
             />
              <CardMinisterio
                title="ONE"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/one.png"
                footerText="Lideres: lucas leão e Clara"
             />
              <CardMinisterio
                title="raízes"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/raizes.png"
                footerText="Lideres: lucas leão e Clara"
             />
              <CardMinisterio
                title="RENOVO"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/renovo.png"
                footerText="Lideres: lucas leão e Clara"
             />
              <CardMinisterio
                title="START"
                description="Nosso ministerio de adolescentes de 12 a 17 anos "
                imageUrl="/START PNG.png"
                footerText="Lideres: lucas leão e Clara"
             />
            </div>
          </Container>
         </section>
         <section className="mb-10">
          <Container>
          <Titulo
              titulo="Horario dos cultos"
              descricao="a historia da nossa igreja e até onde o senhor tem nos ajudado!"
            />
            
          
          <Card className="h-72 item-center justify-center  ">
                <CardHeader className=" grid-cols-2   items-center  ">
                 
                    <div className="w-40 flex justify-center flex-col items-center sm:ml-30 ">
                    <CardTitle className="text-center mt-5 mb-5">DOMINGO</CardTitle>
                    <CardDescription className="  text-center"> Manhã - 10H</CardDescription>
                    <CardDescription className="  text-center"> Noite - 18H </CardDescription>
                    <Separator className="mt-3"/>
                    <CardTitle className="text-center mt-5">Quarta</CardTitle>
                    <CardDescription className=" p-6 text-center"> 19:30 </CardDescription>
                    </div>
                    <div> 
                <Avatar className=" flex justify-center">
                  <AvatarImage src="redondo.png"  className=" h-30 w-30 rounded-full"/>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </div> 
                </CardHeader>
            </Card>
            </Container>
         </section>
      </main>
      
    </div>
  );
}
