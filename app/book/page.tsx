import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { ReservationForm } from '@/components/reservation-form'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book a Ride — Reservations | Skyline Worldwide',
  description:
    'Reserve chauffeured transportation across Washington DC, Maryland and Virginia. Airport, point-to-point, hourly and group travel — confirmed by a real dispatcher, 24/7.',
  alternates: { canonical: '/book' },
}

const guarantees = [
  {
    num: '01',
    title: '24/7 Human Dispatch',
    desc: 'Every reservation is reviewed and confirmed by an experienced local dispatcher, not an unmonitored algorithm.',
  },
  {
    num: '02',
    title: 'Flight Tracking Standard',
    desc: 'Commercial flights and private aviation arrivals are continuously tracked for real-time curbside or tarmac readiness.',
  },
  {
    num: '03',
    title: 'All-Inclusive Pricing',
    desc: 'Transparent, upfront quotes with zero hidden surcharges or surprise tolls — confirmed before departure.',
  },
  {
    num: '04',
    title: 'Discreet Road Protocol',
    desc: 'Uniformed, background-checked chauffeurs sworn to passenger privacy and absolute discretion.',
  },
]

export default function BookPage() {
  return (
    <div className="inner-page book-page">
      <SiteHeader />
      <main>
        {/* TILE 01: HERO BANNER (OBSIDIAN BLACK — 100% VIEWPORT AT 90% ZOOM) */}
        <section className="inner-hero">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: `url(${img(IMAGES.reservationCabin, 2200)})` }}
            role="img"
            aria-label="Reserve a chauffeur"
          />
          <div className="inner-hero-scrim" />
          <div className="inner-hero-content">
            <p className="eyebrow light">Online reservations</p>
            <h1>
              Reserve your <em>chauffeur.</em>
            </h1>
            <p>
              Tell us the details once. A real dispatcher confirms your vehicle and an all-inclusive
              rate — no automated guesswork.
            </p>
          </div>
        </section>

        {/* TILE 02: RESERVATION CONSOLE (WARM LUXURY BEIGE) */}
        <section className="reservation-section section-pad">
          <ReservationForm />
        </section>

        {/* TILE 03: DISPATCH GUARANTEES (OBSIDIAN BLACK) */}
        <section className="book-guarantees-section section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow light">The Skyline Assurance</p>
              <h2>
                Considered service. <em>Every journey.</em>
              </h2>
            </div>
          </div>
          <div className="book-guarantees-grid">
            {guarantees.map((g) => (
              <div className="book-guarantee-card" key={g.num}>
                <strong>{g.num}</strong>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TILE 04: DIRECT DISPATCH INQUIRY (WARM LUXURY BEIGE) */}
        <section className="inner-cta section-pad">
          <p className="eyebrow">Available Around The Clock</p>
          <h2>
            Prefer to reserve <em>by phone?</em>
          </h2>
          <p className="cta-text">
            Our 24/7 human dispatch team in Springfield, Virginia is standing by for complex
            itineraries, immediate pickups, or private flight manifests.
          </p>
          <div className="closing-actions">
            <a className="nav-button" href={BUSINESS.phonePrimaryHref}>
              Call toll-free {BUSINESS.phonePrimary} <ArrowUpRight size={16} />
            </a>
            <a className="outline-button" href={BUSINESS.phoneLocalHref}>
              Local {BUSINESS.phoneLocal}
            </a>
          </div>
        </section>
      </main>

      {/* TILE 05: FOOTER (OBSIDIAN BLACK) */}
      <SiteFooter />
    </div>
  )
}
