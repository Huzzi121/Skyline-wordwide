import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Alexandria VA Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Alexandria, VA — Old Town, King Street and the Potomac waterfront. Minutes to Reagan National in the DC region, 24/7 dispatch.',
  alternates: { canonical: '/locations/alexandria-va' },
  openGraph: {
    title: 'Alexandria VA Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Alexandria, VA — Old Town, King Street and the waterfront. Minutes to Reagan National in the DC region, 24/7.',
    images: [{ url: img(IMAGES.cityStreets, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Alexandria, VA',
  title: 'Alexandria chauffeur\nservice.',
  intro:
    'Chauffeured black car service through Alexandria — the cobblestones of Old Town, the shops along King Street and the Potomac waterfront — with Reagan National just up the Parkway.',
  heroImage: IMAGES.cityStreets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Alexandria, VA' },
  ],
  stats: [
    { value: 'DCA', label: '10 min to Reagan National' },
    { value: 'IAD', label: '40 min to Dulles' },
    { value: 'Since 2000', label: 'Serving Northern Virginia' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Old Town and beyond',
      text: 'We serve historic Old Town, the King Street corridor, the waterfront, Del Ray, Carlyle and the Eisenhower Avenue business district. Your chauffeur navigates the narrow colonial streets so you step out exactly where you need to be.',
    },
    {
      title: 'Airport connections',
      text: 'Reagan National (DCA) is about ten minutes north along the George Washington Parkway. Dulles (IAD) is roughly 40 minutes and BWI around 50 minutes. Flights are tracked so your chauffeur is curbside as you land.',
    },
    {
      title: 'Corporate & federal',
      text: 'With the Patent & Trademark Office, the Carlyle district and the agencies at Eisenhower Avenue, Alexandria sees steady business travel. We provide account billing, standing reservations and discreet, punctual service for executives.',
    },
    {
      title: 'Weddings & waterfront events',
      text: 'Weddings at the Torpedo Factory, receptions at waterfront hotels and dinners along King Street call for precise timing. We coordinate multi-stop evenings and keep the vehicle staged for a graceful exit.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for the short DCA transfer, luxury SUVs for couples and luggage, and executive Sprinters for wedding parties or groups heading into the District for the evening.',
    },
  ],
  gallery: [
    { src: IMAGES.cityStreets, alt: 'Historic Alexandria street' },
    { src: IMAGES.weddingArrival, alt: 'Chauffeured arrival at a wedding' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan on a city street' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Alexandria?',
      a: 'Reagan National (DCA) is closest — about ten minutes up the GW Parkway. Dulles (IAD) is roughly 40 minutes and BWI around 50 minutes.',
    },
    {
      q: 'Do you serve Old Town and the waterfront?',
      a: 'Yes. We cover all of Alexandria including Old Town, King Street, the Potomac waterfront, Del Ray, Carlyle and Eisenhower Avenue.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours ahead works for airport and point-to-point trips. For weddings and group events, several days ahead lets us stage the right vehicles.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to and from DCA, IAD and BWI are quoted as all-inclusive flat rates with gratuity, tolls and wait time included.',
    },
    {
      q: 'Can I book hourly in Old Town?',
      a: 'Yes. Hourly charter is popular for dinners, tours and evenings where you want the chauffeur and vehicle on call the whole time.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Arlington, VA', href: '/locations/arlington-va', eyebrow: 'Neighboring city' },
    { label: 'Weddings & events', href: '/services/airport-transfers', eyebrow: 'Service' },
  ],
  ctaTitle: 'From the cobblestones\nto the gate.',
  ctaText: 'Reserve a chauffeur for a waterfront evening in Old Town or a quick run to Reagan National.',
}

export default function Page() {
  return <DetailPage data={data} />
}
