import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Baltimore MD Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Baltimore, MD — the Inner Harbor, downtown, Harbor East and Fells Point. Directly served by BWI in the DC region, 24/7 dispatch.',
  alternates: { canonical: '/locations/baltimore-md' },
  openGraph: {
    title: 'Baltimore MD Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Baltimore, MD — the Inner Harbor, downtown, Harbor East and Fells Point. Directly served by BWI, 24/7.',
    images: [{ url: img(IMAGES.washingtonDC, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Baltimore, MD',
  title: 'Baltimore chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Baltimore — the Inner Harbor and downtown, the hotels and restaurants of Harbor East, Fells Point and the Johns Hopkins campuses — with BWI right at the door.',
  heroImage: IMAGES.washingtonDC,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Baltimore, MD' },
  ],
  stats: [
    { value: 'BWI', label: '15 min to Baltimore/Washington' },
    { value: 'DCA', label: '60 min to Reagan National' },
    { value: 'Since 2000', label: 'Serving the Mid-Atlantic' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'The harbor city, covered',
      text: 'We serve the Inner Harbor, downtown and the Central Business District, Harbor East, Fells Point, Mount Vernon and the Johns Hopkins medical and university campuses. Your chauffeur knows the waterfront one-ways and the fastest routes to I-95.',
    },
    {
      title: 'Minutes from BWI',
      text: 'Baltimore/Washington (BWI) sits just south of the city — roughly 15 minutes from downtown — making it the obvious gateway. Reagan National (DCA) is about an hour south and Dulles (IAD) around 75 minutes; all flights are tracked.',
    },
    {
      title: 'Corporate, medical & conventions',
      text: 'With Johns Hopkins, the Baltimore Convention Center and downtown headquarters, the city draws steady business, medical and conference travel. We offer corporate billing, standing reservations and multi-car coordination for groups.',
    },
    {
      title: 'Harbor events & weddings',
      text: 'Galas at the harbor hotels, Orioles and Ravens game nights and weddings along the waterfront all call for careful timing. We manage multi-stop evenings and keep the vehicle staged for a smooth exit.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for BWI transfers and solo travel, luxury SUVs for groups and luggage, and executive Sprinters for conference delegations and larger groups across the harbor.',
    },
  ],
  gallery: [
    { src: IMAGES.washingtonDC, alt: 'Waterfront city skyline' },
    { src: IMAGES.corporateArrival, alt: 'Chauffeur greeting a client' },
    { src: IMAGES.executiveSprinter, alt: 'Executive Sprinter for group travel' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Baltimore?',
      a: 'Baltimore/Washington (BWI) is closest — about 15 minutes from downtown. Reagan National (DCA) is roughly an hour and Dulles (IAD) around 75 minutes.',
    },
    {
      q: 'Do you serve the Inner Harbor and Fells Point?',
      a: 'Yes. We cover all of Baltimore including the Inner Harbor, downtown, Harbor East, Fells Point, Mount Vernon and the Johns Hopkins campuses.',
    },
    {
      q: 'Can you coordinate convention or group transport?',
      a: 'Yes. We handle multi-car convention transfers and group moves with synchronized timing between hotels, the Convention Center and BWI.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours ahead is fine for routine trips; for conventions, weddings and group events, booking several days ahead is best.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to BWI, DCA and IAD are quoted as all-inclusive flat rates with gratuity, tolls and wait time included.',
    },
  ],
  related: [
    { label: 'Baltimore/Washington · BWI', href: '/airports/bwi', eyebrow: 'Nearest airport' },
    { label: 'Rockville, MD', href: '/locations/rockville-md', eyebrow: 'Neighboring city' },
    { label: 'Corporate transportation', href: '/services/corporate-transportation', eyebrow: 'Service' },
  ],
  ctaTitle: 'From the harbor\nto the gate.',
  ctaText: 'Reserve a chauffeur for a BWI transfer or an evening across the Inner Harbor.',
}

export default function Page() {
  return <DetailPage data={data} />
}
