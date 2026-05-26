import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import room1 from '../../photo/bahari/bedroom-cozy.webp'
import room2 from '../../photo/bahari/exterior-pool-palms.webp'
import room3 from '../../photo/bahari/bedroom-hero.webp'

// ─── Data ──────────────────────────────────────────────
const ROOMS = [
  { id: 'ocean-suite', name: 'Garden Suite', desc: 'King bed · Garden view · 45m²', base: 280, img: room1, maxGuests: 3, beds: '1 King bed', bathrooms: 1, area: '45m²', features: ['Garden view', 'Private terrace', 'Rain shower', 'Mini bar'] },
  { id: 'spice-villa', name: 'Spice Villa', desc: '2 Bedrooms · Private pool · 90m²', base: 450, img: room2, maxGuests: 5, beds: '1 King + 2 Single beds', bathrooms: 2, area: '90m²', features: ['Private pool', 'Garden terrace', 'Full kitchen', 'Living room'] },
  { id: 'coral-penthouse', name: 'Mirror Villa', desc: '3 Bedrooms · Vaulted ceilings · 140m²', base: 680, img: room3, maxGuests: 8, beds: '1 King + 2 Queen beds', bathrooms: 3, area: '140m²', features: ['Vaulted ceilings', 'Stone arch suite', 'Chef kitchen', 'Pool & terrace'] },
]

const STEP_LABELS = ['Dates', 'Guests', 'Room', 'Payment']

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAY_NAMES = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

function getMonthDays(year, month) {
  const first = new Date(year, month, 1)
  const startDay = (first.getDay() + 6) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return { startDay, daysInMonth }
}

function isSameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isInRange(day, start, end) {
  if (!start || !end) return false
  return day > start && day < end
}

function formatDate(d) {
  if (!d) return ''
  return `${d.getDate()} ${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getFullYear()}`
}

function diffDays(a, b) {
  if (!a || !b) return 0
  return Math.round((b - a) / (1000 * 60 * 60 * 24))
}

// ─── Calendar Component ────────────────────────────────
function Calendar({ startDate, endDate, onSelect }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [viewYear, setViewYear] = useState(today.getFullYear())

  const nextMonth = (viewMonth + 1) % 12
  const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear

  const goPrev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1) }
    else setViewMonth(viewMonth - 1)
  }
  const goNext = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1) }
    else setViewMonth(viewMonth + 1)
  }

  const canGoPrev = viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth())

  const renderMonth = (year, month) => {
    const { startDay, daysInMonth } = getMonthDays(year, month)
    const cells = []
    for (let i = 0; i < startDay; i++) cells.push(<div key={`e-${i}`} />)
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d)
      const isPast = date < today
      const isStart = isSameDay(date, startDate)
      const isEnd = isSameDay(date, endDate)
      const inRange = isInRange(date, startDate, endDate)
      const isToday = isSameDay(date, today)

      cells.push(
        <button
          key={d}
          disabled={isPast}
          onClick={() => !isPast && onSelect(date)}
          className={`
            relative h-12 md:h-14 rounded-xl text-base font-semibold transition-all duration-150
            ${isPast ? 'text-ocean/15 cursor-not-allowed' : 'hover:bg-coral/10 cursor-pointer'}
            ${isStart || isEnd ? 'bg-cta-gradient text-white shadow-lg hover:bg-cta-gradient scale-105' : ''}
            ${inRange ? 'bg-coral/8 text-ocean' : ''}
            ${!isStart && !isEnd && !inRange && !isPast ? 'text-ocean/80' : ''}
            ${isToday && !isStart && !isEnd ? 'ring-2 ring-coral/40' : ''}
          `}
        >
          {d}
        </button>
      )
    }
    return cells
  }

  return (
    <div className="animate-fade-up">
      {/* Nav */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goPrev}
          disabled={!canGoPrev}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${canGoPrev ? 'hover:bg-sand/50 text-ocean' : 'text-ocean/15 cursor-not-allowed'}`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-8 md:gap-16">
          <h3 className="font-display text-xl text-ocean font-bold">{MONTH_NAMES[viewMonth]} {viewYear}</h3>
          <h3 className="font-display text-xl text-ocean font-bold hidden md:block">{MONTH_NAMES[nextMonth]} {nextYear}</h3>
        </div>
        <button onClick={goNext} className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-sand/50 text-ocean transition-all">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <div>
          <h3 className="font-display text-lg text-ocean font-semibold mb-3 md:hidden">{MONTH_NAMES[viewMonth]}</h3>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAY_NAMES.map(d => <div key={d} className="text-center text-xs font-bold text-ocean/40 uppercase">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">{renderMonth(viewYear, viewMonth)}</div>
        </div>
        <div>
          <h3 className="font-display text-lg text-ocean font-semibold mb-3 md:hidden">{MONTH_NAMES[nextMonth]}</h3>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAY_NAMES.map(d => <div key={`b-${d}`} className="text-center text-xs font-bold text-ocean/40 uppercase">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">{renderMonth(nextYear, nextMonth)}</div>
        </div>
      </div>

      {startDate && !endDate && (
        <p className="text-center text-base text-ocean/50 mt-6 font-medium animate-fade-in">Select your check-out date</p>
      )}
    </div>
  )
}

// ─── Guest Counter ─────────────────────────────────────
function GuestCounter({ label, subtitle, value, onChange, min = 0, max = 10 }) {
  return (
    <div className="flex items-center justify-between py-5">
      <div>
        <p className="text-lg font-bold text-ocean">{label}</p>
        <p className="text-sm text-ocean/50 font-medium">{subtitle}</p>
      </div>
      <div className="flex items-center gap-5">
        <button
          onClick={() => value > min && onChange(value - 1)}
          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl font-bold transition-all
            ${value > min ? 'border-ocean/30 text-ocean hover:border-coral hover:text-coral hover:bg-coral/5' : 'border-sand text-ocean/15 cursor-not-allowed'}`}
        >
          −
        </button>
        <span className="w-10 text-center text-2xl font-bold text-ocean tabular-nums">{value}</span>
        <button
          onClick={() => value < max && onChange(value + 1)}
          className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-2xl font-bold transition-all
            ${value < max ? 'border-ocean/30 text-ocean hover:border-coral hover:text-coral hover:bg-coral/5' : 'border-sand text-ocean/15 cursor-not-allowed'}`}
        >
          +
        </button>
      </div>
    </div>
  )
}

// ─── Room Card ─────────────────────────────────────────
function RoomCard({ room, selected, discount, onClick, recommended }) {
  const discountedPrice = Math.round(room.base * (1 - discount))
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left rounded-2xl overflow-hidden border-3 transition-all duration-300 relative
        ${selected ? 'border-coral shadow-xl scale-[1.01]' : recommended ? 'border-seafoam/50 shadow-lg hover:border-coral/50 hover:shadow-xl' : 'border-sand/40 hover:border-ocean/30 hover:shadow-lg'}`}
    >
      {recommended && !selected && (
        <div className="absolute top-4 right-4 z-10 bg-seafoam text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          Recommended
        </div>
      )}
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-56 h-44 sm:h-auto overflow-hidden flex-shrink-0">
          <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 p-6 md:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="font-display text-2xl font-bold text-ocean">{room.name}</h4>
                <p className="text-base text-ocean/50 mt-1 font-medium">{room.desc}</p>
              </div>
              {selected && (
                <div className="w-9 h-9 rounded-full bg-cta-gradient flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
              )}
            </div>
            <p className="text-sm text-ocean/40 mt-2 font-medium">Up to {room.maxGuests} guests</p>
          </div>
          <div className="flex items-end gap-3 mt-5">
            {discount > 0 && (
              <span className="text-base text-ocean/30 line-through font-medium">€{room.base}</span>
            )}
            <span className="text-3xl font-display font-bold text-ocean">€{discountedPrice}</span>
            <span className="text-base text-ocean/40 mb-0.5 font-medium">/ night</span>
            {discount > 0 && (
              <span className="ml-auto text-sm font-bold text-white bg-cta-gradient px-4 py-1.5 rounded-full shadow-md">
                -{Math.round(discount * 100)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  )
}

// ─── Step Indicator ────────────────────────────────────
function StepIndicator({ currentStep, onStepClick }) {
  return (
    <div className="flex items-center gap-0 mb-10">
      {STEP_LABELS.map((label, i) => {
        const step = i + 1
        const isActive = currentStep === step
        const isCompleted = currentStep > step
        return (
          <div key={step} className="flex items-center flex-1 last:flex-initial">
            <button
              onClick={() => onStepClick(step)}
              className={`flex flex-col items-center gap-2 group cursor-pointer transition-all duration-300 min-w-[70px]`}
            >
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold transition-all duration-300 shadow-md
                  ${isActive ? 'bg-cta-gradient text-white shadow-xl scale-110' : ''}
                  ${isCompleted ? 'bg-seafoam text-white' : ''}
                  ${!isActive && !isCompleted ? 'bg-white border-2 border-ocean/20 text-ocean/40 group-hover:border-ocean/40 group-hover:text-ocean/60' : ''}
                `}
              >
                {isCompleted ? (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ) : (
                  step
                )}
              </div>
              <span className={`text-sm font-bold transition-colors duration-300 hidden sm:block
                ${isActive ? 'text-ocean' : isCompleted ? 'text-seafoam' : 'text-ocean/35 group-hover:text-ocean/60'}`}>
                {label}
              </span>
            </button>
            {i < STEP_LABELS.length - 1 && (
              <div className={`flex-1 h-1 rounded-full mx-2 transition-colors duration-500 ${currentStep > step ? 'bg-seafoam/60' : 'bg-sand/40'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Summary Sidebar ───────────────────────────────────
function SummarySidebar({ startDate, endDate, nights, adults, children, infants, selectedRoom, pricing, roomDiscount, onConfirm, canBook }) {
  const room = ROOMS.find(r => r.id === selectedRoom)
  const hasAnything = startDate || adults > 0

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-ocean/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean to-ocean/90 px-6 py-5">
        <h3 className="font-display text-xl font-bold text-white">Booking Summary</h3>
        <p className="text-white/60 text-sm font-medium mt-0.5">Your selections appear here</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Dates */}
        <div>
          <p className="text-xs font-bold text-ocean/40 uppercase tracking-widest mb-2">Dates</p>
          {startDate ? (
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-sand/20 rounded-xl px-4 py-3 border border-sand/30">
                <p className="text-xs text-ocean/40 font-semibold">Check-in</p>
                <p className="text-base font-bold text-ocean">{formatDate(startDate)}</p>
              </div>
              {endDate && (
                <>
                  <svg className="w-5 h-5 text-coral flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  <div className="flex-1 bg-sand/20 rounded-xl px-4 py-3 border border-sand/30">
                    <p className="text-xs text-ocean/40 font-semibold">Check-out</p>
                    <p className="text-base font-bold text-ocean">{formatDate(endDate)}</p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <p className="text-base text-ocean/25 italic">Not selected yet</p>
          )}
          {nights > 0 && (
            <div className="mt-2 inline-flex items-center bg-coral/10 text-coral font-bold text-sm px-3 py-1 rounded-full">
              {nights} night{nights > 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Separator */}
        <div className="border-t border-sand/30" />

        {/* Guests */}
        <div>
          <p className="text-xs font-bold text-ocean/40 uppercase tracking-widest mb-2">Guests</p>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-base text-ocean/70 font-medium">Adults</span>
              <span className="text-base font-bold text-ocean">{adults}</span>
            </div>
            {children > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-base text-ocean/70 font-medium">Children</span>
                <span className="text-base font-bold text-ocean">{children}</span>
              </div>
            )}
            {infants > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-base text-ocean/70 font-medium">Infants</span>
                <span className="text-base font-bold text-ocean">{infants} <span className="text-ocean/40 text-sm">(free)</span></span>
              </div>
            )}
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-sand/30" />

        {/* Room */}
        <div>
          <p className="text-xs font-bold text-ocean/40 uppercase tracking-widest mb-2">Room</p>
          {room ? (
            <div className="flex items-center gap-3 bg-sand/15 rounded-xl p-3 border border-sand/30">
              <img src={room.img} alt={room.name} className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
              <div>
                <p className="text-base font-bold text-ocean">{room.name}</p>
                <p className="text-sm text-ocean/40 font-medium">{room.desc}</p>
              </div>
            </div>
          ) : (
            <p className="text-base text-ocean/25 italic">Not selected yet</p>
          )}
        </div>

        {/* Pricing */}
        {room && nights > 0 && (
          <>
            <div className="border-t border-sand/30" />
            <div>
              <p className="text-xs font-bold text-ocean/40 uppercase tracking-widest mb-3">Price Details</p>
              <div className="space-y-2">
                <div className="flex justify-between text-base">
                  <span className="text-ocean/60 font-medium">€{Math.round(room.base * (1 - roomDiscount))} × {nights} nights</span>
                  <span className="font-bold text-ocean">€{pricing.total}</span>
                </div>
                {pricing.savings > 0 && (
                  <div className="flex justify-between text-base">
                    <span className="text-seafoam font-semibold">Discount</span>
                    <span className="font-bold text-seafoam">-€{pricing.savings}</span>
                  </div>
                )}
              </div>
              <div className="border-t border-ocean/10 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-ocean">Total</span>
                  <span className="text-3xl font-display font-bold text-ocean">€{pricing.total}</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        <button
          onClick={() => canBook && onConfirm()}
          className={`w-full py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg
            ${canBook
              ? 'bg-cta-gradient text-white hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-sand/30 text-ocean/25 cursor-not-allowed'}`}
        >
          {canBook ? `Confirm & Pay €${pricing.total}` : 'Complete all steps to book'}
        </button>

        {/* Security */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <svg className="w-4 h-4 text-seafoam" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          <p className="text-xs text-ocean/40 font-medium">256-bit SSL · PCI compliant · Free cancellation</p>
        </div>
      </div>
    </div>
  )
}

// ─── Main Booking ──────────────────────────────────────
export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1)

  // Dates
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  // Guests
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  // Room
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [showAllRooms, setShowAllRooms] = useState(false)

  // Details
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [isCompany, setIsCompany] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [companyVat, setCompanyVat] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const totalGuests = adults + children
  const nights = diffDays(startDate, endDate)

  const handleDateSelect = (date) => {
    if (!startDate || (startDate && endDate) || date < startDate) {
      setStartDate(date)
      setEndDate(null)
    } else {
      setEndDate(date)
    }
  }

  // Recommend rooms based on guest count
  const recommendedRooms = useMemo(() => {
    if (totalGuests <= 2) return ['ocean-suite', 'spice-villa']
    if (totalGuests <= 4) return ['spice-villa', 'coral-penthouse']
    return ['coral-penthouse']
  }, [totalGuests])

  const bestMatch = useMemo(() => {
    if (totalGuests <= 2) return 'ocean-suite'
    if (totalGuests <= 4) return 'spice-villa'
    return 'coral-penthouse'
  }, [totalGuests])

  // Discount calculation
  const roomDiscount = useMemo(() => {
    let d = 0
    if (nights >= 14) d = 0.20
    else if (nights >= 10) d = 0.15
    else if (nights >= 7) d = 0.10
    else if (nights >= 5) d = 0.05
    if (totalGuests >= 6) d += 0.08
    else if (totalGuests >= 4) d += 0.05
    return Math.min(d, 0.25)
  }, [nights, totalGuests])

  const pricing = useMemo(() => {
    if (!selectedRoom || nights <= 0) return { perNight: 0, subtotal: 0, discount: 0, savings: 0, total: 0 }
    const room = ROOMS.find(r => r.id === selectedRoom)
    const base = room.base
    const combinedDiscount = roomDiscount
    const discountedPerNight = Math.round(base * (1 - combinedDiscount))
    const subtotal = base * nights
    const total = discountedPerNight * nights
    const savings = subtotal - total
    return { perNight: discountedPerNight, subtotal, discount: combinedDiscount, savings, total }
  }, [selectedRoom, nights, totalGuests, roomDiscount])

  const canBook = firstName && lastName && email && cardNumber && selectedRoom && nights > 0

  const handleCardNumber = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 16)
    const formatted = clean.replace(/(.{4})/g, '$1 ').trim()
    setCardNumber(formatted)
  }

  const handleExpiry = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 4)
    if (clean.length >= 3) setCardExpiry(clean.slice(0, 2) + '/' + clean.slice(2))
    else setCardExpiry(clean)
  }

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const goToStep = (step) => { setCurrentStep(step); scrollUp() }
  const nextStep = () => { setCurrentStep(prev => Math.min(prev + 1, 4)); scrollUp() }
  const prevStep = () => { setCurrentStep(prev => Math.max(prev - 1, 1)); scrollUp() }

  if (confirmed) {
    const room = ROOMS.find(r => r.id === selectedRoom)
    return (
      <div className="pt-20 md:pt-24 min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-5 animate-fade-up">
          <div className="w-28 h-28 rounded-full bg-cta-gradient flex items-center justify-center mx-auto mb-8 shadow-widget">
            <svg className="w-14 h-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-section text-ocean mb-4">Booking Confirmed!</h1>
          <p className="text-ocean/60 text-xl font-medium mb-2">
            {formatDate(startDate)} → {formatDate(endDate)} · {nights} nights
          </p>
          <p className="text-ocean/50 text-lg mb-8">
            {adults} adult{adults > 1 ? 's' : ''}{children > 0 ? `, ${children} child${children > 1 ? 'ren' : ''}` : ''} · {room?.name}
          </p>
          {pricing.savings > 0 && (
            <p className="text-coral font-bold text-xl mb-8">You saved €{pricing.savings} on this booking!</p>
          )}
          <p className="text-ocean/40 text-base mb-8">A confirmation email has been sent to <strong className="text-ocean">{email}</strong></p>
          <Link to="/" className="btn-primary !px-14 !py-5 !text-lg">Back to Home</Link>
        </div>
      </div>
    )
  }

  // Input field styles — high contrast
  const inputClass = `w-full px-5 py-4 bg-white border-2 border-ocean/20 rounded-xl text-lg text-ocean font-medium
    placeholder:text-ocean/30 focus:outline-none focus:border-coral focus:shadow-lg focus:shadow-coral/10 transition-all`

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-8 md:py-14">

        {/* Header */}
        <div className="mb-8">
          <Link to="/properties" className="text-base text-ocean/50 hover:text-ocean transition-colors inline-flex items-center gap-2 mb-4 font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to properties
          </Link>
          <h1 className="font-display text-4xl md:text-5xl text-ocean font-bold">Book Your Stay</h1>
          <p className="text-ocean/50 mt-2 text-lg font-medium">Simple. No hidden fees. Best price guaranteed.</p>
        </div>

        {/* Step Indicator */}
        <StepIndicator currentStep={currentStep} onStepClick={goToStep} />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">

          {/* LEFT: Step Content */}
          <div className="min-w-0">

            {/* ── STEP 1: Dates ── */}
            {currentStep === 1 && (
              <section className="animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cta-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">1</div>
                  <h2 className="font-display text-3xl text-ocean font-bold">Select Your Dates</h2>
                </div>

                {/* Date display bar */}
                <div className="bg-white rounded-2xl shadow-lg border-2 border-ocean/10 p-6 mb-6">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="flex-1">
                      <p className="text-xs font-bold text-ocean/50 uppercase tracking-widest mb-1">Check-in</p>
                      <p className={`text-xl md:text-2xl font-display font-bold ${startDate ? 'text-ocean' : 'text-ocean/20'}`}>
                        {startDate ? formatDate(startDate) : 'Select date'}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-10 h-10 text-coral/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-ocean/50 uppercase tracking-widest mb-1">Check-out</p>
                      <p className={`text-xl md:text-2xl font-display font-bold ${endDate ? 'text-ocean' : 'text-ocean/20'}`}>
                        {endDate ? formatDate(endDate) : 'Select date'}
                      </p>
                    </div>
                    {nights > 0 && (
                      <div className="hidden sm:flex flex-shrink-0 bg-coral/10 rounded-full px-5 py-2.5">
                        <span className="text-base font-bold text-coral">{nights} night{nights > 1 ? 's' : ''}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-sand/30 p-5 md:p-8">
                  <Calendar startDate={startDate} endDate={endDate} onSelect={handleDateSelect} />
                </div>

                {nights >= 5 && (
                  <div className="mt-4 flex items-center gap-2 text-base text-seafoam font-bold animate-fade-in bg-seafoam/10 rounded-xl px-5 py-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {nights >= 14 ? '20% long-stay discount unlocked!' : nights >= 10 ? '15% extended-stay discount!' : nights >= 7 ? '10% weekly discount!' : '5% discount unlocked!'}
                  </div>
                )}

                {/* Next button */}
                <button
                  onClick={nextStep}
                  className="mt-8 w-full py-5 bg-cta-gradient text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  Next: Choose Guests →
                </button>
              </section>
            )}

            {/* ── STEP 2: Guests ── */}
            {currentStep === 2 && (
              <section className="animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cta-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">2</div>
                  <h2 className="font-display text-3xl text-ocean font-bold">Who's Coming?</h2>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border-2 border-ocean/10 p-6 md:p-8 divide-y divide-ocean/10">
                  <GuestCounter label="Adults" subtitle="Ages 13+" value={adults} onChange={setAdults} min={1} max={10} />
                  <GuestCounter label="Children" subtitle="Ages 2–12" value={children} onChange={setChildren} min={0} max={6} />
                  <GuestCounter label="Infants" subtitle="Under 2 · Free" value={infants} onChange={setInfants} min={0} max={3} />
                </div>

                {totalGuests >= 4 && (
                  <div className="mt-4 flex items-center gap-2 text-base text-seafoam font-bold animate-fade-in bg-seafoam/10 rounded-xl px-5 py-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {totalGuests >= 6 ? '8% group discount unlocked!' : '5% group discount unlocked!'}
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-5 bg-white border-2 border-ocean/20 text-ocean text-xl font-bold rounded-xl hover:border-ocean/40 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="flex-[2] py-5 bg-cta-gradient text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    Next: Choose Room →
                  </button>
                </div>
              </section>
            )}

            {/* ── STEP 3: Room ── */}
            {currentStep === 3 && (
              <section className="animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cta-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">3</div>
                  <h2 className="font-display text-3xl text-ocean font-bold">Choose Your Room</h2>
                </div>

                {/* Recommendation banner with room preview */}
                {(() => {
                  const recRoom = ROOMS.find(r => r.id === bestMatch)
                  const discountedPrice = Math.round(recRoom.base * (1 - roomDiscount))
                  return (
                    <div className="bg-gradient-to-br from-seafoam/10 via-white to-coral/5 border-2 border-seafoam/30 rounded-2xl overflow-hidden mb-6 shadow-lg">
                      {/* Header */}
                      <div className="bg-seafoam/15 px-6 py-4 flex items-center gap-3 border-b border-seafoam/20">
                        <div className="w-10 h-10 rounded-full bg-seafoam text-white flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-ocean">Perfect match for {totalGuests} guest{totalGuests > 1 ? 's' : ''}!</p>
                          <p className="text-sm text-ocean/50 font-medium">Based on your group size, we recommend:</p>
                        </div>
                      </div>

                      {/* Room preview card */}
                      <div className="p-5 md:p-6">
                        <div className="flex flex-col sm:flex-row gap-5">
                          {/* Photo */}
                          <div className="sm:w-56 h-48 sm:h-auto rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                            <img src={recRoom.img} alt={recRoom.name} className="w-full h-full object-cover" />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <h4 className="font-display text-2xl font-bold text-ocean mb-2">{recRoom.name}</h4>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-ocean/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" /></svg>
                                <span className="text-base text-ocean/70 font-medium">Up to {recRoom.maxGuests} guests</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-ocean/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" /></svg>
                                <span className="text-base text-ocean/70 font-medium">{recRoom.area}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-ocean/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313" /></svg>
                                <span className="text-base text-ocean/70 font-medium">{recRoom.beds}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-ocean/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span className="text-base text-ocean/70 font-medium">{recRoom.bathrooms} bathroom{recRoom.bathrooms > 1 ? 's' : ''}</span>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {recRoom.features.map(f => (
                                <span key={f} className="text-sm font-semibold text-seafoam bg-seafoam/10 px-3 py-1.5 rounded-full">{f}</span>
                              ))}
                            </div>

                            {/* Price */}
                            <div className="flex items-end gap-2">
                              {roomDiscount > 0 && <span className="text-base text-ocean/30 line-through">€{recRoom.base}</span>}
                              <span className="text-3xl font-display font-bold text-ocean">€{discountedPrice}</span>
                              <span className="text-base text-ocean/40 mb-0.5 font-medium">/ night</span>
                              {roomDiscount > 0 && (
                                <span className="ml-2 text-sm font-bold text-white bg-cta-gradient px-3 py-1 rounded-full shadow-md">-{Math.round(roomDiscount * 100)}%</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 mt-6">
                          <button
                            onClick={() => { setSelectedRoom(bestMatch); setShowAllRooms(false); setCurrentStep(4); scrollUp() }}
                            className="flex-1 py-4 bg-cta-gradient text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                          >
                            I agree — select this room
                          </button>
                          <button
                            onClick={() => setShowAllRooms(true)}
                            className="flex-1 py-4 bg-white border-2 border-ocean/20 text-ocean text-lg font-bold rounded-xl hover:border-ocean/40 transition-all"
                          >
                            Show me all rooms
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })()}

                {/* Room cards */}
                {(showAllRooms || selectedRoom) && (
                  <div className="space-y-5 animate-fade-up">
                    {ROOMS.map(room => (
                      <RoomCard
                        key={room.id}
                        room={room}
                        selected={selectedRoom === room.id}
                        discount={roomDiscount}
                        onClick={() => { setSelectedRoom(room.id); setCurrentStep(4); scrollUp() }}
                        recommended={recommendedRooms.includes(room.id)}
                      />
                    ))}
                  </div>
                )}

                {/* Navigation */}
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-5 bg-white border-2 border-ocean/20 text-ocean text-xl font-bold rounded-xl hover:border-ocean/40 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={nextStep}
                    className={`flex-[2] py-5 text-xl font-bold rounded-xl shadow-lg transition-all
                      ${selectedRoom
                        ? 'bg-cta-gradient text-white hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]'
                        : 'bg-sand/30 text-ocean/30 cursor-not-allowed'}`}
                  >
                    Next: Your Details →
                  </button>
                </div>
              </section>
            )}

            {/* ── STEP 4: Details + Payment ── */}
            {currentStep === 4 && (
              <section className="animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cta-gradient text-white flex items-center justify-center text-xl font-bold shadow-lg">4</div>
                  <h2 className="font-display text-3xl text-ocean font-bold">Your Details & Payment</h2>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border-2 border-ocean/10 p-6 md:p-8">
                  {/* Personal info */}
                  <h3 className="font-display text-2xl text-ocean font-bold mb-6">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">First Name</label>
                      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="John" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">Last Name</label>
                      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Smith" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    <div>
                      <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">Email</label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">Phone</label>
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+40 700 000 000" className={inputClass} />
                    </div>
                  </div>

                  {/* Company toggle */}
                  <div className="mb-8 pb-8 border-b-2 border-ocean/10">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div
                        onClick={() => setIsCompany(!isCompany)}
                        className={`relative w-16 h-9 rounded-full transition-all duration-300 ${isCompany ? 'bg-cta-gradient' : 'bg-ocean/15'}`}
                      >
                        <div className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-md transition-transform duration-300 ${isCompany ? 'translate-x-7' : ''}`} />
                      </div>
                      <span className="text-lg text-ocean font-bold group-hover:text-coral transition-colors">Book on behalf of a company</span>
                    </label>
                    {isCompany && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 animate-fade-up">
                        <div>
                          <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">Company Name</label>
                          <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Company SRL" className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">VAT Number</label>
                          <input type="text" value={companyVat} onChange={e => setCompanyVat(e.target.value)} placeholder="RO12345678" className={inputClass} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Payment */}
                  <h3 className="font-display text-2xl text-ocean font-bold mb-6">Payment Details</h3>
                  <div className="space-y-5 mb-6">
                    <div>
                      <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={e => handleCardNumber(e.target.value)}
                        placeholder="0000 0000 0000 0000"
                        className={`${inputClass} tracking-widest placeholder:tracking-widest`}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">Expiry</label>
                        <input type="text" value={cardExpiry} onChange={e => handleExpiry(e.target.value)} placeholder="MM/YY" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ocean/60 uppercase tracking-wider mb-2">CVV</label>
                        <input type="text" value={cardCvv} onChange={e => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))} placeholder="123" className={inputClass} />
                      </div>
                    </div>
                  </div>

                  {/* Security */}
                  <div className="flex items-center gap-3 p-5 rounded-xl bg-seafoam/10 border-2 border-seafoam/20">
                    <svg className="w-6 h-6 text-seafoam flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className="text-base text-ocean/60 font-medium">256-bit SSL encryption · PCI compliant · Free cancellation up to 7 days before</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 py-5 bg-white border-2 border-ocean/20 text-ocean text-xl font-bold rounded-xl hover:border-ocean/40 transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={() => canBook && setConfirmed(true)}
                    className={`flex-[2] py-5 text-xl font-bold rounded-xl shadow-lg transition-all
                      ${canBook
                        ? 'bg-cta-gradient text-white hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]'
                        : 'bg-sand/30 text-ocean/30 cursor-not-allowed'}`}
                  >
                    {canBook ? `Confirm & Pay €${pricing.total}` : 'Complete all fields to book'}
                  </button>
                </div>
              </section>
            )}
          </div>

          {/* RIGHT: Sidebar Summary */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <SummarySidebar
                startDate={startDate}
                endDate={endDate}
                nights={nights}
                adults={adults}
                children={children}
                infants={infants}
                selectedRoom={selectedRoom}
                pricing={pricing}
                roomDiscount={roomDiscount}
                onConfirm={() => canBook && setConfirmed(true)}
                canBook={canBook}
              />
            </div>
          </div>
        </div>

        {/* Mobile summary (bottom of page) */}
        <div className="lg:hidden mt-10">
          <SummarySidebar
            startDate={startDate}
            endDate={endDate}
            nights={nights}
            adults={adults}
            children={children}
            infants={infants}
            selectedRoom={selectedRoom}
            pricing={pricing}
            roomDiscount={roomDiscount}
            onConfirm={() => canBook && setConfirmed(true)}
            canBook={canBook}
          />
        </div>

        <div className="h-20" />
      </div>
    </div>
  )
}
