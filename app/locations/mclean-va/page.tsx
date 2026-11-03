import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'McLean VA Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in McLean, VA — the affluent residential community beside Tysons. Positioned between DCA and Dulles in the DC region, 24/7 dispatch.',
  alternates: { canonical: '/locations/mclean-va' },
  openGraph: {
    title: 'McLean VA Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across McLean, VA — the affluent community beside Tysons, between DCA and Dulles in the DC region, 24/7.',
    images: [{ url: img(IMAGES.washingtonDC, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · McLean, VA',
  title: 'McLean chauffeur\nservice.',
  intro:
    'Chauffeured black car service for McLean — the tree-lined estates, the Langley neighborhoods and the shops of downtown McLean — ideally placed between Reagan National and Dulles.',
  heroImage: IMAGES.washingtonDC,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'McLean, VA' },
  ],
  stats: [
    { value: 'DCA', label: '20 min to Reagan National' },
    { value: 'IAD', label: '20 min to Dulles' },
    { value: 'Since 2000', label: 'Serving Northern Virginia' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Residential McLean, served discreetly',
      text: 'We provide quiet, reliable transport across McLean’s estates and neighborhoods — from Langley and Chesterbrook to downtown McLean and the edge of Tysons. Chauffeurs arrive promptly and handle every trip with discretion.',
    },
    {
      title: 'Equidistant to two airports',
      text: 'McLean sits almost evenly between Reagan National (DCA) and Dulles (IAD) — roughly 20 minutes to either, which makes it flexible for both domestic and international itineraries. BWI is about an hour; all flights are tracked.',
    },
    {
      title: 'Executive & private clients',
      text: 'Many McLean residents are executives and officials who value confidentiality. We offer standing reservations, early-morning airport runs and the same trusted chauffeur whenever possible, with corporate or private billing.',
    },
    {
      title: 'Galas, weddings & private events',
      text: 'Fundraisers, country-club galas and weddings at nearby estates and vineyards call for polished, on-time arrivals. We manage multi-stop timing and keep vehicles staged discreetly for a smooth exit.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for airport runs and solo travel, luxury SUVs for families and luggage, and executive Sprinters for private groups moving to evening events or the airport.',
    },
  ],
  gallery: [
    { src: IMAGES.washingtonDC, alt: 'Capital region skyline' },
    { src: IMAGES.blackCarDetail, alt: 'Detail of a black chauffeured car' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for service' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to McLean?',
      a: 'McLean is about equidistant — roughly 20 minutes to both Reagan National (DCA) and Dulles (IAD). BWI is about an hour away.',
    },
    {
      q: 'Do you serve the Langley and downtown McLean areas?',
      a: 'Yes. We cover all of McLean including Langley, Chesterbrook, downtown McLean and the neighborhoods bordering Tysons.',
    },
    {
      q: 'Can I request the same chauffeur each time?',
      a: 'Where scheduling allows, we assign a consistent chauffeur for regular clients who value familiarity and discretion.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours works for routine trips; for early flights, galas and weddings we recommend reserving a day or more ahead.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to DCA, IAD and BWI are quoted as all-inclusive flat rates covering gratuity, tolls and wait time.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Tysons, VA', href: '/locations/tysons-va', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'Two airports,\none easy call.',
  ctaText: 'Reserve a discreet chauffeur from McLean to either Reagan National or Dulles, any hour.',
}

export default function Page() {
  return <DetailPage data={data} />
}
