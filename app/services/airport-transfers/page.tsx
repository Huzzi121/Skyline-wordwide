import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Airport Transfers Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured airport transfers for DCA, IAD and BWI. Live flight tracking, meet-and-greet, luggage assistance and curbside coordination across the Washington region since 2000.',
  alternates: { canonical: '/services/airport-transfers' },
  openGraph: {
    title: 'Airport Transfers | Skyline Worldwide',
    description:
      'Chauffeured airport transfers for DCA, IAD and BWI. Live flight tracking, meet-and-greet, luggage assistance and curbside coordination across the Washington region since 2000.',
    images: [{ url: img(IMAGES.airportWindow, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport transfers',
  title: 'The smoothest part\nof the trip.',
  intro:
    'Land at Reagan National, Dulles or BWI and find your next move already handled — your chauffeur tracking the flight before the wheels touch down.',
  heroImage: IMAGES.airportWindow,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Airport transfers' },
  ],
  stats: [
    { value: '6', label: 'Airports covered' },
    { value: '24/7', label: 'Dispatch & tracking' },
    { value: 'Since 2000', label: 'Serving DC' },
    { value: '0', label: 'Surprise fees' },
  ],
  sections: [
    {
      title: 'Live flight tracking',
      text: 'We monitor your flight from the moment it pushes back. If you land early or sit on the tarmac, your chauffeur’s timing adjusts automatically — no frantic calls, no waiting.',
    },
    {
      title: 'Meet-and-greet',
      text: 'For arrivals that need a personal touch, your chauffeur waits inside with a name card at baggage claim or the agreed meeting point and walks you to the vehicle.',
    },
    {
      title: 'Luggage assistance',
      text: 'Bags, garment carriers and oversized cases are handled with care. You arrive at the curb, your chauffeur takes it from there and loads everything while you settle in.',
    },
    {
      title: 'Curbside coordination',
      text: 'At busy terminals we stay in contact by text and phone to pick the exact door and lane, so there is no circling and no guessing where to stand.',
    },
    {
      title: 'All-inclusive rates',
      text: 'Quotes include meet time, parking and standard wait — the number we confirm is the number you pay, with reasonable grace for delays built in.',
    },
    {
      title: 'Departures, on your clock',
      text: 'Heading out, we build in traffic and check-in time so you reach the gate unhurried, with a chauffeur who knows the fastest approach to each terminal.',
    },
  ],
  gallery: [
    { src: IMAGES.airportWindow, alt: 'Traveler watching aircraft through a terminal window at dusk' },
    { src: IMAGES.airportTerminal, alt: 'Modern airport terminal concourse' },
    { src: IMAGES.blackCarDetail, alt: 'Black sedan waiting curbside for an arriving passenger' },
    { src: IMAGES.airportRunway, alt: 'Aircraft on the runway ready for departure' },
  ],
  faqs: [
    {
      q: 'Which airports do you serve?',
      a: 'We cover Reagan National (DCA), Dulles (IAD) and BWI daily, and also serve Richmond (RIC), Norfolk (ORF) and Martin State (MTN) across the wider region.',
    },
    {
      q: 'What if my flight is delayed or early?',
      a: 'We track your flight in real time and adjust the pickup to the actual landing. There is no need to update us — dispatch is already watching the arrival.',
    },
    {
      q: 'Will the chauffeur meet me inside?',
      a: 'Yes, meet-and-greet is available at every airport we serve. Your chauffeur waits at baggage claim or an agreed point with a name card and assists with luggage to the vehicle.',
    },
    {
      q: 'How much wait time is included?',
      a: 'Our airport quotes include a standard grace period after landing for deplaning and baggage. If customs or a long taxi runs over, dispatch extends the wait rather than leaving you stranded.',
    },
    {
      q: 'Can you handle extra luggage or sports equipment?',
      a: 'Tell us the piece count and type when you book and we will send a vehicle sized for it — a luxury SUV or Sprinter when a sedan would be tight.',
    },
  ],
  related: [
    { eyebrow: 'Airports', label: 'Reagan National · DCA', href: '/airports/dca' },
    { eyebrow: 'Airports', label: 'Dulles · IAD', href: '/airports/iad' },
    { eyebrow: 'Airports', label: 'Baltimore · BWI', href: '/airports/bwi' },
  ],
  ctaTitle: 'Your chauffeur is\nalready watching the flight.',
  ctaText: 'Share your flight number and we will handle the timing, the terminal and the bags.',
}

export default function Page() {
  return <DetailPage data={data} />
}
