# AURELIA DRIVE — Development Guide

## Stack
- Vite 5 + React 18 + TypeScript
- Tailwind CSS 3
- React Router 6
- Persian RTL (Vazirmatn font via Google Fonts)

## Running
- `docker compose -f docker-compose.base44.yml up -d --build`
- Preview at http://localhost:3000
- Vite dev server runs on port 5173 inside the container, mapped to host port 3000
- No external secrets required

## Project Structure
- `src/components/` — reusable UI components (Header, Hero, VehicleCard, etc.)
- `src/pages/` — route pages (HomePage, FleetPage, VehicleDetailPage)
- `src/data/` — vehicle, category, service, testimonial data (structured for future backend)
- `src/hooks/` — useScrollReveal (Intersection Observer), useFavorites (localStorage)
- `src/utils/persian.ts` — Persian number formatting

## Notes
- All UI is Persian RTL. HTML uses `dir="rtl" lang="fa"`.
- Vehicle data lives in `src/data/vehicles.ts` — structured for future backend connection.
- Favorites persist via localStorage.
- Images use Unsplash URLs with CSS gradient fallbacks.
