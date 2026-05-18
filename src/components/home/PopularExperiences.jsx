import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { heroBeach, hangingBaskets, stoneArch, coastline, wovenTexture, dhowSail } from '../../data/images'

const experiences = [
  { title: 'Sunset Dhow Cruise', category: 'Water', duration: '3 hours', price: 85, img: heroBeach },
  { title: 'Spice Farm Tour', category: 'Cultural', duration: '4 hours', price: 45, img: hangingBaskets },
  { title: 'Stone Town Walking Tour', category: 'Culture', duration: '3 hours', price: 35, img: stoneArch },
  { title: 'Mnemba Snorkeling', category: 'Water', duration: '5 hours', price: 120, img: coastline },
  { title: 'Jozani Forest Trek', category: 'Adventure', duration: '3 hours', price: 40, img: wovenTexture },
  { title: 'Cooking Class', category: 'Food', duration: '4 hours', price: 65, img: dhowSail },
]

export default function PopularExperiences() {
  const scrollRef = useRef(null)

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
          <div>
            <p className="section-eyebrow">Things to Do</p>
            <h2 className="section-title">Experiences worth having</h2>
          </div>
          <Link to="/experiences" className="text-sm font-medium text-coral hover:text-coral-dark transition-colors mt-4 md:mt-0">
            View all experiences &rarr;
          </Link>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible"
        >
          {experiences.map((exp, i) => (
            <Link
              to="/experiences"
              key={exp.title}
              className={`reveal reveal-delay-${(i % 4) + 1} flex-shrink-0 w-[280px] md:w-auto group`}
            >
              <div className="relative rounded-frame overflow-hidden shadow-card card-hover">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-card-overlay" />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-coral/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                  {exp.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Icon name="clock" className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="text-white font-medium text-sm">From ${exp.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
