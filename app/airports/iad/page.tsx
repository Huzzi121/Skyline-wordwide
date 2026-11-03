import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Dulles International (IAD) Car Service & Chauffeur | Skyline Worldwide',
  description:
    'Chauffeur service for Washington Dulles International (IAD). Meet-and-greet in arrivals, 24/7 flight tracking and all-inclusive rates to Tysons, Reston, McLean and DC.',
  alternates: { canonical: '/airports/iad' },
  openGraph: {
    title: 'Dulles International (IAD) Car Service & Chauffeur | Skyline Worldwide',
    description:
      'Meet-and-greet chauffeur service at Washington Dulles (IAD) with 24/7 flight tracking and all-inclusive rates to Tysons, Reston, McLean and DC.',
    images: [{ url: img(IMAGES.airportTerminal, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Washington Dulles · IAD',
  title: 'The gateway\nfor the corridor.',
  intro:
    'Dulles is the region’s long-haul and international hub, and its scale rewards a chauffeur who knows it — one tracking your flight, waiting at the right door and ready the moment you reach arrivals.',
  heroImage: 'airportTerminal',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Washington Dulles · IAD' },
  ],
  stats: [
    { value: '≈ 26 mi', label: 'to downtown DC' },
    { value: '≈ 45 min', label: 'typical drive time' },
    { value: '24/7', label: 'flight tracking & dispatch' },
    { value: 'Since 2000', label: 'chauffeuring the capital' },
  ],
  sections: [
    {
      title: 'Where we meet you',
      text: 'Your chauffeur waits inside the main terminal at baggage claim with a name board. Dulles routes most arrivals through the central terminal, so you are met in one place rather than sent chasing a distant concourse.',
    },
    {
      title: 'International arrivals',
      text: 'Long-haul passengers clear customs and immigration before reaching the greeting area, and we plan for it. We watch the inbound flight and allow for the extra time, so the chauffeur is present whenever you finally emerge.',
    },
    {
      title: 'Live flight monitoring',
      text: 'Every IAD transfer is tracked by flight number around the clock. Overnight landings, schedule slips and early touchdowns are all handled by dispatch so the car is staged for your real arrival time.',
    },
    {
      title: 'Meet-and-greet in arrivals',
      text: 'A professional chauffeur greets you by name inside the terminal, confirms your party and escorts you out — the hallmark of Skyline service since 2000, whether you land at 2 pm or 2 am.',
    },
    {
      title: 'Luggage handled',
      text: 'Expect help from carousel to curb. Your chauffeur manages the bags and loads the vehicle; for the heavier hauls common on international itineraries we match you to a sedan, SUV or Sprinter at booking.',
    },
    {
      title: 'Who it serves',
      text: 'IAD anchors the Dulles corridor — Tysons, Reston, Herndon and McLean — and connects cleanly to Washington and Maryland. Rates are quoted all-inclusive for a single rider or a full group.',
    },
  ],
  gallery: [
    { src: 'airportTerminal', alt: 'The main terminal concourse at Washington Dulles' },
    { src: 'airportRunway', alt: 'Aircraft on the runway at Dulles International' },
    { src: 'blackCarDetail', alt: 'Detail of a black executive vehicle staged for pickup' },
  ],
  faqs: [
    {
      q: 'Where exactly will my chauffeur meet me?',
      a: 'Inside the main terminal at baggage claim, holding a name board. Prefer a curbside pickup at the arrivals roadway? Note it at booking and we coordinate by text.',
    },
    {
      q: 'What happens if my flight is delayed or early?',
      a: 'We track your flight live by number, so dispatch moves the pickup to the actual landing time at no extra charge. Long-haul delays are routine for us; your chauffeur waits.',
    },
    {
      q: 'Do you allow extra time for international arrivals?',
      a: 'Yes. For flights clearing customs and immigration we build in the additional processing time and meet you at the international arrivals exit once you are through.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'A few hours’ notice lets us confirm the right vehicle and chauffeur, but our 24/7 dispatch accommodates same-day and last-minute Dulles requests whenever possible.',
    },
    {
      q: 'Do you track flights automatically?',
      a: 'Yes — every IAD transfer is monitored around the clock by flight number, so gate changes and schedule shifts never leave you stranded.',
    },
    {
      q: 'Are parking and tolls included in the price?',
      a: 'Yes. Quotes are all-inclusive — Dulles access fees, Greenway and toll-road charges, meet-and-greet and wait time are built into the rate with nothing added later.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Another airport' },
    { label: 'Baltimore · BWI', href: '/airports/bwi', eyebrow: 'Another airport' },
    { label: 'Airport transfer service', href: '/services/airport-transfers', eyebrow: 'Service' },
  ],
  ctaTitle: 'Clear the gate to\na waiting chauffeur.',
  ctaText: `Reserve a Dulles chauffeur online or call ${BUSINESS.phonePrimary} — our dispatch runs 24/7.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
