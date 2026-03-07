import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { businessData, navigationItems } from '../config/businessData'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
        <Link to="/" className="group">
          <p className="headline text-2xl font-semibold text-olive-800 transition group-hover:text-olive-700">
            {businessData.companyName}
          </p>
          <p className="-mt-1 hidden text-xs uppercase tracking-[0.2em] text-olive-600 sm:block">Gartenpflege in Oesterreich</p>
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
          <a href={`tel:${businessData.phone}`} className="text-sm font-semibold text-olive-800 hover:text-olive-600">
            {businessData.phone}
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
            <a href={`tel:${businessData.phone}`} className="mt-2 rounded-lg bg-olive-700 px-4 py-3 text-sm font-semibold text-white">
              Jetzt anrufen: {businessData.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
