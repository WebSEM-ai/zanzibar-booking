import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Properties from './pages/Properties'
import PropertyDetail from './pages/PropertyDetail'
import Experiences from './pages/Experiences'
import Booking from './pages/Booking'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

// Intersection Observer for scroll animations
function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  })
}

export default function App() {
  useRevealOnScroll()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<><ScrollToTop /><Home /></>} />
          <Route path="/properties" element={<><ScrollToTop /><Properties /></>} />
          <Route path="/property/:id" element={<><ScrollToTop /><PropertyDetail /></>} />
          <Route path="/experiences" element={<><ScrollToTop /><Experiences /></>} />
          <Route path="/booking" element={<><ScrollToTop /><Booking /></>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
