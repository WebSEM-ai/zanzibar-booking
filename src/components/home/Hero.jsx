import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { heroBeach } from '../../data/images'

function SearchField({ label, placeholder }) {
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

function SearchWidget() {
  return (
    <div className="glass rounded-frame shadow-widget p-2">
      <div className="flex flex-col md:flex-row items-stretch">
        <SearchField label="Destination" placeholder="Stone Town, Nungwi..." />
        <Divider />
        <SearchField label="Check in" placeholder="Add dates" />
        <Divider />
        <SearchField label="Check out" placeholder="Add dates" />
        <Divider />
        <SearchField label="Guests" placeholder="2 adults" />
        <Link
          to="/properties"
          className="bg-cta-gradient text-white font-body font-semibold text-sm rounded-2xl px-8 py-4 md:py-0
            flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-2 md:mt-0 md:ml-2 min-w-[130px]"
        >
          <Icon name="search" className="w-5 h-5" />
          Search
        </Link>
      </div>
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBeach}
          alt="Zanzibar turquoise beach"
          className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

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

        <div
          className={`w-full max-w-4xl transition-all duration-700 delay-[900ms]
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <SearchWidget />
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
          <Icon name="arrowDown" className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </section>
  )
}
