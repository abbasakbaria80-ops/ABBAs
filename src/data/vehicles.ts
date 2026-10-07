export interface Vehicle {
  id: string
  name: string
  brand: string
  model: string
  year: number
  category: string
  categorySlug: string
  image: string
  gallery: string[]
  passengers: string
  transmission: string
  luggage: number
  fuelType: string
  dailyPrice: number
  weeklyPrice: number
  description: string
  features: string[]
  amenities: string[]
  rentalConditions: string[]
  driverAvailable: boolean
  badge?: string
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

// Confirmed working Unsplash photo IDs
const PHOTOS = {
  suvNight: '1778541999438-983cff5703fa',
  suvBuildings: '1776723210515-c7fad08ff3cd',
  suvRoad: '1700884520248-92092bd21e63',
  suvDirt: '1637859460045-ac3ae9ced99d',
  suvLowSun: '1774411679135-187f3c4b81b6',
  mercedesSUV: '1577372794873-e6b8efa7dcc3',
  mercedesCoupe: '1580273916550-e323be2ae537',
  bmwM3: '1618863114786-d501cae6d853',
  bmwM3b: '1615908397724-6dc711db34a7',
  audiR8: '1493238792000-8113da705763',
  porschePanamera: '1601929862217-f1bf94503333',
  sportsCar: '1535448580089-c7f9490c78b1',
  ferrari: '1614377284368-a6d4f911edc7',
  lexus: '1577496549804-8b05f1f67338',
  sedanStreet: '1764090317565-46fe49fe2a31',
  sedanSunset: '1764605513110-b34bdd62af33',
  blackCar: '1731988666860-b4b5e312ed82',
}

export const vehicles: Vehicle[] = [
  {
    id: 'land-cruiser-2026',
    name: 'Toyota Land Cruiser 2026',
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2026,
    category: 'SUV لوکس',
    categorySlug: 'suv',
    image: img(PHOTOS.suvNight),
    gallery: [
      img(PHOTOS.suvNight, 1600),
      img(PHOTOS.suvBuildings, 1600),
      img(PHOTOS.suvRoad, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 4,
    fuelType: 'بنزین',
    dailyPrice: 4500000,
    weeklyPrice: 27000000,
    description: 'تویوتا لندکروزر ۲۰۲۶، ترکیبی از قدرت بی‌نظیر و راحتی بی‌نهایت. انتخابی ایده‌آل برای هر سفر، با طراحی مدرن و امکانات لوکس.',
    features: ['سیستم ناوبری پیشرفته', 'صندلی‌های چرمی', 'سیستم صوت پریمیوم', 'چهارچرخ متحرک', 'کروز کنترل هوشمند'],
    amenities: ['تهویه مطبوع اتوماتیک', 'سانروف', 'دوربین دنده عقب', 'سنسور پارک', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
    badge: 'جدید',
  },
  {
    id: 'mercedes-s-class',
    name: 'Mercedes-Benz S-Class',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2025,
    category: 'سدان تشریفاتی',
    categorySlug: 'sedan',
    image: img(PHOTOS.mercedesCoupe),
    gallery: [
      img(PHOTOS.mercedesCoupe, 1600),
      img(PHOTOS.sedanStreet, 1600),
      img(PHOTOS.sedanSunset, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 3,
    fuelType: 'بنزین',
    dailyPrice: 5200000,
    weeklyPrice: 31000000,
    description: 'مرسدس بنز کلاس S، نماد شکوهن و کلاس جهانی. تجربه رانندگی بی‌نظیر با امکانات لوکس و تکنولوژی پیشرفته.',
    features: ['صندلی‌های ماساژور', 'سیستم صوت Burmester', 'نمایشگر هدآپ', 'کروز کنترل تطبیقی', 'تهویه چند منطقه‌ای'],
    amenities: ['صندلی‌های گرم و خنک', 'ماساژور', 'عایق صوتی پیشرفته', 'چراغ‌های هوشمند', 'سیستم Air Body Control'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
    badge: 'پرطرفدار',
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series',
    brand: 'BMW',
    model: '7 Series',
    year: 2025,
    category: 'سدان لوکس',
    categorySlug: 'sedan',
    image: img(PHOTOS.bmwM3),
    gallery: [
      img(PHOTOS.bmwM3, 1600),
      img(PHOTOS.bmwM3b, 1600),
      img(PHOTOS.sedanStreet, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 3,
    fuelType: 'بنزین',
    dailyPrice: 4800000,
    weeklyPrice: 28800000,
    description: 'بی‌ام‌و سری ۷، ترکیبی از عملکرد و لوکس بودن. طراحی آینده‌نگرانه و تکنولوژی روز دنیا در یک سدان لوکس.',
    features: ['سیستم رانندگی خودکار', 'صفحه نمایش عقب', 'سیستم صوت Bowers & Wilkins', 'کروز کنترل هوشمند', 'تعلیق هوایی'],
    amenities: ['صندلی‌های گرم', 'تهویه اتوماتیک', 'عایق صوتی', 'چراغ‌های لیزری', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
  },
  {
    id: 'range-rover-autobiography',
    name: 'Range Rover Autobiography',
    brand: 'Land Rover',
    model: 'Range Rover Autobiography',
    year: 2025,
    category: 'SUV لوکس',
    categorySlug: 'suv',
    image: img(PHOTOS.suvBuildings),
    gallery: [
      img(PHOTOS.suvBuildings, 1600),
      img(PHOTOS.suvDirt, 1600),
      img(PHOTOS.suvNight, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 4,
    fuelType: 'بنزین',
    dailyPrice: 5500000,
    weeklyPrice: 33000000,
    description: 'رنج روور اتوبایوگرافی، اوج لوکس بودن در کلاس شاسی‌بلندها. قدرت، شکوه و راحتی در بالاترین سطح.',
    features: ['تعلیق هوایی', 'سیستم آفرود', 'صندلی‌های چرمی Windsor', 'سیستم صوت Meridian', 'کروز کنترل تطبیقی'],
    amenities: ['صندلی‌های گرم و خنک', 'ماساژور', 'سانروف پانوراما', 'یخچال', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
    badge: 'ویژه',
  },
  {
    id: 'audi-a8-l',
    name: 'Audi A8 L',
    brand: 'Audi',
    model: 'A8 L',
    year: 2025,
    category: 'سدان تشریفاتی',
    categorySlug: 'sedan',
    image: img(PHOTOS.audiR8),
    gallery: [
      img(PHOTOS.audiR8, 1600),
      img(PHOTOS.sedanSunset, 1600),
      img(PHOTOS.sedanStreet, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 3,
    fuelType: 'بنزین',
    dailyPrice: 4600000,
    weeklyPrice: 27600000,
    description: 'آئودی A8 L، سدان تشریفاتی با فضای داخلی وسیع و تکنولوژی پیشرفته. انتخابی مناسب برای جلسات و سفرهای کاری.',
    features: ['تعلیق پنوماتیک', 'سیستم صوت Bang & Olufsen', 'صفحه نمایش لمسی خلفی', 'کروز کنترل هوشمند', 'تهویه چند منطقه‌ای'],
    amenities: ['صندلی‌های گرم و خنک', 'ماساژور', 'عایق صوتی پیشرفته', 'چراغ‌های ماتریکس', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
  },
  {
    id: 'mercedes-g-class',
    name: 'Mercedes-Benz G-Class',
    brand: 'Mercedes-Benz',
    model: 'G-Class',
    year: 2025,
    category: 'SUV لوکس',
    categorySlug: 'suv',
    image: img(PHOTOS.mercedesSUV),
    gallery: [
      img(PHOTOS.mercedesSUV, 1600),
      img(PHOTOS.suvLowSun, 1600),
      img(PHOTOS.suvDirt, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 3,
    fuelType: 'بنزین',
    dailyPrice: 5800000,
    weeklyPrice: 34800000,
    description: 'مرسدس بنز کلاس G، نماد قدرت و لوکس بودن. طراحی بی‌نظیر و حضور پرصلابت در هر جاده‌ای.',
    features: ['سه قفل دیفرنسیل', 'تعلیق هوشمند', 'سیستم صوت Burmester', 'صندلی‌های چرمی', 'کروز کنترل'],
    amenities: ['صندلی‌های گرم و خنک', 'ماساژور', 'سانروف', 'دوربین ۳۶۰ درجه', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
    badge: 'محبوب',
  },
  {
    id: 'porsche-cayenne',
    name: 'Porsche Cayenne',
    brand: 'Porsche',
    model: 'Cayenne',
    year: 2025,
    category: 'SUV اسپرت',
    categorySlug: 'suv',
    image: img(PHOTOS.porschePanamera),
    gallery: [
      img(PHOTOS.porschePanamera, 1600),
      img(PHOTOS.suvRoad, 1600),
      img(PHOTOS.suvLowSun, 1600),
    ],
    passengers: '۵ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 4,
    fuelType: 'بنزین',
    dailyPrice: 5000000,
    weeklyPrice: 30000000,
    description: 'پورشه کاین، ترکیبی از عملکرد اسپرتی و لوکس بودن. تجربه رانندگی هیجان‌انگیز در یک شاسی‌بلند پریمیوم.',
    features: ['تعلیق پنوماتیک', 'سیستم صوت Bose', 'کروز کنترل تطبیقی', 'صندلی‌های اسپرتی', 'سیستم آفرود'],
    amenities: ['صندلی‌های گرم و خنک', 'سقف پانوراما', 'دوربین ۳۶۰ درجه', 'سیستم بدون کلید', 'سنسور پارک'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
  },
  {
    id: 'bmw-x7',
    name: 'BMW X7',
    brand: 'BMW',
    model: 'X7',
    year: 2025,
    category: 'SUV لوکس',
    categorySlug: 'suv',
    image: img(PHOTOS.suvRoad),
    gallery: [
      img(PHOTOS.suvRoad, 1600),
      img(PHOTOS.bmwM3b, 1600),
      img(PHOTOS.suvBuildings, 1600),
    ],
    passengers: '۷ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 5,
    fuelType: 'بنزین',
    dailyPrice: 5300000,
    weeklyPrice: 31800000,
    description: 'بی‌ام‌و X7، بزرگ‌ترین شاسی‌بلند لوکس بی‌ام‌و. فضای وسیع، راحتی بی‌نظیر و تکنولوژی پیشرفته.',
    features: ['تعلیق هوایی', 'سیستم صوت Harman Kardon', 'صفحه نمایش سرنشینان عقب', 'کروز کنترل هوشمند', 'تهویه چهار منطقه‌ای'],
    amenities: ['صندلی‌های گرم و خنک', 'ماساژور', 'سقف پانوراما', 'دوربین ۳۶۰ درجه', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
  },
  {
    id: 'mercedes-v-class',
    name: 'Mercedes-Benz V-Class',
    brand: 'Mercedes-Benz',
    model: 'V-Class',
    year: 2025,
    category: 'ون VIP',
    categorySlug: 'van',
    image: img(PHOTOS.blackCar),
    gallery: [
      img(PHOTOS.blackCar, 1600),
      img(PHOTOS.suvDirt, 1600),
      img(PHOTOS.suvRoad, 1600),
    ],
    passengers: '۷ تا ۸ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 6,
    fuelType: 'دیزل',
    dailyPrice: 3800000,
    weeklyPrice: 22800000,
    description: 'مرسدس بنز کلاس V، ون VIP با فضای وسیع و راحتی بی‌نظیر. انتخابی مناسب برای سفرهای گروهی و ترانسفر.',
    features: ['صندلی‌های چرمی', 'سیستم صوت پریمیوم', 'تهویه چند منطقه‌ای', 'صفحه نمایش سرنشینان عقب', 'کروز کنترل'],
    amenities: ['صندلی‌های چرخان', 'میز تاشو', 'یخچال', 'تهویه اتوماتیک', 'سیستم بدون کلید'],
    rentalConditions: ['حداقل سن ۲۵ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: true,
    badge: 'مناسب گروه',
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911',
    brand: 'Porsche',
    model: '911 Carrera',
    year: 2025,
    category: 'کوپه اسپرت',
    categorySlug: 'coupe',
    image: img(PHOTOS.sportsCar),
    gallery: [
      img(PHOTOS.sportsCar, 1600),
      img(PHOTOS.ferrari, 1600),
      img(PHOTOS.porschePanamera, 1600),
    ],
    passengers: '۲ سرنشین',
    transmission: 'اتوماتیک',
    luggage: 2,
    fuelType: 'بنزین',
    dailyPrice: 6200000,
    weeklyPrice: 37200000,
    description: 'پورشه ۹۱۱، نماد عملکرد و طراحی اسپرتی. تجربه رانندگی خالص و هیجان‌انگیز در یک کوپه افسانه‌ای.',
    features: ['موتور توربو', 'سیستم تعلیق اسپرتی', 'سیستم صوت Bose', 'کروز کنترل', 'حالت رانندگی اسپرت'],
    amenities: ['صندلی‌های اسپرتی', 'تهویه اتوماتیک', 'سیستم بدون کلید', 'دوربین دنده عقب', 'سنسور پارک'],
    rentalConditions: ['حداقل سن ۲۸ سال', 'گواهینامه معتبر', 'کارت اعتباری', 'بیمه شخص ثالث'],
    driverAvailable: false,
    badge: 'اسپرت',
  },
]

export function getVehicleById(id: string): Vehicle | undefined {
  return vehicles.find((v) => v.id === id)
}

export function getSimilarVehicles(id: string, limit = 3): Vehicle[] {
  const vehicle = getVehicleById(id)
  if (!vehicle) return vehicles.slice(0, limit)
  return vehicles
    .filter((v) => v.id !== id && v.categorySlug === vehicle.categorySlug)
    .slice(0, limit)
    .concat(vehicles.filter((v) => v.id !== id && v.categorySlug !== vehicle.categorySlug).slice(0, limit))
    .slice(0, limit)
}
