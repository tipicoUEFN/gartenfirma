import { useRef, useState } from 'react'
import { businessData } from '../config/businessData'

const quickServiceOptions = [
  'Rasenmaehen',
  'Heckenpflege',
  'Laubarbeiten',
  'Laufende Aussenanlagenbetreuung',
  'Einfache Gartenpflege',
]

function QuickRequestForm() {
  const HOLD_DURATION_MS = 3000
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')
  const [holdProgress, setHoldProgress] = useState(0)
  const [holdReady, setHoldReady] = useState(false)
  const holdTimeoutRef = useRef(null)
  const holdIntervalRef = useRef(null)
  const submitButtonRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    town: '',
    service: '',
    callbackTime: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${businessData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `Schnellanfrage von ${formData.name}`,
          Name: formData.name,
          Telefon: formData.phone,
          Ort: formData.town,
          Service: formData.service,
          Rueckrufzeit: formData.callbackTime || 'nicht angegeben',
          Anfrageart: 'Schnellanfrage',
        }),
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', town: '', service: '', callbackTime: '' })
    } catch {
      setStatus('error')
      setErrorText('Senden fehlgeschlagen. Bitte rufen Sie uns direkt an.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-olive-300 bg-olive-100/70 p-5 shadow-sm sm:p-6">
      <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-olive-700">Empfohlen fuer schnelle Rueckmeldung</p>
      <h3 className="text-xl font-semibold text-olive-800">Schnellanfrage in 1 Minute</h3>
      <p className="text-sm text-olive-700">Wir melden uns in der Regel innerhalb von 24 Stunden (Mo-Fr).</p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-olive-800">
          Name
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          Telefon
          <input
            required
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          Ort
          <input
            required
            name="town"
            value={formData.town}
            onChange={handleChange}
            placeholder="z.B. Leibnitz"
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          Gewuenschter Service
          <select
            required
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          >
            <option value="">Bitte waehlen</option>
            {quickServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="text-sm font-medium text-olive-800">
        Bevorzugte Rueckrufzeit (optional)
        <input
          name="callbackTime"
          value={formData.callbackTime}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
        />
      </label>

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
        className="rounded-full bg-olive-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 disabled:opacity-70"
      >
        {status === 'submitting'
          ? 'Wird gesendet...'
          : holdProgress > 0
            ? `Gedrückt halten... ${holdProgress}%`
            : 'Schnellanfrage senden'}
      </button>
      {status !== 'submitting' ? <p className="text-xs text-olive-600">Zum Senden Taste 3 Sekunden gedrückt halten.</p> : null}

      {status === 'success' ? <p className="text-sm text-emerald-700">Danke. Ihre Anfrage wurde gesendet.</p> : null}
      {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
    </form>
  )
}

export default QuickRequestForm
