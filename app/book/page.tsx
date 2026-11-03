import type { Metadata } from 'next'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { ReservationForm } from '@/components/reservation-form'
import { IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Book a Ride — Reservations | Skyline Worldwide',
  description:
    'Reserve chauffeured transportation across Washington DC, Maryland and Virginia. Airport, point-to-point, hourly and group travel — confirmed by a real dispatcher, 24/7.',
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  return (
    <div className="inner-page book-page">
      <SiteHeader />
      <main>
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
        <section className="reservation-section section-pad">
          <ReservationForm />
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
