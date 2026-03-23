import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Destinations', href: '/properties' },
  { name: 'Experiences', href: '/experiences' },
  { name: 'Luxury Villas', href: '/properties' },
  { name: 'Travel Guide', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cancellation Policy', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-midnight text-white/80">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-light text-white mb-3">
              Stay inspired
            </h3>
            <p className="font-body text-sm text-white/50 mb-8">
              Subscribe for curated travel stories, exclusive offers, and hidden gems from Zanzibar's shores.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-5 py-3.5 bg-white/[0.08] border border-white/15 rounded-pill text-white placeholder:text-white/30 text-sm
                  focus:outline-none focus:border-coral/50 focus:bg-white/[0.12] transition-all duration-300"
              />
              <button type="submit" className="btn-primary whitespace-nowrap !rounded-pill">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Story */}
          <div>
            <Link to="/" className="font-display text-3xl font-light text-white block mb-4">
              Zanzibar
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Born from a love of the island and its people, we curate authentic Zanzibar experiences
              that honour local culture while creating unforgettable moments. Every villa handpicked,
              every journey thoughtfully crafted.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {/* Social Icons */}
              {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40
                    hover:border-coral hover:text-coral transition-all duration-300"
                  aria-label={social}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'Instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    )}
                    {social === 'Facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    )}
                    {social === 'Pinterest' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white tracking-wide uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/40 hover:text-coral transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white tracking-wide uppercase mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm text-white/40">
              <p>
                <span className="block text-white/60 font-medium mb-1">Email</span>
                hello@zanzibar.travel
              </p>
              <p>
                <span className="block text-white/60 font-medium mb-1">Phone</span>
                +255 24 223 0000
              </p>
              <p>
                <span className="block text-white/60 font-medium mb-1">Office</span>
                Kenyatta Road, Stone Town<br />
                Zanzibar, Tanzania
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Zanzibar Travel. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
