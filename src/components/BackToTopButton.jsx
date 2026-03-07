import { ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-24 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-olive-300 bg-white text-olive-800 shadow-lg transition hover:bg-olive-100 lg:bottom-6 lg:right-6"
      aria-label={t('common.backToTop')}
      title={t('common.backToTop')}
    >
      <ChevronUp size={20} />
    </button>
  )
}

export default BackToTopButton
