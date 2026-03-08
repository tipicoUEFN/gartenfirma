import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { businessData } from '../config/businessData'
import { applyCustomerTypeMultiplier, estimateServicePrice } from '../utils/priceEstimate'

function ServiceRequestForm({ firstInputRef }) {
  const { t } = useTranslation()
  const MAX_FILES = 3
  const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024
  const MAX_TOTAL_SIZE_BYTES = 15 * 1024 * 1024
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')
  const [uploadError, setUploadError] = useState('')
  const [uploadedImages, setUploadedImages] = useState([])
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    salutation: 'Herr',
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+43',
    phone: '',
    address: '',
    services: [],
    lawnSize: '',
    hedgeLength: '',
    hedgeHeight: '',
    greenWaste: '',
    gardenAccess: '',
    serviceFrequencies: {},
    propertyType: '',
    urgency: '',
    message: '',
  })

  const phoneCodeOptions = [
    { value: '+43', label: 'Oesterreich (+43)' },
    { value: '+49', label: 'Deutschland (+49)' },
    { value: '+386', label: 'Slowenien (+386)' },
    { value: '+385', label: 'Kroatien (+385)' },
  ]

  const salutationOptions = ['Herr', 'Frau']

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

  const lawnSizeOptionLabels = t('serviceRequestForm.lawnSizeOptions', { returnObjects: true })
  const hedgeHeightOptionLabels = t('serviceRequestForm.hedgeHeightOptions', { returnObjects: true })
  const greenWasteOptionLabels = t('serviceRequestForm.greenWasteOptions', { returnObjects: true })
  const gardenAccessOptionLabels = t('serviceRequestForm.gardenAccessOptions', { returnObjects: true })
  const urgencyOptionLabels = t('serviceRequestForm.urgencyOptions', { returnObjects: true })
  const frequencyOptionLabels = t('serviceRequestForm.frequencyOptionLabels', { returnObjects: true })
  const frequencyByService = t('serviceRequestForm.frequencyByService', { returnObjects: true })

  const lawnSizeOptions = useMemo(() => {
    const labels = Array.isArray(lawnSizeOptionLabels) ? lawnSizeOptionLabels : []
    return [
      { value: 'under100', label: labels[0] || 'unter 100 m²' },
      { value: '100to300', label: labels[1] || '100 - 300 m²' },
      { value: '300to600', label: labels[2] || '300 - 600 m²' },
      { value: 'over600', label: labels[3] || 'über 600 m²' },
      { value: 'unknown', label: labels[4] || 'weiß nicht' },
    ]
  }, [lawnSizeOptionLabels])

  const hedgeHeightOptions = useMemo(
    () => [
      { value: 'upTo1m', label: hedgeHeightOptionLabels?.upTo1m || 'bis 1 m' },
      { value: 'oneTo2m', label: hedgeHeightOptionLabels?.oneTo2m || '1 - 2 m' },
      { value: 'over2m', label: hedgeHeightOptionLabels?.over2m || 'über 2 m' },
    ],
    [hedgeHeightOptionLabels],
  )

  const greenWasteOptions = useMemo(
    () => [
      { value: 'selfDisposal', label: greenWasteOptionLabels?.selfDisposal || 'Kunde entsorgt selbst' },
      { value: 'pickup', label: greenWasteOptionLabels?.pickup || 'bitte abführen' },
    ],
    [greenWasteOptionLabels],
  )

  const gardenAccessOptions = useMemo(
    () => [
      { value: 'easy', label: gardenAccessOptionLabels?.easy || 'einfach zugänglich' },
      { value: 'narrow', label: gardenAccessOptionLabels?.narrow || 'durch Haus / schmaler Zugang' },
      { value: 'slope', label: gardenAccessOptionLabels?.slope || 'Hanglage / schwierig' },
    ],
    [gardenAccessOptionLabels],
  )

  const urgencyOptions = useMemo(
    () => [
      { value: 'normal', label: urgencyOptionLabels?.normal || 'normal' },
      { value: 'within3days', label: urgencyOptionLabels?.within3days || 'innerhalb 3 Tage' },
      { value: 'urgent', label: urgencyOptionLabels?.urgent || 'dringend' },
    ],
    [urgencyOptionLabels],
  )

  const frequencyLabelMap = useMemo(
    () => ({
      weekly: frequencyOptionLabels?.weekly || 'wöchentlich',
      biweekly: frequencyOptionLabels?.biweekly || 'alle 2 Wochen',
      monthly: frequencyOptionLabels?.monthly || 'monatlich',
      yearly1: frequencyOptionLabels?.yearly1 || '1x pro Jahr',
      yearly2: frequencyOptionLabels?.yearly2 || '2x pro Jahr',
      oneTime: frequencyOptionLabels?.oneTime || 'einmalig',
      byArrangement: frequencyOptionLabels?.byArrangement || 'nach Vereinbarung',
    }),
    [frequencyOptionLabels],
  )
  const propertyTypeOptions = [
    { value: 'privat', label: t('serviceRequestForm.propertyTypeOptions.privat') },
    { value: 'firma', label: t('serviceRequestForm.propertyTypeOptions.firma') },
    { value: 'wohnanlage', label: t('serviceRequestForm.propertyTypeOptions.wohnanlage') },
    { value: 'oeffentlich', label: t('serviceRequestForm.propertyTypeOptions.oeffentlich') },
    { value: 'sonstiges', label: t('serviceRequestForm.propertyTypeOptions.sonstiges') },
  ]

  const isLawnSelected = formData.services.includes('rasen')
  const isHedgeSelected = formData.services.includes('hecke')

  const frequencyOrder = ['weekly', 'biweekly', 'monthly', 'yearly1', 'yearly2', 'oneTime', 'byArrangement']

  const getFrequencyOptionsForService = (serviceKey) => {
    const fallback = Array.isArray(frequencyByService?.default)
      ? frequencyByService.default
      : ['oneTime', 'monthly', 'biweekly', 'weekly', 'byArrangement']
    const serviceCodes = Array.isArray(frequencyByService?.[serviceKey])
      ? frequencyByService[serviceKey]
      : fallback

    return [...new Set(serviceCodes)]
      .sort((a, b) => {
        const aIndex = frequencyOrder.indexOf(a)
        const bIndex = frequencyOrder.indexOf(b)
        if (aIndex === -1 && bIndex === -1) {
          return a.localeCompare(b)
        }
        if (aIndex === -1) {
          return 1
        }
        if (bIndex === -1) {
          return -1
        }
        return aIndex - bIndex
      })
      .map((value) => ({ value, label: frequencyLabelMap[value] || value }))
  }

  const selectedServiceLabels = useMemo(
    () => serviceOptions.filter((option) => formData.services.includes(option.key)).map((option) => option.label),
    [formData.services, serviceOptions],
  )

  const serviceFrequencyItems = useMemo(
    () => formData.services
      .map((serviceKey) => {
        const serviceLabel = serviceOptions.find((option) => option.key === serviceKey)?.label || serviceKey
        const frequencyCode = formData.serviceFrequencies[serviceKey]
        const frequencyLabel = frequencyCode ? (frequencyLabelMap[frequencyCode] || frequencyCode) : null
        return {
          serviceKey,
          serviceLabel,
          frequencyLabel,
        }
      })
      .filter((item) => item.serviceLabel),
    [formData.services, formData.serviceFrequencies, serviceOptions, frequencyLabelMap],
  )

  const serviceFrequencySummary = useMemo(
    () => serviceFrequencyItems
      .map((item) => `${item.serviceLabel}: ${item.frequencyLabel || t('serviceRequestForm.mail.notProvided')}`)
      .join('; '),
    [serviceFrequencyItems, t],
  )

  const trustIndicators = t('serviceRequestForm.trustIndicators', { returnObjects: true })
  const trustIndicatorItems = Array.isArray(trustIndicators)
    ? trustIndicators
    : ['Rückmeldung meist innerhalb 24h', 'Unverbindliches Angebot']

  const getOptionLabel = (options, value) => options.find((option) => option.value === value)?.label || t('serviceRequestForm.mail.notProvided')

  const baseEstimate = useMemo(
    () => estimateServicePrice({
      services: formData.services,
      lawnSize: formData.lawnSize,
      hedgeLength: formData.hedgeLength,
      hedgeHeight: formData.hedgeHeight,
      greenWaste: formData.greenWaste,
      gardenAccess: formData.gardenAccess,
      urgency: formData.urgency,
    }),
    [formData.services, formData.lawnSize, formData.hedgeLength, formData.hedgeHeight, formData.greenWaste, formData.gardenAccess, formData.urgency],
  )

  const priceEstimate = useMemo(
    () => applyCustomerTypeMultiplier(baseEstimate, formData.propertyType),
    [baseEstimate, formData.propertyType],
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
        hedgeHeight: nextServices.includes('hecke') ? prev.hedgeHeight : '',
        serviceFrequencies: Object.fromEntries(
          Object.entries(prev.serviceFrequencies).filter(([key]) => nextServices.includes(key)),
        ),
      }
    })
  }

  const handleServiceFrequencyChange = (serviceKey, frequencyCode) => {
    setFormData((prev) => ({
      ...prev,
      serviceFrequencies: {
        ...prev.serviceFrequencies,
        [serviceKey]: frequencyCode,
      },
    }))
  }

  const validateUploadedImages = (files) => {
    if (files.length > MAX_FILES) {
      return t('serviceRequestForm.upload.errors.tooMany', { max: MAX_FILES })
    }

    const hasInvalidType = files.some((file) => !file.type.startsWith('image/'))
    if (hasInvalidType) {
      return t('serviceRequestForm.upload.errors.invalidType')
    }

    const hasOversizedFile = files.some((file) => file.size > MAX_FILE_SIZE_BYTES)
    if (hasOversizedFile) {
      return t('serviceRequestForm.upload.errors.fileTooLarge')
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0)
    if (totalSize > MAX_TOTAL_SIZE_BYTES) {
      return t('serviceRequestForm.upload.errors.totalTooLarge')
    }

    return ''
  }

  const handleImagesChange = (event) => {
    const nextFiles = Array.from(event.target.files || [])
    const validationError = validateUploadedImages(nextFiles)

    if (validationError) {
      setUploadError(validationError)
      setUploadedImages([])
      event.target.value = ''
      return
    }

    setUploadError('')
    setUploadedImages(nextFiles)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = validateUploadedImages(uploadedImages)
    if (validationError) {
      setUploadError(validationError)
      return
    }

    setStatus('submitting')
    setErrorText('')

    const payload = {
      _subject: t('serviceRequestForm.mail.subject', { firstName: formData.firstName, lastName: formData.lastName }),
      Anrede: formData.salutation,
      Vorname: formData.firstName,
      Nachname: formData.lastName,
      Email: formData.email,
      Telefon: `${formData.phoneCode} ${formData.phone}`,
      Adresse: formData.address || t('serviceRequestForm.mail.notProvided'),
      Service: selectedServiceLabels.length ? selectedServiceLabels.join(', ') : t('serviceRequestForm.mail.notProvided'),
      Rasenfläche: lawnSizeOptions.find((option) => option.value === formData.lawnSize)?.label || t('serviceRequestForm.mail.notProvided'),
      Heckenhöhe: isHedgeSelected ? getOptionLabel(hedgeHeightOptions, formData.hedgeHeight) : t('serviceRequestForm.mail.notProvided'),
      Grünabfall: getOptionLabel(greenWasteOptions, formData.greenWaste),
      Zugang: getOptionLabel(gardenAccessOptions, formData.gardenAccess),
      Heckenlänge: formData.hedgeLength ? t('serviceRequestForm.mail.meters', { value: formData.hedgeLength }) : t('serviceRequestForm.mail.notProvided'),
      Häufigkeit: serviceFrequencySummary || t('serviceRequestForm.mail.notProvided'),
      Objektart: propertyTypeOptions.find((option) => option.value === formData.propertyType)?.label || t('serviceRequestForm.mail.notProvided'),
      Dringlichkeit: getOptionLabel(urgencyOptions, formData.urgency),
      'Geschätzter Preis (unverbindlich)': priceEstimate?.label || t('serviceRequestForm.summary.noEstimate'),
      Nachricht: formData.message || t('serviceRequestForm.mail.noMessage'),
      Anfrageart: t('serviceRequestForm.mail.requestType'),
    }

    const submitData = new FormData()
    Object.entries(payload).forEach(([key, value]) => {
      submitData.append(key, value)
    })
    uploadedImages.forEach((file) => {
      submitData.append('attachment', file)
    })

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${businessData.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: submitData,
      })

      if (!response.ok) {
        throw new Error('submit_failed')
      }

      setStatus('success')
      setFormData({
        salutation: 'Herr',
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: '+43',
        phone: '',
        address: '',
        services: [],
        lawnSize: '',
        hedgeLength: '',
        hedgeHeight: '',
        greenWaste: '',
        gardenAccess: '',
        serviceFrequencies: {},
        propertyType: '',
        urgency: '',
        message: '',
      })
      setUploadedImages([])
      setUploadError('')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch {
      setStatus('error')
      setErrorText(t('serviceRequestForm.errors.submitFailed'))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-olive-300 bg-olive-100/70 p-6 shadow-sm sm:p-8">
      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.contact')}</h3>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-medium text-olive-800 md:col-span-2">
            Anrede
            <select
              name="salutation"
              value={formData.salutation}
              onChange={handleInputChange}
              className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
            >
              {salutationOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium text-olive-800">
            {t('serviceRequestForm.fields.firstName')}
            <input
              ref={firstInputRef}
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
            <div className="mt-2 grid grid-cols-[minmax(0,210px)_1fr] gap-2">
              <select
                name="phoneCode"
                value={formData.phoneCode}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
              >
                {phoneCodeOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
                required
              />
            </div>
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
        <div className="grid gap-2 md:grid-cols-2">
          {serviceOptions.map((service) => (
            <label key={service.key} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
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
          <div className="grid gap-2 md:grid-cols-2">
            {lawnSizeOptions.map((option) => (
              <label key={option.value} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
                <input
                  type="radio"
                  name="lawnSize"
                  value={option.value}
                  checked={formData.lawnSize === option.value}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 accent-olive-700"
                />
                <span>{option.label}</span>
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
          <p className="text-sm text-olive-700">{t('serviceRequestForm.fields.hedgeHeight')}</p>
          <div className="grid gap-2 md:grid-cols-3">
            {hedgeHeightOptions.map((option) => (
              <label key={option.value} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
                <input
                  type="radio"
                  name="hedgeHeight"
                  value={option.value}
                  checked={formData.hedgeHeight === option.value}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 accent-olive-700"
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-5">
        <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.additionalDetails')}</h3>

        <p className="text-sm text-olive-700">{t('serviceRequestForm.fields.greenWaste')}</p>
        <div className="grid gap-2 md:grid-cols-3">
          {greenWasteOptions.map((option) => (
            <label key={option.value} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
              <input
                type="radio"
                name="greenWaste"
                value={option.value}
                checked={formData.greenWaste === option.value}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 accent-olive-700"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>

        <p className="text-sm text-olive-700">{t('serviceRequestForm.fields.gardenAccess')}</p>
        <div className="grid gap-2 md:grid-cols-3">
          {gardenAccessOptions.map((option) => (
            <label key={option.value} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
              <input
                type="radio"
                name="gardenAccess"
                value={option.value}
                checked={formData.gardenAccess === option.value}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 accent-olive-700"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>

        <p className="text-sm text-olive-700">{t('serviceRequestForm.fields.urgency')}</p>
        <div className="grid gap-2 md:grid-cols-3">
          {urgencyOptions.map((option) => (
            <label key={option.value} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
              <input
                type="radio"
                name="urgency"
                value={option.value}
                checked={formData.urgency === option.value}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 accent-olive-700"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {formData.services.length > 0 ? (
        <div className="space-y-5">
          <h3 className="text-base font-semibold text-olive-800">{t('serviceRequestForm.steps.frequency')}</h3>
          <div className="space-y-4">
            {formData.services.map((serviceKey) => {
              const serviceLabel = serviceOptions.find((option) => option.key === serviceKey)?.label || serviceKey
              const serviceFrequencyOptions = getFrequencyOptionsForService(serviceKey)
              return (
                <div key={serviceKey} className="space-y-2">
                  <p className="text-sm font-medium text-olive-700">{serviceLabel}</p>
                  <div className="grid gap-2 md:grid-cols-2">
                    {serviceFrequencyOptions.map((option) => (
                      <label key={`${serviceKey}-${option.value}`} className="flex items-start gap-2 rounded-xl border border-olive-200 bg-white px-3 py-2.5 text-sm text-olive-800">
                        <input
                          type="radio"
                          name={`frequency-${serviceKey}`}
                          value={option.value}
                          checked={formData.serviceFrequencies[serviceKey] === option.value}
                          onChange={() => handleServiceFrequencyChange(serviceKey, option.value)}
                          className="mt-1 h-4 w-4 accent-olive-700"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}

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
            <option value="">{t('serviceRequestForm.placeholders.propertyType')}</option>
            {propertyTypeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-2 text-xs text-olive-600">{t('serviceRequestForm.fields.propertyTypeHint')}</p>
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
        <label className="text-sm font-medium text-olive-800">
          {t('serviceRequestForm.upload.label')}
          <input
            ref={fileInputRef}
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
            className="mt-2 w-full rounded-xl border border-olive-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-olive-500"
          />
        </label>
        <p className="text-xs text-olive-600">{t('serviceRequestForm.upload.help')}</p>
        {uploadedImages.length > 0 ? (
          <p className="text-xs text-olive-700">
            {t('serviceRequestForm.upload.selected', { count: uploadedImages.length, max: MAX_FILES })}
          </p>
        ) : null}
        {uploadError ? <p className="text-sm text-red-700">{uploadError}</p> : null}
      </div>

      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">{t('serviceRequestForm.summaryLabel')}</p>
        <div className="space-y-4 rounded-2xl border border-olive-200 bg-olive-50/70 p-5">
        <div className="space-y-2 text-sm text-olive-700">
          <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.service')}:</span> {selectedServiceLabels.length ? selectedServiceLabels.join(', ') : '-'}</p>
          {isLawnSelected && (
            <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.lawnSize')}:</span> {lawnSizeOptions.find((option) => option.value === formData.lawnSize)?.label || '-'}</p>
          )}
          {isHedgeSelected && (
            <>
              <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.hedge')}:</span> {formData.hedgeLength ? t('serviceRequestForm.mail.meters', { value: formData.hedgeLength }) : '-'}</p>
              <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.hedgeHeight')}:</span> {hedgeHeightOptions.find((option) => option.value === formData.hedgeHeight)?.label || '-'}</p>
            </>
          )}
          <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.greenWaste')}:</span> {greenWasteOptions.find((option) => option.value === formData.greenWaste)?.label || '-'}</p>
          <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.gardenAccess')}:</span> {gardenAccessOptions.find((option) => option.value === formData.gardenAccess)?.label || '-'}</p>
          <div>
            <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.frequency')}:</span></p>
            {serviceFrequencyItems.length ? (
              <ul className="mt-1 space-y-1">
                {serviceFrequencyItems.map((item) => (
                  <li key={`summary-${item.serviceKey}`}>
                    {item.serviceLabel}: {item.frequencyLabel || '-'}
                  </li>
                ))}
              </ul>
            ) : (
              <p>-</p>
            )}
          </div>
          <p>
            <span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.propertyType')}:</span>{' '}
            {propertyTypeOptions.find((option) => option.value === formData.propertyType)?.label || '-'}
          </p>
          <p><span className="font-semibold text-olive-800">{t('serviceRequestForm.summary.priceEstimate')}:</span> {priceEstimate?.label || t('serviceRequestForm.summary.noEstimate')}</p>
          <p className="text-xs text-olive-600">{t('serviceRequestForm.summary.priceEstimateNote')}</p>
        </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-olive-800 sm:w-auto"
        >
          {status === 'submitting' ? t('serviceRequestForm.submit.sending') : t('serviceRequestForm.submit.default')}
        </button>
        <div className="space-y-1">
          {trustIndicatorItems.map((item) => (
            <p key={item} className="text-xs text-emerald-700/80">✓ {item}</p>
          ))}
        </div>
        <p className="text-xs text-olive-600">{t('serviceRequestForm.notice')}</p>
        {status === 'success' ? <p className="text-sm text-emerald-700">{t('serviceRequestForm.success')}</p> : null}
        {status === 'error' ? <p className="text-sm text-red-700">{errorText}</p> : null}
      </div>
    </form>
  )
}

export default ServiceRequestForm
