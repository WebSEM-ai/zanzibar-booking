import { useState } from 'react'
import { Link } from 'react-router-dom'

import villaImg from '../../photo/f5a20891-522b-48ee-a3c7-48939385e7b9.jpg'

const steps = ['Trip Details', 'Guest Information', 'Payment']

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    checkIn: '', checkOut: '', guests: 2, roomType: 'standard',
    firstName: '', lastName: '', email: '', phone: '', country: '', requests: '',
    cardName: '', cardNumber: '', expiry: '', cvv: '',
  })

  const updateField = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }))

  const nights = 5
  const pricePerNight = 450
  const subtotal = pricePerNight * nights
  const serviceFee = 85
  const total = subtotal + serviceFee

  const canProceed = () => {
    if (currentStep === 0) return formData.checkIn && formData.checkOut
    if (currentStep === 1) return formData.firstName && formData.lastName && formData.email
    return true
  }

  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-ivory">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-8 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <Link to="/properties" className="text-sm text-ocean/40 hover:text-ocean transition-colors inline-flex items-center gap-1 mb-4">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to property
          </Link>
          <h1 className="font-display text-section text-ocean">Complete your booking</h1>
        </div>

        {/* Progress Stepper */}
        <div className="flex items-center gap-0 mb-12 max-w-xl">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center flex-1">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300
                  ${i <= currentStep ? 'bg-cta-gradient text-white shadow-lg' : 'bg-sand text-ocean/30'}`}>
                  {i < currentStep ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`text-sm font-medium hidden sm:block transition-colors ${i <= currentStep ? 'text-ocean' : 'text-ocean/30'}`}>
                  {step}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-[2px] mx-4 rounded-full transition-colors duration-300
                  ${i < currentStep ? 'bg-coral' : 'bg-sand'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Form Area */}
          <div className="flex-1 min-w-0">
            {/* Step 1: Trip Details */}
            {currentStep === 0 && (
              <div className="animate-fade-up">
                <h2 className="font-display text-2xl text-ocean mb-6">When are you traveling?</h2>
                <div className="bg-white rounded-card shadow-card p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Check-in Date" type="date" value={formData.checkIn}
                      onChange={(e) => updateField('checkIn', e.target.value)} />
                    <InputField label="Check-out Date" type="date" value={formData.checkOut}
                      onChange={(e) => updateField('checkOut', e.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-2">Guests</label>
                      <select
                        value={formData.guests}
                        onChange={(e) => updateField('guests', parseInt(e.target.value))}
                        className="w-full px-4 py-3.5 bg-sand/20 border border-sand rounded-input text-sm text-ocean
                          focus:outline-none focus:border-ocean/30 focus:bg-white transition-all"
                      >
                        {[1,2,3,4,5,6,7,8].map((n) => (
                          <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-2">Room Type</label>
                      <select
                        value={formData.roomType}
                        onChange={(e) => updateField('roomType', e.target.value)}
                        className="w-full px-4 py-3.5 bg-sand/20 border border-sand rounded-input text-sm text-ocean
                          focus:outline-none focus:border-ocean/30 focus:bg-white transition-all"
                      >
                        <option value="standard">Standard Room</option>
                        <option value="deluxe">Deluxe Suite</option>
                        <option value="villa">Private Villa</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Guest Information */}
            {currentStep === 1 && (
              <div className="animate-fade-up">
                <h2 className="font-display text-2xl text-ocean mb-6">Tell us about yourself</h2>
                <div className="bg-white rounded-card shadow-card p-6 md:p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First Name" type="text" value={formData.firstName} placeholder="Enter your first name"
                      onChange={(e) => updateField('firstName', e.target.value)} />
                    <InputField label="Last Name" type="text" value={formData.lastName} placeholder="Enter your last name"
                      onChange={(e) => updateField('lastName', e.target.value)} />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="Email" type="email" value={formData.email} placeholder="your@email.com"
                      onChange={(e) => updateField('email', e.target.value)} />
                    <InputField label="Phone" type="tel" value={formData.phone} placeholder="+1 (555) 000-0000"
                      onChange={(e) => updateField('phone', e.target.value)} />
                  </div>
                  <InputField label="Country" type="text" value={formData.country} placeholder="Where are you traveling from?"
                    onChange={(e) => updateField('country', e.target.value)} />
                  <div>
                    <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-2">Special Requests</label>
                    <textarea
                      value={formData.requests}
                      onChange={(e) => updateField('requests', e.target.value)}
                      placeholder="Dietary needs, celebrations, accessibility requirements..."
                      rows={3}
                      className="w-full px-4 py-3.5 bg-sand/20 border border-sand rounded-input text-sm text-ocean
                        placeholder:text-ocean/30 focus:outline-none focus:border-ocean/30 focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 2 && (
              <div className="animate-fade-up">
                <h2 className="font-display text-2xl text-ocean mb-6">Payment details</h2>
                <div className="bg-white rounded-card shadow-card p-6 md:p-8 space-y-6">
                  <InputField label="Name on Card" type="text" value={formData.cardName} placeholder="Full name as on card"
                    onChange={(e) => updateField('cardName', e.target.value)} />
                  <InputField label="Card Number" type="text" value={formData.cardNumber} placeholder="0000 0000 0000 0000"
                    onChange={(e) => updateField('cardNumber', e.target.value)} />
                  <div className="grid grid-cols-2 gap-6">
                    <InputField label="Expiry Date" type="text" value={formData.expiry} placeholder="MM/YY"
                      onChange={(e) => updateField('expiry', e.target.value)} />
                    <InputField label="CVV" type="text" value={formData.cvv} placeholder="123"
                      onChange={(e) => updateField('cvv', e.target.value)} />
                  </div>

                  <div className="p-4 rounded-card bg-seafoam/10 border border-seafoam/20">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-ocean mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                      <div>
                        <p className="text-sm font-medium text-ocean">Secure & encrypted</p>
                        <p className="text-xs text-ocean/50 mt-0.5">Your payment details are protected with bank-level encryption.</p>
                      </div>
                    </div>
                  </div>

                  {/* Cancellation Policy */}
                  <div className="pt-4 border-t border-sand/50">
                    <h3 className="text-sm font-semibold text-ocean mb-2">Cancellation Policy</h3>
                    <p className="text-xs text-ocean/50 leading-relaxed">
                      Free cancellation up to 7 days before check-in. After that, the first night is non-refundable.
                      Full refund if cancelled within 48 hours of booking.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              {currentStep > 0 ? (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="btn-outline"
                >
                  Back
                </button>
              ) : <div />}

              {currentStep < steps.length - 1 ? (
                <button
                  onClick={() => canProceed() && setCurrentStep(currentStep + 1)}
                  className={`btn-primary ${!canProceed() ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Continue
                </button>
              ) : (
                <button className="btn-primary !px-12 !py-4 !text-base">
                  Confirm & Pay ${total}
                </button>
              )}
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:w-[360px] flex-shrink-0">
            <div className="sticky top-28 bg-white rounded-frame shadow-card overflow-hidden border border-sand/30">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={villaImg} alt="Bahari Beach House" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="text-xs text-seafoam font-medium bg-seafoam/10 px-2 py-0.5 rounded-pill">Nungwi</span>
                <h3 className="font-display text-xl font-semibold text-ocean mt-2">Bahari Beach House</h3>
                <div className="flex items-center gap-1 mt-2 text-spice">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-semibold">4.9</span>
                  <span className="text-[10px] text-ocean/40">(124 reviews)</span>
                </div>

                <div className="mt-6 pt-6 border-t border-sand/50 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ocean/50">${pricePerNight} x {nights} nights</span>
                    <span className="text-ocean">${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-ocean/50">Service fee</span>
                    <span className="text-ocean">${serviceFee}</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold text-base pt-3 border-t border-sand/50">
                    <span className="text-ocean">Total</span>
                    <span className="text-ocean">${total}</span>
                  </div>
                </div>

                {formData.checkIn && formData.checkOut && (
                  <div className="mt-4 p-3 rounded-card bg-sand/20">
                    <div className="flex items-center justify-between text-xs text-ocean/50">
                      <span>{formData.checkIn}</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span>{formData.checkOut}</span>
                    </div>
                    <p className="text-xs text-ocean/40 text-center mt-1">{formData.guests} guest{formData.guests > 1 ? 's' : ''}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InputField({ label, type, value, placeholder, onChange }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-ocean/60 uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 bg-sand/20 border border-sand rounded-input text-sm text-ocean
          placeholder:text-ocean/30 focus:outline-none focus:border-ocean/30 focus:bg-white transition-all"
      />
    </div>
  )
}
