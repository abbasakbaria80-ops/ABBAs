import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ctaImage =
  'https://images.unsplash.com/photo-1774411679135-187f3c4b81b6?auto=format&fit=crop&w=1920&q=80'

export default function CTASection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-20 bg-lux-ivory" ref={ref}>
      <div className="max-w-lux mx-auto px-6">
        <div
          className={`relative rounded-3xl overflow-hidden h-[420px] md:h-[480px] flex items-center justify-center img-fallback reveal ${visible ? 'visible' : ''}`}
        >
          <img
            src={ctaImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.opacity = '0'
            }}
          />
          <div className="absolute inset-0 bg-lux-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/50 to-lux-black/30" />

          <div className="relative z-10 text-center px-6 max-w-2xl">
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-5 leading-tight">
              آماده یک تجربه متفاوت هستید؟
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed">
              خودروی لوکس موردنظر خود را انتخاب کنید و سفر بعدی خود را متفاوت آغاز کنید.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/fleet"
                className="bg-lux-gold text-lux-black px-8 py-3.5 rounded-lg font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300"
              >
                رزرو خودرو
              </Link>
              <a
                href="#contact"
                className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                تماس با ما
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
