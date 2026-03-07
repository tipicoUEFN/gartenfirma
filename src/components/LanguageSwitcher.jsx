import { useTranslation } from 'react-i18next'

const languages = ['de-AT', 'sl', 'hr', 'hu', 'en']

const normalizeLanguage = (language) => {
  if (!language) return 'de-AT'
  if (language.toLowerCase().startsWith('de')) return 'de-AT'
  return languages.includes(language) ? language : 'de-AT'
}

function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage || i18n.language)

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('i18nextLng', lng)
  }

  return (
    <div className="flex items-center" aria-label="Language switcher">
      <label htmlFor="language-select" className="sr-only">
        {t('language.label')}
      </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(event) => handleLanguageChange(event.target.value)}
        className="rounded border border-olive-300 bg-white px-2 py-1 text-xs font-semibold uppercase tracking-wide text-olive-800 outline-none transition focus:border-olive-500"
      >
        {languages.map((lng) => (
          <option key={lng} value={lng}>
            {lng === 'de-AT' ? 'DE' : lng.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
