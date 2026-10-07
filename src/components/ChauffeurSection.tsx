import { Link } from 'react-router-dom'
import { Check, ArrowLeft } from './Icons'

const chauffeurImage =
  'https://images.unsplash.com/photo-1764605513110-b34bdd62af33?auto=format&fit=crop&w=1200&q=80'

const features = [
  'رانندگان حرفه‌ای و مجرب',
  'خودروهای لوکس و تشریفاتی',
  'رعایت کامل اصول ایمنی',
  'زمان‌بندی دقیق و منعطف',
  'پشتیبانی ۲۴ ساعته',
]

export default function ChauffeurSection() {
  return (
    <section id="chauffeur" className="py-20 bg-lux-black relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lux-gold/5 rounded-full blur-3xl" />

      <div className="max-w-lux mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden img-fallback order-1 lg:order-1">
            <img
              src={chauffeurImage}
              alt="خدمات راننده حرفه‌ای"
              loading="lazy"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.opacity = '0'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lux-black/60 to-transparent" />
            {/* Gold border accent */}
            <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-lux-gold/50 rounded-tr-2xl" />
          </div>

          {/* Content */}
          <div>
            <span className="text-lux-gold text-sm font-medium tracking-[0.2em]">خدمات راننده</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold mt-3 mb-6 leading-tight">
              سفر شما، با استانداردی متفاوت
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              با خدمات راننده حرفه‌ای، بدون دغدغه رانندگی کنید و از تجربه‌ای راحت، امن و لوکس لذت ببرید.
            </p>

            <div className="space-y-3 mb-10">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-lux-gold/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-lux-gold" />
                  </span>
                  <span className="text-white/80">{f}</span>
                </div>
              ))}
            </div>

            <Link
              to="/fleet"
              className="group inline-flex items-center gap-2 bg-lux-gold text-lux-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300"
            >
              رزرو خودرو با راننده
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
