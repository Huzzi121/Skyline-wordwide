import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Reston VA Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Reston, VA — Reston Town Center and the Dulles tech corridor. Minutes to Dulles Airport in the DC region, 24/7 dispatch.',
  alternates: { canonical: '/locations/reston-va' },
  openGraph: {
    title: 'Reston VA Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Reston, VA — Reston Town Center and the Dulles tech corridor. Minutes to Dulles in the DC region, 24/7.',
    images: [{ url: img(IMAGES.blackCarDetail, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Reston, VA',
  title: 'Reston chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Reston — from the offices and restaurants of Reston Town Center to the technology campuses lining the Dulles corridor — with Dulles Airport just minutes away.',
  heroImage: IMAGES.blackCarDetail,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Reston, VA' },
  ],
  stats: [
    { value: 'IAD', label: '15 min to Dulles' },
    { value: 'DCA', label: '35 min to Reagan National' },
    { value: 'Since 2000', label: 'Serving the Dulles corridor' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Reston Town Center and the corridor',
      text: 'We serve Reston Town Center, the technology and government-contracting campuses along the Dulles Toll Road, and the residential villages around Lake Anne and Hunters Woods. Your chauffeur knows the clusters and the Silver Line stops.',
    },
    {
      title: 'Closest to Dulles',
      text: 'Dulles (IAD) is only about 15 minutes west, making Reston a natural base for international and tech travel. Reagan National (DCA) is roughly 35 minutes and BWI about 70 minutes; we track flights and adjust for delays.',
    },
    {
      title: 'Technology & contracting',
      text: 'The Dulles corridor is dense with tech firms and federal contractors. We support client visits, executive travel and all-day meeting circuits with corporate billing, standing reservations and reliable, discreet chauffeurs.',
    },
    {
      title: 'Dining, events & weddings',
      text: 'Reston Town Center’s restaurants, plaza events and nearby wedding venues keep evenings busy. We coordinate multi-stop timing so arrivals and departures stay effortless.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for the short IAD transfer, luxury SUVs for groups and luggage, and executive Sprinters for team roadshows along the corridor and out to the airport.',
    },
  ],
  gallery: [
    { src: IMAGES.blackCarDetail, alt: 'Detail of a black chauffeured car' },
    { src: IMAGES.corporateArrival, alt: 'Corporate client arrival' },
    { src: IMAGES.luxurySUV, alt: 'Luxury SUV for group travel' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Reston?',
      a: 'Dulles (IAD) is closest — about 15 minutes away. Reagan National (DCA) is roughly 35 minutes and BWI around 70 minutes.',
    },
    {
      q: 'Do you serve Reston Town Center?',
      a: 'Yes. We cover all of Reston including Reston Town Center, the Dulles corridor campuses, Lake Anne and Hunters Woods.',
    },
    {
      q: 'Can you handle corporate accounts for tech firms?',
      a: 'Yes. We offer corporate billing, standing reservations and multi-car coordination for the technology and contracting firms along the corridor.',
    },
    {
      q: 'How early should I book?',
      a: 'A couple of hours covers routine trips. For group travel and events, booking a day or more ahead secures your preferred vehicles.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to IAD, DCA and BWI are quoted as all-inclusive flat rates with gratuity, tolls and wait time included.',
    },
  ],
  related: [
    { label: 'Dulles · IAD', href: '/airports/iad', eyebrow: 'Nearest airport' },
    { label: 'Tysons, VA', href: '/locations/tysons-va', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'From the town center\nto the terminal.',
  ctaText: 'Reserve a chauffeur for a Dulles transfer or a day of meetings along the Reston corridor.',
}

export default function Page() {
  return <DetailPage data={data} />
}
