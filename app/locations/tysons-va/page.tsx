import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tysons VA Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Tysons, VA — Tysons Corner business and retail hub on the Silver Line. Minutes to Dulles in the DC region, 24/7 dispatch.',
  alternates: { canonical: '/locations/tysons-va' },
  openGraph: {
    title: 'Tysons VA Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Tysons, VA — the corporate and retail hub on the Silver Line. Minutes to Dulles in the DC region, 24/7.',
    images: [{ url: img(IMAGES.cityEvening, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Tysons, VA',
  title: 'Tysons chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Tysons — the region’s corporate and retail capital, from the towers along Westpark Drive to Tysons Corner Center and the Silver Line stations.',
  heroImage: IMAGES.cityEvening,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Tysons, VA' },
  ],
  stats: [
    { value: 'IAD', label: '20 min to Dulles' },
    { value: 'DCA', label: '25 min to Reagan National' },
    { value: 'Since 2000', label: 'Serving Northern Virginia' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'The business capital of NoVA',
      text: 'Tysons packs Fortune 500 headquarters, law firms and consultancies into a few square miles. We serve the office towers along Westpark and Greensboro, the hotels at Tysons Corner and the Boro and Capital One campuses with punctual, discreet transport.',
    },
    {
      title: 'Closest to Dulles',
      text: 'Dulles (IAD) is roughly 20 minutes west along the Toll Road, making Tysons ideal for international and transcontinental travel. Reagan National (DCA) is about 25 minutes and BWI around an hour; every flight is tracked for on-time meets.',
    },
    {
      title: 'Corporate & roadshows',
      text: 'Earnings roadshows, client visits and all-day meeting circuits are routine here. We provide multi-car coordination, standing reservations and corporate billing so executives move seamlessly between campuses and the airport.',
    },
    {
      title: 'Shopping, dining & events',
      text: 'Tysons Galleria, the luxury retail at Tysons Corner Center and the restaurants at the Boro make for busy evenings. We handle shopping runs, dinners and conference transfers with the same precision as corporate work.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for IAD transfers and solo executives, luxury SUVs for small teams and luggage, and executive Sprinters for roadshows and group moves between Tysons and Dulles.',
    },
  ],
  gallery: [
    { src: IMAGES.cityEvening, alt: 'Tysons skyline in the evening' },
    { src: IMAGES.roadshow, alt: 'Executive roadshow transport' },
    { src: IMAGES.executiveSprinter, alt: 'Executive Sprinter for group travel' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Tysons?',
      a: 'Dulles (IAD) is closest — about 20 minutes along the Toll Road. Reagan National (DCA) is roughly 25 minutes and BWI about an hour.',
    },
    {
      q: 'Do you serve the Tysons Corner office towers?',
      a: 'Yes. We cover all of Tysons including Westpark, Greensboro, Tysons Corner Center, the Boro, the Galleria and the Silver Line corridor.',
    },
    {
      q: 'Can you coordinate a multi-car roadshow?',
      a: 'Absolutely. Multi-car roadshows with synchronized timing between Tysons campuses and the airports are one of our most requested corporate services.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours ahead covers routine airport and meeting trips. For roadshows and group events, booking a day or more in advance guarantees vehicles and chauffeurs.',
    },
    {
      q: 'Is hourly service available?',
      a: 'Yes. Hourly charter is ideal for all-day meeting circuits and client visits across Tysons when you want the same car on call.',
    },
  ],
  related: [
    { label: 'Dulles · IAD', href: '/airports/iad', eyebrow: 'Nearest airport' },
    { label: 'McLean, VA', href: '/locations/mclean-va', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'Keep the whole day\non schedule.',
  ctaText: 'Reserve a chauffeur for a Dulles transfer or an all-day meeting circuit across Tysons.',
}

export default function Page() {
  return <DetailPage data={data} />
}
