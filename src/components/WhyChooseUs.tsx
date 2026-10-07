import { Car, Zap, Concierge, Shield, Check } from './Icons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  {
    icon: Car,
    title: 'ناوگان لوکس و به‌روز',
    desc: 'انتخابی از خودروهای لوکس و تشریفاتی',
  },
  {
    icon: Zap,
    title: 'رزرو سریع و آسان',
    desc: 'فرآیند رزرو ساده و سریع',
  },
  {
    icon: Concierge,
    title: 'خدمات حرفه‌ای',
    desc: 'پشتیبانی و خدمات در سطح VIP',
  },
  {
    icon: Shield,
    title: 'خودروهای کاملاً آماده',
    desc: 'تمام خودروها با بالاترین استاندارد نگهداری می‌شوند',
  },
  {
    icon: Check,
    title: 'شفافیت در قیمت',
    desc: 'بدون هزینه‌های پنهان',
  },
]

export default function WhyChooseUs() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-lux mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-lux-gold text-sm font-medium tracking-[0.2em]">چرا ما؟</span>
          <h2 className="text-lux-near-black text-3xl md:text-4xl font-bold mt-3">
            چرا AURELIA DRIVE؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className={`text-center reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-lux-ivory flex items-center justify-center mb-5 hover:bg-lux-gold transition-all duration-300 group">
                  <Icon className="w-7 h-7 text-lux-gold group-hover:text-lux-black transition-colors" />
                </div>
                <h3 className="text-lux-near-black text-base font-bold mb-2">{b.title}</h3>
                <p className="text-lux-near-black/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
