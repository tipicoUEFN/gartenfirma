function ReferenceCard({ title, location, text, beforeImage, afterImage }) {
  return (
    <article className="glass-card overflow-hidden rounded-2xl p-5">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-dashed border-olive-300 bg-olive-100/60 p-4 text-xs font-semibold uppercase tracking-wider text-olive-700">
          Vorher
          <div className="mt-3 overflow-hidden rounded-md border border-olive-200">
            {beforeImage ? (
              <img src={beforeImage} alt={`Vorher: ${title}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="h-20 rounded-md bg-olive-200/70" />
            )}
          </div>
        </div>
        <div className="rounded-xl border border-dashed border-olive-300 bg-white p-4 text-xs font-semibold uppercase tracking-wider text-olive-700">
          Nachher
          <div className="mt-3 overflow-hidden rounded-md border border-olive-200">
            {afterImage ? (
              <img src={afterImage} alt={`Nachher: ${title}`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            ) : (
              <div className="h-20 rounded-md bg-olive-300/65" />
            )}
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-base font-semibold text-olive-800">{title}</h3>
      <p className="mt-1 text-sm text-olive-600">{location}</p>
      <p className="mt-3 text-sm leading-relaxed text-olive-700">{text}</p>
    </article>
  )
}

export default ReferenceCard
