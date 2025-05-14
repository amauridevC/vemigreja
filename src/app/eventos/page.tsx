'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'
import { Container } from '@/components/container'
import Titulo from '@/components/titulo'
import Image from 'next/image'
import CardEvento1 from '@/components/cards/cardEvento1'

interface Event {
  id: string
  title: string
  bannerUrl: string
}

const events: Event[] = [
  {
    id: '1',
    title: 'Nome do evento gigante aqui',
    bannerUrl: 'banner.png',
  },
  {
    id: '2',
    title: 'Nome do evento gigante aqui',
    bannerUrl: 'banner.png',
  },
  {
    id: '3',
    title: 'Nome do evento gigante aqui',
    bannerUrl: 'banner.png',
  },
  {
    id: '4',
    title: 'Nome do evento gigante aqui',
    bannerUrl: 'banner.png',
  },
  {
    id: '5',
    title: 'Nome do evento gigante aqui',
    bannerUrl: 'banner.png',
  },
]

export default function EventCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div>
    <section>
    <Container>
    <div className="w-full max-w-6xl mx-auto px-4 mt-10 mb-10 overflow-visible   ">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop
        centeredSlides
        spaceBetween={-20}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-64 overflow-visible"
        breakpoints={{
          320: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {events.map((event, idx) => (
          <SwiperSlide key={event.id} className="flex justify-center !overflow-visible">
            <div
              className={`
                relative sm:h-64 
                w-[100%] sm:w-[100%] md:w-[60%] lg:w-[100%] 
                rounded-xl 
                overflow-hidden 
                shadow-lg 
                transition-transform duration-500
                ${activeIndex === idx
                  ? 'sm:scale-100 z-5 opacity-100'
                  : 'scale-75 z-10 opacity-30'}
              `}
            >
              <img
                src={event.bannerUrl}
                alt={event.title}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-lg md:text-2xl font-bold mb-2">{event.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </Container>
    </section>
    <section>
       <Titulo
        titulo='Eventos'
        descricao='acompanhe os eventos da nossa igreja'
       />
       
       <Container>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
       <CardEvento1
          banner='/banner.png'
          titulo='texto numero 3'
          descricao=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          data='24/04/2025'
          hora='19H'
       />
        <CardEvento1
          banner='/banner.png'
          titulo='texto numero 3'
          descricao=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          data='24/04/2025'
          hora='19H'
       />
       <CardEvento1
          banner='/banner.png'
          titulo='texto numero 3'
          descricao=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          data='24/04/2025'
          hora='19H'
       />
       </div>
       </Container>
    </section>
    </div>
  )
}
