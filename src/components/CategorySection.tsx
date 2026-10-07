import { Link } from 'react-router-dom'
import { Crown, Mountain, Glasses, Box, UserIcon, Car } from './Icons'
import { categories } from '../data/categories'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  crown: Crown,
  mountain: Mountain,
  glasses: Glasses,
  box: Box,
  user: UserIcon,
  car: Car,
}

export default function CategorySection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-20 bg-lux-ivory" ref={ref}>
      <div className="max-w-lux mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-lux-gold text-sm font-medium tracking-[0.2em]">دسته‌بندی خودروها</span>
          <h2 className="text-lux-near-black text-3xl md:text-4xl font-bold mt-3">
            خودروی مناسب برای هر موقعیت
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Car
            const link = cat.id === 'chauffeur' ? '/#chauffeur' : `/fleet?category=${cat.id}`
            return (
              <Link
                key={cat.id}
                to={link}
                className={`group flex flex-col items-center text-center reveal ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-lux-charcoal flex items-center justify-center mb-4 group-hover:bg-lux-gold transition-all duration-300 group-hover:scale-110 shadow-lg shadow-black/10">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-lux-black transition-colors" />
                </div>
                <h3 className="text-lux-near-black text-sm md:text-base font-bold mb-1">{cat.title}</h3>
                <p className="text-lux-near-black/50 text-xs leading-relaxed">{cat.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
