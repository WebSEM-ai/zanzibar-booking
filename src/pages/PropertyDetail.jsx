import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPropertyById, allProperties } from '../data/properties'
import Icon, { AmenityIcon } from '../components/ui/Icon'
import StarRating from '../components/ui/StarRating'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = getPropertyById(Number(id)) || allProperties[0]

  const [activeImg, setActiveImg] = useState(0)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const nights = 5
  const serviceFee = 85
  const total = property.price * nights + serviceFee

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Photo Gallery */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 rounded-frame overflow-hidden max-h-[500px]">
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer" onClick={() => setShowAllPhotos(true)}>
            <img src={property.images[0]} alt={property.name} className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </div>
          {property.images.slice(1, 5).map((img, i) => (
            <div key={i} className="hidden md:block relative group cursor-pointer overflow-hidden" onClick={() => setShowAllPhotos(true)}>
              <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {i === 3 && (
                <div className="absolute inset-0 bg-midnight/40 flex items-center justify-center">
                  <span className="text-white font-body text-sm font-medium">View all photos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-sand/50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-seafoam font-medium bg-seafoam/10 px-2.5 py-1 rounded-pill">{property.location}</span>
                {property.tags.includes('Eco-Certified') && (
                  <span className="text-xs text-spice font-medium bg-spice/10 px-2.5 py-1 rounded-pill">Eco-Certified</span>
                )}
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ocean mb-2">{property.name}</h1>
              <p className="font-display text-lg italic text-ocean/40">{property.tagline}</p>

              <div className="flex items-center gap-6 mt-6 text-sm text-ocean/60">
                <span className="flex items-center gap-1.5">
                  <Icon name="home" className="w-4 h-4" />
                  {property.beds} bedrooms
                </span>
                <span>{property.baths} bathrooms</span>
                <span>{property.guests} guests max</span>
                <span>{property.area}</span>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <StarRating rating={property.rating} />
                <span className="text-sm font-semibold text-ocean">{property.rating}</span>
                <span className="text-sm text-ocean/40">({property.reviews} reviews)</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 pb-8 border-b border-sand/50">
              <h2 className="font-display text-2xl text-ocean mb-4">About this property</h2>
              {property.description.split('\n\n').map((p, i) => (
                <p key={i} className="font-body text-base text-ocean/60 leading-relaxed mb-4">{p}</p>
              ))}
            </div>

            {/* Amenities */}
            <div className="mb-8 pb-8 border-b border-sand/50">
              <h2 className="font-display text-2xl text-ocean mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((a) => (
                  <div key={a.name} className="flex items-center gap-3 p-3 rounded-card bg-sand/20">
                    <span className="w-8 h-8 rounded-full bg-seafoam/20 flex items-center justify-center flex-shrink-0">
                      <AmenityIcon name={a.icon} className="w-4 h-4 text-ocean" />
                    </span>
                    <span className="text-sm text-ocean/70">{a.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="mb-8 pb-8 border-b border-sand/50">
              <h2 className="font-display text-2xl text-ocean mb-6">Location</h2>
              <div className="w-full h-[300px] rounded-frame bg-sand/30 flex items-center justify-center border border-sand">
                <div className="text-center">
                  <Icon name="mapPin" className="w-12 h-12 text-ocean/20 mx-auto mb-3" />
                  <p className="font-display text-lg text-ocean/30">{property.location}, Zanzibar</p>
                  <p className="text-xs text-ocean/20 mt-1">Map integration ready</p>
                </div>
              </div>
            </div>

            {/* Host */}
            <div className="mb-8 pb-8 border-b border-sand/50">
              <h2 className="font-display text-2xl text-ocean mb-6">Your hosts</h2>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-sand">
                  <img src={property.host.avatar} alt={property.host.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ocean">{property.host.name}</h3>
                  <p className="text-xs text-ocean/40 mt-1">Hosting since {property.host.since} &middot; Responds in {property.host.responseTime}</p>
                  <p className="text-sm text-ocean/60 mt-3 leading-relaxed max-w-md">
                    Born and raised in Zanzibar, we opened our home to share the island we love with travelers seeking
                    authentic experiences beyond the ordinary.
                  </p>
                  <button className="btn-outline mt-4 !py-2 !px-5 !text-xs">Message Host</button>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="font-display text-2xl text-ocean mb-6">Guest Reviews</h2>
              <div className="space-y-6">
                {property.reviewsData.map((review, i) => (
                  <div key={i} className="p-5 rounded-card bg-white shadow-card">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-body text-sm font-semibold text-ocean">{review.name}</p>
                        <p className="text-xs text-ocean/40">{review.from} &middot; {review.date}</p>
                      </div>
                      <StarRating rating={review.rating} className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm text-ocean/60 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:w-[380px] flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-frame shadow-card p-6 border border-sand/30">
              <div className="flex items-baseline justify-between mb-6">
                <p>
                  <span className="font-display text-3xl font-semibold text-ocean">${property.price}</span>
                  <span className="text-sm text-ocean/40 ml-1">/ night</span>
                </p>
                <div className="flex items-center gap-1 text-spice">
                  <Icon name="star" className="w-4 h-4" filled />
                  <span className="text-sm font-semibold">{property.rating}</span>
                </div>
              </div>

              {/* Date Inputs */}
              <div className="grid grid-cols-2 gap-0 border border-sand rounded-card overflow-hidden mb-4">
                <div className="p-3 border-r border-sand">
                  <label className="block text-[10px] font-semibold text-ocean/50 uppercase tracking-wider mb-1">Check-in</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full text-sm text-ocean bg-transparent focus:outline-none"
                  />
                </div>
                <div className="p-3">
                  <label className="block text-[10px] font-semibold text-ocean/50 uppercase tracking-wider mb-1">Check-out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full text-sm text-ocean bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div className="border border-sand rounded-card p-3 mb-6">
                <label className="block text-[10px] font-semibold text-ocean/50 uppercase tracking-wider mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full text-sm text-ocean bg-transparent focus:outline-none appearance-none cursor-pointer"
                >
                  {Array.from({ length: property.guests }).map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1} guest{i > 0 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <Link to="/booking" className="btn-primary w-full justify-center text-base !py-4">
                Reserve
              </Link>

              <p className="text-center text-xs text-ocean/30 mt-3">You won't be charged yet</p>

              {/* Price Breakdown */}
              <div className="mt-6 pt-6 border-t border-sand/50 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ocean/50">${property.price} x {nights} nights</span>
                  <span className="text-ocean">${property.price * nights}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ocean/50">Service fee</span>
                  <span className="text-ocean">${serviceFee}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-semibold pt-3 border-t border-sand/50">
                  <span className="text-ocean">Total</span>
                  <span className="text-ocean">${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-screen Photo Modal */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-50 bg-midnight/95 flex items-center justify-center p-4 md:p-10">
          <button
            onClick={() => setShowAllPhotos(false)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <Icon name="close" className="w-5 h-5" />
          </button>
          <div className="max-w-5xl w-full max-h-full overflow-y-auto scrollbar-hide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {property.images.map((img, i) => (
                <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''} rounded-frame overflow-hidden`}>
                  <img src={img} alt="" className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
