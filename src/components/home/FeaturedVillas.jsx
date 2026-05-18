import { Link } from 'react-router-dom'
import { allProperties } from '../../data/properties'
import PropertyCard from '../ui/PropertyCard'

const featuredVillas = allProperties.slice(0, 4)

export default function FeaturedVillas() {
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
          {featuredVillas.map((villa, i) => (
            <PropertyCard key={villa.id} property={villa} delay={(i % 2) + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
