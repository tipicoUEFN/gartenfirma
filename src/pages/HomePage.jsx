import { ArrowRight, CalendarCheck, CheckCircle2, Clock3, Flower2, Leaf, MapPin, Scissors, ShieldCheck, Shovel, Sprout, Star, Trees, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import TrustCard from '../components/TrustCard'
import { businessData } from '../config/businessData'
import { locationPages } from '../config/locationPages'
import { homepageImages, referenceProjects } from '../config/imageLibrary'

function HomePage() {
  const { t } = useTranslation()
  const references = referenceProjects.slice(0, 3).map((project, index) => ({
    ...project,
    title: t(`references.projects.${index + 1}.title`),
    location: t(`references.projects.${index + 1}.location`),
    text: t(`references.projects.${index + 1}.text`),
  }))

  const services = [
    {
      icon: Shovel,
      title: t('home.services.lawn.title'),
      description: t('home.services.lawn.description'),
    },
    {
      icon: Scissors,
      title: t('home.services.hedge.title'),
      description: t('home.services.hedge.description'),
    },
    {
      icon: Flower2,
      title: t('home.services.beds.title'),
      description: t('home.services.beds.description'),
    },
    {
      icon: Trees,
      title: t('home.services.trees.title'),
      description: t('home.services.trees.description'),
    },
    {
      icon: Sprout,
      title: t('home.services.season.title'),
      description: t('home.services.season.description'),
    },
    {
      icon: Leaf,
      title: t('home.services.ongoing.title'),
      description: t('home.services.ongoing.description'),
    },
  ]

  const trustItems = [
    {
      icon: ShieldCheck,
      title: t('home.why.reliable.title'),
      text: t('home.why.reliable.text'),
    },
    {
      icon: Clock3,
      title: t('home.why.punctual.title'),
      text: t('home.why.punctual.text'),
    },
    {
      icon: Users,
      title: t('home.why.personal.title'),
      text: t('home.why.personal.text'),
    },
  ]

  const heroTrustItems = [
    { icon: Star, label: 'Über 100 gepflegte Gärten in der Region' },
    { icon: Star, label: 'Privat- und Firmenkunden' },
    { icon: Star, label: 'Zuverlässig und pünktlich' },
  ]

  const heroServiceList = ['Rasenpflege', 'Heckenschnitt', 'Laufende Betreuung']

  // Demo cards only. Replace with real, permission-safe customer feedback later.
  const demoTestimonials = [
    {
      quote: 'Zuverlässig und sauber gearbeitet. Termin eingehalten und Garten tipptopp hinterlassen.',
      source: 'Leibnitz (Demo)',
    },
    {
      quote: 'Kurze Abstimmung, faire Rückmeldung und dann sauber umgesetzt. Genau so soll es sein.',
      source: 'Wagna (Demo)',
    },
    {
      quote: 'Laufende Betreuung funktioniert sehr gut. Freundlich, pünktlich und ordentlich.',
      source: 'Raum Graz (Demo)',
    },
  ]

  return (
    <>
      <SeoHead
        title="Gartenpflege in Leibnitz und Südsteiermark"
        description="PR Gartenservice bietet Rasenmähen, Heckenpflege und laufende Außenanlagenbetreuung in Leibnitz, Graz und Umgebung."
        pathname="/"
      />
      <LocalBusinessSchema />

      <PageHero
        eyebrow="PR Gartenservice"
        title="Gartenpflege aus Leibnitz"
        text="Zuverlässig für Privatgärten, Firmenflächen und Wohnanlagen im Großraum Leibnitz, Graz, Deutschlandsberg und der Südoststeiermark."
        imageSrc={homepageImages.hero.src}
        imageSrcSet={homepageImages.hero.srcSet}
        imageAlt={t('home.hero.imageAlt')}
      >
        <ul className="space-y-2 text-sm font-semibold text-olive-800 sm:text-base">
          {heroServiceList.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-olive-700" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            to="/kontakt"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-anthracite-900 sm:w-auto"
          >
            Jetzt Angebot anfragen
            <ArrowRight size={18} />
          </Link>
          <span className="text-sm text-olive-700">{t('home.hero.serviceArea')}: {businessData.serviceArea}</span>
        </div>
      </PageHero>

      <section className="section-spacing pt-0">
        <div className="container-width">
          <div className="rounded-2xl border border-olive-200 bg-white px-5 py-4 sm:px-6">
            <div className="grid gap-3 md:grid-cols-3">
              {heroTrustItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-3 rounded-xl bg-olive-100/60 px-4 py-3 text-sm font-semibold text-olive-800">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-amber-500">
                      <Icon size={15} fill="currentColor" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('home.why.eyebrow')}
            title={t('home.why.title')}
            description={t('home.why.description')}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {trustItems.map((item) => (
              <TrustCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('home.references.eyebrow')}
            title={t('home.references.title')}
            description={t('home.references.description')}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {references.map((item) => (
              <ReferenceCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('home.services.eyebrow')}
            title={t('home.services.title')}
            description={t('home.services.description')}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-olive-700 sm:text-base">
            {t('home.services.infoLine')}
          </p>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow="Vertrauen"
            title="So ähnlich beschreiben uns Kundinnen und Kunden"
            description="Demo-Bewertungen zur Layout-Vorschau. Bitte später mit echten, freigegebenen Bewertungen ersetzen."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {demoTestimonials.map((item) => (
              <article key={item.source} className="rounded-2xl border border-olive-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive-600">Demo-Bewertung</p>
                <p className="mt-2 inline-flex gap-1 text-amber-500" aria-label="5 von 5 Sternen">
                  {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-olive-700">"{item.quote}"</p>
                <p className="mt-3 text-sm font-semibold text-olive-800">- {item.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <SectionTitle
            eyebrow="Regionale Präsenz"
            title="Täglich im Einsatz in der Region"
            description="Leibnitz · Wagna · Gralla · Tillmitsch · Straß · Ehrenhausen · Graz Umgebung"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Leibnitz', 'Wagna', 'Gralla', 'Tillmitsch', 'Straß', 'Ehrenhausen', 'Graz Umgebung'].map((town) => (
              <div key={town} className="flex items-center gap-2 rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm font-semibold text-olive-800">
                <MapPin size={16} className="text-olive-700" />
                {town}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow="Regionale Seiten"
            title="Gartenpflege in Ihrer Gemeinde"
            description="Direkte Infos zu unseren Leistungen in den wichtigsten Orten unseres Einsatzgebiets."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((location) => (
              <Link
                key={location.slug}
                to={`/${location.slug}`}
                className="rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm font-semibold text-olive-800"
              >
                Gartenpflege {location.town}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-width">
          <div className="glass-card grid gap-8 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-600">{t('home.location.eyebrow')}</p>
              <h2 className="headline mt-3 text-3xl font-semibold text-olive-800">{t('home.location.title')}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-olive-700 sm:text-base">
                {t('home.location.text', { serviceArea: businessData.serviceArea })}
              </p>
            </div>
            <div className="rounded-2xl bg-olive-800 p-6 text-olive-100">
              <p className="text-sm">{t('home.location.phone')}</p>
              <a href={`tel:${businessData.primaryPhone}`} className="mt-1 block text-xl font-semibold text-white">
                {businessData.phoneContacts[0]?.label}: {businessData.primaryPhone}
              </a>
              <ul className="mt-3 space-y-1 text-sm text-olive-200">
                {businessData.phoneContacts.slice(1).map((contact) => (
                  <li key={contact.phone}>
                    <a href={`tel:${contact.phone}`} className="hover:text-white">
                      {contact.label}: {contact.phone}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm">{t('home.location.email')}</p>
              <a href={`mailto:${businessData.email}`} className="mt-1 block text-base font-semibold text-white">
                {businessData.email}
              </a>
              <p className="mt-6 text-sm">{t('home.location.address')}</p>
              <p className="mt-1 text-base text-white">{businessData.address}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
        <div className="container-width grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-3xl border border-dashed border-olive-300 bg-white p-8 text-center text-olive-700">
            {/* TODO: Replace this placeholder with a real team portrait/photo during private deployment. */}
            <div className="mx-auto flex h-52 max-w-xs items-center justify-center rounded-2xl border border-olive-200 bg-olive-50 text-sm font-semibold">
              Platzhalter für Teamfoto
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow="Ihr Ansprechpartner"
              title="PR Gartenservice Team"
              description="Persönlich erreichbar, regional unterwegs und mit einem klaren Blick für saubere Ergebnisse."
            />
            <ul className="space-y-3 text-sm text-olive-700 sm:text-base">
              <li className="flex items-start gap-3"><ShieldCheck size={18} className="mt-0.5 text-olive-700" />Persönliche Beratung statt Standardantworten</li>
              <li className="flex items-start gap-3"><Clock3 size={18} className="mt-0.5 text-olive-700" />Schnelle Termine und klare Rückmeldungen</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-olive-700" />Regional betreut in Leibnitz und Umgebung</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-width">
          <div className="rounded-2xl border border-olive-200 bg-white px-6 py-5">
            <p className="text-sm font-semibold text-olive-800">
              Privatgärten, Firmenstandorte, Wohnanlagen und öffentliche Einrichtungen im Großraum Leibnitz, Graz, Deutschlandsberg und der Südoststeiermark.
            </p>
            <p className="mt-2 text-sm text-olive-700">
              Leibnitz · Wagna · Gralla · Tillmitsch · Straß · Ehrenhausen · Graz Umgebung
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default HomePage
