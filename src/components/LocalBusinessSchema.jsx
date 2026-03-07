import { useEffect } from 'react'
import { businessData } from '../config/businessData'
import { siteConfig } from '../config/seo'

function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: businessData.companyName,
      description: businessData.claim,
      url: siteConfig.siteUrl,
      telephone: businessData.primaryPhone,
      email: businessData.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessData.address,
        addressCountry: 'AT',
      },
      areaServed: [
        'Leibnitz',
        'Wagna',
        'Gralla',
        'Tillmitsch',
        'Strass in Steiermark',
        'Graz',
        'Deutschlandsberg',
        'Südoststeiermark',
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '17:00',
        },
      ],
      serviceType: [
        'Gartenpflege',
        'Rasenmähen',
        'Heckenpflege',
        'Außenanlagenbetreuung',
        'Laubarbeiten',
      ],
    }

    const id = 'local-business-schema'
    let script = document.head.querySelector(`#${id}`)
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  }, [])

  return null
}

export default LocalBusinessSchema
