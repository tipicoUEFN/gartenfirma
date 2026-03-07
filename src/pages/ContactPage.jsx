import { Mail, MapPin, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { businessData } from '../config/businessData'

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir freuen uns auf Ihre Anfrage"
        text="Ob laufende Gartenpflege oder ein konkretes Einzelprojekt: Wir melden uns zeitnah mit einer fundierten Rueckmeldung."
      />

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle title="Nachricht senden" description="Teilen Sie uns Ihr Anliegen mit. Wir melden uns persoenlich bei Ihnen." />
            <ContactForm />
          </div>

          <aside className="glass-card h-fit rounded-2xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">Direkt erreichbar</p>
            <ul className="mt-5 space-y-4 text-sm text-olive-700 sm:text-base">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-olive-700" />
                <a href={`tel:${businessData.phone}`} className="font-semibold hover:text-olive-800">
                  {businessData.phone}
                </a>
              </li>
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
            <p className="mt-7 text-xs uppercase tracking-[0.2em] text-olive-600">Einsatzgebiet</p>
            <p className="mt-3 text-sm text-olive-700">{businessData.serviceArea}</p>
          </aside>
        </div>
      </section>
    </>
  )
}

export default ContactPage
