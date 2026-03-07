import { useTranslation } from 'react-i18next'

const languages = ['de', 'sl', 'hr', 'hu', 'en']

function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'de'

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('i18nextLng', lng)
  }

  return (
    <div className="flex items-center gap-2" aria-label="Language switcher">
      {languages.map((lng) => {
        const isActive = currentLanguage.startsWith(lng)

        return (
          <button
            key={lng}
            type="button"
            onClick={() => handleLanguageChange(lng)}
            className={`rounded px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide transition ${
              isActive ? 'bg-olive-700 text-white' : 'text-olive-700 hover:bg-olive-100'
            }`}
            aria-pressed={isActive}
          >
            {lng}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher
