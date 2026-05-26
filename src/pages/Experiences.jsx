import { useState } from 'react'
import { Link } from 'react-router-dom'

import heroImg from '../../photo/bahari/exterior-sunset.webp'
import archImg from '../../photo/bahari/exterior-entrance.webp'
import coastImg from '../../photo/bahari/exterior-pool-view.webp'
import barImg from '../../photo/bahari/living-sunset.webp'
import basketsImg from '../../photo/bahari/living-kitchen.webp'
import potsImg from '../../photo/bahari/living-nook.webp'
import tealImg from '../../photo/bahari/exterior-night-pool.webp'
import villaImg from '../../photo/bahari/exterior-pool-palms.webp'
import beachImg from '../../photo/bahari/exterior-pool-loungers.webp'
import textureImg from '../../photo/bahari/exterior-pool-forest.webp'

const categories = ['All', 'Water', 'Culture', 'Food', 'Wellness', 'Adventure']

const allExperiences = [
  { id: 1, title: 'Sunset Dhow Cruise', category: 'Water', duration: '3 hours', price: 85, difficulty: 'Easy', maxGroup: 12, img: heroImg,
    desc: 'Sail aboard a traditional wooden dhow as the sun paints the Indian Ocean in gold and crimson. Includes fresh fruit, local wine, and the company of dolphins.' },
  { id: 2, title: 'Spice Farm Tour', category: 'Culture', duration: '4 hours', price: 45, difficulty: 'Easy', maxGroup: 15, img: basketsImg,
    desc: 'Walk through fragrant plantations of clove, vanilla, cinnamon, and cardamom. Learn centuries-old cultivation methods and taste freshly harvested spices.' },
  { id: 3, title: 'Stone Town Heritage Walk', category: 'Culture', duration: '3 hours', price: 35, difficulty: 'Easy', maxGroup: 10, img: archImg,
    desc: 'Navigate the labyrinthine alleys of UNESCO-listed Stone Town with a local historian. Discover hidden courtyards, carved Zanzibar doors, and ancient trading posts.' },
  { id: 4, title: 'Mnemba Atoll Snorkeling', category: 'Water', duration: '5 hours', price: 120, difficulty: 'Moderate', maxGroup: 8, img: coastImg,
    desc: 'Dive into the crystal-clear waters of Mnemba Atoll, home to over 600 species of fish, sea turtles, and vibrant coral gardens.' },
  { id: 5, title: 'Jozani Forest Trek', category: 'Adventure', duration: '3 hours', price: 40, difficulty: 'Easy', maxGroup: 12, img: textureImg,
    desc: 'Explore Zanzibar\'s last indigenous forest and meet the rare Red Colobus monkeys. Walk through mangrove boardwalks and ancient fig trees.' },
  { id: 6, title: 'Zanzibar Cooking Class', category: 'Food', duration: '4 hours', price: 65, difficulty: 'Easy', maxGroup: 8, img: potsImg,
    desc: 'Start at the Darajani Market, selecting fresh ingredients with your chef-guide. Then master the art of pilau, biryani, and coconut fish curry.' },
  { id: 7, title: 'Kite Surfing Lessons', category: 'Water', duration: '3 hours', price: 95, difficulty: 'Moderate', maxGroup: 4, img: villaImg,
    desc: 'Learn to ride the wind on Paje\'s legendary flat-water lagoon. Expert IKO-certified instructors for all levels, gear included.' },
  { id: 8, title: 'Beachside Yoga Retreat', category: 'Wellness', duration: '2 hours', price: 40, difficulty: 'Easy', maxGroup: 15, img: beachImg,
    desc: 'Sunrise yoga on a secluded beach, followed by guided meditation and a fresh coconut water cool-down. Pure island tranquility.' },
  { id: 9, title: 'Night Kayak Bioluminescence', category: 'Adventure', duration: '2 hours', price: 75, difficulty: 'Easy', maxGroup: 8, img: tealImg,
    desc: 'Paddle through waters that glow electric blue beneath your kayak. A truly magical experience in the bioluminescent bays of Zanzibar.' },
  { id: 10, title: 'Seafood Beach BBQ', category: 'Food', duration: '3 hours', price: 55, difficulty: 'Easy', maxGroup: 20, img: barImg,
    desc: 'Feast on freshly grilled lobster, octopus, and kingfish right on the sand, as local musicians play traditional taarab under the stars.' },
]

const difficultyColors = {
  Easy: 'bg-seafoam/20 text-ocean',
  Moderate: 'bg-spice/10 text-spice',
  Challenging: 'bg-coral/10 text-coral',
}

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? allExperiences
    : allExperiences.filter((e) => e.category === activeCategory)

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <video
          autoPlay muted loop playsInline
          poster="/media/15442.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/media/2279101_Drone_Shot_Nungwi_Beach_1920x1080.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/30 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/40 via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-5">
          <div>
            <p className="font-body text-xs font-semibold tracking-[0.25em] uppercase text-seafoam mb-4">Things to Do</p>
            <h1 className="font-display text-hero text-white">Experiences</h1>
            <p className="font-body text-base text-white/60 mt-4 max-w-lg mx-auto">
              From spice-scented markets to underwater wonders — curated moments that make Zanzibar unforgettable.
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-16 md:top-20 z-30 bg-ivory/95 backdrop-blur-md border-b border-sand/50">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-pill text-sm font-medium whitespace-nowrap transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-ocean text-white shadow-md'
                    : 'text-ocean/50 hover:text-ocean hover:bg-sand/30'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Grid */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="reveal group bg-white rounded-frame shadow-card card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-coral/90 text-white text-[10px] font-semibold tracking-wide uppercase rounded-pill">
                    {exp.category}
                  </span>
                  <span className={`px-3 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-pill ${difficultyColors[exp.difficulty]}`}>
                    {exp.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3 className="font-display text-xl font-semibold text-ocean mb-2">{exp.title}</h3>
                <p className="text-sm text-ocean/50 leading-relaxed mb-4 line-clamp-2">{exp.desc}</p>

                <div className="flex items-center gap-4 text-xs text-ocean/40 mb-4">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                    Max {exp.maxGroup}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-sand/50">
                  <p>
                    <span className="font-display text-xl font-semibold text-ocean">${exp.price}</span>
                    <span className="text-xs text-ocean/40 ml-1">/ person</span>
                  </p>
                  <Link to="/booking" className="btn-primary !py-2 !px-5 !text-xs">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-ocean/30">No experiences in this category</p>
            <button onClick={() => setActiveCategory('All')} className="btn-primary mt-6">Show All</button>
          </div>
        )}
      </div>
    </div>
  )
}
