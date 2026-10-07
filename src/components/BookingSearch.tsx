import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Calendar, Clock, Car, Search, ChevronDown } from './Icons'

export default function BookingSearch() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    location: '',
    pickupDate: '',
    pickupTime: '10:00',
    returnDate: '',
    returnTime: '10:00',
    vehicleType: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (form.vehicleType) params.set('category', form.vehicleType)
    navigate(`/fleet${params.toString() ? `?${params}` : ''}`)
  }

  const inputClass =
    'w-full bg-white border border-lux-near-black/10 rounded-xl pr-10 pl-4 py-3 text-sm text-lux-near-black focus:outline-none focus:border-lux-gold focus:ring-1 focus:ring-lux-gold/30 transition-all placeholder:text-lux-near-black/30'

  const labelClass = 'block text-xs text-lux-near-black/50 mb-2 font-medium'

  return (
    <div className="relative z-20 -mt-24 mb-20 px-6">
      <div className="max-w-lux mx-auto">
        <div className="bg-lux-ivory rounded-2xl shadow-2xl shadow-black/10 p-6 md:p-8 border border-lux-near-black/5">
          <h3 className="text-lux-near-black text-xl font-bold mb-6">رزرو خودرو</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {/* Location */}
              <div className="lg:col-span-2">
                <label className={labelClass}>محل تحویل خودرو</label>
                <div className="relative">
                  <MapPin className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-lux-gold pointer-events-none" />
                  <input
                    type="text"
                    placeholder="انتخاب محل تحویل"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Pickup Date */}
              <div>
                <label className={labelClass}>تاریخ تحویل</label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-lux-gold pointer-events-none z-10" />
                  <input
                    type="date"
                    value={form.pickupDate}
                    onChange={(e) => setForm({ ...form, pickupDate: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Pickup Time */}
              <div>
                <label className={labelClass}>ساعت تحویل</label>
                <div className="relative">
                  <Clock className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-lux-gold pointer-events-none z-10" />
                  <input
                    type="time"
                    value={form.pickupTime}
                    onChange={(e) => setForm({ ...form, pickupTime: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Return Date */}
              <div>
                <label className={labelClass}>تاریخ بازگشت</label>
                <div className="relative">
                  <Calendar className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-lux-gold pointer-events-none z-10" />
                  <input
                    type="date"
                    value={form.returnDate}
                    onChange={(e) => setForm({ ...form, returnDate: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Return Time */}
              <div>
                <label className={labelClass}>ساعت بازگشت</label>
                <div className="relative">
                  <Clock className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-lux-gold pointer-events-none z-10" />
                  <input
                    type="time"
                    value={form.returnTime}
                    onChange={(e) => setForm({ ...form, returnTime: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Vehicle Type */}
              <div className="lg:col-span-2">
                <label className={labelClass}>نوع خودرو</label>
                <div className="relative">
                  <Car className="absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4 text-lux-gold pointer-events-none z-10" />
                  <select
                    value={form.vehicleType}
                    onChange={(e) => setForm({ ...form, vehicleType: e.target.value })}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="">همه خودروها</option>
                    <option value="suv">SUV</option>
                    <option value="sedan">سدان</option>
                    <option value="coupe">کوپه</option>
                    <option value="van">ون VIP</option>
                  </select>
                  <ChevronDown className="absolute top-1/2 -translate-y-1/2 left-3 w-4 h-4 text-lux-near-black/40 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="group mt-5 w-full flex items-center justify-center gap-2 bg-lux-charcoal text-white py-4 rounded-xl text-sm font-medium hover:bg-lux-gold hover:text-lux-black transition-all duration-300"
            >
              <Search className="w-5 h-5 text-lux-gold group-hover:text-lux-black transition-colors" />
              جستجوی خودرو
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
