import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getVehicleById, getSimilarVehicles } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import { useFavorites } from '../hooks/useFavorites'
import {
  Users, Settings as Gear, Briefcase, Fuel, Check, Heart, Expand,
  ChevronLeft, ChevronRight, Close, Phone,
} from '../components/Icons'
import { toPersianNumber, formatPrice } from '../utils/persian'

export default function VehicleDetailPage() {
  const { id } = useParams()
  const vehicle = id ? getVehicleById(id) : undefined
  const { isFavorite, toggleFavorite } = useFavorites()

  const [activeImage, setActiveImage] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  if (!vehicle) {
    return (
      <div className="bg-lux-black pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">خودرو یافت نشد</h1>
          <Link to="/fleet" className="text-lux-gold hover:text-lux-gold-dark">
            بازگشت به خودروها
          </Link>
        </div>
      </div>
    )
  }

  const similar = getSimilarVehicles(vehicle.id)
  const gallery = vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image]

  return (
    <>
      {/* Dark banner with breadcrumbs */}
      <div className="bg-lux-black pt-28 pb-8">
        <div className="max-w-lux mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-white/40">
            <Link to="/" className="hover:text-lux-gold transition-colors">خانه</Link>
            <ChevronLeft className="w-4 h-4" />
            <Link to="/fleet" className="hover:text-lux-gold transition-colors">خودروها</Link>
            <ChevronLeft className="w-4 h-4" />
            <span className="text-white/80">{vehicle.name}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="bg-lux-ivory py-12">
        <div className="max-w-lux mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <div>
              <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden img-fallback group">
                <img
                  src={gallery[activeImage]}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.opacity = '0'
                  }}
                />
                <button
                  onClick={() => setFullscreen(true)}
                  className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="نمایش تمام صفحه"
                >
                  <Expand className="w-4 h-4 text-lux-near-black" />
                </button>
                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImage((activeImage - 1 + gallery.length) % gallery.length)
                      }
                      className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="تصویر قبلی"
                    >
                      <ChevronRight className="w-5 h-5 text-lux-near-black" />
                    </button>
                    <button
                      onClick={() => setActiveImage((activeImage + 1) % gallery.length)}
                      className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                      aria-label="تصویر بعدی"
                    >
                      <ChevronLeft className="w-5 h-5 text-lux-near-black" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {gallery.map((imgSrc, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all img-fallback ${
                        activeImage === i
                          ? 'border-lux-gold'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt=""
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.opacity = '0'
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lux-gold text-sm font-medium">{vehicle.category}</span>
                <button
                  onClick={() => toggleFavorite(vehicle.id)}
                  className="w-10 h-10 rounded-full bg-white border border-lux-near-black/10 flex items-center justify-center hover:bg-lux-ivory transition-colors"
                  aria-label="افزودن به علاقه‌مندی‌ها"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      isFavorite(vehicle.id) ? 'fill-red-500 text-red-500' : 'text-lux-near-black'
                    }`}
                  />
                </button>
              </div>

              <h1 className="text-lux-near-black text-3xl md:text-4xl font-bold mb-2">
                {vehicle.name}
              </h1>
              <p className="text-lux-near-black/50 text-sm mb-6">
                {vehicle.brand} • {vehicle.model} • {toPersianNumber(vehicle.year)}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Users, label: 'سرنشین', value: vehicle.passengers },
                  { icon: Gear, label: 'گیربکس', value: vehicle.transmission },
                  { icon: Briefcase, label: 'چمدان', value: toPersianNumber(vehicle.luggage) },
                  { icon: Fuel, label: 'سوخت', value: vehicle.fuelType },
                ].map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.label}
                      className="bg-white rounded-xl p-4 text-center border border-lux-near-black/5"
                    >
                      <Icon className="w-5 h-5 text-lux-gold mx-auto mb-2" />
                      <span className="block text-xs text-lux-near-black/50">{s.label}</span>
                      <p className="text-lux-near-black font-bold text-sm mt-1">{s.value}</p>
                    </div>
                  )
                })}
              </div>

              {/* Price */}
              <div className="bg-lux-charcoal rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/50 text-xs">قیمت روزانه</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-white text-2xl font-bold">
                        {formatPrice(vehicle.dailyPrice)}
                      </span>
                      <span className="text-white/50 text-sm">تومان</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <span className="text-white/50 text-xs">قیمت هفتگی</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-lux-gold text-xl font-bold">
                        {formatPrice(vehicle.weeklyPrice)}
                      </span>
                      <span className="text-white/50 text-xs">تومان</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="flex-1 bg-lux-gold text-lux-black py-3.5 rounded-lg font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300">
                  رزرو خودرو
                </button>
                <button className="flex-1 border border-lux-near-black/20 text-lux-near-black py-3.5 rounded-lg font-medium hover:bg-lux-charcoal hover:text-white hover:border-lux-charcoal transition-all flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  تماس با کارشناسان
                </button>
              </div>

              {/* Driver availability */}
              {vehicle.driverAvailable && (
                <div className="flex items-center gap-2 text-sm text-lux-gold-dark bg-lux-gold/10 rounded-lg p-3 mb-8">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>این خودرو با راننده قابل اجاره است</span>
                </div>
              )}

              {/* Description */}
              <p className="text-lux-near-black/70 text-sm leading-relaxed mb-8">
                {vehicle.description}
              </p>
            </div>
          </div>

          {/* Features & Amenities + Rental Conditions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 border border-lux-near-black/5">
              <h3 className="text-lux-near-black font-bold text-lg mb-5">امکانات و ویژگی‌ها</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[...vehicle.features, ...vehicle.amenities].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-lux-gold shrink-0" />
                    <span className="text-lux-near-black/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-lux-near-black/5">
              <h3 className="text-lux-near-black font-bold text-lg mb-5">شرایط اجاره</h3>
              <div className="space-y-3">
                {vehicle.rentalConditions.map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-lux-gold shrink-0" />
                    <span className="text-lux-near-black/70 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Similar vehicles */}
          {similar.length > 0 && (
            <div className="mt-16">
              <h2 className="text-lux-near-black text-2xl font-bold mb-8">خودروهای مشابه</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similar.map((v) => (
                  <VehicleCard
                    key={v.id}
                    vehicle={v}
                    isFavorite={isFavorite(v.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen viewer */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setFullscreen(false)}
        >
          <img
            src={gallery[activeImage]}
            alt={vehicle.name}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setFullscreen(false)}
            aria-label="بستن"
          >
            <Close className="w-6 h-6" />
          </button>
          {gallery.length > 1 && (
            <>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage((activeImage - 1 + gallery.length) % gallery.length)
                }}
                aria-label="قبلی"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <button
                className="absolute top-1/2 -translate-y-1/2 left-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveImage((activeImage + 1) % gallery.length)
                }}
                aria-label="بعدی"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
