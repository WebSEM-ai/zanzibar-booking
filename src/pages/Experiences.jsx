import { useState } from 'react'
import { Link } from 'react-router-dom'
import { allExperiences, experienceCategories, difficultyColors } from '../data/experiences'
import { tropicalBar } from '../data/images'
import Icon from '../components/ui/Icon'

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? allExperiences
    : allExperiences.filter((e) => e.category === activeCategory)

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img src={tropicalBar} alt="Zanzibar experiences" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-seafoam mb-4">Things to Do</p>
            <h1 className="font-display text-hero text-white">Experiences</h1>
            <p className="font-body text-base text-white/60 mt-4 max-w-lg mx-auto">
              From spice-scented markets to underwater wonders — curated moments that make Zanzibar unforgettable.
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-sand/50">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {experienceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-pill text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-ocean text-white shadow-md'
                    : 'text-ocean/50 hover:text-ocean hover:bg-sand/30'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Grid */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="reveal group bg-white rounded-frame shadow-card card-hover overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-coral/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                    {exp.category}
                  </span>
                  <span className={`px-3 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-pill ${difficultyColors[exp.difficulty]}`}>
                    {exp.difficulty}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold text-ocean mb-2">{exp.title}</h3>
                <p className="text-sm text-ocean/50 leading-relaxed mb-4 line-clamp-2">{exp.desc}</p>

                <div className="flex items-center gap-4 text-xs text-ocean/40 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Icon name="clock" className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="users" className="w-3.5 h-3.5" />
                    Max {exp.maxGroup}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-sand/50">
                  <p>
                    <span className="font-display text-xl font-semibold text-ocean">${exp.price}</span>
                    <span className="text-xs text-ocean/40 ml-1">/ person</span>
                  </p>
                  <Link to="/booking" className="btn-primary !py-2 !px-5 !text-xs">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-ocean/30">No experiences in this category</p>
            <button onClick={() => setActiveCategory('All')} className="btn-primary mt-6">Show All</button>
          </div>
        )}
      </div>
    </div>
  )
}
