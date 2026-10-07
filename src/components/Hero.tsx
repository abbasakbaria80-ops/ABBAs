import { Link } from 'react-router-dom'
import { ArrowLeft } from './Icons'

const heroImage =
  'https://images.unsplash.com/photo-1778541999438-983cff5703fa?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-lux-black">
      {/* Background image */}
      <div className="absolute inset-0 img-fallback">
        <img
          src={heroImage}
          alt="Toyota Land Cruiser 2026"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        {/* Gradient: transparent on right (car visible), dark on left (text readable) */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-lux-black/50 to-lux-black/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-transparent to-lux-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lux mx-auto px-6 w-full pt-20 pb-32">
        <div className="max-w-xl me-auto">
          <span className="inline-block text-lux-gold text-sm md:text-base tracking-[0.2em] font-medium">
            اجاره خودروهای لوکس
          </span>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mt-5 leading-[1.15]">
            لوکس برانید،
            <br />
            متفاوت سفر کنید
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-6 leading-relaxed max-w-md">
            اجاره خودروهای لوکس و تشریفاتی
            <br />
            با بهترین شرایط و خدمات حرفه‌ای
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/fleet"
              className="group flex items-center gap-2 border border-lux-gold text-lux-gold px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-lux-gold hover:text-lux-black transition-all duration-300"
            >
              مشاهده خودروها
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
            <Link
              to="/fleet"
              className="bg-lux-gold text-lux-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300"
            >
              رزرو خودرو
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/40 text-xs tracking-widest">اسکرول</span>
        <div className="w-px h-10 bg-gradient-to-b from-lux-gold/0 via-lux-gold/60 to-lux-gold/0" />
      </div>
    </section>
  )
}
