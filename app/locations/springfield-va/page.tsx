import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Springfield VA Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Springfield, VA — home of Skyline Worldwide on the I-95 corridor. Central reach to all three DC airports, 24/7 dispatch.',
  alternates: { canonical: '/locations/springfield-va' },
  openGraph: {
    title: 'Springfield VA Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Springfield, VA — our home base on the I-95 corridor with central reach to all three DC airports, 24/7.',
    images: [{ url: img(IMAGES.capitalRegion, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Springfield, VA',
  title: 'Springfield chauffeur\nservice.',
  intro:
    'Chauffeured black car service from our home city of Springfield — the I-95 and Mixing Bowl crossroads, from Springfield Town Center to the Franconia and West Springfield neighborhoods, with every DC airport in easy reach.',
  heroImage: IMAGES.capitalRegion,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Springfield, VA' },
  ],
  stats: [
    { value: 'DCA', label: '20 min to Reagan National' },
    { value: 'IAD', label: '35 min to Dulles' },
    { value: 'HQ', label: 'Our home base since 2000' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Our home city',
      text: 'Skyline is based here at 7406 Alban Station Ct, so Springfield is the city we know best — from Springfield Town Center and the Metro station to Franconia, West Springfield and the office parks around the Mixing Bowl interchange.',
    },
    {
      title: 'Central to all three airports',
      text: 'Springfield’s position on I-95 and the Capital Beltway puts every airport within reach: Reagan National (DCA) about 20 minutes, Dulles (IAD) roughly 35 and BWI around 50. We track flights and time pickups precisely.',
    },
    {
      title: 'Corporate & government',
      text: 'With federal offices, contractors and the Fort Belvoir community nearby, Springfield sees steady professional travel. We offer corporate billing, standing reservations and discreet, punctual service for executives and staff.',
    },
    {
      title: 'Events, weddings & group travel',
      text: 'Weddings, reunions and group outings along the I-95 corridor benefit from our local base — vehicles stage quickly and arrive on time. We coordinate multi-stop evenings and larger group moves with ease.',
    },
    {
      title: 'Nationwide affiliate network',
      text: 'Because this is our headquarters, Springfield clients tap directly into our nationwide affiliate network — the same trusted chauffeured service in cities across the country, booked through one point of contact.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for airport runs and solo travel, luxury SUVs for families and luggage, and executive Sprinters for group outings, weddings and corporate roadshows along the corridor.',
    },
  ],
  gallery: [
    { src: IMAGES.capitalRegion, alt: 'Capital region skyline' },
    { src: IMAGES.dispatchDesk, alt: 'Skyline dispatch desk' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for service' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Springfield?',
      a: 'Reagan National (DCA) is closest at about 20 minutes. Dulles (IAD) is roughly 35 minutes and BWI around 50 minutes — all easily reached from our I-95 base.',
    },
    {
      q: 'Is Springfield your headquarters?',
      a: 'Yes. Skyline is based at 7406 Alban Station Ct, Springfield, VA 22150, so this is the city our team knows most intimately.',
    },
    {
      q: 'Do you serve Franconia, West Springfield and Fort Belvoir?',
      a: 'Yes. We cover all of Springfield including Springfield Town Center, Franconia, West Springfield and the Fort Belvoir area.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours ahead covers routine trips; for weddings, group events and early flights, a day or more in advance is best.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to DCA, IAD and BWI are quoted as all-inclusive flat rates with gratuity, tolls and wait time included.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Alexandria, VA', href: '/locations/alexandria-va', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'Start from our\nhome ground.',
  ctaText: 'Reserve a chauffeur from Springfield to any of the three DC airports, or anywhere the road leads.',
}

export default function Page() {
  return <DetailPage data={data} />
}
