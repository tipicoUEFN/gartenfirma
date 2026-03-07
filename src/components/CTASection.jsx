import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="section-spacing">
      <div className="container-width">
        <div className="overflow-hidden rounded-3xl bg-olive-800 px-7 py-10 text-white shadow-xl sm:px-12 sm:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-200">{t('cta.eyebrow')}</p>
          <h2 className="headline mt-4 max-w-3xl text-3xl sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-olive-100 sm:text-base">
            {t('cta.text')}
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-olive-800 transition hover:bg-olive-100"
          >
            {t('cta.button')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection
