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




export default function CardGc(
    { bannerUrl,
     logoUrl,
     gc, 
     genero, 
     ministerio, 
     lider }: CardProps
) {
    return (
        <div className="p-2">
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
                    </div>
                    
                 </div>
        </div>
    );
}