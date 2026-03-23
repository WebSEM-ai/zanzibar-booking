import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ─── Image imports from photo/ folder ─── */
import heroImg from '../../photo/f9354ad2-1e23-4bad-876f-5e8dfdd30ab0.jpg'
import villaImg1 from '../../photo/f5a20891-522b-48ee-a3c7-48939385e7b9.jpg'
import villaImg2 from '../../photo/58a147fc-e9d3-43b7-b75b-16595550782f.jpg'
import barImg from '../../photo/7fe7f702-99a1-4fbc-b9ee-346f7a1525b6.jpg'
import archImg from '../../photo/73dd3477-e36a-4e76-854c-d69082c5ce3c.jpg'
import coastImg from '../../photo/3a26d3ad-73d0-4a19-a9ba-eaa1aae62176.jpg'
import potsImg from '../../photo/68f25bca-fb49-471c-b4c4-a15303a15c0a.jpg'
import tealImg from '../../photo/aff28e2c-b96f-4c77-868e-af3557b4ef90.jpg'
import beachVillaImg from '../../photo/1e9b39ca-89fe-4ec5-acab-99be4a05aec7.jpg'
import basketsImg from '../../photo/7bcda45e-d0aa-4e6c-b4f7-c6910e07d1e6.jpg'
import textureImg from '../../photo/20cbdc56-c9e3-4996-b8a2-957f63831131.jpg'
import dhowImg from '../../photo/0369bc9d-a345-4fb8-9346-6214824a2f8b.jpg'
import sailImg from '../../photo/58a147fc-e9d3-43b7-b75b-16595550782f.jpg'

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Zanzibar turquoise beach"
          className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-5 text-center">
        <p
          className={`font-body text-xs font-semibold tracking-[0.25em] uppercase text-seafoam mb-6
            transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Discover Zanzibar
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
    img: archImg,
    badge: 'UNESCO Heritage',
  },
  {
    name: 'Nungwi',
    tagline: 'Where the sun sets last',
    desc: 'Pristine white sands meet the deepest turquoise, with traditional dhow boats dotting the horizon.',
    img: heroImg,
    badge: 'Most Popular',
  },
  {
    name: 'Paje',
    tagline: 'The kite surfer\'s paradise',
    desc: 'Endless shallow lagoons, vibrant beach culture, and the best seafood you\'ll ever taste.',
    img: coastImg,
    badge: 'Adventure',
  },
  {
    name: 'Mnemba Island',
    tagline: 'Your private atoll',
    desc: 'An exclusive island sanctuary surrounded by the richest marine life in the archipelago.',
    img: beachVillaImg,
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
    title: 'Rooted in the island',
    desc: 'We\'re not a distant booking engine. Our team lives and breathes Zanzibar — from the spice farms of Kizimbani to the reefs of Chumbe. Every recommendation comes from personal experience, not an algorithm.',
    highlights: ['Local guides & partnerships', 'Community-first tourism', 'Authentic cultural immersion'],
    img: barImg,
    reverse: false,
  },
  {
    number: '02',
    title: 'Curated, never crowded',
    desc: 'Every villa, lodge, and experience on our platform has been personally visited and vetted. We say no to 80% of what we review, so you only see the island\'s finest.',
    highlights: ['Hand-selected properties', 'Quality over quantity', 'Regular on-site reviews'],
    img: tealImg,
    reverse: true,
  },
  {
    number: '03',
    title: 'Effortless end-to-end',
    desc: 'Flights, transfers, accommodation, and experiences — woven together into one seamless journey. Your private concierge handles every detail so you can simply arrive and exhale.',
    highlights: ['Airport transfers included', 'Personal trip concierge', '24/7 on-island support'],
    img: potsImg,
    reverse: false,
  },
]

function WhyZanzibar() {
  return (
    <section className="section-padding bg-sand/30 bg-pattern">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">The Zanzibar difference</h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {whyBlocks.map((block, i) => (
            <div
              key={block.number}
              className={`reveal flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative">
                <span className="absolute -top-8 -left-4 font-display text-[120px] font-light text-sand/60 leading-none select-none hidden md:block">
                  {block.number}
                </span>
                <div className="rounded-frame overflow-hidden shadow-card">
                  <img
                    src={block.img}
                    alt={block.title}
                    className="w-full h-[350px] md:h-[450px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <span className="font-display text-5xl font-light text-coral/20 md:hidden">{block.number}</span>
                <h3 className="font-display text-3xl md:text-4xl text-ocean mb-4">{block.title}</h3>
                <p className="font-body text-base text-ocean/60 leading-relaxed mb-6">{block.desc}</p>
                <ul className="space-y-3">
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
                <Link to="/properties" className="btn-outline mt-8 inline-flex">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════
   POPULAR EXPERIENCES
   ═══════════════════════════════════════════ */
const experiences = [
  { title: 'Sunset Dhow Cruise', category: 'Water', duration: '3 hours', price: 85, img: heroImg },
  { title: 'Spice Farm Tour', category: 'Cultural', duration: '4 hours', price: 45, img: basketsImg },
  { title: 'Stone Town Walking Tour', category: 'Culture', duration: '3 hours', price: 35, img: archImg },
  { title: 'Mnemba Snorkeling', category: 'Water', duration: '5 hours', price: 120, img: coastImg },
  { title: 'Jozani Forest Trek', category: 'Adventure', duration: '3 hours', price: 40, img: textureImg },
  { title: 'Cooking Class', category: 'Food', duration: '4 hours', price: 65, img: dhowImg },
]

function PopularExperiences() {
  const scrollRef = useRef(null)

  return (
    <section className="section-padding bg-ivory">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
          <div>
            <p className="section-eyebrow">Things to Do</p>
            <h2 className="section-title">Experiences worth having</h2>
          </div>
          <Link to="/experiences" className="text-sm font-medium text-coral hover:text-coral-dark transition-colors mt-4 md:mt-0">
            View all experiences &rarr;
          </Link>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-4 md:overflow-visible"
        >
          {experiences.map((exp, i) => (
            <Link
              to="/experiences"
              key={exp.title}
              className={`reveal reveal-delay-${(i % 4) + 1} flex-shrink-0 w-[280px] md:w-auto group`}
            >
              <div className="relative rounded-frame overflow-hidden shadow-card card-hover">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-card-overlay" />
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-coral/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                  {exp.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="text-white font-medium text-sm">From ${exp.price}</span>
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
   TESTIMONIALS
   ═══════════════════════════════════════════ */
const testimonials = [
  {
    quote: 'Zanzibar exceeded every expectation. The villa was breathtaking, the concierge knew exactly what we needed before we even asked. This wasn\'t a trip — it was a transformation.',
    name: 'Sophie Laurent',
    from: 'Paris, France',
    trip: 'Honeymoon',
    rating: 5,
  },
  {
    quote: 'I\'ve traveled to 40+ countries. Zanzibar, through this platform, was the first time I felt truly taken care of. The spice tour alone changed how I think about food.',
    name: 'Marcus Webb',
    from: 'London, UK',
    trip: 'Solo Adventure',
    rating: 5,
  },
  {
    quote: 'Our family holiday was seamless from start to finish. The kids still talk about swimming with dolphins at Mnemba. We\'re already planning our return.',
    name: 'Elena & David Rossi',
    from: 'Milan, Italy',
    trip: 'Family Holiday',
    rating: 5,
  },
  {
    quote: 'The attention to detail is remarkable. From the airport pickup to the private sunset cruise — every moment felt personal and thoughtful.',
    name: 'James & Anna Chen',
    from: 'New York, USA',
    trip: 'Anniversary',
    rating: 5,
  },
]

function Testimonials() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (idx) => {
    setActive(idx)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
  }

  return (
    <section className="bg-midnight py-20 md:py-32 px-5 md:px-10 lg:px-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-coral/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-seafoam/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        {/* Large quote mark */}
        <span className="font-display text-[120px] md:text-[160px] text-coral/20 leading-none block -mb-16 md:-mb-20 select-none">
          &ldquo;
        </span>

        <div className="relative min-h-[200px] md:min-h-[180px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ${
                i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <blockquote className="font-display text-xl md:text-2xl lg:text-3xl italic text-ivory leading-relaxed font-light">
                {t.quote}
              </blockquote>
              <div className="mt-8">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-spice" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-sm font-medium text-white">{t.name}</p>
                <p className="font-body text-xs text-white/40">{t.from} &middot; {t.trip}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-coral w-6' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
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
  {
    name: 'Bahari Beach House',
    location: 'Nungwi',
    price: 450,
    rating: 4.9,
    reviews: 124,
    beds: 4,
    guests: 8,
    img: villaImg1,
    tags: ['Beachfront', 'Pool', 'Eco-Certified'],
  },
  {
    name: 'Spice Island Villa',
    location: 'Matemwe',
    price: 680,
    rating: 5.0,
    reviews: 89,
    beds: 5,
    guests: 10,
    img: beachVillaImg,
    tags: ['Private Island', 'Luxury', 'Staff'],
  },
  {
    name: 'Stone Town Riad',
    location: 'Stone Town',
    price: 280,
    rating: 4.8,
    reviews: 201,
    beds: 3,
    guests: 6,
    img: villaImg2,
    tags: ['Heritage', 'Rooftop', 'Central'],
  },
  {
    name: 'Paje Ocean Lodge',
    location: 'Paje',
    price: 350,
    rating: 4.9,
    reviews: 156,
    beds: 3,
    guests: 6,
    img: barImg,
    tags: ['Ocean View', 'Kite Spot', 'Restaurant'],
  },
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
              to={`/property/${i + 1}`}
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
                        ${tag === 'Eco-Certified' ? 'bg-seafoam text-midnight' : 'bg-white/90 text-ocean'}`}
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
                  <div className="flex items-center gap-1 text-spice">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-semibold">{villa.rating}</span>
                    <span className="text-xs text-ocean/40">({villa.reviews})</span>
                  </div>
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
                    <span className="font-display text-2xl font-semibold text-ocean">${villa.price}</span>
                    <span className="text-sm text-ocean/40 ml-1">/ night</span>
                  </p>
                  <span className="text-sm font-medium text-coral group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    View Details
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
   ZANZIBAR GUIDE CTA
   ═══════════════════════════════════════════ */
function GuideCta() {
  return (
    <section className="relative overflow-hidden reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        <div className="relative">
          <img
            src={tealImg}
            alt="Zanzibar interior"
            className="w-full h-full object-cover min-h-[300px]"
            loading="lazy"
          />
        </div>
        <div className="bg-ocean flex items-center p-10 md:p-16 lg:p-24">
          <div>
            <p className="section-eyebrow !text-seafoam">Travel Guide</p>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
              Your essential Zanzibar guide
            </h2>
            <p className="font-body text-base text-white/50 leading-relaxed mb-8 max-w-md">
              Everything you need to know before you go — from the best months to visit and what to pack,
              to local customs and hidden gems the guidebooks miss.
            </p>
            <Link to="#" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white text-sm font-semibold rounded-pill
              hover:bg-white hover:text-ocean transition-all duration-300">
              Read the Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
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
      <FeaturedDestinations />
      <WhyZanzibar />
      <PopularExperiences />
      <Testimonials />
      <FeaturedVillas />
      <GuideCta />
    </>
  )
}
