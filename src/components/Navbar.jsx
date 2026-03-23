import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Destinations', href: '/properties' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Villas', href: '/properties' },
  { name: 'Our Story', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = scrolled || !isHome
    ? 'bg-ivory/95 backdrop-blur-md shadow-nav'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-ocean' : 'text-white'
  const logoColor = scrolled || !isHome ? 'text-ocean' : 'text-white'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className={`font-display text-2xl md:text-3xl font-light tracking-wide ${logoColor} transition-colors duration-300`}>
              Zanzibar
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative font-body text-sm font-medium ${textColor} transition-colors duration-300
                    after:absolute after:left-0 after:bottom-[-4px] after:h-[1.5px] after:w-0 after:bg-coral after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" className="btn-primary !py-2.5 !px-6 !text-xs">
                Book Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 ${textColor}`}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-midnight flex flex-col items-center justify-center transition-all duration-500 md:hidden
          ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-display text-4xl font-light text-white/90 hover:text-coral transition-all duration-300
                ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: mobileOpen ? `${i * 80 + 200}ms` : '0ms' }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className={`btn-primary mt-4 ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: mobileOpen ? '520ms' : '0ms' }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  )
}
