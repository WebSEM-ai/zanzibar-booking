import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { tropicalBar, tealWall, localPots } from '../../data/images'

const whyBlocks = [
  {
    number: '01',
    title: 'Rooted in the island',
    desc: 'We\'re not a distant booking engine. Our team lives and breathes Zanzibar — from the spice farms of Kizimbani to the reefs of Chumbe. Every recommendation comes from personal experience, not an algorithm.',
    highlights: ['Local guides & partnerships', 'Community-first tourism', 'Authentic cultural immersion'],
    img: tropicalBar,
    reverse: false,
  },
  {
    number: '02',
    title: 'Curated, never crowded',
    desc: 'Every villa, lodge, and experience on our platform has been personally visited and vetted. We say no to 80% of what we review, so you only see the island\'s finest.',
    highlights: ['Hand-selected properties', 'Quality over quantity', 'Regular on-site reviews'],
    img: tealWall,
    reverse: true,
  },
  {
    number: '03',
    title: 'Effortless end-to-end',
    desc: 'Flights, transfers, accommodation, and experiences — woven together into one seamless journey. Your private concierge handles every detail so you can simply arrive and exhale.',
    highlights: ['Airport transfers included', 'Personal trip concierge', '24/7 on-island support'],
    img: localPots,
    reverse: false,
  },
]

export default function WhyZanzibar() {
  return (
    <section className="section-padding bg-sand/30 bg-pattern">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">The Zanzibar difference</h2>
        </div>

        <div className="space-y-24 md:space-y-32">
          {whyBlocks.map((block) => (
            <div
              key={block.number}
              className={`reveal flex flex-col ${block.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
            >
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

              <div className="w-full md:w-1/2">
                <span className="font-display text-5xl font-light text-coral/20 md:hidden">{block.number}</span>
                <h3 className="font-display text-3xl md:text-4xl text-ocean mb-4">{block.title}</h3>
                <p className="font-body text-base text-ocean/60 leading-relaxed mb-6">{block.desc}</p>
                <ul className="space-y-3">
                  {block.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm text-ocean/70">
                      <span className="w-5 h-5 rounded-full bg-seafoam/30 flex items-center justify-center flex-shrink-0">
                        <Icon name="check" className="w-3 h-3 text-ocean" />
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
