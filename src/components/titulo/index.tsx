import { Separator } from "../ui/separator";
import { DM_Serif_Text, Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: ['400', '400'], 
  })

const serif = DM_Serif_Text({
    subsets: ['latin'],
    weight: ['400', '400'], 
  })


interface TituloProps {
    titulo: string;
    descricao: string;
}

export default function Titulo(
    {
        titulo,
        descricao,
    } : TituloProps
) {
    return(
        <div >
           <div className="flex justify-center flex-col items-center mt-10 mb-10">
                    <h1 className={ `text-5xl font-bold mb-3`}>{titulo}</h1>
                    <div className="w-30">
                        <Separator className="border-t-4 border-[#FA541C] mb-5 " /> 
                    </div>
                    <p>{descricao}</p>
                </div>
        </div>
    )
}
