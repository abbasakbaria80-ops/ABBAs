import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, WhatsApp } from './Icons'

const navLinks = [
  { label: 'خانه', path: '/' },
  { label: 'خودروها', path: '/fleet' },
  { label: 'خدمات', path: '/#services' },
  { label: 'اجاره با راننده', path: '/#chauffeur' },
  { label: 'درباره ما', path: '/#about' },
  { label: 'تماس با ما', path: '/#contact' },
]

const serviceLinks = [
  'اجاره خودرو',
  'خودرو با راننده',
  'ترانسفر فرودگاهی',
  'خدمات VIP',
]

const socials = [
  { icon: Instagram, label: 'اینستاگرام' },
  { icon: Facebook, label: 'فیسبوک' },
  { icon: Twitter, label: 'توییتر' },
  { icon: WhatsApp, label: 'واتساپ' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-lux-black text-white pt-16 pb-8">
      <div className="max-w-lux mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-lux-gold text-2xl font-bold tracking-wider">AURELIA</span>
              <span className="text-white text-xs font-light tracking-[0.3em]">DRIVE</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              اجاره خودروهای لوکس و تشریفاتی با بهترین شرایط و خدمات حرفه‌ای. تجربه‌ای متفاوت از سفر.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-lux-gold hover:text-lux-black hover:border-lux-gold transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-5">دسترسی سریع</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-white/50 text-sm hover:text-lux-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-5">خدمات</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 text-sm hover:text-lux-gold transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5">تماس با ما</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lux-gold shrink-0" />
                <span dir="ltr">۰۲۱-XXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lux-gold shrink-0" />
                <span>info@aurelia-drive.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-lux-gold shrink-0" />
                <span>تهران، خیابان ولیعصر</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-lux-gold shrink-0" />
                <span>شنبه تا پنجشنبه، ۹ تا ۲۱</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-white/50 text-sm mb-3">عضویت در خبرنامه</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-lux-gold transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="bg-lux-gold text-lux-black px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-lux-gold-dark hover:text-white transition-all whitespace-nowrap"
                >
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">© ۲۰۲۶ AURELIA DRIVE. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  )
}
