export interface Testimonial {
  id: string
  name: string
  role: string
  rating: number
  text: string
  avatar: string
}

const avatar = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=200&h=200&q=80`

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'آرش محمدی',
    role: 'مدیرعامل شرکت فناوری',
    rating: 5,
    text: 'تجربه فوق‌العاده‌ای با AURELIA DRIVE داشتیم. خودرو در بهترین وضعیت تحویل داده شد و خدمات کاملاً حرفه‌ای بود. قطعاً مجدداً استفاده خواهیم کرد.',
    avatar: avatar('1507003211169-0a1dd7228f2d'),
  },
  {
    id: '2',
    name: 'سارا احمدی',
    role: 'وکیل',
    rating: 5,
    text: 'برای مراسم عروسی خودرو تشریفاتی رزرو کردم. همه چیز بی‌نقص بود، از رزرو تا تحویل. راننده بسیار حرفه‌ای و خوش‌اخلاق بود.',
    avatar: avatar('1494790108377-be9c29b29330'),
  },
  {
    id: '3',
    name: 'کاوه رضایی',
    role: 'پزشک',
    rating: 5,
    text: 'ترانسفر فرودگاهی با مرسدس S-Class یکی از بهترین تجربه‌های سفر من بود. راحتی، نظم و لوکس بودن در بالاترین سطح.',
    avatar: avatar('1500648767791-00dcc994a43e'),
  },
  {
    id: '4',
    name: 'نگار کریمی',
    role: 'طراح داخلی',
    rating: 5,
    text: 'کیفیت خودروها و خدمات پشتیبانی AURELIA DRIVE واقعاً قابل اعتماد است. شفافیت در قیمت و سرعت رزرو از نکات برجسته است.',
    avatar: avatar('1438761681033-6461ffad8d80'),
  },
]
