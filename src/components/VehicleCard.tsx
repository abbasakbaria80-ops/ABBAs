import { Link } from 'react-router-dom'
import { Users, Settings as Gear, Briefcase, Heart } from './Icons'
import { toPersianNumber, formatPrice } from '../utils/persian'
import type { Vehicle } from '../data/vehicles'

interface Props {
  vehicle: Vehicle
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}

export default function VehicleCard({ vehicle, isFavorite, onToggleFavorite }: Props) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 border border-lux-near-black/5 flex flex-col">
      {/* Image */}
      <div className="relative h-56 overflow-hidden img-fallback">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.style.opacity = '0'
          }}
        />
        {vehicle.badge && (
          <span className="absolute top-4 right-4 bg-lux-gold text-lux-black text-xs font-medium px-3 py-1 rounded-full z-10">
            {vehicle.badge}
          </span>
        )}
        <button
          onClick={() => onToggleFavorite(vehicle.id)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors z-10"
          aria-label={isFavorite ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-lux-near-black'
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lux-gold text-xs font-medium">{vehicle.category}</span>
          <span className="text-lux-near-black/40 text-xs">{toPersianNumber(vehicle.year)}</span>
        </div>
        <h3 className="text-lux-near-black text-lg font-bold mb-4">{vehicle.name}</h3>

        {/* Specs */}
        <div className="flex items-center gap-4 text-xs text-lux-near-black/60 mb-5 pb-5 border-b border-lux-near-black/5">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-lux-gold" />
            {vehicle.passengers}
          </span>
          <span className="flex items-center gap-1.5">
            <Gear className="w-4 h-4 text-lux-gold" />
            {vehicle.transmission}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-lux-gold" />
            {toPersianNumber(vehicle.luggage)} چمدان
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-auto">
          <div>
            <span className="text-xs text-lux-near-black/50">شروع از</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lux-near-black text-lg font-bold">{formatPrice(vehicle.dailyPrice)}</span>
              <span className="text-xs text-lux-near-black/50">تومان / روز</span>
            </div>
          </div>
          <Link
            to={`/vehicle/${vehicle.id}`}
            className="bg-lux-charcoal text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-lux-gold hover:text-lux-black transition-all duration-300"
          >
            مشاهده خودرو
          </Link>
        </div>
      </div>
    </div>
  )
}
