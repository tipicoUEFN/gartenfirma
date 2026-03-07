import { MessageSquareText, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { businessData } from '../config/businessData'

function StickyContactBar() {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-olive-300 bg-white/95 p-3 shadow-[0_-8px_20px_rgba(0,0,0,0.08)] backdrop-blur-sm lg:hidden">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3">
        <a
          href={`tel:${businessData.primaryPhone}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-olive-800 px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone size={16} />
          {t('stickyBar.callNow')}
        </a>
        <Link
          to="/kontakt"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-olive-300 bg-olive-50 px-4 py-3 text-sm font-semibold text-olive-800"
        >
          <MessageSquareText size={16} />
          {t('stickyBar.quickRequest')}
        </Link>
      </div>
    </div>
  )
}

export default StickyContactBar
