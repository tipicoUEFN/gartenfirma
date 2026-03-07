import { ArrowRight, Building2, CalendarCheck, CheckCircle2, Clock3, Flower2, Leaf, MapPin, Scissors, ShieldCheck, Shovel, Sprout, Star, Trees, UserRound, Users, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import HeroSlider from '../components/HeroSlider'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import PageHero from '../components/PageHero'
import ReferenceCard from '../components/ReferenceCard'
import SeoHead from '../components/SeoHead'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import TrustCard from '../components/TrustCard'
import { businessData } from '../config/businessData'
import { locationPages } from '../config/locationPages'
import { heroSlides, referenceProjects } from '../config/imageLibrary'

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
    { icon: Star, label: t('homeExtras.heroTrust1') },
    { icon: Building2, label: t('homeExtras.heroTrust2') },
    { icon: MapPin, label: t('homeExtras.heroTrust3') },
    { icon: Zap, label: t('homeExtras.heroTrust4') },
  ]

  const heroServiceList = [
    t('homeExtras.heroService1'),
    t('homeExtras.heroService2'),
    t('homeExtras.heroService3'),
  ]

  const testimonials = [
    {
      quote: t('homeExtras.testimonials.1.quote'),
      source: t('homeExtras.testimonials.1.source'),
      initials: 'FK',
    },
    {
      quote: t('homeExtras.testimonials.2.quote'),
      source: t('homeExtras.testimonials.2.source'),
      initials: 'HM',
    },
    {
      quote: t('homeExtras.testimonials.3.quote'),
      source: t('homeExtras.testimonials.3.source'),
      initials: 'BM',
    },
  ]

  return (
    <>
      <SeoHead
        title={t('homeExtras.seoTitle')}
        description={t('homeExtras.seoDescription')}
        pathname="/"
      />
      <LocalBusinessSchema />

      <PageHero
        eyebrow=""
        title={t('homeExtras.heroTitle')}
        text={t('homeExtras.heroText')}
        imageContent={<HeroSlider slides={heroSlides} />}
      >
        <div className="space-y-6">
          <div className="flex justify-end">
            <Link
              to="/kontakt"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-olive-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-anthracite-900 sm:w-auto"
            >
              {t('cta.button')}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div>
            <ul className="space-y-2 text-sm font-semibold text-olive-800 sm:text-base">
              {heroServiceList.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-olive-700" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-olive-700 sm:text-base">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-olive-100 text-amber-500">
                <MapPin size={14} fill="currentColor" />
              </span>
              <span>{t('home.hero.serviceArea')}: {t('common.serviceAreaValue')}</span>
            </div>
          </div>
        </div>
      </PageHero>

      <section className="section-spacing pt-0 pb-2 sm:pb-3 lg:pb-4">
        <div className="container-width">
          <div className="rounded-2xl border border-olive-200 bg-white px-4 py-3 sm:px-5">
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
              {heroTrustItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-center gap-2 rounded-xl bg-olive-100/60 px-3 py-2 text-sm font-semibold text-olive-800">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-amber-500">
                      <Icon size={14} fill="currentColor" />
                    </span>
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-2 sm:pt-3 lg:pt-4 bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('home.services.eyebrow')}
            title={t('home.services.title')}
            description={t('homeExtras.servicesDescription')}
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-6 sm:pt-8 lg:pt-10">
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

      <section className="section-spacing pt-6 sm:pt-8 lg:pt-10">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('home.why.eyebrow')}
            title={t('home.why.title')}
            description={t('homeExtras.whyDescription')}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {trustItems.map((item) => (
              <TrustCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-6 sm:pt-8 lg:pt-10 bg-olive-100/40">
        <div className="container-width">
          <SectionTitle
            eyebrow={t('homeExtras.testimonialsEyebrow')}
            title={t('homeExtras.testimonialsTitle')}
            description={t('homeExtras.testimonialsDescription')}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.source} className="rounded-2xl border border-olive-200 bg-white p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-olive-200 bg-olive-100 text-olive-700">
                    {/* TODO: replace with real approved customer photo where permission exists. */}
                    <UserRound size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive-600">{t('homeExtras.testimonialLabel')}</p>
                    <p className="text-sm font-semibold text-olive-800">{item.initials}</p>
                  </div>
                </div>
                <p className="mt-2 inline-flex gap-1 text-amber-500" aria-label={t('common.ratingFiveStars')}>
                  {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-olive-700">"{item.quote}"</p>
                <p className="mt-3 text-sm font-semibold text-olive-800">- {item.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-6 sm:pt-8 lg:pt-10">
        <div className="container-width">
          <div className="glass-card grid gap-8 rounded-3xl px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-600">{t('home.location.eyebrow')}</p>
              <h2 className="headline mt-3 text-3xl font-semibold text-olive-800">{t('home.location.title')}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-olive-700 sm:text-base">
                {t('home.location.text', { serviceArea: t('common.serviceAreaValue') })}
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

      <section className="section-spacing pt-6 sm:pt-8 lg:pt-10 bg-olive-100/40">
        <div className="container-width grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-3xl border border-dashed border-olive-300 bg-white p-8 text-center text-olive-700">
            {/* TODO: Replace this placeholder with a real team portrait/photo during private deployment. */}
            <div className="mx-auto flex h-52 max-w-xs items-center justify-center rounded-2xl border border-olive-200 bg-olive-50 text-sm font-semibold">
              {t('homeExtras.teamPlaceholder')}
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow={t('homeExtras.teamEyebrow')}
              title={t('homeExtras.teamTitle')}
              description={t('homeExtras.teamDescription')}
            />
            <ul className="space-y-3 text-sm text-olive-700 sm:text-base">
              <li className="flex items-start gap-3"><ShieldCheck size={18} className="mt-0.5 text-olive-700" />{t('homeExtras.teamBullet1')}</li>
              <li className="flex items-start gap-3"><Clock3 size={18} className="mt-0.5 text-olive-700" />{t('homeExtras.teamBullet2')}</li>
              <li className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-olive-700" />{t('homeExtras.teamBullet3')}</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />

      <section className="pt-0 pb-3 sm:pb-4 lg:pb-5">
        <div className="container-width">
          <div className="rounded-2xl border border-olive-200 bg-white px-4 py-4 sm:px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive-600">{t('homeExtras.regionalPresenceLabel')}</p>
            <p className="mt-2 text-sm font-semibold text-olive-800">{t('homeExtras.regionalPresenceTitle')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Leibnitz', 'Wagna', 'Gralla', 'Tillmitsch', 'Straß', 'Ehrenhausen', 'Graz Umgebung'].map((town) => (
                <div key={town} className="inline-flex items-center gap-1.5 rounded-full border border-olive-200 bg-olive-50 px-3 py-1.5 text-xs font-semibold text-olive-800">
                  <MapPin size={13} className="text-olive-700" />
                  {town}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-3 sm:pb-4 lg:pb-5">
        <div className="container-width">
          <div className="rounded-2xl border border-olive-200 bg-white px-4 py-4 sm:px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-olive-600">{t('homeExtras.regionalPagesLabel')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {locationPages.map((location) => (
                <Link
                  key={location.slug}
                  to={`/${location.slug}`}
                  className="rounded-full border border-olive-200 bg-olive-50 px-3 py-1.5 text-xs font-semibold text-olive-800 hover:bg-olive-100"
                >
                  {location.town}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 pb-4 sm:pb-5 lg:pb-6">
        <div className="container-width">
          <div className="rounded-2xl border border-olive-200 bg-white px-6 py-5">
            <p className="text-sm font-semibold text-olive-800">
              {t('homeExtras.regionalProofLine1')}
            </p>
            <p className="mt-2 text-sm text-olive-700">
              {t('homeExtras.regionalProofLine2')}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
