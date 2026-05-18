import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { tealWall } from '../../data/images'

export default function GuideCta() {
  return (
    <section className="relative overflow-hidden reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
        <div className="relative">
          <img
            src={tealWall}
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
              <Icon name="arrowRight" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
