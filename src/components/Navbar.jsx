import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { businessData, navigationItems } from '../config/businessData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const iconLogoSrc = `${import.meta.env.BASE_URL}images/logo/logo1024x1024.svg`
  const horizontalLogoSrc = `${import.meta.env.BASE_URL}images/logo/logo1600x400.svg`

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? 'text-olive-700' : 'text-olive-800 hover:text-olive-600'}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-olive-200/70 bg-olive-50/90 backdrop-blur-md">
      <div className="container-width flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3" aria-label={businessData.companyName}>
          <img
            src={iconLogoSrc}
            alt={`${businessData.companyName} Icon`}
            className="h-10 w-10 sm:hidden"
          />
          <img
            src={horizontalLogoSrc}
            alt={businessData.companyName}
            className="hidden h-8 w-auto sm:block md:h-9 lg:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Phone size={16} className="text-olive-600" />
          <a href={`tel:${businessData.primaryPhone}`} className="text-sm font-semibold text-olive-800 hover:text-olive-600">
            {businessData.phoneContacts[0]?.label}: {businessData.primaryPhone}
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-olive-300 p-2 text-olive-700 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Menue umschalten"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-olive-200 bg-white lg:hidden">
          <nav className="container-width flex max-h-[calc(100vh-5rem)] flex-col overflow-y-auto py-4">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-3 text-sm font-semibold ${isActive ? 'text-olive-700' : 'text-olive-800'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a href={`tel:${businessData.primaryPhone}`} className="mt-2 rounded-lg bg-olive-700 px-4 py-3 text-sm font-semibold text-white">
              Jetzt anrufen: {businessData.phoneContacts[0]?.label} {businessData.primaryPhone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
