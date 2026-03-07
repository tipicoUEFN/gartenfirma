import { useState } from 'react'

function ReferenceCard({ title, location, text, image }) {
  const [imageLoadFailed, setImageLoadFailed] = useState(false)
  const showImage = image && !imageLoadFailed

  return (
    <article className="glass-card overflow-hidden rounded-2xl p-5">
      {showImage ? (
        <div className="overflow-hidden rounded-xl border border-olive-200 bg-white">
          <img
            src={image}
            alt={title}
            loading="lazy"
            onError={() => setImageLoadFailed(true)}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center rounded-xl border border-dashed border-olive-300 bg-olive-100/60 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-olive-700">
          Bild folgt: /images/references/refX.png
        </div>
      )}
      <h3 className="mt-5 text-base font-semibold text-olive-800">{title}</h3>
      <p className="mt-1 text-sm text-olive-600">{location}</p>
      <p className="mt-3 text-sm leading-relaxed text-olive-700">{text}</p>
    </article>
  )
}

export default ReferenceCard
