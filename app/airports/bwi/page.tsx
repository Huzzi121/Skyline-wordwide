import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Baltimore/Washington (BWI) Car Service & Chauffeur | Skyline Worldwide',
  description:
    'Chauffeur service for Baltimore/Washington International Thurgood Marshall (BWI). Meet-and-greet in arrivals, 24/7 flight tracking and all-inclusive rates to Bethesda, Silver Spring and DC.',
  alternates: { canonical: '/airports/bwi' },
  openGraph: {
    title: 'Baltimore/Washington (BWI) Car Service & Chauffeur | Skyline Worldwide',
    description:
      'Meet-and-greet chauffeur service at BWI Thurgood Marshall with 24/7 flight tracking and all-inclusive rates to Baltimore, Bethesda, Silver Spring and DC.',
    images: [{ url: img(IMAGES.airportRunway, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Baltimore/Washington · BWI',
  title: 'Between two\ncities, covered.',
  intro:
    'BWI Thurgood Marshall serves both Baltimore and Washington, and the drive rewards a chauffeur who plans the route. We track your flight and stage the car so the distance never becomes your problem.',
  heroImage: 'airportRunway',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Baltimore/Washington · BWI' },
  ],
  stats: [
    { value: '≈ 32 mi', label: 'to downtown DC' },
    { value: '≈ 50 min', label: 'typical drive time' },
    { value: '24/7', label: 'flight tracking & dispatch' },
    { value: 'Since 2000', label: 'chauffeuring the capital' },
  ],
  sections: [
    {
      title: 'Where we meet you',
      text: 'Your chauffeur waits on the baggage-claim level at your concourse with a name board. BWI’s lower level keeps domestic and international arrivals close together, so you are met as soon as you reach the bags.',
    },
    {
      title: 'Live flight monitoring',
      text: 'Every BWI transfer is tracked by flight number 24/7. With the longer drive to Washington and Northern Virginia, accurate arrival times matter — dispatch stages the car to your actual landing, not the schedule.',
    },
    {
      title: 'Meet-and-greet in arrivals',
      text: 'A suited chauffeur greets you by name inside the terminal, confirms your party and leads you to the vehicle. The same arrivals standard Skyline has held since 2000, whichever concourse you land in.',
    },
    {
      title: 'Luggage handled',
      text: 'Your chauffeur collects the bags at the carousel and loads them for you. Travelling with sports gear, extra cases or a group’s worth of luggage? Flag it at booking and we assign the right vehicle.',
    },
    {
      title: 'Built for the longer run',
      text: 'The drive from BWI into DC and Virginia is a real one, so we plan around I-95 and the Baltimore-Washington Parkway and keep a quiet, comfortable cabin ready for the ride.',
    },
    {
      title: 'Who it serves',
      text: 'BWI is the smart gateway for Baltimore, Bethesda and Silver Spring, and routes cleanly into Washington and Northern Virginia. Every rate is all-inclusive, for one passenger or a full party.',
    },
  ],
  gallery: [
    { src: 'airportRunway', alt: 'Aircraft on the runway at Baltimore/Washington International' },
    { src: 'airportWindow', alt: 'Passenger view through a BWI terminal window' },
    { src: 'blackCarDetail', alt: 'Detail of a black executive vehicle staged for pickup' },
  ],
  faqs: [
    {
      q: 'Where exactly will my chauffeur meet me?',
      a: 'On the baggage-claim level at your concourse, holding a name board. Prefer a curbside pickup at the arrivals roadway instead? Let us know at booking and we coordinate by text.',
    },
    {
      q: 'What happens if my flight is delayed or early?',
      a: 'We track your flight live by number and adjust the pickup to the real landing time at no extra cost — important on a route where the drive to DC runs close to an hour.',
    },
    {
      q: 'Which concourses do you cover at BWI?',
      a: 'All of them. Baggage claim sits on a single lower level, so whichever concourse your airline uses, your chauffeur is positioned at the correct carousel.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'A few hours’ notice lets us confirm your vehicle and chauffeur, though 24/7 dispatch handles last-minute and same-day BWI requests whenever possible.',
    },
    {
      q: 'Do you track flights automatically?',
      a: 'Yes — every BWI transfer is monitored around the clock by flight number, so gate changes and schedule shifts never leave you waiting.',
    },
    {
      q: 'Are parking and tolls included in the price?',
      a: 'Yes. Quotes are all-inclusive — BWI access fees, parkway and toll charges, meet-and-greet and wait time are built into the rate with nothing added afterward.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Another airport' },
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'Another airport' },
    { label: 'Airport transfer service', href: '/services/airport-transfers', eyebrow: 'Service' },
  ],
  ctaTitle: 'Close the distance\nfrom the first mile.',
  ctaText: `Reserve a BWI chauffeur online or call ${BUSINESS.phonePrimary} — our dispatch runs 24/7.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
