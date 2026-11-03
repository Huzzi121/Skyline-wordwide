import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Reagan National (DCA) Car Service & Chauffeur | Skyline Worldwide',
  description:
    'Private chauffeur service for Ronald Reagan Washington National (DCA). Meet-and-greet in arrivals, 24/7 flight tracking and all-inclusive rates to downtown DC, Arlington and Alexandria.',
  alternates: { canonical: '/airports/dca' },
  openGraph: {
    title: 'Reagan National (DCA) Car Service & Chauffeur | Skyline Worldwide',
    description:
      'Meet-and-greet chauffeur service at Reagan National (DCA) with 24/7 flight tracking and all-inclusive rates to downtown DC, Arlington and Alexandria.',
    images: [{ url: img(IMAGES.airportWindow, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Reagan National · DCA',
  title: 'Minutes from\nthe capital.',
  intro:
    'Reagan National sits closer to downtown Washington than any other airport in the region, and we treat every transfer accordingly — a chauffeur already waiting the moment you clear the jet bridge.',
  heroImage: 'airportWindow',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Reagan National · DCA' },
  ],
  stats: [
    { value: '≈ 4.5 mi', label: 'to downtown DC' },
    { value: '≈ 15 min', label: 'typical drive time' },
    { value: '24/7', label: 'flight tracking & dispatch' },
    { value: 'Since 2000', label: 'chauffeuring the capital' },
  ],
  sections: [
    {
      title: 'Where we meet you',
      text: 'For arriving passengers your chauffeur waits inside baggage claim at your terminal — Terminal 1 or Terminal 2 — holding a name board. You will never hunt the curb or guess which lane; we come to you.',
    },
    {
      title: 'Live flight monitoring',
      text: 'We track your inbound flight by number from the moment it leaves the gate. Early landings, gate changes and delays are all absorbed by dispatch, so the car is in position when you walk out, not when you booked.',
    },
    {
      title: 'Meet-and-greet in arrivals',
      text: 'A suited chauffeur greets you by name inside the terminal, confirms your party and leads the way out. It is the standard that has defined Skyline arrivals since 2000 — no phone tag, no waiting.',
    },
    {
      title: 'Luggage handled',
      text: 'Your chauffeur takes the bags from the carousel to the vehicle and loads them while you settle in. Golf clubs, garment bags, oversized cases — tell us at booking and we assign the right vehicle.',
    },
    {
      title: 'Curbside for quick turns',
      text: 'Travelling light or short on time? Request a curbside pickup and we will stage the car at the arrivals roadway, coordinating by text so you step straight from door to door.',
    },
    {
      title: 'Who it serves',
      text: 'DCA is the natural choice for travel into Washington proper, Arlington, Alexandria and Capitol Hill. Business or leisure, one passenger or a full party, every rate is quoted all-inclusive.',
    },
  ],
  gallery: [
    { src: 'airportWindow', alt: 'Passenger view through a terminal window at Reagan National' },
    { src: 'blackCarDetail', alt: 'Detail of a black executive vehicle staged for pickup' },
    { src: 'washingtonDC', alt: 'The Washington skyline minutes from Reagan National' },
  ],
  faqs: [
    {
      q: 'Where exactly will my chauffeur meet me?',
      a: 'Inside baggage claim at your arrival terminal, holding a name board. If you prefer a curbside pickup at the arrivals roadway instead, just note it at booking and we will coordinate by text.',
    },
    {
      q: 'What happens if my flight is delayed or early?',
      a: 'Nothing changes for you. We track your flight live by number, so dispatch adjusts the pickup to the actual landing time at no extra cost. Your chauffeur will be waiting whenever you arrive.',
    },
    {
      q: 'Which terminals do you cover at DCA?',
      a: 'All of them — Terminal 1 and the two concourses of Terminal 2. Tell us your airline and flight number and we position the chauffeur at the correct baggage claim.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'We ask for at least a few hours’ notice so we can confirm the right vehicle and chauffeur, though our 24/7 dispatch handles last-minute and same-day requests whenever possible.',
    },
    {
      q: 'Do you track flights automatically?',
      a: 'Yes. Every airport transfer is monitored around the clock by flight number, which is why gate changes and schedule shifts never leave you waiting.',
    },
    {
      q: 'Are parking and tolls included in the price?',
      a: 'Yes. Reagan National is close in, and our quotes are all-inclusive — airport access fees, tolls, meet-and-greet and wait time are built into the rate with no surprises.',
    },
  ],
  related: [
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'Another airport' },
    { label: 'Baltimore · BWI', href: '/airports/bwi', eyebrow: 'Another airport' },
    { label: 'Airport transfer service', href: '/services/airport-transfers', eyebrow: 'Service' },
  ],
  ctaTitle: 'Land, and simply\nstep into the car.',
  ctaText: `Reserve a Reagan National chauffeur online or call ${BUSINESS.phonePrimary} — our dispatch runs 24/7.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
