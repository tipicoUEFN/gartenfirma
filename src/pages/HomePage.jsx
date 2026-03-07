import { ArrowRight, Clock3, Flower2, Leaf, Scissors, ShieldCheck, Shovel, Sprout, Trees, Users } from 'lucide-react'
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

  return (
    <>
      <SeoHead
        title="Gartenpflege in Leibnitz und Suedsteiermark"
        description="PR Gartenservice bietet Rasenmaehen, Heckenpflege und laufende Aussenanlagenbetreuung in Leibnitz, Graz und Umgebung."
        pathname="/"
      />
      <LocalBusinessSchema />

      <PageHero
        eyebrow={t('home.hero.eyebrow')}
        title={t('home.hero.title')}
        text={t('home.hero.text', { companyName: businessData.companyName })}
        imageSrc={homepageImages.hero.src}
        imageSrcSet={homepageImages.hero.srcSet}
        imageAlt={t('home.hero.imageAlt')}
      >
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/kontakt"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 sm:w-auto"
          >
            {t('hero.cta')}
            <ArrowRight size={18} />
          </Link>
          <span className="text-sm text-olive-700">{t('home.hero.serviceArea')}: {businessData.serviceArea}</span>
        </div>
      </PageHero>

      <section className="section-spacing pt-0">
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
        <div className="container-width grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow={t('home.about.eyebrow')}
              title={t('home.about.title')}
              description={t('home.about.description')}
            />
            <p className="max-w-xl text-sm leading-relaxed text-olive-700 sm:text-base">
              {t('home.about.text')}
            </p>
            <Link
              to="/ueber-uns"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-olive-700 hover:text-olive-800"
            >
              {t('home.about.link')}
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive-600">{t('home.about.regionActive')}</p>
            <ul className="mt-4 space-y-3 text-sm text-olive-700 sm:text-base">
              <li>{t('home.about.regionItem1')}</li>
              <li>{t('home.about.regionItem2')}</li>
              <li>{t('home.about.regionItem3')}</li>
              <li>{t('home.about.regionItem4')}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-olive-100/40">
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

      <section className="section-spacing">
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

      <CTASection />
    </>
  )
}

export default HomePage
