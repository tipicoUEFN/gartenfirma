const relayUrl = import.meta.env.VITE_NOTIFICATION_WEBHOOK_URL

export async function sendNotificationRelay(eventType, payload) {
  if (!relayUrl) {
    return { skipped: true }
  }

  const response = await fetch(relayUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      source: 'gartenfirma-website',
      eventType,
      submittedAt: new Date().toISOString(),
      payload,
    }),
  })

  if (!response.ok) {
    throw new Error('notification_relay_failed')
  }

  return { skipped: false }
}
