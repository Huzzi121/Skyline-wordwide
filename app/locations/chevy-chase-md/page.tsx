import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Chevy Chase MD Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Chevy Chase, MD — the upscale residential community on the DC line. Quick access to Reagan National in the DC region, 24/7.',
  alternates: { canonical: '/locations/chevy-chase-md' },
  openGraph: {
    title: 'Chevy Chase MD Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Chevy Chase, MD — the upscale community on the DC line with quick access to Reagan National, 24/7.',
    images: [{ url: img(IMAGES.cityStreets, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Chevy Chase, MD',
  title: 'Chevy Chase chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Chevy Chase — the leafy residential streets, the shops at Chevy Chase Lake and the boutiques along Wisconsin Avenue, right on the District line.',
  heroImage: IMAGES.cityStreets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Chevy Chase, MD' },
  ],
  stats: [
    { value: 'DCA', label: '25 min to Reagan National' },
    { value: 'IAD', label: '40 min to Dulles' },
    { value: 'Since 2000', label: 'Serving Montgomery County' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'An address right on the DC line',
      text: 'We serve the village of Chevy Chase, Chevy Chase Lake and the upscale retail along Wisconsin Avenue. Sitting directly on the District border, it is a short, quiet drive into downtown DC or Bethesda whenever you need it.',
    },
    {
      title: 'Airport connections',
      text: 'Reagan National (DCA) is about 25 minutes south through the city, Dulles (IAD) roughly 40 minutes and BWI around 45 minutes. We track flights and time pickups so your chauffeur is waiting curbside when you land.',
    },
    {
      title: 'Private & executive clients',
      text: 'Chevy Chase residents value discretion and reliability. We provide standing reservations, early airport runs and the same trusted chauffeur where possible, with private or corporate billing to match.',
    },
    {
      title: 'Galas, weddings & social events',
      text: 'Country-club galas, benefit dinners in the District and weddings at nearby venues call for polished arrivals. We manage multi-stop timing and stage the vehicle discreetly for a graceful exit.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for airport transfers and solo travel, luxury SUVs for families and luggage, and executive Sprinters for private groups heading to events across the region.',
    },
  ],
  gallery: [
    { src: IMAGES.cityStreets, alt: 'Tree-lined residential street' },
    { src: IMAGES.weddingArrival, alt: 'Chauffeured arrival at an event' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for service' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Chevy Chase?',
      a: 'Reagan National (DCA) is closest at about 25 minutes. Dulles (IAD) is roughly 40 minutes and BWI around 45 minutes.',
    },
    {
      q: 'Do you serve the village of Chevy Chase and Wisconsin Avenue?',
      a: 'Yes. We cover all of Chevy Chase including the village, Chevy Chase Lake and the retail corridor along Wisconsin Avenue.',
    },
    {
      q: 'Can I request the same chauffeur regularly?',
      a: 'Where scheduling permits, we assign a consistent chauffeur for regular clients who value familiarity and discretion.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours is fine for routine trips; for galas, weddings and early flights we suggest reserving a day or more ahead.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to DCA, IAD and BWI are quoted as all-inclusive flat rates covering gratuity, tolls and wait time.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Bethesda, MD', href: '/locations/bethesda-md', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'Discreet transport,\nright on the line.',
  ctaText: 'Reserve a chauffeur from Chevy Chase for an airport run or an evening in the District.',
}

export default function Page() {
  return <DetailPage data={data} />
}
