import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Close, Phone } from './Icons'

const navLinks = [
  { label: 'خانه', path: '/' },
  { label: 'خودروها', path: '/fleet' },
  { label: 'خدمات', path: '/#services' },
  { label: 'اجاره با راننده', path: '/#chauffeur' },
  { label: 'درباره ما', path: '/#about' },
  { label: 'تماس با ما', path: '/#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-lux-black/95 backdrop-blur-md py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-lux mx-auto px-6 flex items-center justify-between">
          {/* Logo — right in RTL */}
          <Link to="/" className="flex items-baseline gap-1.5 select-none">
            <span className="text-lux-gold text-2xl font-bold tracking-wider">AURELIA</span>
            <span className="text-white text-xs font-light tracking-[0.3em]">DRIVE</span>
          </Link>

          {/* Nav — center */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm transition-colors duration-300 hover:text-lux-gold after:absolute after:bottom-[-6px] after:right-0 after:h-[2px] after:bg-lux-gold after:transition-all after:duration-300 ${
                    active ? 'text-lux-gold after:w-full' : 'text-white/80 after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Phone + CTA — left in RTL */}
          <div className="hidden lg:flex items-center gap-5">
            <a href="tel:021XXXXXXXX" className="flex items-center gap-2 text-white/80 text-sm hover:text-lux-gold transition-colors">
              <Phone className="w-4 h-4 text-lux-gold" />
              <span dir="ltr">۰۲۱-XXXXXXXX</span>
            </a>
            <Link
              to="/fleet"
              className="bg-lux-gold text-lux-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300"
            >
              رزرو خودرو
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-[85%] bg-lux-black p-6 animate-fade-in overflow-y-auto">
            <div className="flex justify-between items-center mb-10">
              <span className="text-lux-gold text-xl font-bold tracking-wider">AURELIA DRIVE</span>
              <button onClick={() => setMenuOpen(false)} className="text-white p-1" aria-label="بستن منو">
                <Close className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg transition-colors hover:text-lux-gold ${
                      active ? 'text-lux-gold' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>
            <div className="mt-10 pt-8 border-t border-white/10">
              <a href="tel:021XXXXXXXX" className="flex items-center gap-2 text-white/80 mb-5 text-sm">
                <Phone className="w-4 h-4 text-lux-gold" />
                <span dir="ltr">۰۲۱-XXXXXXXX</span>
              </a>
              <Link
                to="/fleet"
                className="block bg-lux-gold text-lux-black px-6 py-3 rounded-lg text-center font-medium"
              >
                رزرو خودرو
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
