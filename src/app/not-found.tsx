import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-10rem)] text-center">
      <Image
         alt='imagem pagina não encontrada'
         src="/imagemnotfound.png"
         width={300}
         height={100}
         className='w-40'
      />
      <h2 className='mx-10'>Me parece você tentou acessar uma pagina que não existe... Que tal voltarmos ao inicio ?</h2>
      <Link href="/" className='hover:text-[#F96A00] font-bold'>Inicio</Link>
    </div>
  )
}