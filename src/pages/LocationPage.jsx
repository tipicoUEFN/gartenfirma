import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import { locationPages } from '../config/locationPages'

function LocationPage() {
  const { slug } = useParams()
  const location = locationPages.find((item) => item.slug === slug)

  if (!location) {
    return <Navigate to="/" replace />
  }

  const description = `${location.title} fuer Privatkunden, Firmen und Wohnanlagen. Rasenpflege, Heckenpflege und laufende Betreuung in ${location.town} und Umgebung.`
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Welche Leistungen bieten Sie in ${location.town} an?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Wir bieten in ${location.town} unter anderem Rasenpflege, Heckenpflege, Laubarbeiten und laufende Betreuung von Aussenanlagen an.`,
        },
      },
      {
        '@type': 'Question',
        name: `Betreuen Sie in ${location.town} auch Firmen und Wohnanlagen?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ja, wir betreuen in ${location.town} Privatgaerten, Firmenflaechen, Wohnanlagen und auf Anfrage auch oeffentliche Einrichtungen.`,
        },
      },
      {
        '@type': 'Question',
        name: `Wie schnell kann ich in ${location.town} ein Angebot erhalten?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nach Ihrer Anfrage melden wir uns in der Regel innerhalb von 24 Stunden (Mo-Fr) mit einer ersten Rueckmeldung.',
        },
      },
      {
        '@type': 'Question',
        name: `Ist auch eine laufende Gartenpflege in ${location.town} moeglich?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Ja, wir bieten in ${location.town} planbare Pflegeintervalle wie woechentlich, 14-taegig oder monatlich an.`,
        },
      },
    ],
  }

  return (
    <>
      <SeoHead
        title={location.title}
        description={description}
        pathname={`/${location.slug}`}
        structuredData={faqSchema}
      />

      <PageHero
        eyebrow="Regionaler Gartenservice"
        title={location.heroTitle}
        text={location.intro}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white hover:bg-olive-800"
          >
            Angebot fuer {location.town} anfragen
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/leistungen"
            className="inline-flex items-center gap-2 rounded-full border border-olive-300 bg-white px-5 py-3 text-sm font-semibold text-olive-800"
          >
            Leistungen ansehen
          </Link>
        </div>
      </PageHero>

      <section className="section-spacing pt-0">
        <div className="container-width grid gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle title={`Unsere Leistungen in ${location.town}`} />
            <ul className="space-y-3">
              {location.services.map((service) => (
                <li key={service} className="flex items-start gap-3 rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm text-olive-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-olive-700" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle title={`Warum Kundinnen und Kunden in ${location.town} uns vertrauen`} />
            <ul className="space-y-3">
              {location.trust.map((point) => (
                <li key={point} className="rounded-xl border border-olive-200 bg-olive-50/70 px-4 py-3 text-sm text-olive-700">
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-olive-800 p-6 text-olive-100">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-200">Regionaler Hinweis</p>
              <p className="mt-3 text-sm leading-relaxed">
                Viele Anfragen in {location.town} betreffen laufende Gartenpflege und regelmaessige Betreuung. Wir planen die Einsaetze so,
                dass Termine stabil bleiben und Aussenbereiche dauerhaft gepflegt wirken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default LocationPage
