import { useRef } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import QuickRequestForm from '../components/QuickRequestForm'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import ServiceRequestForm from '../components/ServiceRequestForm'
import { businessData } from '../config/businessData'

function ContactPage() {
  const { t } = useTranslation()
  const quickSectionRef = useRef(null)
  const detailedSectionRef = useRef(null)
  const quickFirstInputRef = useRef(null)
  const detailedFirstInputRef = useRef(null)

  const requestFlow = [
    {
      title: t('contactPage.flow.quick.title'),
      challenge: t('contactPage.flow.quick.challenge'),
      approach: t('contactPage.flow.quick.approach'),
      result: t('contactPage.flow.quick.result'),
    },
    {
      title: t('contactPage.flow.detailed.title'),
      challenge: t('contactPage.flow.detailed.challenge'),
      approach: t('contactPage.flow.detailed.approach'),
      result: t('contactPage.flow.detailed.result'),
    },
  ]

  const scrollToForm = (sectionRef, inputRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      inputRef.current?.focus()
    }, 350)
  }

  return (
    <>
      <SeoHead
        title={t('contactPage.seoTitle')}
        description={t('contactPage.seoDescription')}
        pathname="/kontakt"
      />
      <LocalBusinessSchema />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('contactPage.flowSection.eyebrow')}
            title={t('contactPage.flowSection.title')}
            description={t('contactPage.flowSection.description')}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <button
              type="button"
              onClick={() => scrollToForm(quickSectionRef, quickFirstInputRef)}
              className="rounded-2xl border border-olive-200 bg-white p-6 text-left shadow-sm transition hover:border-olive-400 hover:bg-olive-50"
            >
              <p className="text-sm font-semibold text-olive-800">1 {requestFlow[0].title}</p>
              <p className="mt-3 text-sm text-olive-700"><span className="font-semibold">{t('projectLabels.challenge')}:</span> {requestFlow[0].challenge}</p>
              <p className="mt-2 text-sm text-olive-700"><span className="font-semibold">{t('projectLabels.approach')}:</span> {requestFlow[0].approach}</p>
              <p className="mt-2 text-sm text-olive-700"><span className="font-semibold">{t('projectLabels.result')}:</span> {requestFlow[0].result}</p>
            </button>

            <button
              type="button"
              onClick={() => scrollToForm(detailedSectionRef, detailedFirstInputRef)}
              className="rounded-2xl border border-olive-200 bg-white p-6 text-left shadow-sm transition hover:border-olive-400 hover:bg-olive-50"
            >
              <p className="text-sm font-semibold text-olive-800">2 {requestFlow[1].title}</p>
              <p className="mt-3 text-sm text-olive-700"><span className="font-semibold">{t('projectLabels.challenge')}:</span> {requestFlow[1].challenge}</p>
              <p className="mt-2 text-sm text-olive-700"><span className="font-semibold">{t('projectLabels.approach')}:</span> {requestFlow[1].approach}</p>
              <p className="mt-2 text-sm text-olive-700"><span className="font-semibold">{t('projectLabels.result')}:</span> {requestFlow[1].result}</p>
            </button>
          </div>
        </div>
      </section>

      <section ref={quickSectionRef} className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('contactPage.quick.eyebrow')}
            title={t('contactPage.quick.title')}
            description={t('contactPage.quick.description')}
          />
          <QuickRequestForm firstInputRef={quickFirstInputRef} />
        </div>
      </section>

      <section ref={detailedSectionRef} className="section-spacing">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('contactPage.detailed.eyebrow')}
            title={t('contactPage.formTitle')}
            description={t('contactPage.detailed.description')}
          />
          <ServiceRequestForm firstInputRef={detailedFirstInputRef} />
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-width">
          <aside className="glass-card h-fit rounded-2xl p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">{t('contactPage.direct')}</p>
                <ul className="mt-5 space-y-4 text-sm text-olive-700 sm:text-base">
                  {businessData.phoneContacts.map((contact) => (
                    <li key={contact.phone} className="flex items-start gap-3">
                      <Phone size={18} className="mt-0.5 shrink-0 text-olive-700" />
                      <a href={`tel:${contact.phone}`} className="font-semibold hover:text-olive-800">
                        {contact.label}: {contact.phone}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <Mail size={18} className="mt-0.5 shrink-0 text-olive-700" />
                    <a href={`mailto:${businessData.email}`} className="font-semibold hover:text-olive-800">
                      {businessData.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-olive-700" />
                    <span>{businessData.address}</span>
                  </li>
                </ul>
                <p className="mt-7 text-xs uppercase tracking-[0.2em] text-olive-600">{t('contactPage.serviceArea')}</p>
                <p className="mt-3 text-sm text-olive-700">{t('common.serviceAreaValue')}</p>
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">Google Maps</p>
                <div className="overflow-hidden rounded-2xl border border-olive-200 bg-white shadow-sm">
                  <iframe
                    title="PR Gartenservice Standort auf Google Maps"
                    src={businessData.mapEmbedUrl}
                    className="h-72 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={businessData.mapExternalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-olive-700 hover:text-olive-900"
                >
                  In Google Maps öffnen
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ContactPage
