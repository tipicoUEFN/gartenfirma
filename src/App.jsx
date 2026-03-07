import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import BackToTopButton from './components/BackToTopButton'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StickyContactBar from './components/StickyContactBar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import DatenschutzPage from './pages/DatenschutzPage'
import HomePage from './pages/HomePage'
import ImpressumPage from './pages/ImpressumPage'
import LocationPage from './pages/LocationPage'
import ReferencesPage from './pages/ReferencesPage'
import ServicesPage from './pages/ServicesPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-olive-50 text-anthracite-900">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leistungen" element={<ServicesPage />} />
            <Route path="/ueber-uns" element={<AboutPage />} />
            <Route path="/referenzen" element={<ReferencesPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/:slug" element={<LocationPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
        <StickyContactBar />
      </div>
    </BrowserRouter>
  )
}

export default App
