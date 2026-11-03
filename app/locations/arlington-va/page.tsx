import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Arlington VA Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Arlington, VA — Rosslyn, Clarendon, Ballston, Crystal City and Pentagon City. Five minutes to Reagan National, 24/7 dispatch.',
  alternates: { canonical: '/locations/arlington-va' },
  openGraph: {
    title: 'Arlington VA Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Arlington, VA — Rosslyn, Clarendon, Ballston, Crystal City and Pentagon City. Five minutes to Reagan National, 24/7.',
    images: [{ url: img(IMAGES.capitalRegion, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Arlington, VA',
  title: 'Arlington chauffeur\nservice.',
  intro:
    'Chauffeured black car service across Arlington — from the towers of Rosslyn and Ballston to Crystal City, Pentagon City and the restaurants of Clarendon — with Reagan National on the doorstep.',
  heroImage: IMAGES.capitalRegion,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Arlington, VA' },
  ],
  stats: [
    { value: 'DCA', label: '5 min to Reagan National' },
    { value: 'IAD', label: '30 min to Dulles' },
    { value: 'Since 2000', label: 'Serving Northern Virginia' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Arlington, corridor to corridor',
      text: 'We serve the full Rosslyn–Ballston corridor plus Crystal City, Pentagon City and the Pentagon itself. Whether you are in a Clarendon high-rise or a Columbia Pike office, your chauffeur knows the fastest routes across the county.',
    },
    {
      title: 'Minutes from Reagan National',
      text: 'Arlington is the closest jurisdiction to DCA — most pickups reach the terminals in about five minutes. Dulles (IAD) is roughly 30 minutes up the Toll Road and BWI about an hour, and we monitor every flight for on-time curbside meets.',
    },
    {
      title: 'Government & defense',
      text: 'With the Pentagon, defense contractors in Crystal City and the agencies clustered in Rosslyn, Arlington runs on business travel. Standing reservations, corporate billing and roadshow coordination keep teams moving on schedule.',
    },
    {
      title: 'Evenings & celebrations',
      text: 'Dinner in Clarendon, a wedding along the Potomac or a night across the river into the District — we handle multi-stop evenings so you arrive together and on time, with the vehicle waiting when you step out.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for the quick DCA transfer, luxury SUVs for families and luggage, and executive Sprinters for team roadshows between the Rosslyn–Ballston offices and the airport.',
    },
  ],
  gallery: [
    { src: IMAGES.capitalRegion, alt: 'Arlington skyline across the Potomac' },
    { src: IMAGES.luxurySUV, alt: 'Luxury SUV for group transfers' },
    { src: IMAGES.corporateArrival, alt: 'Chauffeur meeting a corporate client' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Arlington?',
      a: 'Reagan National (DCA) is closest — typically five minutes from most of Arlington. Dulles (IAD) is about 30 minutes and BWI roughly an hour.',
    },
    {
      q: 'Do you serve Crystal City and Pentagon City?',
      a: 'Yes. We cover all of Arlington including Rosslyn, Clarendon, Ballston, Crystal City, Pentagon City and Columbia Pike.',
    },
    {
      q: 'How early should I book an airport transfer?',
      a: 'Because DCA is so close, a couple of hours is usually enough. For early flights or group moves, booking the day before guarantees your preferred vehicle.',
    },
    {
      q: 'Do you offer flat rates from Arlington?',
      a: 'Yes. Transfers are quoted as all-inclusive flat rates covering gratuity, tolls and wait time, so there are no surprises.',
    },
    {
      q: 'Is hourly service available?',
      a: 'Yes. Hourly charter suits meetings across the corridor, roadshows and evenings when you want the same chauffeur on call throughout.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Alexandria, VA', href: '/locations/alexandria-va', eyebrow: 'Neighboring city' },
    { label: 'Airport transfers', href: '/services/airport-transfers', eyebrow: 'Service' },
  ],
  ctaTitle: 'Five minutes to the gate,\nzero to worry about.',
  ctaText: 'Reserve a chauffeur for a Reagan National run or a meeting anywhere along the Rosslyn–Ballston corridor.',
}

export default function Page() {
  return <DetailPage data={data} />
}
