import { useTranslation } from 'react-i18next'

function ContactForm() {
  const { t } = useTranslation()

  return (
    <form className="glass-card space-y-5 rounded-2xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-olive-800">
          {t('contactForm.firstNameLabel')}
          <input
            type="text"
            placeholder={t('contactForm.firstNamePlaceholder')}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          {t('contactForm.lastNameLabel')}
          <input
            type="text"
            placeholder={t('contactForm.lastNamePlaceholder')}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-olive-800">
          {t('contactForm.emailLabel')}
          <input
            type="email"
            placeholder={t('contactForm.emailPlaceholder')}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          {t('contactForm.phoneLabel')}
          <input
            type="tel"
            placeholder={t('contactForm.phonePlaceholder')}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-olive-800">
        {t('contactForm.messageLabel')}
        <textarea
          rows={5}
          placeholder={t('contactForm.messagePlaceholder')}
          className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 sm:w-auto"
      >
        {t('contactForm.submit')}
      </button>
      <p className="text-xs text-olive-600">{t('contactForm.notice')}</p>
    </form>
  )
}

export default ContactForm
