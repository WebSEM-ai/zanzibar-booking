/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#F2E4C8',
        ocean: { DEFAULT: '#1A4A5A', light: '#256B80' },
        coral: { DEFAULT: '#E8704A', dark: '#D4593A' },
        spice: '#C8952A',
        seafoam: '#A8D5C2',
        ivory: '#FDFAF4',
        midnight: '#0D2B38',
        timber: '#8B5E3C',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 6vw, 6rem)', { lineHeight: '1.05', fontWeight: '300' }],
        'section': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', fontWeight: '400' }],
        'card-title': ['1.75rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      borderRadius: {
        'card': '16px',
        'btn': '8px',
        'pill': '100px',
        'input': '10px',
        'frame': '20px',
      },
      boxShadow: {
        'card': '0 8px 40px rgba(13,43,56,0.12)',
        'card-hover': '0 16px 56px rgba(13,43,56,0.18)',
        'nav': '0 2px 20px rgba(13,43,56,0.08)',
        'widget': '0 24px 80px rgba(13,43,56,0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollHint: {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(8px)' },
        },
      },
      backgroundImage: {
        'cta-gradient': 'linear-gradient(135deg, #E8704A 0%, #C8952A 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(13,43,56,0.0) 0%, rgba(13,43,56,0.75) 100%)',
        'card-overlay': 'linear-gradient(180deg, transparent 40%, rgba(13,43,56,0.85) 100%)',
      },
    },
  },
  plugins: [],
}
