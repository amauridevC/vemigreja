// components/EventsCarousel.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Event {
  id: string
  title: string
  bannerUrl: string
}

interface Props {
  events: Event[]
}

export default function EventsCarousel({ events }: Props) {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[400px]"
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <div className="relative w-full h-full ">
            <img
              src={event.bannerUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">{event.title}</h2>
              <button className="bg-primary hover:bg-primary/80 transition px-6 py-3 rounded text-white">
                Ver detalhes
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
