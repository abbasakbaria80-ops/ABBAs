import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from './Icons'

// ─── Toyota Land Cruiser Cinematic Scroll Experience ──────────────────────
// The video is scrubbed via currentTime controlled by scroll position.
// NO autoplay, NO loop, NO video.play() — scroll IS the playhead.
//
// PERFORMANCE NOTE: For optimal random-seeking performance, this video should
// ideally be re-encoded with frequent keyframes (every 1–2 s), web-optimized
// (moov atom at front), H.264 MP4. The current encoding may cause slight seek
// latency on some devices.
const VIDEO_URL =
  'https://media.base44.com/videos/public/6ac5fa4aaad593a10d1e1083/1d336a0d6_HooshaAI_2026_10_07_121107.mp4'

const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1778541999438-983cff5703fa?auto=format&fit=crop&w=1920&q=80'

// Scroll distance (vh) — how far the user scrolls to scrub the entire video
const SCROLL_VH = 300

// Smoothing factor (0–1): higher = more responsive, lower = smoother
const SMOOTHING = 0.15

// Text fade: fully visible at 0% scroll, fully faded by this fraction
const TEXT_FADE_END = 0.2

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const targetProgress = useRef(0)
  const rafId = useRef(0)

  const [videoReady, setVideoReady] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Scroll-driven video scrubbing — single passive listener + single RAF loop.
  // No React state updates on scroll; all rapid values are on refs.
  useEffect(() => {
    if (reducedMotion) return

    const v = videoRef.current
    if (v) v.muted = true // ensure muted for mobile seek permission

    // Scroll handler — ONLY stores target progress, nothing else
    const onScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const scrollable = el.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      targetProgress.current = Math.max(0, Math.min(1, -rect.top / scrollable))
    }

    // RAF loop — smoothly interpolates currentTime toward target
    const animate = () => {
      const vid = videoRef.current
      if (vid && vid.duration > 0 && !isNaN(vid.duration) && vid.duration !== Infinity) {
        const target = targetProgress.current * vid.duration
        const diff = target - vid.currentTime
        // Only seek when the delta is meaningful — avoids seek flooding
        if (Math.abs(diff) > 0.008) {
          vid.currentTime += diff * SMOOTHING
        }
      }

      // Subtle text fade & lift during first 20% of scroll
      const p = targetProgress.current
      if (textRef.current) {
        const f = Math.max(0, 1 - p / TEXT_FADE_END)
        textRef.current.style.opacity = String(f)
        textRef.current.style.transform = `translateY(${-Math.min(p / TEXT_FADE_END, 1) * 28}px)`
      }
      if (indicatorRef.current) {
        indicatorRef.current.style.opacity = String(Math.max(0, 1 - p / 0.04))
      }

      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial calculation
    rafId.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [reducedMotion])

  // ── Reduced motion: static hero, no scroll-driven video ──────────────
  if (reducedMotion) {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-lux-black">
        <div className="absolute inset-0 img-fallback">
          <img
            src={FALLBACK_IMAGE}
            alt="Toyota Land Cruiser 2026"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-lux-black/40 to-lux-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-transparent to-lux-black/30" />
        </div>
        <div className="relative z-10 w-full">
          <HeroContent />
        </div>
      </section>
    )
  }

  // ── Scroll-driven cinematic hero ──────────────────────────────────────
  return (
    <div ref={containerRef} style={{ height: `${SCROLL_VH}vh`, position: 'relative' }}>
      <div
        style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}
        className="bg-lux-black"
      >
        {/* Fallback image — always in DOM, fades out when video is ready */}
        <div
          className="absolute inset-0 img-fallback pointer-events-none transition-opacity duration-[1200ms]"
          style={{ opacity: !videoReady || videoError ? 1 : 0 }}
        >
          <img
            src={FALLBACK_IMAGE}
            alt="Toyota Land Cruiser 2026"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-lux-black/40 to-lux-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-lux-black via-transparent to-lux-black/30" />
        </div>

        {/* Scroll-driven video — NO autoplay, NO loop, NO play() */}
        {!videoError && (
          <video
            ref={videoRef}
            src={VIDEO_URL}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms]"
            style={{ opacity: videoReady ? 1 : 0 }}
            preload="auto"
            muted
            playsInline
            onLoadedData={() => setVideoReady(true)}
            onError={() => setVideoError(true)}
          />
        )}

        {/* Subtle cinematic overlay — kept very light so video stays visible */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-lux-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-lux-black/30 via-transparent to-transparent" />
        </div>

        {/* Minimal premium loading indicator */}
        {!videoReady && !videoError && (
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-20">
            <div className="w-12 h-px bg-lux-gold/50 animate-pulse" />
          </div>
        )}

        {/* Hero text — fades & lifts subtly during first 20% of scroll */}
        <div
          ref={textRef}
          className="absolute inset-0 z-10 flex items-center"
          style={{ willChange: 'opacity, transform' }}
        >
          <HeroContent />
        </div>

        {/* Scroll indicator — fades out almost immediately */}
        <div
          ref={indicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
          style={{ willChange: 'opacity' }}
        >
          <span className="text-white/40 text-xs tracking-widest">اسکرول</span>
          <div className="w-px h-10 bg-gradient-to-b from-lux-gold/0 via-lux-gold/60 to-lux-gold/0" />
        </div>
      </div>
    </div>
  )
}

// ── Shared hero text content (kept identical to original) ──────────────────
function HeroContent() {
  return (
    <div className="max-w-lux mx-auto px-6 w-full pt-20 pb-32">
      <div className="max-w-xl me-auto">
        <span className="inline-block text-lux-gold text-sm md:text-base tracking-[0.2em] font-medium">
          اجاره خودروهای لوکس
        </span>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mt-5 leading-[1.15]">
          لوکس برانید،
          <br />
          متفاوت سفر کنید
        </h1>
        <p className="text-white/70 text-base md:text-lg mt-6 leading-relaxed max-w-md">
          اجاره خودروهای لوکس و تشریفاتی
          <br />
          با بهترین شرایط و خدمات حرفه‌ای
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            to="/fleet"
            className="group flex items-center gap-2 border border-lux-gold text-lux-gold px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-lux-gold hover:text-lux-black transition-all duration-300"
          >
            مشاهده خودروها
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </Link>
          <Link
            to="/fleet"
            className="bg-lux-gold text-lux-black px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-lux-gold-dark hover:text-white transition-all duration-300"
          >
            رزرو خودرو
          </Link>
        </div>
      </div>
    </div>
  )
}
