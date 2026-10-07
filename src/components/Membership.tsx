import { Crown, Zap, Concierge, Sparkles, Check } from './Icons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  { icon: Crown, label: 'رزرو اولویت‌دار' },
  { icon: Zap, label: 'نرخ ویژه اعضا' },
  { icon: Sparkles, label: 'ارتقای خودرو' },
  { icon: Concierge, label: 'خدمات Concierge' },
  { icon: Check, label: 'پیشنهادهای اختصاصی' },
]

export default function Membership() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-20 bg-lux-ivory" ref={ref}>
      <div className="max-w-lux mx-auto px-6">
        <div
          className={`bg-lux-black rounded-3xl p-10 md:p-16 relative overflow-hidden reveal ${visible ? 'visible' : ''}`}
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-lux-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-lux-gold/5 rounded-full blur-3xl" />

          {/* Gold border accent */}
          <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-lux-gold/30 rounded-tr-2xl" />
          <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-lux-gold/30 rounded-bl-2xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-lux-gold text-sm font-medium tracking-[0.3em]">AURELIA PRIVILEGE</span>
            <h2 className="text-white text-3xl md:text-4xl font-bold mt-4 mb-4 leading-tight">
              عضوی از دنیای متفاوت خودروهای لوکس باشید
            </h2>
            <p className="text-white/50 text-base mb-12">عضویت در AURELIA PRIVILEGE</p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.label} className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full border border-lux-gold/30 flex items-center justify-center mb-3 hover:bg-lux-gold/10 transition-colors">
                      <Icon className="w-6 h-6 text-lux-gold" />
                    </div>
                    <span className="text-white/70 text-xs md:text-sm leading-tight">{b.label}</span>
                  </div>
                )
              })}
            </div>

            <button className="bg-lux-gold text-lux-black px-10 py-4 rounded-lg font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300">
              عضویت در AURELIA PRIVILEGE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
