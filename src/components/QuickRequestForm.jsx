import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { businessData } from '../config/businessData'

function QuickRequestForm({ firstInputRef }) {
  const { t } = useTranslation()
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    town: '',
    service: '',
    callbackTime: '',
  })
  const quickServiceOptions = t('quickRequestForm.serviceOptions', { returnObjects: true })

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
          _subject: t('quickRequestForm.mail.subject', { name: formData.name }),
          Name: formData.name,
          Telefon: formData.phone,
          Ort: formData.town,
          Service: formData.service,
          Rueckrufzeit: formData.callbackTime || t('quickRequestForm.mail.notProvided'),
          Anfrageart: t('quickRequestForm.mail.requestType'),
        }),
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      setStatus('success')
      setFormData({ name: '', phone: '', town: '', service: '', callbackTime: '' })
    } catch {
      setStatus('error')
      setErrorText(t('quickRequestForm.errors.submitFailed'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-olive-300 bg-olive-100/70 p-5 shadow-sm sm:p-6">
      <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-olive-700">{t('quickRequestForm.badge')}</p>
      <h3 className="text-xl font-semibold text-olive-800">{t('quickRequestForm.title')}</h3>
      <p className="text-sm text-olive-700">{t('quickRequestForm.subtitle')}</p>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm font-medium text-olive-800">
          {t('quickRequestForm.fields.name')}
          <input
            ref={firstInputRef}
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          {t('quickRequestForm.fields.phone')}
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
          {t('quickRequestForm.fields.town')}
          <input
            required
            name="town"
            value={formData.town}
            onChange={handleChange}
            placeholder={t('quickRequestForm.placeholders.town')}
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          />
        </label>
        <label className="text-sm font-medium text-olive-800">
          {t('quickRequestForm.fields.service')}
          <select
            required
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-olive-200 px-3 py-2 text-sm"
          >
            <option value="">{t('quickRequestForm.placeholders.select')}</option>
            {quickServiceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="text-sm font-medium text-olive-800">
        {t('quickRequestForm.fields.callbackTime')}
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
        className="rounded-full bg-olive-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 disabled:opacity-70"
      >
        {status === 'submitting' ? t('quickRequestForm.submit.sending') : t('quickRequestForm.submit.default')}
      </button>

      {status === 'success' ? <p className="text-sm text-emerald-700">{t('quickRequestForm.success')}</p> : null}
      {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
    </form>
  )
}

export default QuickRequestForm
