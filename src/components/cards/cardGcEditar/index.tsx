import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface CardProps {
    bannerUrl: string;
    logoUrl: string;
    gc: string;
    genero: string;
    ministerio: string;
    lider: string;
}




export default function CardGcEditar(
    { bannerUrl,
     logoUrl,
     gc, 
     genero, 
     ministerio, 
     lider }: CardProps
) {
    return (
        <div className="p-2 ">
                 <div className="flex flex-col border-2 rounded-xl mb-2 ">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={bannerUrl}
                            alt="gc"
                            width={200}
                            height={50}
                            className="w-full rounded-t-xl"
                        /> 
                         <Image
                            src={logoUrl}
                            alt="gc"
                            width={400}
                            height={40}
                            className="rounded-full -mt-8 border-2 border-white bg-white w-16"
                        />                         
                    </div>              
                    <div>
                        <p className="text-md font-bold text-center mt-2">{gc}</p>
                        <div className="p-3 text-sm">
                           <p className="font-bold ">Genero:  <span className="text-[#666666]">{genero}</span></p>
                           <p className="font-bold">Ministerio:  <span className="text-[#666666]">{ministerio}</span></p>
                           <p className="font-bold">Lider:  <span className="text-[#666666]">{lider}</span></p>
                        </div>
                        <div className="grid grid-cols-1 p-2 gap-3 sm:grid-cols-2">
                            <Button className="bg-[#FF6C00] hover:bg-[#FF6C00] cursor-pointer">Editar</Button>
                            <Button className="bg-[#FF6C00] hover:bg-[#FF6C00] cursor-pointer">Excluir</Button>
                        </div>
                    </div>
                 </div>
        </div>
    );
}