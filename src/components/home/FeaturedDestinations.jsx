import { Link } from 'react-router-dom'
import { destinations } from '../../data/destinations'

export default function FeaturedDestinations() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="section-eyebrow">Explore the Island</p>
          <h2 className="section-title">Destinations that call to you</h2>
          <p className="font-body text-base text-ocean/50 max-w-lg mx-auto">
            From ancient Stone Town to secluded island retreats, every corner of Zanzibar tells a different story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <Link
              to="/properties"
              key={dest.name}
              className={`reveal reveal-delay-${i + 1} group relative rounded-frame overflow-hidden shadow-card card-hover cursor-pointer`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-card-overlay" />
              </div>
              <span className="absolute top-4 left-4 px-3 py-1 bg-seafoam/90 text-midnight text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                {dest.badge}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-sm italic text-seafoam mb-1">{dest.tagline}</p>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">{dest.name}</h3>
                <p className="font-body text-xs text-white/60 leading-relaxed line-clamp-2">{dest.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
