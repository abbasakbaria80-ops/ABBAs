import { services } from '../data/services'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ServicesSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="services" className="py-20 bg-lux-ivory" ref={ref}>
      <div className="max-w-lux mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-lux-gold text-sm font-medium tracking-[0.2em]">خدمات ما</span>
          <h2 className="text-lux-near-black text-3xl md:text-4xl font-bold mt-3">
            خدمات لوکس و حرفه‌ای
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden h-80 img-fallback cursor-pointer reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-lux-black/40 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-lux-gold/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-lux-gold transition-all duration-300">
                <span className="text-lux-gold group-hover:text-lux-black text-lg font-bold">
                  {String.fromCharCode(0x0600 + i + 1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
