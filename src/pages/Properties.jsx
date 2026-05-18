import { useState } from 'react'
import { Link } from 'react-router-dom'
import { allProperties, locations, propertyTypes, sortOptions } from '../data/properties'
import PropertyCard from '../components/ui/PropertyCard'
import Icon from '../components/ui/Icon'

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
              <Icon name="filter" className="w-4 h-4" />
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
                  {propertyTypes.map((t) => (
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
          {filtered.map((property, i) => (
            <PropertyCard key={property.id} property={property} delay={(i % 3) + 1} />
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
