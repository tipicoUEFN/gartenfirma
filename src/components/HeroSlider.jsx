import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function HeroSlider({ slides, intervalMs = 5000 }) {
  const [current, setCurrent] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    if (!slides || slides.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, intervalMs)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [intervalMs, slides])

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <div className="hero-slider" aria-label={t('common.heroSliderRegion')} role="region">
      {slides.map((slide, index) => {
        const isActive = index === current

        return (
          <figure
            key={slide.src}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            aria-hidden={isActive ? 'false' : 'true'}
          >
            <img
              src={slide.src}
              srcSet={slide.srcSet}
              sizes={slide.sizes || '(max-width: 1024px) 100vw, 42vw'}
              width={slide.width || 1600}
              height={slide.height || 1200}
              alt={slide.alt}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          </figure>
        )
      })}
    </div>
  )
}

export default HeroSlider