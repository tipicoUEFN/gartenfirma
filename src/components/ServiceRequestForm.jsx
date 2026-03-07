import { useMemo, useRef, useState } from 'react'
import { businessData } from '../config/businessData'

const serviceOptions = [
  { key: 'rasen', label: 'Rasenmähen / Grünflächenpflege' },
  { key: 'hecke', label: 'Heckenschnitt' },
  { key: 'laub', label: 'Laubarbeiten' },
  { key: 'gartenpflege', label: 'Einfache Gartenpflege' },
  { key: 'aussenanlagen', label: 'Betreung von Außenanlagen' },
  { key: 'fenster', label: 'Fensterreinigung' },
]

const lawnSizeOptions = [
  'unter 100 m²',
  '100 - 300 m²',
  '300 - 600 m²',
  'über 600 m²',
  'weiß nicht',
]

const frequencyOptions = ['einmalig', 'monatlich', 'alle 2 Wochen', 'wöchentlich', 'nach Vereinbarung']

const propertyTypeOptions = [
  { value: 'privat', label: 'Privatgarten' },
  { value: 'firma', label: 'Firma / Betrieb' },
  { value: 'wohnanlage', label: 'Wohnanlage' },
  { value: 'kindergarten-schule', label: 'Kindergarten / Schule' },
  { value: 'oeffentlich', label: 'öffentliche Einrichtung' },
  { value: 'sonstiges', label: 'sonstiges' },
]

function ServiceRequestForm() {
  const HOLD_DURATION_MS = 3000
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')
  const [holdProgress, setHoldProgress] = useState(0)
  const [holdReady, setHoldReady] = useState(false)
  const holdTimeoutRef = useRef(null)
  const holdIntervalRef = useRef(null)
  const submitButtonRef = useRef(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    services: [],
    lawnSize: '',
    hedgeLength: '',
    frequency: '',
    propertyType: '',
    message: '',
  })

  const isLawnSelected = formData.services.includes('rasen')
  const isHedgeSelected = formData.services.includes('hecke')

  const selectedServiceLabels = useMemo(
    () => serviceOptions.filter((option) => formData.services.includes(option.key)).map((option) => option.label),
    [formData.services],
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (serviceKey) => {
    setFormData((prev) => {
      const alreadySelected = prev.services.includes(serviceKey)
      const nextServices = alreadySelected
        ? prev.services.filter((service) => service !== serviceKey)
        : [...prev.services, serviceKey]

      return {
        ...prev,
        services: nextServices,
        lawnSize: nextServices.includes('rasen') ? prev.lawnSize : '',
        hedgeLength: nextServices.includes('hecke') ? prev.hedgeLength : '',
      }
    })
  }

  const clearHoldTimers = () => {
    if (holdTimeoutRef.current) {
      window.clearTimeout(holdTimeoutRef.current)
      holdTimeoutRef.current = null
    }
    if (holdIntervalRef.current) {
      window.clearInterval(holdIntervalRef.current)
      holdIntervalRef.current = null
    }
  }

  const startHold = () => {
    if (status === 'submitting' || holdReady) {
      return
    }

    setErrorText('')
    setHoldProgress(0)

    const startTime = Date.now()

    clearHoldTimers()
    holdIntervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(100, Math.round((elapsed / HOLD_DURATION_MS) * 100))
      setHoldProgress(progress)
    }, 50)

    holdTimeoutRef.current = window.setTimeout(() => {
      clearHoldTimers()
      setHoldReady(true)
      setHoldProgress(100)
      submitButtonRef.current?.form?.requestSubmit()
    }, HOLD_DURATION_MS)
  }

  const stopHold = () => {
    if (holdReady || status === 'submitting') {
      return
    }
    clearHoldTimers()
    setHoldProgress(0)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!holdReady) {
      setErrorText('Bitte Taste 3 Sekunden gedrückt halten.')
      return
    }

    setHoldReady(false)
    setHoldProgress(0)
    setStatus('submitting')
    setErrorText('')

    const payload = {
      _subject: `Neue Service-Anfrage von ${formData.firstName} ${formData.lastName}`,
      Vorname: formData.firstName,
      Nachname: formData.lastName,
      Email: formData.email,
      Telefon: formData.phone,
      Adresse: formData.address || 'nicht angegeben',
      Service: selectedServiceLabels.length ? selectedServiceLabels.join(', ') : 'nicht angegeben',
      Rasenflaeche: formData.lawnSize || 'nicht angegeben',
      Heckenlaenge: formData.hedgeLength ? `${formData.hedgeLength} Meter` : 'nicht angegeben',
      Haeufigkeit: formData.frequency || 'nicht angegeben',
      Objektart: propertyTypeOptions.find((option) => option.value === formData.propertyType)?.label || 'nicht angegeben',
      Nachricht: formData.message || 'keine Nachricht',
      Anfrageart: 'Serviceanfrage',
    }

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${businessData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      setStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        services: [],
        lawnSize: '',
        hedgeLength: '',
        frequency: '',
        propertyType: '',
        message: '',
      })
    } catch {
      setStatus('error')
      setErrorText('Senden fehlgeschlagen. Bitte rufen Sie uns direkt an.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-8 rounded-2xl p-6 sm:p-8">
      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">1. Basis-Kontaktdaten</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-olive-800">
            Vorname
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
              required
            />
          </label>
          <label className="text-sm font-medium text-olive-800">
            Nachname
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
              required
            />
          </label>
          <label className="text-sm font-medium text-olive-800">
            E-Mail
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
              required
            />
          </label>
          <label className="text-sm font-medium text-olive-800">
            Telefon
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
              required
            />
          </label>
          <label className="text-sm font-medium text-olive-800 md:col-span-2">
            Adresse (optional)
            <input
              name="address"
              type="text"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
            />
          </label>
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">2. Service-Auswahl</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {serviceOptions.map((service) => (
            <label key={service.key} className="flex items-start gap-3 rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm text-olive-800">
              <input
                type="checkbox"
                checked={formData.services.includes(service.key)}
                onChange={() => handleServiceToggle(service.key)}
                className="mt-1 h-4 w-4 accent-olive-700"
              />
              <span>{service.label}</span>
            </label>
          ))}
        </div>
      </div>

      {isLawnSelected && (
        <div className="space-y-5">
          <h3 className="text-base font-semibold text-olive-800">3. Flächengröße</h3>
          <p className="text-sm text-olive-700">Rasenfläche (m²)</p>
          <div className="grid gap-3 md:grid-cols-2">
            {lawnSizeOptions.map((option) => (
              <label key={option} className="flex items-start gap-3 rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm text-olive-800">
                <input
                  type="radio"
                  name="lawnSize"
                  value={option}
                  checked={formData.lawnSize === option}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 accent-olive-700"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {isHedgeSelected && (
        <div className="space-y-5">
          <h3 className="text-base font-semibold text-olive-800">4. Heckenlänge</h3>
          <label className="text-sm font-medium text-olive-800">
            Heckenlänge (laufende Meter)
            <input
              name="hedgeLength"
              type="number"
              min="0"
              value={formData.hedgeLength}
              onChange={handleInputChange}
              placeholder="z.B. 20"
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
            />
          </label>
        </div>
      )}

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">5. Häufigkeit der Ausführung</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {frequencyOptions.map((option) => (
            <label key={option} className="flex items-start gap-3 rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm text-olive-800">
              <input
                type="radio"
                name="frequency"
                value={option}
                checked={formData.frequency === option}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 accent-olive-700"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">6. Objektart</h3>
        <label className="text-sm font-medium text-olive-800">
          Objektart
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          >
            <option value="">Bitte wählen</option>
            {propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">7. Optionale Nachricht</h3>
        <label className="text-sm font-medium text-olive-800">
          Nachricht (optional)
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Beschreiben Sie kurz Ihr Anliegen oder besondere Wünsche."
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <div className="space-y-4 rounded-2xl border border-olive-200 bg-olive-50/70 p-5">
        <h3 className="text-base font-semibold text-olive-800">8. Anfrage Zusammenfassung</h3>
        <div className="space-y-2 text-sm text-olive-700">
          <p><span className="font-semibold text-olive-800">Service:</span> {selectedServiceLabels.length ? selectedServiceLabels.join(', ') : '-'}</p>
          {isLawnSelected && (
            <p><span className="font-semibold text-olive-800">Rasenfläche:</span> {formData.lawnSize || '-'}</p>
          )}
          {isHedgeSelected && (
            <p><span className="font-semibold text-olive-800">Hecke:</span> {formData.hedgeLength ? `${formData.hedgeLength} Meter` : '-'}</p>
          )}
          <p><span className="font-semibold text-olive-800">Häufigkeit:</span> {formData.frequency || '-'}</p>
          <p>
            <span className="font-semibold text-olive-800">Objekt:</span>{' '}
            {propertyTypeOptions.find((option) => option.value === formData.propertyType)?.label || '-'}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <button
          ref={submitButtonRef}
          type="button"
          disabled={status === 'submitting'}
          onMouseDown={startHold}
          onMouseUp={stopHold}
          onMouseLeave={stopHold}
          onTouchStart={startHold}
          onTouchEnd={stopHold}
          onTouchCancel={stopHold}
          onKeyDown={(event) => {
            if ((event.key === ' ' || event.key === 'Enter') && !event.repeat) {
              startHold()
            }
          }}
          onKeyUp={(event) => {
            if (event.key === ' ' || event.key === 'Enter') {
              stopHold()
            }
          }}
          className="w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 sm:w-auto"
        >
          {status === 'submitting'
            ? 'Wird gesendet...'
            : holdProgress > 0
              ? `Gedrückt halten... ${holdProgress}%`
              : 'Anfrage senden'}
        </button>
        {status !== 'submitting' ? <p className="text-xs text-olive-600">Zum Senden Taste 3 Sekunden gedrückt halten.</p> : null}
        <p className="text-xs text-olive-600">Unverbindliche Anfrage. Rueckmeldung in der Regel innerhalb von 24h (Mo-Fr).</p>
        {status === 'success' ? <p className="text-sm text-emerald-700">Danke. Ihre Anfrage wurde gesendet.</p> : null}
        {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
      </div>
    </form>
  )
}

export default ServiceRequestForm
