import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Bethesda MD Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Bethesda, MD — downtown Bethesda, the NIH and the medical and biotech corridor. Close to DC with DCA and BWI access, 24/7.',
  alternates: { canonical: '/locations/bethesda-md' },
  openGraph: {
    title: 'Bethesda MD Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Bethesda, MD — downtown, the NIH and the biotech corridor. Close to DC with DCA and BWI access, 24/7.',
    images: [{ url: img(IMAGES.capitalRegion, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Bethesda, MD',
  title: 'Bethesda chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Bethesda — from the restaurants and offices of downtown to the NIH campus, Walter Reed and the medical and biotech corridor along Rockville Pike.',
  heroImage: IMAGES.capitalRegion,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Bethesda, MD' },
  ],
  stats: [
    { value: 'DCA', label: '25 min to Reagan National' },
    { value: 'IAD', label: '35 min to Dulles' },
    { value: 'Since 2000', label: 'Serving Montgomery County' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Downtown Bethesda and the Pike',
      text: 'We serve downtown Bethesda, Bethesda Row, Woodmont Triangle and the medical campuses along Rockville Pike — the NIH, Walter Reed and Suburban Hospital. Your chauffeur knows the Pike’s rhythms and the quickest routes into the District.',
    },
    {
      title: 'Airport connections',
      text: 'Reagan National (DCA) is about 25 minutes south, Dulles (IAD) roughly 35 minutes west and BWI around 45 minutes northeast. We track every flight and adjust pickups so you are met on time at any of the three.',
    },
    {
      title: 'Medical, biotech & corporate',
      text: 'With the NIH, FDA proximity and a dense biotech cluster, Bethesda sees constant professional and medical travel. We provide account billing, standing reservations and discreet transport for executives, physicians and visiting researchers.',
    },
    {
      title: 'Dining, galas & weddings',
      text: 'Bethesda Row dinners, theater evenings and weddings at nearby clubs and hotels call for precise timing. We coordinate multi-stop evenings and keep the vehicle ready for a smooth departure.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for airport runs and solo travel, luxury SUVs for groups and luggage, and executive Sprinters for medical delegations or evening groups heading into DC.',
    },
  ],
  gallery: [
    { src: IMAGES.capitalRegion, alt: 'Capital region skyline' },
    { src: IMAGES.corporateArrival, alt: 'Chauffeur greeting a client' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for service' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Bethesda?',
      a: 'Reagan National (DCA) is closest at about 25 minutes. Dulles (IAD) is roughly 35 minutes and BWI around 45 minutes.',
    },
    {
      q: 'Do you serve the NIH and downtown Bethesda?',
      a: 'Yes. We cover all of Bethesda including downtown, Bethesda Row, Woodmont Triangle and the NIH, Walter Reed and Suburban Hospital campuses.',
    },
    {
      q: 'Can you set up a corporate or medical account?',
      a: 'Yes. We offer corporate billing and standing reservations for the biotech firms, medical institutions and professional offices across Bethesda.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours ahead is fine for routine trips; for early flights and events, a day or more in advance secures your vehicle.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to DCA, IAD and BWI are quoted as all-inclusive flat rates with gratuity, tolls and wait time included.',
    },
  ],
  related: [
    { label: 'Baltimore/Washington · BWI', href: '/airports/bwi', eyebrow: 'Nearest airport' },
    { label: 'Chevy Chase, MD', href: '/locations/chevy-chase-md', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'From the Pike\nto any terminal.',
  ctaText: 'Reserve a chauffeur for an airport run, an NIH visit or an evening along Bethesda Row.',
}

export default function Page() {
  return <DetailPage data={data} />
}
