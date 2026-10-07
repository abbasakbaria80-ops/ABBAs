export interface Category {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const categories: Category[] = [
  {
    id: 'sedan',
    title: 'سدان‌های لوکس',
    description: 'ترکیبی از راحتی، کلاس و عملکرد',
    icon: 'crown',
    image: img('1580273916550-e323be2ae537'),
  },
  {
    id: 'suv',
    title: 'SUV',
    description: 'قدرت، فضای بیشتر و شکوه بیشتر',
    icon: 'mountain',
    image: img('1776723210515-c7fad08ff3cd'),
  },
  {
    id: 'coupe',
    title: 'کوپه',
    description: 'عملکرد و طراحی برای تجربه‌ای متفاوت',
    icon: 'glasses',
    image: img('1535448580089-c7f9490c78b1'),
  },
  {
    id: 'ceremonial',
    title: 'خودروهای تشریفاتی',
    description: 'برای مراسم، جلسات و موقعیت‌های خاص',
    icon: 'crown',
    image: img('1764090317565-46fe49fe2a31'),
  },
  {
    id: 'van',
    title: 'ون VIP',
    description: 'فضای بیشتر برای سفرهای گروهی',
    icon: 'box',
    image: img('1700884520248-92092bd21e63'),
  },
  {
    id: 'chauffeur',
    title: 'خدمات راننده',
    description: 'سفر راحت با راننده حرفه‌ای',
    icon: 'user',
    image: img('1764605513110-b34bdd62af33'),
  },
]
