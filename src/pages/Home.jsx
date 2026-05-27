import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─── Bahari Mirror image imports ─── */
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

/* Hero slider images (in display order) */
const heroSlides = [exteriorHero, livingHero, exteriorSunset, bedroomHero, exteriorPoolDay]

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [active, setActive] = useState(0)

  useEffect(() => {
    setLoaded(true)
    const id = setInterval(() => {
      setActive((i) => (i + 1) % heroSlides.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden={i !== active}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-out
              ${i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
              ${loaded ? '' : 'opacity-0'}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {/* Modern gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/40 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/50 via-transparent to-midnight/30" />
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-[2px] transition-all duration-500 ${
              i === active ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 text-center">
        <p
          className={`font-body text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-sand mb-6
            transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Reflections of Zanzibar
        </p>
        <h1
          className={`font-display text-hero text-white max-w-4xl mb-6 text-balance
            transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Where spice meets sea
        </h1>
        <p
          className={`font-body text-base md:text-lg text-white/70 max-w-xl mb-12
            transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Handpicked villas, curated experiences, and unforgettable island moments — crafted by locals who call this paradise home.
        </p>

        {/* Search Widget */}
        <div
          className={`w-full max-w-4xl transition-all duration-700 delay-[900ms]
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <SearchWidget />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   SEARCH WIDGET
   ═══════════════════════════════════════════ */
function SearchWidget() {
  return (
    <div className="glass rounded-frame shadow-widget p-2">
      <div className="flex flex-col md:flex-row items-stretch">
        <SearchField label="Destination" placeholder="Stone Town, Nungwi..." icon="location" />
        <Divider />
        <SearchField label="Check in" placeholder="Add dates" icon="calendar" />
        <Divider />
        <SearchField label="Check out" placeholder="Add dates" icon="calendar" />
        <Divider />
        <SearchField label="Guests" placeholder="2 adults" icon="users" />
        <Link
          to="/properties"
          className="bg-cta-gradient text-white font-body font-semibold text-sm rounded-2xl px-8 py-4 md:py-0
            flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2 md:mt-0 md:ml-2 min-w-[130px]"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </Link>
      </div>
    </div>
  )
}

function SearchField({ label, placeholder, icon }) {
  return (
    <div className="flex-1 px-4 py-3 md:py-4 cursor-pointer group">
      <p className="text-[10px] font-semibold tracking-wider uppercase text-white/50 mb-1">{label}</p>
      <p className="text-sm text-white/80 group-hover:text-white transition-colors">{placeholder}</p>
    </div>
  )
}

function Divider() {
  return <div className="hidden md:block w-px bg-white/15 my-3" />
}

/* ═══════════════════════════════════════════
   TRUST BAR
   ═══════════════════════════════════════════ */
function TrustBar() {
  const brands = ['TripAdvisor', 'Cond\u00e9 Nast Traveler', 'Forbes Travel', 'Lonely Planet', 'Travel + Leisure']
  return (
    <div className="bg-white border-b border-sand/50">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-6">
        <div className="flex items-center justify-between gap-8 overflow-x-auto scrollbar-hide">
          <p className="text-xs text-ocean/30 font-medium whitespace-nowrap tracking-wide uppercase">As featured in</p>
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg md:text-xl text-ocean/20 whitespace-nowrap hover:text-ocean/40 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   FEATURED DESTINATIONS
   ═══════════════════════════════════════════ */
const destinations = [
  {
    name: 'Stone Town',
    tagline: 'The cultural heart',
    desc: 'Wander through centuries-old alleyways, past carved wooden doors and bustling spice markets.',
    img: exteriorEntrance,
    badge: 'UNESCO Heritage',
  },
  {
    name: 'Nungwi',
    tagline: 'Where the sun sets last',
    desc: 'Pristine white sands meet the deepest turquoise, with traditional dhow boats dotting the horizon.',
    img: exteriorSunset,
    badge: 'Most Popular',
  },
  {
    name: 'Paje',
    tagline: 'The kite surfer\'s paradise',
    desc: 'Endless shallow lagoons, vibrant beach culture, and the best seafood you\'ll ever taste.',
    img: exteriorPoolPalms,
    badge: 'Adventure',
  },
  {
    name: 'Mnemba Island',
    tagline: 'Your private atoll',
    desc: 'An exclusive island sanctuary surrounded by the richest marine life in the archipelago.',
    img: exteriorPoolForest,
    badge: 'Exclusive',
  },
]

function FeaturedDestinations() {
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
              {/* Badge */}
              <span className="absolute top-4 left-4 px-3 py-1 bg-seafoam/90 text-midnight text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                {dest.badge}
              </span>
              {/* Content */}
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

/* ═══════════════════════════════════════════
   WHY ZANZIBAR — Editorial Block
   ═══════════════════════════════════════════ */
const whyBlocks = [
  {
    number: '01',
    title: 'A villa, not a hotel room',
    desc: 'Each Bahari Mirror villa is a stand-alone home with its own private pool, garden, and entrance. No corridors, no shared lobbies, no neighbours behind the wall — just space that belongs to you for the length of your stay.',
    highlights: ['Private pool & garden', '200 m to the beach', 'Up to 6 guests per villa'],
    img: exteriorPoolPalms,
  },
  {
    number: '02',
    title: 'Rooted in Swahili craft',
    desc: 'Hand-cut coral stone walls, makuti-thatched ceilings, hardwood floors, and woven textiles — built and maintained by local craftsmen. The villas feel modern, but every detail is made on the island.',
    highlights: ['Local materials & craft', 'Makuti-thatched ceilings', 'Hand-cut coral stone'],
    img: livingHero,
  },
  {
    number: '03',
    title: 'Hosted, not managed',
    desc: 'You\'re welcomed in person, served breakfast on the terrace, and helped to plan whatever you want to do — snorkelling at Mnemba, a Spice Farm tour, or simply a quiet day by the pool. Your host is one call away the entire stay.',
    highlights: ['In-person welcome', 'Continental breakfast', 'On-call host for your trip'],
    img: bathroomHero,
  },
]

function WhyZanzibar() {
  const [active, setActive] = useState(0)
  const block = whyBlocks[active]

  return (
    <section className="section-padding bg-sand/20 bg-pattern">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12 md:mb-16 reveal">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">The Bahari Mirror difference</h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14 reveal">
          {whyBlocks.map((b, i) => (
            <button
              key={b.number}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-5 md:px-7 py-3 md:py-3.5 rounded-pill text-sm md:text-base font-medium tracking-wide
                transition-all duration-300
                ${active === i
                  ? 'bg-ocean text-white shadow-card'
                  : 'bg-white/70 text-ocean/70 hover:bg-white hover:text-ocean border border-sand/40'
                }`}
            >
              <span className={`font-display text-xs ${active === i ? 'text-sand' : 'text-ocean/40'}`}>{b.number}</span>
              <span>{b.title}</span>
            </button>
          ))}
        </div>

        {/* Active panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-14 reveal" key={block.number}>
          <div className="relative order-2 md:order-1">
            <span className="absolute -top-8 -left-4 font-display text-[140px] font-light text-sand/50 leading-none select-none hidden md:block">
              {block.number}
            </span>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-ocean mb-5 leading-tight">{block.title}</h3>
            <p className="font-body text-base md:text-lg text-ocean/60 leading-relaxed mb-7">{block.desc}</p>
            <ul className="space-y-3 mb-8">
              {block.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-ocean/70">
                  <span className="w-5 h-5 rounded-full bg-seafoam/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <Link to="/properties" className="btn-outline inline-flex">
              Browse Villas
            </Link>
          </div>

          <div className="order-1 md:order-2 rounded-frame overflow-hidden shadow-card">
            <img
              src={block.img}
              alt={block.title}
              className="w-full h-[300px] md:h-[480px] object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   AREA ATTRACTIONS — what's near the villas
   ═══════════════════════════════════════════ */
const attractions = [
  { title: 'Mnemba Atoll Snorkelling', category: 'Sea',     distance: 'Boat from Matemwe', img: exteriorPoolView },
  { title: 'Stone Town',               category: 'Culture', distance: '1 h drive',         img: exteriorEntrance },
  { title: 'Jozani Forest',            category: 'Nature',  distance: '40 min drive',      img: exteriorPoolForest },
  { title: 'Spice Farms',              category: 'Culture', distance: '50 min drive',      img: livingKitchen },
  { title: 'Safari Blue',              category: 'Sea',     distance: 'Full day from Fumba', img: exteriorPoolPalms },
  { title: 'Kuza Cave',                category: 'Nature',  distance: '10 min drive',      img: livingNook },
  { title: 'Paje & Kite Beach',        category: 'Beach',   distance: '15 min drive',      img: exteriorPoolLoungers },
  { title: 'The Rock Restaurant',      category: 'Food',    distance: '5 min walk',        img: exteriorSunset },
]

function AreaAttractions() {
  const scrollRef = useRef(null)

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
          <div>
            <p className="section-eyebrow">Around the Villas</p>
            <h2 className="section-title">What's nearby</h2>
            <p className="font-body text-base text-ocean/50 mt-2 max-w-lg">
              Jambiani sits within easy reach of Zanzibar's most loved corners — from coral atolls to Stone Town's spice-scented alleys.
            </p>
          </div>
          <Link to="/experiences" className="text-sm font-medium text-coral hover:text-coral-dark transition-colors mt-4 md:mt-0">
            View all attractions &rarr;
          </Link>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible"
        >
          {attractions.map((att, i) => (
            <Link
              to="/experiences"
              key={att.title}
              className={`reveal reveal-delay-${(i % 4) + 1} flex-shrink-0 w-[280px] md:w-auto group`}
            >
              <div className="relative rounded-frame overflow-hidden shadow-card card-hover">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={att.img}
                    alt={att.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-card-overlay" />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-coral/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                  {att.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{att.title}</h3>
                  <div className="flex items-center text-xs text-white/70">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {att.distance}
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

/* ═══════════════════════════════════════════
   TESTIMONIALS — real guest reviews
   ═══════════════════════════════════════════ */
const testimonials = [
  {
    title: 'A quiet, private location — the best choice',
    quote: 'Absolutely superb. We found at the location exactly what we saw in the photos. The villa is a 2-minute walk from the ocean, an oasis of peace surrounded by palm trees. Nothing but praise for our host, who surprised us with breakfast served on the terrace.',
    name: 'Vasile',
    from: 'Family with young children',
    source: 'Agoda · May 2026',
    rating: 5,
  },
  {
    title: 'A small corner of paradise',
    quote: 'We only spent two days here, but honestly I felt I was in a small corner of paradise. Mornings with the view of the palms, coffee sipped in front of the huge windows, the private pool — all unforgettable.',
    name: 'RamonAly',
    from: 'Solo traveler · Italy',
    source: 'Agoda · Apr 2026',
    rating: 5,
  },
  {
    title: 'Everything was as in the pictures',
    quote: 'The house was clean, a very relaxing and very quiet place. The pool is perfect to be in at any time. It\'s close to the ocean and there are many activities to do. Everything was as in the pictures and did not disappoint. I will definitely return!',
    name: 'Simao',
    from: 'Business traveler · Portugal',
    source: 'Agoda · May 2026',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <section className="bg-midnight py-20 md:py-28 px-5 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Soft accent glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-seafoam/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-spice/10 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16 reveal">
          <p className="font-body text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-sand mb-4">
            Guest Reviews
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Five stars, every stay.
          </h2>
          <div className="flex items-center justify-center gap-1 mt-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-5 h-5 text-spice" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-display text-white ml-3 text-lg">5.0</span>
            <span className="text-white/40 text-sm ml-1">· verified on Agoda &amp; Booking</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`reveal reveal-delay-${i + 1} relative bg-white/[0.04] border border-white/10 rounded-frame p-7 md:p-8
                hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500 flex flex-col`}
            >
              {/* Decorative quote */}
              <span aria-hidden="true" className="absolute -top-4 -left-2 font-display text-7xl text-spice/30 leading-none select-none">
                &ldquo;
              </span>

              <div className="flex items-center gap-0.5 mb-5 relative z-10">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-spice" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h3 className="font-display text-xl md:text-2xl text-white italic leading-snug mb-4">
                {t.title}
              </h3>
              <blockquote className="font-body text-sm md:text-base text-white/60 leading-relaxed mb-6 flex-1">
                {t.quote}
              </blockquote>

              <div className="pt-5 border-t border-white/10">
                <p className="font-body text-sm font-medium text-white">{t.name}</p>
                <p className="font-body text-xs text-white/40 mt-0.5">{t.from}</p>
                <p className="font-body text-[11px] uppercase tracking-wider text-spice/70 mt-2">{t.source}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   FEATURED VILLAS
   ═══════════════════════════════════════════ */
const villas = [
  { id: 1, name: 'Emozia',    location: 'Jambiani', price: 0, rating: 5.0, reviews: 3, beds: 2, guests: 6, img: exteriorHero,        tags: ['Pool', 'Garden', '200m to beach'] },
  { id: 2, name: 'Soul Rise', location: 'Jambiani', price: 0, rating: 5.0, reviews: 3, beds: 2, guests: 6, img: exteriorPoolPalms,   tags: ['Pool', 'Private', '200m to beach'] },
  { id: 3, name: 'Azuria',    location: 'Jambiani', price: 0, rating: 0,   reviews: 0, beds: 2, guests: 4, img: exteriorSunset,      tags: ['Photos coming soon'], comingSoon: true },
  { id: 4, name: 'Serenity',  location: 'Jambiani', price: 0, rating: 0,   reviews: 0, beds: 2, guests: 4, img: exteriorFront,       tags: ['Photos coming soon'], comingSoon: true },
]

function FeaturedVillas() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
          <div>
            <p className="section-eyebrow">Handpicked Stays</p>
            <h2 className="section-title">Villas you'll never forget</h2>
            <p className="font-body text-base text-ocean/50 max-w-lg mt-2">
              Each property personally visited, vetted for quality, and chosen for its unique character.
            </p>
          </div>
          <Link to="/properties" className="text-sm font-medium text-coral hover:text-coral-dark transition-colors mt-4 md:mt-0">
            Browse all properties &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {villas.map((villa, i) => (
            <Link
              to={`/property/${villa.id}`}
              key={villa.name}
              className={`reveal reveal-delay-${(i % 2) + 1} group rounded-frame overflow-hidden shadow-card card-hover bg-white`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={villa.img}
                  alt={villa.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                  {villa.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-pill
                        ${villa.comingSoon ? 'bg-coral/90 text-white' : 'bg-white/90 text-ocean'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Favorite */}
                <button
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center
                    hover:bg-white hover:scale-110 transition-all duration-200"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg className="w-4 h-4 text-ocean" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </button>
              </div>

              {/* Details */}
              <div className="p-5 md:p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-seafoam font-medium bg-seafoam/10 px-2 py-0.5 rounded-pill">{villa.location}</span>
                    <h3 className="font-display text-card-title text-ocean mt-2">{villa.name}</h3>
                  </div>
                  {villa.reviews > 0 && (
                    <div className="flex items-center gap-1 text-spice">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold">{villa.rating}</span>
                      <span className="text-xs text-ocean/40">({villa.reviews})</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs text-ocean/50 mt-3 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    {villa.beds} bedrooms
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                    </svg>
                    Up to {villa.guests} guests
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-sand/50">
                  <p>
                    {villa.price > 0 ? (
                      <>
                        <span className="font-display text-2xl font-semibold text-ocean">${villa.price}</span>
                        <span className="text-sm text-ocean/40 ml-1">/ night</span>
                      </>
                    ) : (
                      <span className="font-display text-lg text-ocean/50 italic">On request</span>
                    )}
                  </p>
                  <span className="text-sm font-medium text-coral group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    {villa.comingSoon ? 'Inquire' : 'View Details'}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   RESERVE CTA — final call to action
   ═══════════════════════════════════════════ */
function ReserveCta() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={exteriorSunset}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/75 to-midnight/60" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-20 md:py-32 reveal">
        <div className="max-w-2xl">
          <p className="font-body text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-sand mb-5">
            Reserve your stay
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] mb-6">
            Mornings that begin slowly. Evenings that don't end.
          </h2>
          <p className="font-body text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
            Check live availability for Emozia and Soul Rise, or get in touch
            and we'll match you with the right villa for your dates.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/properties" className="btn-primary !py-4 !px-10 !text-sm">
              Browse Villas
            </Link>
            <a
              href="mailto:office@BahariMirror.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white text-sm font-semibold rounded-pill
                hover:bg-white hover:text-ocean hover:border-white transition-all duration-300"
            >
              Inquire by Email
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   ABOUT US — editorial intro
   ═══════════════════════════════════════════ */
function AboutUs() {
  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Gallery — left, 7 cols */}
          <div className="lg:col-span-7 reveal">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[420px] md:h-[560px]">
              <div className="col-span-4 row-span-4 rounded-frame overflow-hidden shadow-card">
                <img src={exteriorHero} alt="Bahari Mirror exterior" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-1 rounded-frame overflow-hidden shadow-card">
                <img src={livingHero} alt="Living space" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="col-span-2 row-span-3 col-start-5 row-start-4 rounded-frame overflow-hidden shadow-card">
                <img src={bedroomHero} alt="Bedroom" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="col-span-4 row-span-2 col-start-1 row-start-5 rounded-frame overflow-hidden shadow-card">
                <img src={exteriorPoolPalms} alt="Pool and palms" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Text — right, 5 cols */}
          <div className="lg:col-span-5 reveal reveal-delay-2">
            <p className="section-eyebrow">About Bahari Mirror</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ocean leading-[1.1] mb-6">
              A reflection of the island, in five quiet villas.
            </h2>
            <p className="font-body text-base md:text-lg text-ocean/60 leading-relaxed mb-5">
              Bahari Mirror is a small, family-stewarded collection of villas in
              Jambiani — on Zanzibar's south-east coast, just 200 metres from
              the beach. Each home is built around its own private pool and
              garden, shaped by Swahili craft, and run with the quiet attention
              you'd offer a guest in your own home.
            </p>
            <p className="font-body text-base text-ocean/50 leading-relaxed">
              Five villas, similar in spirit, each with its own character —
              chosen for travellers who prefer stillness, space, and the rhythm
              of the ocean a short walk away.
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 pt-10 border-t border-sand/50">
              <div>
                <p className="font-display text-3xl md:text-4xl text-ocean">5</p>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ocean/50 mt-2">Villas</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-ocean">200m</p>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ocean/50 mt-2">to Beach</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-ocean">5<span className="text-spice">★</span></p>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-ocean/50 mt-2">Guest Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   HOME PAGE COMPOSITION
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutUs />
      <FeaturedVillas />
      <WhyZanzibar />
      <AreaAttractions />
      <Testimonials />
      <ReserveCta />
    </>
  )
}
