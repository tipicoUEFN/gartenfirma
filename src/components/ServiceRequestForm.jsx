import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { businessData } from '../config/businessData'

function ServiceRequestForm() {
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

  const serviceOptions = useMemo(
    () => [
      { key: 'rasen', label: t('serviceRequestForm.serviceOptions.rasen') },
      { key: 'hecke', label: t('serviceRequestForm.serviceOptions.hecke') },
      { key: 'laub', label: t('serviceRequestForm.serviceOptions.laub') },
      { key: 'gartenpflege', label: t('serviceRequestForm.serviceOptions.gartenpflege') },
      { key: 'aussenanlagen', label: t('serviceRequestForm.serviceOptions.aussenanlagen') },
      { key: 'fenster', label: t('serviceRequestForm.serviceOptions.fenster') },
    ],
    [t],
  )

  const lawnSizeOptions = t('serviceRequestForm.lawnSizeOptions', { returnObjects: true })
  const frequencyOptions = t('serviceRequestForm.frequencyOptions', { returnObjects: true })
  const propertyTypeOptions = [
    { value: 'privat', label: t('serviceRequestForm.propertyTypeOptions.privat') },
    { value: 'firma', label: t('serviceRequestForm.propertyTypeOptions.firma') },
    { value: 'wohnanlage', label: t('serviceRequestForm.propertyTypeOptions.wohnanlage') },
    { value: 'kindergarten-schule', label: t('serviceRequestForm.propertyTypeOptions.kindergarten-schule') },
    { value: 'oeffentlich', label: t('serviceRequestForm.propertyTypeOptions.oeffentlich') },
    { value: 'sonstiges', label: t('serviceRequestForm.propertyTypeOptions.sonstiges') },
  ]

  const isLawnSelected = formData.services.includes('rasen')
  const isHedgeSelected = formData.services.includes('hecke')

  const selectedServiceLabels = useMemo(
    () => serviceOptions.filter((option) => formData.services.includes(option.key)).map((option) => option.label),
    [formData.services, serviceOptions],
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
      setErrorText(t('serviceRequestForm.errors.holdToSend'))
      return
    }

    setHoldReady(false)
    setHoldProgress(0)
    setStatus('submitting')
    setErrorText('')

    const payload = {
      _subject: t('serviceRequestForm.mail.subject', { firstName: formData.firstName, lastName: formData.lastName }),
      Vorname: formData.firstName,
      Nachname: formData.lastName,
      Email: formData.email,
      Telefon: formData.phone,
      Adresse: formData.address || t('serviceRequestForm.mail.notProvided'),
      Service: selectedServiceLabels.length ? selectedServiceLabels.join(', ') : t('serviceRequestForm.mail.notProvided'),
      Rasenflaeche: formData.lawnSize || t('serviceRequestForm.mail.notProvided'),
      Heckenlaenge: formData.hedgeLength ? t('serviceRequestForm.mail.meters', { value: formData.hedgeLength }) : t('serviceRequestForm.mail.notProvided'),
      Haeufigkeit: formData.frequency || t('serviceRequestForm.mail.notProvided'),
      Objektart: propertyTypeOptions.find((option) => option.value === formData.propertyType)?.label || t('serviceRequestForm.mail.notProvided'),
      Nachricht: formData.message || t('serviceRequestForm.mail.noMessage'),
      Anfrageart: t('serviceRequestForm.mail.requestType'),
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
      setErrorText(t('serviceRequestForm.errors.submitFailed'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card space-y-8 rounded-2xl p-6 sm:p-8">
      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.contact')}</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-olive-800">
            {t('serviceRequestForm.fields.firstName')}
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
            {t('serviceRequestForm.fields.lastName')}
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
            {t('serviceRequestForm.fields.email')}
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
            {t('serviceRequestForm.fields.phone')}
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
            {t('serviceRequestForm.fields.address')}
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
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.services')}</h3>
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
          <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.lawnSize')}</h3>
          <p className="text-sm text-olive-700">{t('serviceRequestForm.fields.lawnSize')}</p>
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
          <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.hedgeLength')}</h3>
          <label className="text-sm font-medium text-olive-800">
            {t('serviceRequestForm.fields.hedgeLength')}
            <input
              name="hedgeLength"
              type="number"
              min="0"
              value={formData.hedgeLength}
              onChange={handleInputChange}
              placeholder={t('serviceRequestForm.placeholders.hedgeLength')}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
            />
          </label>
        </div>
      )}

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.frequency')}</h3>
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
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.propertyType')}</h3>
        <label className="text-sm font-medium text-olive-800">
          {t('serviceRequestForm.fields.propertyType')}
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          >
            <option value="">{t('serviceRequestForm.placeholders.select')}</option>
            {propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.message')}</h3>
        <label className="text-sm font-medium text-olive-800">
          {t('serviceRequestForm.fields.message')}
          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder={t('serviceRequestForm.placeholders.message')}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <div className="space-y-4 rounded-2xl border border-olive-200 bg-olive-50/70 p-5">
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.summary')}</h3>
        <div className="space-y-2 text-sm text-olive-700">
          <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.service')}:</span> {selectedServiceLabels.length ? selectedServiceLabels.join(', ') : '-'}</p>
          {isLawnSelected && (
            <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.lawnSize')}:</span> {formData.lawnSize || '-'}</p>
          )}
          {isHedgeSelected && (
            <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.hedge')}:</span> {formData.hedgeLength ? t('serviceRequestForm.mail.meters', { value: formData.hedgeLength }) : '-'}</p>
          )}
          <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.frequency')}:</span> {formData.frequency || '-'}</p>
          <p>
            <span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.propertyType')}:</span>{' '}
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
            ? t('serviceRequestForm.submit.sending')
            : holdProgress > 0
              ? t('serviceRequestForm.submit.holding', { progress: holdProgress })
              : t('serviceRequestForm.submit.default')}
        </button>
        {status !== 'submitting' ? <p className="text-xs text-olive-600">{t('serviceRequestForm.holdHint')}</p> : null}
        <p className="text-xs text-olive-600">{t('serviceRequestForm.notice')}</p>
        {status === 'success' ? <p className="text-sm text-emerald-700">{t('serviceRequestForm.success')}</p> : null}
        {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
      </div>
    </form>
  )
}

export default ServiceRequestForm
