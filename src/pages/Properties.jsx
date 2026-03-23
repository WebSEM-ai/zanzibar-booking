import { useState } from 'react'
import { Link } from 'react-router-dom'

import villaImg1 from '../../photo/f5a20891-522b-48ee-a3c7-48939385e7b9.jpg'
import villaImg2 from '../../photo/58a147fc-e9d3-43b7-b75b-16595550782f.jpg'
import barImg from '../../photo/7fe7f702-99a1-4fbc-b9ee-346f7a1525b6.jpg'
import beachVillaImg from '../../photo/1e9b39ca-89fe-4ec5-acab-99be4a05aec7.jpg'
import archImg from '../../photo/73dd3477-e36a-4e76-854c-d69082c5ce3c.jpg'
import coastImg from '../../photo/3a26d3ad-73d0-4a19-a9ba-eaa1aae62176.jpg'
import heroImg from '../../photo/f9354ad2-1e23-4bad-876f-5e8dfdd30ab0.jpg'
import tealImg from '../../photo/aff28e2c-b96f-4c77-868e-af3557b4ef90.jpg'
import potsImg from '../../photo/68f25bca-fb49-471c-b4c4-a15303a15c0a.jpg'

const allProperties = [
  { id: 1, name: 'Bahari Beach House', location: 'Nungwi', type: 'Villa', price: 450, rating: 4.9, reviews: 124, beds: 4, guests: 8, img: villaImg1, tags: ['Beachfront', 'Pool', 'Eco-Certified'] },
  { id: 2, name: 'Spice Island Villa', location: 'Matemwe', type: 'Villa', price: 680, rating: 5.0, reviews: 89, beds: 5, guests: 10, img: beachVillaImg, tags: ['Private Island', 'Luxury', 'Staff'] },
  { id: 3, name: 'Stone Town Riad', location: 'Stone Town', type: 'Boutique Hotel', price: 280, rating: 4.8, reviews: 201, beds: 3, guests: 6, img: villaImg2, tags: ['Heritage', 'Rooftop', 'Central'] },
  { id: 4, name: 'Paje Ocean Lodge', location: 'Paje', type: 'Lodge', price: 350, rating: 4.9, reviews: 156, beds: 3, guests: 6, img: barImg, tags: ['Ocean View', 'Kite Spot', 'Restaurant'] },
  { id: 5, name: 'Mnemba Seaview', location: 'Mnemba', type: 'Villa', price: 920, rating: 5.0, reviews: 67, beds: 6, guests: 12, img: coastImg, tags: ['Exclusive', 'Private Beach', 'Chef'] },
  { id: 6, name: 'Zanzi Coral Suite', location: 'Nungwi', type: 'Boutique Hotel', price: 195, rating: 4.7, reviews: 312, beds: 1, guests: 2, img: heroImg, tags: ['Couples', 'Spa', 'All-Inclusive'] },
  { id: 7, name: 'Swahili Heritage House', location: 'Stone Town', type: 'Heritage Home', price: 320, rating: 4.8, reviews: 98, beds: 4, guests: 8, img: archImg, tags: ['Historical', 'Courtyard', 'Central'] },
  { id: 8, name: 'Kizimkazi Retreat', location: 'Kizimkazi', type: 'Lodge', price: 410, rating: 4.9, reviews: 143, beds: 3, guests: 6, img: tealImg, tags: ['Dolphins', 'Sunset', 'Quiet'] },
  { id: 9, name: 'Jambiani Beach Bungalow', location: 'Jambiani', type: 'Bungalow', price: 165, rating: 4.6, reviews: 189, beds: 2, guests: 4, img: potsImg, tags: ['Budget-Friendly', 'Authentic', 'Beach'] },
]

const locations = ['All', 'Nungwi', 'Stone Town', 'Paje', 'Matemwe', 'Mnemba', 'Kizimkazi', 'Jambiani']
const types = ['All', 'Villa', 'Boutique Hotel', 'Lodge', 'Heritage Home', 'Bungalow']
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

  if (sortBy === 'Price: Low to High') filtered.sort((a, b) => a.price - b.price)
  if (sortBy === 'Price: High to Low') filtered.sort((a, b) => b.price - a.price)
  if (sortBy === 'Top Rated') filtered.sort((a, b) => b.rating - a.rating)

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Page Header */}
      <div className="bg-sand/30 border-b border-sand">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-14">
          <p className="section-eyebrow">Curated Collection</p>
          <h1 className="font-display text-section text-ocean">Properties & Villas</h1>
          <p className="font-body text-base text-ocean/50 mt-2 max-w-lg">
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
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {property.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-pill backdrop-blur-sm
                ${tag === 'Eco-Certified' || tag === 'Exclusive' ? 'bg-seafoam/90 text-midnight' : 'bg-white/90 text-ocean'}`}
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
          <div className="flex items-center gap-1 text-spice">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold">{property.rating}</span>
            <span className="text-[10px] text-ocean/40">({property.reviews})</span>
          </div>
        </div>
        <h3 className="font-display text-xl font-semibold text-ocean mt-2">{property.name}</h3>
        <p className="text-xs text-ocean/40 mt-1">{property.type} &middot; {property.beds} bed &middot; Up to {property.guests} guests</p>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand/50">
          <p>
            <span className="font-display text-xl font-semibold text-ocean">${property.price}</span>
            <span className="text-xs text-ocean/40 ml-1">/ night</span>
          </p>
          <span className="text-xs font-medium text-coral group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            View
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
