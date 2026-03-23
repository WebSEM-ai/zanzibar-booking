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

// Intersection Observer for scroll animations — watches for new .reveal elements via MutationObserver
function useRevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const observe = (el) => {
      if (!el.classList.contains('visible')) io.observe(el)
    }

    // Observe existing elements
    document.querySelectorAll('.reveal').forEach(observe)

    // Watch for new .reveal elements added to the DOM (e.g. route changes)
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.classList?.contains('reveal')) observe(node)
          node.querySelectorAll?.('.reveal').forEach(observe)
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => { io.disconnect(); mo.disconnect() }
  }, [])
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
