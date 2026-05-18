export default function SectionHeader({ eyebrow, title, subtitle, className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="font-body text-base text-ocean/50 max-w-lg mt-2">{subtitle}</p>
      )}
    </div>
  )
}
