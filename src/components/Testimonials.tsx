import { Star } from './Icons'
import { testimonials } from '../data/testimonials'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Testimonials() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-20 bg-lux-ivory" ref={ref}>
      <div className="max-w-lux mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-lux-gold text-sm font-medium tracking-[0.2em]">نظرات مشتریان</span>
          <h2 className="text-lux-near-black text-3xl md:text-4xl font-bold mt-3">
            مشتریان ما چه می‌گویند؟
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-6 shadow-sm border border-lux-near-black/5 flex flex-col reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-lux-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lux-near-black/70 text-sm leading-relaxed mb-6 flex-1">{t.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-lux-near-black/5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-lux-ivory shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-lux-near-black font-bold text-sm">{t.name}</h4>
                  <p className="text-lux-near-black/50 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
