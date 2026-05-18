const brands = ['TripAdvisor', 'Condé Nast Traveler', 'Forbes Travel', 'Lonely Planet', 'Travel + Leisure']

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-sand/50">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-6">
        <div className="flex items-center justify-between gap-8 overflow-x-auto scrollbar-hide">
          <p className="text-xs text-ocean/30 font-medium whitespace-nowrap tracking-wide uppercase">As featured in</p>
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg md:text-xl text-ocean/20 whitespace-nowrap hover:text-ocean/40 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
