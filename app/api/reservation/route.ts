import { NextResponse } from 'next/server'

// Accepts a reservation request, records it server-side, and (if configured)
// forwards it to a real destination. Set RESERVATION_WEBHOOK_URL in the
// environment to POST each submission to email/CRM/Slack/etc.
export async function POST(req: Request) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 })
  }

  const str = (k: string) => (typeof data[k] === 'string' ? (data[k] as string).trim() : '')
  const required = ['tripType', 'pickup', 'date', 'name', 'phone', 'email']
  const missing = required.filter((k) => !str(k))
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Please complete: ${missing.join(', ')}.` },
      { status: 422 },
    )
  }

  const email = str('email')
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: 'Please enter a valid email.' }, { status: 422 })
  }

  const stamp = new Date()
  const reference =
    'SKY-' +
    stamp.toISOString().slice(2, 10).replace(/-/g, '') +
    '-' +
    Math.random().toString(36).slice(2, 6).toUpperCase()

  const payload = { ...data, reference, receivedAt: stamp.toISOString() }

  const dest = process.env.RESERVATION_WEBHOOK_URL
  if (dest) {
    try {
      await fetch(dest, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (err) {
      console.error('[reservation] forward failed:', err)
    }
  }
  // Durable record in server logs even when no webhook is configured.
  console.log('[reservation]', JSON.stringify(payload))

  return NextResponse.json({ ok: true, reference })
}
