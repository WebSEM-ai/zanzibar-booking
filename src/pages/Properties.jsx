import { useState } from 'react'
import { Link } from 'react-router-dom'

import exteriorHero from '../../photo/bahari/exterior-hero.webp'
import exteriorPoolPalms from '../../photo/bahari/exterior-pool-palms.webp'
import exteriorPoolLoungers from '../../photo/bahari/exterior-pool-loungers.webp'
import exteriorSunset from '../../photo/bahari/exterior-sunset.webp'
import exteriorNight from '../../photo/bahari/exterior-night.webp'
import exteriorNightPool from '../../photo/bahari/exterior-night-pool.webp'
import exteriorFront from '../../photo/bahari/exterior-front.webp'
import exteriorPoolForest from '../../photo/bahari/exterior-pool-forest.webp'
import exteriorEntrance from '../../photo/bahari/exterior-entrance.webp'

const allProperties = [
  { id: 1, name: 'Emozia', location: 'Jambiani', type: 'Villa', price: 0, rating: 5.0, reviews: 3, beds: 2, guests: 6, img: exteriorHero, tags: ['Pool', 'Garden', '200m to beach'] },
  { id: 2, name: 'Soul Rise', location: 'Jambiani', type: 'Villa', price: 0, rating: 5.0, reviews: 3, beds: 2, guests: 6, img: exteriorPoolPalms, tags: ['Pool', 'Private', '200m to beach'] },
  { id: 3, name: 'Azuria', location: 'Jambiani', type: 'Villa', price: 0, rating: 0, reviews: 0, beds: 2, guests: 4, img: exteriorSunset, tags: ['Photos coming soon'], comingSoon: true },
  { id: 4, name: 'Serenity', location: 'Jambiani', type: 'Villa', price: 0, rating: 0, reviews: 0, beds: 2, guests: 4, img: exteriorFront, tags: ['Photos coming soon'], comingSoon: true },
  { id: 5, name: 'Lumira', location: 'Jambiani', type: 'Villa', price: 0, rating: 0, reviews: 0, beds: 2, guests: 4, img: exteriorEntrance, tags: ['Photos coming soon'], comingSoon: true },
]

const locations = ['All', 'Jambiani']
const types = ['All', 'Villa']
const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Top Rated']

export default function Properties() {
  const [locationFilter, setLocationFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState('Recommended')
  const [showFilters, setShowFilters] = useState(false)

  let filtered = allProperties.filter((p) => {
    if (locationFilter !== 'All' && p.location !== locationFilter) return false
    if (typeFilter !== 'All' && p.type !== typeFilter) return false
    if (p.price < priceRange[0] || p.price > priceRange[1]) return false
    return true
  })

  // Coming-soon properties always sort last
  const byComingSoon = (a, b) => Number(!!a.comingSoon) - Number(!!b.comingSoon)
  if (sortBy === 'Price: Low to High') filtered.sort((a, b) => byComingSoon(a, b) || a.price - b.price)
  if (sortBy === 'Price: High to Low') filtered.sort((a, b) => byComingSoon(a, b) || b.price - a.price)
  if (sortBy === 'Top Rated') filtered.sort((a, b) => byComingSoon(a, b) || b.rating - a.rating)
  if (sortBy === 'Recommended') filtered.sort(byComingSoon)

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Cinematic Page Header */}
      <div className="relative h-[50vh] min-h-[340px] max-h-[480px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/2151682888.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/media/0_Boat_Sailing_1920x1080.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/30 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 via-transparent to-transparent" />
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 pb-10 md:pb-14">
          <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-seafoam mb-3">Curated Collection</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-semibold">Properties & Villas</h1>
          <p className="font-body text-base text-white/60 mt-3 max-w-lg">
            Every property handpicked for its character, quality, and location. Your perfect Zanzibar stay awaits.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-8">
        {/* Sort & Filter Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-sand rounded-pill text-sm font-medium text-ocean hover:border-ocean/30 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
              </svg>
              Filters
            </button>

            {/* Location Pills */}
            {locations.slice(0, 5).map((loc) => (
              <button
                key={loc}
                onClick={() => setLocationFilter(loc)}
                className={`px-4 py-2 rounded-pill text-xs font-semibold tracking-wide transition-all duration-200
                  ${locationFilter === loc
                    ? 'bg-ocean text-white'
                    : 'bg-white border border-sand text-ocean/60 hover:border-ocean/30 hover:text-ocean'
                  }`}
              >
                {loc}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-ocean/40">{filtered.length} properties</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 bg-white border border-sand rounded-pill text-sm text-ocean appearance-none cursor-pointer pr-8
                focus:outline-none focus:border-ocean/30 transition-colors"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A4A5A' stroke-width='1.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', backgroundSize: '16px' }}
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <div className="bg-white rounded-card shadow-card p-6 mb-8 animate-slide-down">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-3">Location</label>
                <div className="flex flex-wrap gap-2">
                  {locations.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setLocationFilter(loc)}
                      className={`px-3 py-1.5 rounded-pill text-xs font-medium transition-all
                        ${locationFilter === loc ? 'bg-ocean text-white' : 'bg-sand/40 text-ocean/60 hover:bg-sand'}`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-3">Property Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTypeFilter(t)}
                      className={`px-3 py-1.5 rounded-pill text-xs font-medium transition-all
                        ${typeFilter === t ? 'bg-ocean text-white' : 'bg-sand/40 text-ocean/60 hover:bg-sand'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-3">
                  Price Range: ${priceRange[0]} – ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-coral"
                />
              </div>
            </div>
          </div>
        )}

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-ocean/30 mb-2">No properties found</p>
            <p className="text-sm text-ocean/40">Let's find another option that works.</p>
            <button onClick={() => { setLocationFilter('All'); setTypeFilter('All'); setPriceRange([0, 1000]) }}
              className="btn-primary mt-6">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false)

  return (
    <Link
      to={`/property/${property.id}`}
      className="group rounded-frame overflow-hidden shadow-card card-hover bg-white reveal"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.img}
          alt={property.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${property.video ? 'group-hover:opacity-0' : ''}`}
          loading="lazy"
        />
        {property.video && (
          <>
            <video
              src={property.video}
              muted
              loop
              playsInline
              onMouseEnter={(e) => e.target.play()}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ref={(el) => {
                if (!el) return
                const card = el.closest('.group')
                card.addEventListener('mouseenter', () => el.play())
                card.addEventListener('mouseleave', () => { el.pause(); el.currentTime = 0 })
              }}
            />
            <div className="absolute top-4 right-14 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
              <svg className="w-4 h-4 text-ocean ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </>
        )}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {property.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-pill backdrop-blur-sm
                ${property.comingSoon ? 'bg-coral/90 text-white' : 'bg-white/90 text-ocean'}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200
            ${liked ? 'bg-coral text-white scale-110' : 'bg-white/90 text-ocean hover:bg-white hover:scale-110'}`}
          onClick={(e) => { e.preventDefault(); setLiked(!liked) }}
        >
          <svg className="w-4 h-4" fill={liked ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <span className="text-xs text-seafoam font-medium bg-seafoam/10 px-2 py-0.5 rounded-pill">{property.location}</span>
          {property.reviews > 0 && (
            <div className="flex items-center gap-1 text-spice">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-semibold">{property.rating}</span>
              <span className="text-[10px] text-ocean/40">({property.reviews})</span>
            </div>
          )}
        </div>
        <h3 className="font-display text-xl font-semibold text-ocean mt-2">{property.name}</h3>
        <p className="text-xs text-ocean/40 mt-1">{property.type} &middot; {property.beds} bed &middot; Up to {property.guests} guests</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand/50">
          <p>
            {property.price > 0 ? (
              <>
                <span className="font-display text-xl font-semibold text-ocean">${property.price}</span>
                <span className="text-xs text-ocean/40 ml-1">/ night</span>
              </>
            ) : (
              <span className="font-display text-base text-ocean/50 italic">On request</span>
            )}
          </p>
          <span className="text-xs font-medium text-coral group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            {property.comingSoon ? 'Inquire' : 'View'}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
