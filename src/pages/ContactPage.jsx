import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import PageHero from '../components/PageHero'
import QuickRequestForm from '../components/QuickRequestForm'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import ServiceRequestForm from '../components/ServiceRequestForm'
import { businessData } from '../config/businessData'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <SeoHead
        title="Kontakt und Anfrage"
        description="Jetzt Gartenpflege in Leibnitz, Wagna, Gralla, Tillmitsch, Strass und Umgebung anfragen. Wir melden uns zeitnah zurueck."
        pathname="/kontakt"
      />
      <LocalBusinessSchema />

      <PageHero
        eyebrow={t('contactPage.heroEyebrow')}
        title={t('contactPage.heroTitle')}
        text={t('contactPage.heroText')}
      />

      <section className="section-spacing pt-0">
        <div className="container-width">
          <QuickRequestForm />
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle title={t('contactPage.formTitle')} description={t('contactPage.formDescription')} />
            <ServiceRequestForm />
          </div>

          <aside className="glass-card h-fit rounded-2xl p-6 sm:p-8">
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
            <p className="mt-3 text-sm text-olive-700">{businessData.serviceArea}</p>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ContactPage
