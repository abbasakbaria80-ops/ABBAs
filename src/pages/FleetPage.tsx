import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { vehicles } from '../data/vehicles'
import VehicleCard from '../components/VehicleCard'
import { useFavorites } from '../hooks/useFavorites'
import { Search, Sliders, Check } from '../components/Icons'
import { toPersianNumber } from '../utils/persian'

const brands = [...new Set(vehicles.map((v) => v.brand))]
const categoryOptions = [
  { id: '', label: 'همه' },
  { id: 'suv', label: 'SUV' },
  { id: 'sedan', label: 'سدان' },
  { id: 'coupe', label: 'کوپه' },
  { id: 'van', label: 'ون VIP' },
]
const passengerOptions = ['۲', '۵', '۷']

export default function FleetPage() {
  const [searchParams] = useSearchParams()
  const { isFavorite, toggleFavorite } = useFavorites()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || '')
  const [brand, setBrand] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10000000)
  const [passengers, setPassengers] = useState('')
  const [driverOnly, setDriverOnly] = useState(false)
  const [sortBy, setSortBy] = useState('default')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = useMemo(() => {
    let result = vehicles.filter((v) => {
      if (search && !v.name.toLowerCase().includes(search.toLowerCase())) return false
      if (category && v.categorySlug !== category) return false
      if (brand && v.brand !== brand) return false
      if (v.dailyPrice < minPrice || v.dailyPrice > maxPrice) return false
      if (passengers && !v.passengers.includes(passengers)) return false
      if (driverOnly && !v.driverAvailable) return false
      return true
    })

    switch (sortBy) {
      case 'price-low':
        result = [...result].sort((a, b) => a.dailyPrice - b.dailyPrice)
        break
      case 'price-high':
        result = [...result].sort((a, b) => b.dailyPrice - a.dailyPrice)
        break
      case 'name':
        result = [...result].sort((a, b) => a.name.localeCompare(b.name))
        break
    }

    return result
  }, [search, category, brand, minPrice, maxPrice, passengers, driverOnly, sortBy])

  const resetFilters = () => {
    setSearch('')
    setCategory('')
    setBrand('')
    setMinPrice(0)
    setMaxPrice(10000000)
    setPassengers('')
    setDriverOnly(false)
    setSortBy('default')
  }

  return (
    <>
      {/* Dark banner */}
      <div className="bg-lux-black pt-32 pb-16">
        <div className="max-w-lux mx-auto px-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">خودروها</h1>
          <p className="text-white/60 mt-3 text-lg">انتخاب خودروی لوکس موردنظر شما</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-lux-ivory py-12 min-h-screen">
        <div className="max-w-lux mx-auto px-6">
          {/* Search + sort bar */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <div className="relative flex-1 min-w-[260px]">
              <Search className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-lux-near-black/40" />
              <input
                type="text"
                placeholder="جستجوی خودرو..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-lux-near-black/10 rounded-xl pr-12 pl-4 py-3.5 text-sm focus:outline-none focus:border-lux-gold transition-colors"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-lux-near-black/10 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-lux-gold transition-colors cursor-pointer"
            >
              <option value="default">مرتب‌سازی: پیش‌فرض</option>
              <option value="price-low">ارزان‌ترین</option>
              <option value="price-high">گران‌ترین</option>
              <option value="name">نام خودرو</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 bg-white border border-lux-near-black/10 rounded-xl px-4 py-3.5 text-sm"
            >
              <Sliders className="w-4 h-4" />
              فیلترها
            </button>
          </div>

          <div className="flex gap-8">
            {/* Sidebar */}
            <aside className={`w-64 shrink-0 ${showFilters ? 'block fixed inset-0 z-40 lg:relative lg:z-auto' : 'hidden lg:block'}`}>
              {showFilters && (
                <div className="absolute inset-0 bg-black/40 lg:hidden" onClick={() => setShowFilters(false)} />
              )}
              <div className="relative bg-white rounded-2xl p-6 border border-lux-near-black/5 max-h-full overflow-y-auto lg:sticky lg:top-24">
                <div className="flex items-center justify-between mb-6 lg:hidden">
                  <h3 className="font-bold">فیلترها</h3>
                  <button onClick={() => setShowFilters(false)} className="text-sm text-lux-gold">بستن</button>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <h3 className="text-lux-near-black font-bold text-sm mb-3">نوع خودرو</h3>
                  <div className="flex flex-wrap gap-2">
                    {categoryOptions.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setCategory(c.id)}
                        className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                          category === c.id
                            ? 'bg-lux-charcoal text-white'
                            : 'bg-lux-ivory text-lux-near-black/60 hover:bg-lux-near-black/10'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Brand */}
                <div className="mb-6">
                  <h3 className="text-lux-near-black font-bold text-sm mb-3">برند</h3>
                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full bg-lux-ivory border border-lux-near-black/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-lux-gold cursor-pointer"
                  >
                    <option value="">همه برندها</option>
                    {brands.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <h3 className="text-lux-near-black font-bold text-sm mb-3">قیمت (تومان / روز)</h3>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="حداقل"
                      value={minPrice || ''}
                      onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
                      className="w-full bg-lux-ivory border border-lux-near-black/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-lux-gold"
                    />
                    <input
                      type="number"
                      placeholder="حداکثر"
                      value={maxPrice === 10000000 ? '' : maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value) || 10000000)}
                      className="w-full bg-lux-ivory border border-lux-near-black/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-lux-gold"
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div className="mb-6">
                  <h3 className="text-lux-near-black font-bold text-sm mb-3">تعداد سرنشین</h3>
                  <div className="flex gap-2">
                    {passengerOptions.map((p) => (
                      <button
                        key={p}
                        onClick={() => setPassengers(passengers === p ? '' : p)}
                        className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${
                          passengers === p
                            ? 'bg-lux-charcoal text-white'
                            : 'bg-lux-ivory text-lux-near-black/60 hover:bg-lux-near-black/10'
                        }`}
                      >
                        {toPersianNumber(p)} نفر
                      </button>
                    ))}
                  </div>
                </div>

                {/* Driver only */}
                <div className="mb-6">
                  <button
                    onClick={() => setDriverOnly(!driverOnly)}
                    className="flex items-center gap-3 w-full"
                  >
                    <span
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-all shrink-0 ${
                        driverOnly ? 'bg-lux-gold border-lux-gold' : 'border-lux-near-black/20'
                      }`}
                    >
                      {driverOnly && <Check className="w-3 h-3 text-lux-black" />}
                    </span>
                    <span className="text-sm text-lux-near-black/70">فقط با راننده</span>
                  </button>
                </div>

                {/* Reset */}
                <button
                  onClick={resetFilters}
                  className="w-full text-sm text-lux-gold hover:text-lux-gold-dark transition-colors py-2"
                >
                  پاک کردن فیلترها
                </button>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <p className="text-lux-near-black/50 text-sm mb-6">
                {toPersianNumber(filtered.length)} خودرو یافت شد
              </p>
              {filtered.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((v) => (
                    <VehicleCard
                      key={v.id}
                      vehicle={v}
                      isFavorite={isFavorite(v.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-lux-near-black/40 text-lg">خودرویی با این فیلترها یافت نشد</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 text-lux-gold hover:text-lux-gold-dark text-sm"
                  >
                    پاک کردن فیلترها
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
