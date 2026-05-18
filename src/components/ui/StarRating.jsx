import Icon from './Icon'

export default function StarRating({ rating, className = 'w-4 h-4 text-spice' }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </div>
  )
}
