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
    <div className="flex items-center" aria-label="Language switcher">
      <label htmlFor="language-select" className="sr-only">
        Sprache
      </label>
      <select
        id="language-select"
        value={currentLanguage.slice(0, 2)}
        onChange={(event) => handleLanguageChange(event.target.value)}
        className="rounded border border-olive-300 bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wide text-olive-800 outline-none transition focus:border-olive-500"
      >
        {languages.map((lng) => (
          <option key={lng} value={lng}>
            {lng.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
