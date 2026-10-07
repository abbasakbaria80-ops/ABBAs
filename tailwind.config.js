/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lux-black': '#0B0B0B',
        'lux-charcoal': '#151515',
        'lux-ivory': '#F7F5F0',
        'lux-near-black': '#111111',
        'lux-gold': '#C9A45C',
        'lux-gold-dark': '#A98445',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
      maxWidth: {
        'lux': '1320px',
      },
    },
  },
  plugins: [],
}
