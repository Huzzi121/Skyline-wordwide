'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Phone, ShieldCheck } from 'lucide-react'
import { BUSINESS } from '@/lib/site'
import { Reveal } from '@/components/motion'

const TRIPS = ['Airport', 'Point to point', 'Hourly', 'Group']
const VEHICLES = [
  'No preference',
  'Executive sedan',
  'Luxury SUV',
  'Stretch limousine',
  'Executive Sprinter',
  'Shuttle',
  'Motor coach',
]

type Form = {
  pickup: string
  dropoff: string
  date: string
  time: string
  flight: string
  passengers: string
  vehicle: string
  name: string
  email: string
  phone: string
  notes: string
}

const EMPTY: Form = {
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
  flight: '',
  passengers: '1',
  vehicle: 'No preference',
  name: '',
  email: '',
  phone: '',
  notes: '',
}

export function ReservationForm() {
  const [trip, setTrip] = useState('Airport')
  const [form, setForm] = useState<Form>(EMPTY)
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [reference, setReference] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('trip')
    if (t) {
      const match = TRIPS.find((x) => x.toLowerCase().replace(/ /g, '-') === t.toLowerCase())
      if (match) setTrip(match)
    }
  }, [])

  const set =
    (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const required: [string, string][] = [
      ['pickup', form.pickup],
      ['date', form.date],
      ['name', form.name],
      ['email', form.email],
      ['phone', form.phone],
    ]
    if (required.some(([, v]) => !v.trim())) {
      setError('Please complete the required fields marked with ·')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ tripType: trip, ...form }),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) {
        setStatus('error')
        setError(json.error || 'Something went wrong. Please call dispatch.')
        return
      }
      setReference(json.reference)
      setStatus('done')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('error')
      setError('Network error. Please call dispatch and we will take it from here.')
    }
  }

  if (status === 'done') {
    return (
      <Reveal className="confirmation">
        <div className="confirmation-icon">
          <Check size={26} />
        </div>
        <p className="eyebrow">Request received</p>
        <h2>
          Your request is <em>in.</em>
        </h2>
        <p className="confirmation-copy">
          Thank you, {form.name.split(' ')[0] || 'there'}. A Skyline dispatcher will confirm the
          details and your all-inclusive rate shortly. Keep your reference for any questions.
        </p>
        <div className="confirmation-ref">
          <span>Reference</span>
          <strong>{reference}</strong>
        </div>
        <div className="closing-actions">
          <a className="nav-button" href={BUSINESS.phonePrimaryHref}>
            <Phone size={15} /> Call dispatch · {BUSINESS.phonePrimary}
          </a>
          <a className="outline-button" href="/">
            Back to home <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>
    )
  }

  const isAirport = trip === 'Airport'
  const isHourly = trip === 'Hourly'

  return (
    <div className="reservation-layout">
      <form className="reservation-form" onSubmit={submit} noValidate>
        <div className="reservation-tabs" role="tablist" aria-label="Trip type">
          {TRIPS.map((t) => (
            <button
              type="button"
              key={t}
              role="tab"
              aria-selected={trip === t}
              className={trip === t ? 'active' : ''}
              onClick={() => setTrip(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="reservation-grid">
          <label className="field field-full">
            <span>Pickup location ·</span>
            <input value={form.pickup} onChange={set('pickup')} placeholder="Address, hotel or airport" />
          </label>

          <label className="field field-full">
            <span>{isHourly ? 'Primary destination (optional)' : 'Drop-off location'}</span>
            <input
              value={form.dropoff}
              onChange={set('dropoff')}
              placeholder={isHourly ? 'Where you’ll be heading' : 'Address, venue or airport'}
            />
          </label>

          <label className="field">
            <span>Date ·</span>
            <input type="date" value={form.date} onChange={set('date')} />
          </label>
          <label className="field">
            <span>{isHourly ? 'Start time' : 'Pickup time'}</span>
            <input type="time" value={form.time} onChange={set('time')} />
          </label>

          {isAirport && (
            <label className="field">
              <span>Flight number</span>
              <input value={form.flight} onChange={set('flight')} placeholder="e.g. UA 217" />
            </label>
          )}
          <label className="field">
            <span>Passengers</span>
            <select value={form.passengers} onChange={set('passengers')}>
              {['1', '2', '3', '4', '5', '6', '7–10', '11–14', '15+'].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </label>
          <label className={`field${isAirport ? '' : ' field-full'}`}>
            <span>Vehicle preference</span>
            <select value={form.vehicle} onChange={set('vehicle')}>
              {VEHICLES.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Full name ·</span>
            <input value={form.name} onChange={set('name')} placeholder="Your name" />
          </label>
          <label className="field">
            <span>Phone ·</span>
            <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(   )   -" />
          </label>
          <label className="field field-full">
            <span>Email ·</span>
            <input type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" />
          </label>

          <label className="field field-full">
            <span>Notes — luggage, child seat, accessibility, meet &amp; greet</span>
            <textarea value={form.notes} onChange={set('notes')} rows={3} placeholder="Anything we should know" />
          </label>
        </div>

        {error && (
          <p className="reservation-error" role="alert">
            {error}
          </p>
        )}

        <div className="reservation-actions">
          <button className="nav-button reservation-submit" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Request reservation'} <ArrowUpRight size={15} />
          </button>
          <span className="reservation-fallback">
            Prefer to talk? <a href={BUSINESS.phonePrimaryHref}>Call dispatch instead</a>
          </span>
        </div>
      </form>

      <aside className="reservation-aside">
        <p className="eyebrow">What happens next</p>
        <ul>
          <li>
            <Check size={15} /> A real dispatcher reviews your request — no automated confirmation.
          </li>
          <li>
            <Check size={15} /> We confirm your vehicle and an all-inclusive rate.
          </li>
          <li>
            <Check size={15} /> Your chauffeur tracks the flight and is ready on arrival.
          </li>
        </ul>
        <div className="reservation-assure">
          <ShieldCheck size={16} /> Chauffeured since {BUSINESS.since} · 24/7 human dispatch
        </div>
        <a className="reservation-call" href={BUSINESS.phonePrimaryHref}>
          <Phone size={16} /> {BUSINESS.phonePrimary}
        </a>
        <a className="reservation-call subtle" href={BUSINESS.phoneLocalHref}>
          {BUSINESS.phoneLocal}
        </a>
      </aside>
    </div>
  )
}
