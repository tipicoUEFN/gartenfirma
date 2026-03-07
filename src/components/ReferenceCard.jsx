import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function ReferenceCard({ title, location, text, image, fallbackImage }) {
  const { t } = useTranslation()
  const [fallbackUsed, setFallbackUsed] = useState(false)
  const [imageLoadFailed, setImageLoadFailed] = useState(false)

  const currentImage = fallbackUsed && fallbackImage ? fallbackImage : image

  const handleImageError = () => {
    if (fallbackImage && !fallbackUsed) {
      setFallbackUsed(true)
      return
    }
    setImageLoadFailed(true)
  }

  const showImage = currentImage && !imageLoadFailed

  return (
    <article className="glass-card overflow-hidden rounded-2xl p-5">
      {showImage ? (
        <div className="overflow-hidden rounded-xl border border-olive-200 bg-white">
          <img
            src={currentImage}
            alt={title}
            loading="lazy"
            onError={handleImageError}
            className="aspect-[3/2] w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[3/2] items-center justify-center rounded-xl border border-dashed border-olive-300 bg-olive-100/60 px-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-olive-700">
          {t('references.imageComingSoon')}
        </div>
      )}
      <h3 className="mt-5 text-base font-semibold text-olive-800">{title}</h3>
      <p className="mt-1 text-sm text-olive-600">{location}</p>
      <p className="mt-3 text-sm leading-relaxed text-olive-700">{text}</p>
    </article>
  )
}

export default ReferenceCard
