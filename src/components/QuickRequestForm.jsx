import { useState } from 'react'
import { businessData } from '../config/businessData'

const quickServiceOptions = [
  'Rasenmaehen',
  'Heckenpflege',
  'Laubarbeiten',
  'Laufende Aussenanlagenbetreuung',
  'Einfache Gartenpflege',
]

function QuickRequestForm() {
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')
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

  const handleSubmit = async (event) => {
    event.preventDefault()
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
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-olive-200 bg-white p-5">
      <h3 className="text-base font-semibold text-olive-800">Schnellanfrage in 1 Minute</h3>
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
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 disabled:opacity-70"
      >
        {status === 'submitting' ? 'Wird gesendet...' : 'Schnellanfrage senden'}
      </button>

      {status === 'success' ? <p className="text-sm text-emerald-700">Danke. Ihre Anfrage wurde gesendet.</p> : null}
      {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
    </form>
  )
}

export default QuickRequestForm
