import Hero from '../components/home/Hero'
import TrustBar from '../components/home/TrustBar'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import WhyZanzibar from '../components/home/WhyZanzibar'
import PopularExperiences from '../components/home/PopularExperiences'
import Testimonials from '../components/home/Testimonials'
import FeaturedVillas from '../components/home/FeaturedVillas'
import GuideCta from '../components/home/GuideCta'

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
