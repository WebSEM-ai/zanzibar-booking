import { useState, useEffect, useRef } from 'react'
import StarRating from '../ui/StarRating'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (idx) => {
    setActive(idx)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
  }

  return (
    <section className="bg-midnight py-20 md:py-32 px-5 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-seafoam/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <span className="font-display text-[120px] md:text-[160px] text-coral/20 leading-none block -mb-16 md:-mb-20 select-none">
          &ldquo;
        </span>

        <div className="relative min-h-[200px] md:min-h-[180px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${
                i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic text-ivory leading-relaxed font-light">
                {t.quote}
              </blockquote>
              <div className="mt-8">
                <div className="flex items-center justify-center mb-3">
                  <StarRating rating={t.rating} />
                </div>
                <p className="font-body text-sm font-medium text-white">{t.name}</p>
                <p className="font-body text-xs text-white/40">{t.from} &middot; {t.trip}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-coral w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
