import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import villaImg1 from '../../photo/f5a20891-522b-48ee-a3c7-48939385e7b9.jpg'
import villaImg2 from '../../photo/58a147fc-e9d3-43b7-b75b-16595550782f.jpg'
import barImg from '../../photo/7fe7f702-99a1-4fbc-b9ee-346f7a1525b6.jpg'
import beachVillaImg from '../../photo/1e9b39ca-89fe-4ec5-acab-99be4a05aec7.jpg'
import archImg from '../../photo/73dd3477-e36a-4e76-854c-d69082c5ce3c.jpg'
import potsImg from '../../photo/68f25bca-fb49-471c-b4c4-a15303a15c0a.jpg'
import tealImg from '../../photo/aff28e2c-b96f-4c77-868e-af3557b4ef90.jpg'

const property = {
  name: 'Bahari Beach House',
  location: 'Nungwi, Zanzibar',
  tagline: 'Where the ocean becomes your living room',
  price: 450,
  rating: 4.9,
  reviews: 124,
  beds: 4,
  baths: 3,
  guests: 8,
  area: '320 m\u00b2',
  images: [villaImg1, villaImg2, barImg, beachVillaImg, archImg],
  description: `Perched on the pristine northern tip of Zanzibar, Bahari Beach House is a sanctuary where barefoot luxury meets the Indian Ocean. Wake to the sound of waves breaking gently on white sand, just steps from your private terrace.

This four-bedroom villa blends contemporary design with traditional Swahili craftsmanship \u2014 hand-carved coral stone walls, makuti-thatched ceilings, and locally woven textiles create an atmosphere that\u2019s both refined and deeply rooted in island culture.

Your private infinity pool overlooks an endless horizon of turquoise, while the outdoor dining pavilion is the perfect setting for sunset dinners prepared by your personal chef using the freshest local seafood and spices.`,
  amenities: [
    { icon: 'pool', name: 'Infinity Pool' },
    { icon: 'wifi', name: 'High-Speed WiFi' },
    { icon: 'chef', name: 'Private Chef' },
    { icon: 'ac', name: 'Air Conditioning' },
    { icon: 'beach', name: 'Private Beach Access' },
    { icon: 'spa', name: 'In-Villa Spa' },
    { icon: 'car', name: 'Airport Transfer' },
    { icon: 'laundry', name: 'Daily Housekeeping' },
    { icon: 'garden', name: 'Tropical Garden' },
    { icon: 'kayak', name: 'Kayaks & Snorkel Gear' },
    { icon: 'bar', name: 'Sunset Bar' },
    { icon: 'eco', name: 'Eco-Certified' },
  ],
  host: {
    name: 'Amina & Hassan',
    since: '2019',
    responseTime: '< 1 hour',
    avatar: tealImg,
  },
  reviewsData: [
    { name: 'Sophie L.', from: 'France', rating: 5, date: 'Feb 2026', text: 'Absolutely magical. The villa exceeded our wildest expectations. The staff were incredibly warm and attentive.' },
    { name: 'James C.', from: 'USA', rating: 5, date: 'Jan 2026', text: 'Best holiday we\'ve ever had. The private chef made extraordinary meals every night. The pool-to-ocean view is unreal.' },
    { name: 'Elena R.', from: 'Italy', rating: 5, date: 'Dec 2025', text: 'Every detail was perfect. The snorkeling right off the beach was incredible. We saw dolphins from the terrace!' },
  ],
}

const amenityIcons = {
  pool: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z',
  wifi: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
  chef: 'M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z',
  default: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
}

export default function PropertyDetail() {
  const { id } = useParams()
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
          {/* Main Image */}
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
                <span className="text-xs text-spice font-medium bg-spice/10 px-2.5 py-1 rounded-pill">Eco-Certified</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ocean mb-2">{property.name}</h1>
              <p className="font-display text-lg italic text-ocean/40">{property.tagline}</p>

              <div className="flex items-center gap-6 mt-6 text-sm text-ocean/60">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  {property.beds} bedrooms
                </span>
                <span>{property.baths} bathrooms</span>
                <span>{property.guests} guests max</span>
                <span>{property.area}</span>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1 text-spice">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
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
                      <svg className="w-4 h-4 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={amenityIcons[a.icon] || amenityIcons.default} />
                      </svg>
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
                  <svg className="w-12 h-12 text-ocean/20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="font-display text-lg text-ocean/30">Nungwi, North Zanzibar</p>
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
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <svg key={j} className="w-3.5 h-3.5 text-spice" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
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
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
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
