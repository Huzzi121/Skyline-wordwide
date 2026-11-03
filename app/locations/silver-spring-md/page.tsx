import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Silver Spring MD Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeured black car service in Silver Spring, MD — the vibrant downtown district right on the DC line. Quick access to DCA and BWI in the DC region, 24/7.',
  alternates: { canonical: '/locations/silver-spring-md' },
  openGraph: {
    title: 'Silver Spring MD Chauffeur & Black Car Service | Skyline Worldwide',
    description:
      'Chauffeured black car service across Silver Spring, MD — the downtown district on the DC line with quick DCA and BWI access, 24/7.',
    images: [{ url: img(IMAGES.blackCarDetail, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Service area · Silver Spring, MD',
  title: 'Silver Spring chauffeur\nservice.',
  intro:
    'Chauffeured black car service for Silver Spring — the lively downtown around Ellsworth Drive and the Fillmore, the federal offices and the neighborhoods stretching right up to the District line.',
  heroImage: IMAGES.blackCarDetail,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Locations', href: '/locations' },
    { label: 'Silver Spring, MD' },
  ],
  stats: [
    { value: 'DCA', label: '25 min to Reagan National' },
    { value: 'BWI', label: '40 min to Baltimore/Washington' },
    { value: 'Since 2000', label: 'Serving Montgomery County' },
    { value: '24/7', label: 'Dispatch & reservations' },
  ],
  sections: [
    {
      title: 'Downtown Silver Spring and the DC edge',
      text: 'We serve downtown Silver Spring around Ellsworth Drive and the Fillmore, the federal offices, the FDA White Oak campus and the surrounding neighborhoods. Sitting on the District line, trips into DC are short and direct.',
    },
    {
      title: 'Airport connections',
      text: 'Reagan National (DCA) is about 25 minutes south, BWI roughly 40 minutes northeast and Dulles (IAD) around 45 minutes west. We track every flight and time pickups so your chauffeur meets you curbside.',
    },
    {
      title: 'Federal & corporate',
      text: 'With the FDA, NOAA and other agencies nearby, Silver Spring runs on government and professional travel. We provide account billing, standing reservations and discreet, on-time transport for staff and visiting officials.',
    },
    {
      title: 'Nightlife, events & weddings',
      text: 'Concerts at the Fillmore, dinners along Ellsworth and weddings at nearby venues keep evenings busy. We coordinate multi-stop timing and keep the vehicle staged for an easy departure into the city or home.',
    },
    {
      title: 'Recommended vehicles',
      text: 'Executive sedans for airport runs and solo travel, luxury SUVs for groups and luggage, and executive Sprinters for group outings and evenings into the District.',
    },
  ],
  gallery: [
    { src: IMAGES.blackCarDetail, alt: 'Detail of a black chauffeured car' },
    { src: IMAGES.corporateArrival, alt: 'Chauffeur greeting a client' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for service' },
  ],
  faqs: [
    {
      q: 'Which airport is closest to Silver Spring?',
      a: 'Reagan National (DCA) is closest at about 25 minutes. BWI is roughly 40 minutes and Dulles (IAD) around 45 minutes.',
    },
    {
      q: 'Do you serve downtown Silver Spring and White Oak?',
      a: 'Yes. We cover all of Silver Spring including downtown, Ellsworth Drive, the Fillmore area and the FDA White Oak campus.',
    },
    {
      q: 'Can you set up a government or corporate account?',
      a: 'Yes. We offer account billing and standing reservations for the agencies and professional offices around Silver Spring.',
    },
    {
      q: 'How early should I book?',
      a: 'A few hours works for routine trips; for early flights and events, a day or more ahead secures your vehicle.',
    },
    {
      q: 'Are flat airport rates available?',
      a: 'Yes. Transfers to DCA, BWI and IAD are quoted as all-inclusive flat rates covering gratuity, tolls and wait time.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Nearest airport' },
    { label: 'Bethesda, MD', href: '/locations/bethesda-md', eyebrow: 'Neighboring city' },
    { label: 'Airport transfers', href: '/services/airport-transfers', eyebrow: 'Service' },
  ],
  ctaTitle: 'A short hop into\nthe capital.',
  ctaText: 'Reserve a chauffeur from Silver Spring for an airport run or a night out on Ellsworth Drive.',
}

export default function Page() {
  return <DetailPage data={data} />
}
