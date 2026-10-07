import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowLeft } from './Icons'
import { vehicles } from '../data/vehicles'
import VehicleCard from './VehicleCard'
import { useFavorites } from '../hooks/useFavorites'

export default function FeaturedFleet() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isFavorite, toggleFavorite } = useFavorites()

  const scroll = (direction: 'next' | 'prev') => {
    if (!scrollRef.current) return
    const amount = 360
    scrollRef.current.scrollBy({
      left: direction === 'next' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-lux mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-lux-gold text-sm font-medium tracking-[0.2em]">ناوگان منتخب</span>
            <h2 className="text-lux-near-black text-3xl md:text-4xl font-bold mt-3">
              انتخابی از بهترین خودروهای لوکس
            </h2>
          </div>
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('prev')}
              className="w-11 h-11 rounded-full border border-lux-near-black/15 flex items-center justify-center hover:bg-lux-charcoal hover:text-white hover:border-lux-charcoal transition-all"
              aria-label="قبلی"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('next')}
              className="w-11 h-11 rounded-full border border-lux-near-black/15 flex items-center justify-center hover:bg-lux-charcoal hover:text-white hover:border-lux-charcoal transition-all"
              aria-label="بعدی"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x-carousel pb-4 -mx-6 px-6"
        >
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="snap-center-item shrink-0 w-[280px] md:w-[340px]">
              <VehicleCard
                vehicle={vehicle}
                isFavorite={isFavorite(vehicle.id)}
                onToggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-10">
          <Link
            to="/fleet"
            className="group flex items-center gap-2 text-lux-near-black font-medium hover:text-lux-gold transition-colors"
          >
            مشاهده همه خودروها
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
