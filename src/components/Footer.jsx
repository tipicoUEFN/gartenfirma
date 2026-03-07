import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { businessData } from '../config/businessData'

function Footer() {
  const { t } = useTranslation()
  const iconLogoSrc = `${import.meta.env.BASE_URL}images/logo/logo1024x1024_white.svg`
  const horizontalLogoSrc = `${import.meta.env.BASE_URL}images/logo/logo1600x400_white.svg`

  return (
    <footer className="mt-14 border-t border-olive-200 bg-olive-800 text-olive-100">
      <div className="container-width grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={iconLogoSrc}
            alt={`${businessData.companyName} Icon`}
            className="h-12 w-12 sm:hidden"
          />
          <img
            src={horizontalLogoSrc}
            alt={businessData.companyName}
            className="hidden h-10 w-auto sm:block"
          />
          <p className="mt-3 text-sm leading-relaxed text-olive-200">{t('footer.claim')}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-300">{t('footer.contactTitle')}</p>
          <ul className="mt-4 space-y-3 text-sm">
            {businessData.phoneContacts.map((contact) => (
              <li key={contact.phone} className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5" />
                <a href={`tel:${contact.phone}`} className="hover:text-white">
                  {contact.label}: {contact.phone}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5" />
              <a href={`mailto:${businessData.email}`} className="hover:text-white">
                {businessData.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              <span>{businessData.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-300">{t('footer.serviceAreaTitle')}</p>
          <p className="mt-4 text-sm leading-relaxed">{businessData.serviceArea}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-olive-300">{t('footer.hoursTitle')}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {businessData.openingHours.map((entry) => (
              <li key={entry}>{entry}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive-300">{t('footer.legalTitle')}</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/impressum" className="hover:text-white">
                {t('footer.impressum')}
              </Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:text-white">
                {t('footer.privacy')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-olive-700 py-4">
        <p className="container-width text-xs text-olive-300">
          {t('footer.copyright', { year: new Date().getFullYear(), companyName: businessData.companyName })}
        </p>
        <p className="container-width mt-2 text-xs text-olive-300">
          Gartenpflege in Leibnitz, Graz, Wagna, Gralla, Tillmitsch, Straß, Ehrenhausen und Umgebung.
        </p>
      </div>
    </footer>
  )
}

export default Footer
