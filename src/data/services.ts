export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

const img = (id: string, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const services: Service[] = [
  {
    id: 'self-drive',
    title: 'اجاره خودرو بدون راننده',
    description: 'خودروی لوکس موردنظر خود را بدون راننده اجاره کنید و آزادی کامل در سفر داشته باشید.',
    icon: 'car',
    image: img('1700884520248-92092bd21e63'),
  },
  {
    id: 'chauffeur',
    title: 'اجاره خودرو با راننده',
    description: 'با راننده حرفه‌ای و مجرب، بدون دغدغه رانندگی از سفر لوکس خود لذت ببرید.',
    icon: 'user',
    image: img('1764605513110-b34bdd62af33'),
  },
  {
    id: 'airport-transfer',
    title: 'ترانسفر فرودگاهی',
    description: 'ترانسفر لوکس از و به فرودگاه با خودروهای تشریفاتی و راننده حرفه‌ای.',
    icon: 'car',
    image: img('1778541999438-983cff5703fa'),
  },
  {
    id: 'ceremony',
    title: 'خدمات تشریفات',
    description: 'خودروهای تشریفاتی برای مراسم عروسی، جلسات رسمی و موقعیت‌های خاص.',
    icon: 'crown',
    image: img('1764090317565-46fe49fe2a31'),
  },
  {
    id: 'business',
    title: 'اجاره خودرو برای جلسات کاری',
    description: 'خودروهای لوکس برای سفرهای کاری و جلسات مهم با بالاترین استانداردها.',
    icon: 'briefcase',
    image: img('1580273916550-e323be2ae537'),
  },
  {
    id: 'filming',
    title: 'خودرو برای فیلمبرداری',
    description: 'خودروهای لوکس و خاص برای پروژه‌های فیلمبرداری و تولید محتوا.',
    icon: 'camera',
    image: img('1535448580089-c7f9490c78b1'),
  },
]
