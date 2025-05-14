import * as React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface CourseCardProps {
  src: string
  title: string
  subtitle?: string
  description: string
  learnMoreHref?: string
  buyHref?: string
}

export function CourseCard({
  src,
  title,
  subtitle,
  description,
  learnMoreHref = "#",
  buyHref = "#",
}: CourseCardProps) {
  return (
    <div className="w-full">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:flex-row items-center justify-center  mx-auto border rounded-lg mb-10 ">
        <div className=" sm:w-100" >
        <Image
          src={src}
          alt={title}
          width={400}
          height={300}
          className="rounded-t-lg  sm:rounded-l-lg sm:rounded-r-none w-full flex"
        />
        </div>
        <div className="flex flex-col flex-wrap sm:mt-0 sm:mr-4 w-full p-3 sm:p-8 ">
          <h2 className="text-black font-bold text-xl">{title}</h2>
          <p className="text-black">
            {description}
          </p>
          <div className="flex flex-row justify-between mt-6 ">
            <Link href={learnMoreHref}>
              <button className="border-2 border-[#FF6C00] rounded-full text-[#FF6C00] text-sm font-bold px-4 py-2 hover:border-[#25464E] hover:bg-[#25464E] duration-300">
                Saiba mais
              </button>
            </Link>
            <Link href={buyHref}>
              <button className="border-2 border-[#FF6C00] rounded-full text-white text-sm bg-[#FF6C00] font-bold px-4 py-2 hover:border-[#25464E] hover:bg-[#25464E] duration-300">
                contatar lider
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
