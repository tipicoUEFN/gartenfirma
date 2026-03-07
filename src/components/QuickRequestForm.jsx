import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { businessData } from '../config/businessData'

function QuickRequestForm() {
  const { t } = useTranslation()
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
  const quickServiceOptions = t('quickRequestForm.serviceOptions', { returnObjects: true })

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
      setErrorText(t('quickRequestForm.errors.holdToSend'))
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
          ? t('quickRequestForm.submit.sending')
          : holdProgress > 0
            ? t('quickRequestForm.submit.holding', { progress: holdProgress })
            : t('quickRequestForm.submit.default')}
      </button>
      {status !== 'submitting' ? <p className="text-xs text-olive-600">{t('quickRequestForm.holdHint')}</p> : null}

      {status === 'success' ? <p className="text-sm text-emerald-700">{t('quickRequestForm.success')}</p> : null}
      {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
    </form>
  )
}

export default QuickRequestForm
