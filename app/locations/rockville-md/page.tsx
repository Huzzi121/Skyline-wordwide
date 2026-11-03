import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Rockville MD Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Rockville, MD — the county seat, Rockville Town Center and the Pike District biotech corridor. DC and BWI access, 24/7 dispatch.',
  alternates: { canonical: '/locations/rockville-md' },
  openGraph: {
    title: 'Rockville MD Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Rockville, MD — the county seat, Town Center and the Pike District biotech corridor. DC and BWI access, 24/7.',
    images: [{ url: img(IMAGES.cityEvening, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Rockville, MD',
  title: 'Rockville chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Rockville — the Montgomery County seat, from Rockville Town Center to the Pike District and the biotech campuses lining the I-270 corridor.',
  heroImage: IMAGES.cityEvening,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Rockville, MD' },
  ],
  stats: [
    { value: 'BWI', label: '45 min to Baltimore/Washington' },
    { value: 'DCA', label: '35 min to Reagan National' },
    { value: 'Since 2000', label: 'Serving Montgomery County' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'The county seat and the Pike District',
      text: 'We serve Rockville Town Center, the courthouse and county offices, the Pike District and the biotech campuses along Research Boulevard. Your chauffeur knows I-270 and the Pike well enough to keep your schedule intact.',
    },
    {
      title: 'Airport connections',
      text: 'Reagan National (DCA) is about 35 minutes south, Dulles (IAD) roughly 35 minutes southwest and BWI around 45 minutes east. We track flights at all three and adjust pickups for delays automatically.',
    },
    {
      title: 'Biotech & corporate',
      text: 'Rockville anchors Maryland’s biotech cluster, with pharma and research firms throughout the I-270 corridor. We offer corporate billing, standing reservations and multi-car coordination for executives and visiting teams.',
    },
    {
      title: 'Events, courts & weddings',
      text: 'County proceedings, Town Square events and weddings at nearby venues all demand reliable timing. We coordinate multi-stop trips and keep the vehicle staged for a clean, on-time arrival.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for airport runs and solo executives, luxury SUVs for teams and luggage, and executive Sprinters for biotech delegations or groups traveling the corridor.',
    },
  ],
  gallery: [
    { src: IMAGES.cityEvening, alt: 'City skyline in the evening' },
    { src: IMAGES.roadshow, alt: 'Executive roadshow transport' },
    { src: IMAGES.luxurySUV, alt: 'Luxury SUV for group travel' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Rockville?',
      a: 'The three are comparable: Reagan National (DCA) and Dulles (IAD) are each about 35 minutes, and BWI is roughly 45 minutes. We help you choose based on your flight.',
    },
    {
      q: 'Do you serve the Pike District and Town Center?',
      a: 'Yes. We cover all of Rockville including Town Center, the Pike District, the county offices and the I-270 biotech corridor.',
    },
    {
      q: 'Can you set up a corporate account for a biotech firm?',
      a: 'Yes. We provide corporate billing, standing reservations and multi-car coordination for the pharma and research firms along the corridor.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours ahead covers routine trips; for early flights and group events, booking a day or more in advance secures your vehicles.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to BWI, DCA and IAD are quoted as all-inclusive flat rates with gratuity, tolls and wait time included.',
    },
  ],
  related: [
    { label: 'Baltimore/Washington · BWI', href: '/airports/bwi', eyebrow: 'Nearest airport' },
    { label: 'Bethesda, MD', href: '/locations/bethesda-md', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'Keep the corridor\nrunning on time.',
  ctaText: 'Reserve a chauffeur for an airport transfer or a day across Rockville and the I-270 corridor.',
}

export default function Page() {
  return <DetailPage data={data} />
}
