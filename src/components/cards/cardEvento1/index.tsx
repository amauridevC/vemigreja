import Image from "next/image";

interface CardProps{
    banner: string;
    titulo: string;
    descricao: string;
    data: string;
    hora:string;
}


export default function CardEvento1( 
    {
        banner,
        titulo,
        descricao,
        data,
        hora

    } : CardProps
) {
    return (
        <div className="">
             <div className='space-y-3 mb-15'>
                   <div className='flex flex-col'>
                    <Image
                        src={banner}
                        alt="não faz"
                        width={800}
                        height={200}
                        className="w-full rounded-lg flex h-full "
                        /> 
                   </div>
                   <p className='text-2xl font-bold'>{titulo}</p>
                   <p>{descricao}</p>
                     <div>
                    <p className='font-bold'>Data: <span className='text-orange-300 font-normal'>{data}</span> </p>
                    <p className='font-bold'>Horário: <span className='text-orange-300 font-normal'>{hora}</span> </p>
                   </div>
                   </div>
        </div>
    )
}