import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Washington DC Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Washington, DC — Georgetown, Capitol Hill, Dupont Circle, downtown and the embassies. Reagan National just minutes away, 24/7.',
  alternates: { canonical: '/locations/washington-dc' },
  openGraph: {
    title: 'Washington DC Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Washington, DC — from Georgetown to Capitol Hill, embassies and downtown hotels. Reagan National minutes away, 24/7.',
    images: [{ url: img(IMAGES.washingtonDC, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Washington, DC',
  title: 'Washington DC\nchauffeur service.',
  intro:
    'Discreet, chauffeured ground transportation across the District — from the embassies along Massachusetts Avenue to Capitol Hill, Georgetown and the downtown hotel corridor.',
  heroImage: IMAGES.washingtonDC,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Washington, DC' },
  ],
  stats: [
    { value: 'DCA', label: '10 min to Reagan National' },
    { value: 'IAD', label: '35 min to Dulles' },
    { value: 'Since 2000', label: 'Serving the capital' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'The District, end to end',
      text: 'We cover every quadrant of Washington — Northwest galas and embassy functions, Capitol Hill and the federal offices, Foggy Bottom, Penn Quarter and the museums along the National Mall. Your chauffeur knows the one-way grid and the security perimeters.',
    },
    {
      title: 'Airport connections',
      text: 'Reagan National (DCA) sits just across the Potomac, roughly ten minutes from downtown. Dulles (IAD) is about 35 minutes west and Baltimore/Washington (BWI) under an hour northeast. We track every flight and adjust pickups for delays automatically.',
    },
    {
      title: 'Government & corporate',
      text: 'Law firms on K Street, associations near Farragut, lobbyists on the Hill and delegations visiting the agencies rely on us for on-time, confidential service. Billing accounts, standing reservations and multi-car coordination are all available.',
    },
    {
      title: 'Diplomatic & protocol',
      text: 'We regularly serve embassies, missions and visiting delegations with chauffeurs experienced in protocol, motorcade staging and the credentialing required around the State Department and the White House complex.',
    },
    {
      title: 'Events, galas & weddings',
      text: 'Black-tie evenings at the Kennedy Center, galas at the Mayflower and Willard, weddings in Georgetown and receptions along the waterfront — we handle multi-stop timing so arrivals land precisely on the hour.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for solo principals and airport runs, luxury SUVs for small groups and luggage, and executive Sprinters for delegations or evening groups moving between venues across the city.',
    },
  ],
  gallery: [
    { src: IMAGES.washingtonDC, alt: 'Washington DC skyline at dusk' },
    { src: IMAGES.corporateArrival, alt: 'Chauffeur greeting a client curbside' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for service' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to downtown DC?',
      a: 'Reagan National (DCA) is closest — about ten minutes across the Potomac. Dulles (IAD) is roughly 35 minutes and BWI about an hour depending on traffic.',
    },
    {
      q: 'Do you serve Georgetown and Capitol Hill?',
      a: 'Yes. We cover all of the District, including Georgetown, Capitol Hill, Dupont Circle, Foggy Bottom, Penn Quarter and the downtown hotel district.',
    },
    {
      q: 'Can you handle embassy and protocol work?',
      a: 'We do. Our chauffeurs are experienced with embassy functions, delegation movements and the credentialing and staging required around government buildings.',
    },
    {
      q: 'How far ahead should I book?',
      a: 'For routine airport and corporate trips a few hours is fine. For galas, weddings and multi-car events we recommend reserving several days ahead so we can stage vehicles properly.',
    },
    {
      q: 'Do you offer flat airport rates?',
      a: 'Yes. Point-to-point airport transfers are quoted as all-inclusive flat rates — gratuity, tolls and wait time for flight delays are built in.',
    },
    {
      q: 'Is hourly service available in the city?',
      a: 'Yes. Hourly charter is ideal for meetings, multi-stop evenings and events where you keep the same chauffeur and vehicle on call throughout.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Arlington, VA', href: '/locations/arlington-va', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'Move through the capital\nwithout a second thought.',
  ctaText: 'Reserve a chauffeur for airport runs, meetings on the Hill or an evening across the District.',
}

export default function Page() {
  return <DetailPage data={data} />
}
