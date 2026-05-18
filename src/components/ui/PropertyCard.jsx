import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function PropertyCard({ property, className = '', delay = 1 }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className={`reveal reveal-delay-${delay} group rounded-frame overflow-hidden shadow-card card-hover bg-white ${className}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.img}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {property.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-pill
                ${tag === 'Eco-Certified' ? 'bg-seafoam text-midnight' : 'bg-white/90 text-ocean'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center
            hover:bg-white hover:scale-110 transition-all duration-200"
          onClick={(e) => e.preventDefault()}
        >
          <Icon name="heart" className="w-4 h-4 text-ocean" />
        </button>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-xs text-seafoam font-medium bg-seafoam/10 px-2 py-0.5 rounded-pill">{property.location}</span>
            <h3 className="font-display text-card-title text-ocean mt-2">{property.name}</h3>
          </div>
          <div className="flex items-center gap-1 text-spice">
            <Icon name="star" className="w-4 h-4" />
            <span className="text-sm font-semibold">{property.rating}</span>
            <span className="text-xs text-ocean/40">({property.reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-ocean/50 mt-3 mb-4">
          <span className="flex items-center gap-1">
            <Icon name="home" className="w-3.5 h-3.5" />
            {property.beds} bedrooms
          </span>
          <span className="flex items-center gap-1">
            <Icon name="users" className="w-3.5 h-3.5" />
            Up to {property.guests} guests
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-sand/50">
          <p>
            <span className="font-display text-2xl font-semibold text-ocean">${property.price}</span>
            <span className="text-sm text-ocean/40 ml-1">/ night</span>
          </p>
          <span className="text-sm font-medium text-coral group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
            View Details
            <Icon name="arrowRight" className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
