import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import exteriorHero from '../../photo/bahari/exterior-hero.webp'
import exteriorFront from '../../photo/bahari/exterior-front.webp'
import exteriorEntrance from '../../photo/bahari/exterior-entrance.webp'
import exteriorVillaWide from '../../photo/bahari/exterior-villa-wide.webp'
import exteriorPoolDay from '../../photo/bahari/exterior-pool-day.webp'
import exteriorPoolPalms from '../../photo/bahari/exterior-pool-palms.webp'
import exteriorPoolLoungers from '../../photo/bahari/exterior-pool-loungers.webp'
import exteriorPoolForest from '../../photo/bahari/exterior-pool-forest.webp'
import exteriorPoolView from '../../photo/bahari/exterior-pool-view.webp'
import exteriorSunset from '../../photo/bahari/exterior-sunset.webp'
import exteriorNight from '../../photo/bahari/exterior-night.webp'
import exteriorNightPool from '../../photo/bahari/exterior-night-pool.webp'
import livingHero from '../../photo/bahari/living-hero.webp'
import livingSunset from '../../photo/bahari/living-sunset.webp'
import livingDay from '../../photo/bahari/living-day.webp'
import livingKitchen from '../../photo/bahari/living-kitchen.webp'
import livingStairs from '../../photo/bahari/living-stairs.webp'
import livingView from '../../photo/bahari/living-view.webp'
import livingNook from '../../photo/bahari/living-nook.webp'
import bedroomHero from '../../photo/bahari/bedroom-hero.webp'
import bedroomPoolView from '../../photo/bahari/bedroom-pool-view.webp'
import bedroomCozy from '../../photo/bahari/bedroom-cozy.webp'
import bedroomSafari from '../../photo/bahari/bedroom-safari.webp'
import bathroomHero from '../../photo/bahari/bathroom-hero.webp'
import bathroomTub from '../../photo/bahari/bathroom-tub.webp'
import bathroomDark from '../../photo/bahari/bathroom-dark.webp'
import bathroomShower from '../../photo/bahari/bathroom-shower.webp'

const sunsetGallery = [
  exteriorHero,
  livingHero,
  bedroomHero,
  bathroomHero,
  exteriorSunset,
  exteriorPoolDay,
  exteriorVillaWide,
  livingSunset,
  livingDay,
  livingKitchen,
  livingStairs,
  livingView,
  livingNook,
  bedroomPoolView,
  bedroomCozy,
  bedroomSafari,
  bathroomTub,
  bathroomDark,
  bathroomShower,
  exteriorEntrance,
  exteriorFront,
  exteriorPoolPalms,
  exteriorPoolLoungers,
  exteriorPoolForest,
  exteriorPoolView,
  exteriorNight,
  exteriorNightPool,
]

const gardenGallery = [
  exteriorPoolPalms,
  exteriorVillaWide,
  exteriorPoolLoungers,
  exteriorPoolView,
  livingDay,
  livingKitchen,
  bedroomCozy,
  bathroomTub,
]

const propertiesById = {
  '1': {
    name: 'Emozia',
    location: 'Jambiani, Zanzibar',
    tagline: 'A private corner of paradise, two minutes from the ocean',
    price: 0,
    rating: 5.0,
    reviews: 3,
    beds: 2,
    baths: 2,
    guests: 6,
    area: '\u2014',
    images: sunsetGallery,
    description: `Bahari Mirror is a refined collection of five elegant villas in Jambiani, on Zanzibar's quiet south-east coast \u2014 just 200 metres from the beach, in a peaceful and exclusive setting designed for comfort, privacy, and complete relaxation.

Emozia is built around its own private pool, framed by coconut palms and a thoughtfully landscaped garden. Floor-to-ceiling windows open the living space to the tropical light, while the makuti-thatched ceiling and hand-cut coral stone walls keep the villa rooted in Swahili craft.

A short walk from the sea, guests enjoy quiet beach mornings, breathtaking sunrises, and easy access to Zanzibar's most loved experiences \u2014 snorkelling at Mnemba Atoll, Stone Town, Jozani Forest, and the spice farms.`,
    locationLabel: 'Jambiani, South-East Zanzibar',
  },
  '2': {
    name: 'Soul Rise',
    location: 'Jambiani, Zanzibar',
    tagline: 'Mornings begin slowly \u2014 with the sound of palms',
    price: 0,
    rating: 5.0,
    reviews: 3,
    beds: 2,
    baths: 2,
    guests: 6,
    area: '\u2014',
    images: gardenGallery,
    description: `Part of the Bahari Mirror collection in Jambiani, Soul Rise sits 200 metres from the beach in a peaceful tropical setting \u2014 the kind of place where the day softens around you.

Built around a private pool framed by coconut palms, the villa is designed for couples and small families who want stillness, space, and the rhythm of the ocean a few minutes' walk away. The open-plan living area flows directly onto the pool deck, and the bedrooms open onto their own slice of garden.

From here, Mnemba Atoll, Stone Town, Jozani Forest, the Spice Farms, Safari Blue and Kuza Cave are all within easy reach \u2014 but most days, you'll find guests reluctant to leave the pool.`,
    locationLabel: 'Jambiani, South-East Zanzibar',
  },
}

const sharedAmenities = [
  { icon: 'pool', name: 'Private Pool' },
  { icon: 'wifi', name: 'Free WiFi' },
  { icon: 'chef', name: 'Continental Breakfast' },
  { icon: 'ac', name: 'Air Conditioning' },
  { icon: 'beach', name: '200m to Beach' },
  { icon: 'garden', name: 'Tropical Garden' },
  { icon: 'car', name: 'Bike & Car Rental' },
  { icon: 'laundry', name: 'Washing Machine' },
  { icon: 'spa', name: 'Full Kitchen' },
  { icon: 'kayak', name: 'Private Parking' },
  { icon: 'bar', name: 'Garden Terrace' },
  { icon: 'eco', name: 'Daily Housekeeping' },
]

const sharedHost = {
  name: 'Bahari Mirror Team',
  since: '2022',
  responseTime: '< 1 hour',
  avatar: livingNook,
}

const sharedReviews = [
  {
    name: 'Vasile',
    from: 'Family with young children',
    rating: 5,
    date: 'May 2026',
    title: 'If you\'re looking for a quiet, private location, Bahari Mirror is the best choice.',
    text: 'Absolutely superb. We found at the location exactly what we saw in the photos. The villa is a 2-minute walk from the ocean, an oasis of peace surrounded by palm trees — the bedroom and the view from the bedroom are beautiful, the pool is clean and the courtyard is wonderfully landscaped. Nothing but praise for our host, who surprised us with breakfast served on the terrace.',
  },
  {
    name: 'RamonAly',
    from: 'Solo traveler · Italy',
    rating: 5,
    date: 'Apr 2026',
    title: 'A small corner of paradise',
    text: 'We only spent two days here, but honestly I felt I was in a small corner of paradise. Even though it\'s the rainy season in Zanzibar, we were lucky to have two absolutely splendid sunny days, and this villa made the experience even more special. Mornings with the view of the palms, coffee sipped in front of the huge windows, the private pool, and the surrounding tranquillity — all unforgettable.',
  },
  {
    name: 'Simao',
    from: 'Business traveler · Portugal',
    rating: 5,
    date: 'May 2026',
    title: 'Exceptional',
    text: 'The house was clean, a very relaxing and very quiet place. The pool is very pleasant and perfect to be in at any time. It\'s close to the ocean and there are many activities to do. Everything was as in the pictures and did not disappoint. I will definitely return!',
  },
]

const amenityIcons = {
  pool: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z',
  wifi: 'M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z',
  chef: 'M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z',
  default: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
}

function GalleryItem({ item, alt = '', className = '' }) {
  if (item?.type === 'video') {
    return (
      <video
        src={item.src}
        poster={item.poster}
        muted
        loop
        playsInline
        onMouseEnter={(e) => e.target.play()}
        onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0 }}
        className={className}
      />
    )
  }
  return <img src={typeof item === 'string' ? item : item} alt={alt} className={className} loading="lazy" />
}

const comingSoonNames = {
  '3': { name: 'Azuria', location: 'Jambiani, Zanzibar' },
  '4': { name: 'Serenity', location: 'Jambiani, Zanzibar' },
  '5': { name: 'Lumira', location: 'Jambiani, Zanzibar' },
}

function ComingSoonView({ id }) {
  const info = comingSoonNames[id] || { name: 'Bahari Mirror', location: 'Zanzibar' }
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      <div className="max-w-3xl mx-auto px-5 md:px-10 py-20 md:py-32 text-center">
        <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-coral mb-4">Photos coming soon</p>
        <h1 className="font-display text-4xl md:text-5xl text-ocean mb-3">{info.name}</h1>
        <p className="font-display text-lg italic text-ocean/40 mb-10">{info.location}</p>
        <p className="font-body text-base text-ocean/60 leading-relaxed max-w-xl mx-auto mb-10">
          We're putting the finishing touches on this villa before sharing it with you.
          In the meantime, get in touch — we'll send you the floorplan, current pricing,
          and a few private shots that aren't yet on the site.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="mailto:office@BahariMirror.com" className="btn-primary">Inquire by Email</a>
          <Link to="/properties" className="btn-outline">Back to All Villas</Link>
        </div>
      </div>
    </div>
  )
}

export default function PropertyDetail() {
  const { id } = useParams()
  const property = propertiesById[id]
  const [activeImg, setActiveImg] = useState(0)
  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  if (!property) return <ComingSoonView id={id} />

  const amenities = sharedAmenities
  const host = sharedHost
  const reviewsData = sharedReviews
  const nights = 5
  const serviceFee = 85
  const total = property.price * nights + serviceFee

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Photo & Video Gallery */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-3 rounded-frame overflow-hidden md:h-[500px]">
          {/* Main Image */}
          <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer h-[300px] md:h-full" onClick={() => setShowAllPhotos(true)}>
            <GalleryItem item={property.images[0]} alt={property.name} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </div>
          {property.images.slice(1, 5).map((item, i) => (
            <div key={i} className="hidden md:block relative group cursor-pointer overflow-hidden h-full" onClick={() => setShowAllPhotos(true)}>
              <GalleryItem item={item} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {item?.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <svg className="w-5 h-5 text-ocean ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              {i === 3 && (
                <div className="absolute inset-0 bg-midnight/40 flex items-center justify-center">
                  <span className="text-white font-body text-sm font-medium">View all {property.images.length} photos & videos</span>
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
                <span className="text-xs text-spice font-medium bg-spice/10 px-2.5 py-1 rounded-pill">200m to beach</span>
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

              {property.reviews > 0 && (
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
              )}
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
                {amenities.map((a) => (
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
                  <p className="font-display text-lg text-ocean/30">{property.locationLabel}</p>
                  <p className="text-xs text-ocean/20 mt-1">Map integration ready</p>
                </div>
              </div>
            </div>

            {/* Host */}
            <div className="mb-8 pb-8 border-b border-sand/50">
              <h2 className="font-display text-2xl text-ocean mb-6">Your hosts</h2>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-sand">
                  <img src={host.avatar} alt={host.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ocean">{host.name}</h3>
                  <p className="text-xs text-ocean/40 mt-1">Hosting since {host.since} &middot; Responds in {host.responseTime}</p>
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
                {reviewsData.map((review, i) => (
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
                    {review.title && (
                      <p className="font-display text-base text-ocean italic mb-2">"{review.title}"</p>
                    )}
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
                  {property.price > 0 ? (
                    <>
                      <span className="font-display text-3xl font-semibold text-ocean">${property.price}</span>
                      <span className="text-sm text-ocean/40 ml-1">/ night</span>
                    </>
                  ) : (
                    <span className="font-display text-xl text-ocean/60 italic">Rates on request</span>
                  )}
                </p>
                {property.reviews > 0 && (
                  <div className="flex items-center gap-1 text-spice">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">{property.rating}</span>
                  </div>
                )}
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

              {property.price > 0 ? (
                <>
                  <Link to="/booking" className="btn-primary w-full justify-center text-base !py-4">
                    Reserve
                  </Link>
                  <p className="text-center text-xs text-ocean/30 mt-3">You won't be charged yet</p>
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
                </>
              ) : (
                <>
                  <a href="mailto:office@BahariMirror.com" className="btn-primary w-full justify-center text-base !py-4">
                    Inquire by Email
                  </a>
                  <p className="text-center text-xs text-ocean/40 mt-3">We'll send you availability & rates within an hour</p>
                </>
              )}
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
              {property.images.map((item, i) => (
                <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''} rounded-frame overflow-hidden`}>
                  {item?.type === 'video' ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      playsInline
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <img src={typeof item === 'string' ? item : item} alt="" className="w-full h-auto object-cover" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
