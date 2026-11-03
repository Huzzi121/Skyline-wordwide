import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Point-to-Point Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'One-way and return chauffeured journeys across Washington DC, Maryland and Northern Virginia. Simple flat rates, the right vehicle for the trip and 24/7 dispatch since 2000.',
  alternates: { canonical: '/services/point-to-point' },
  openGraph: {
    title: 'Point-to-Point | Skyline Worldwide',
    description:
      'One-way and return chauffeured journeys across Washington DC, Maryland and Northern Virginia. Simple flat rates, the right vehicle for the trip and 24/7 dispatch since 2000.',
    images: [{ url: img(IMAGES.cityStreets, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Point-to-point',
  title: 'One address\nto the next.',
  intro:
    'A single, direct journey done properly — the right vehicle, a professional chauffeur and a clear rate agreed before you ride, anywhere across the capital region.',
  heroImage: IMAGES.cityStreets,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Point-to-point' },
  ],
  stats: [
    { value: 'Flat', label: 'Agreed up front' },
    { value: '24/7', label: 'Dispatch' },
    { value: 'DC · MD · VA', label: 'Core service area' },
    { value: 'Since 2000', label: 'On these roads' },
  ],
  sections: [
    {
      title: 'One-way or return',
      text: 'Book a single run to a dinner or a meeting, or arrange the return the moment you are ready to leave. Either way the pricing and the plan stay simple.',
    },
    {
      title: 'The right vehicle',
      text: 'Tell us the passenger count and the luggage and we recommend the class — a discreet executive sedan for one or two, a luxury SUV when there is more to carry.',
    },
    {
      title: 'Local road knowledge',
      text: 'Our chauffeurs know the capital’s rhythm: which bridge to take at rush hour, where the venue entrance really is and how long Beltway traffic will actually cost you.',
    },
    {
      title: 'A fare you can trust',
      text: 'Rates are all-inclusive and confirmed before the trip, so there is no meter anxiety and no surge pricing — the figure we quote is the figure you pay.',
    },
    {
      title: 'A simple reservation',
      text: 'Give us the two addresses, the time and the passenger count. Dispatch confirms with a real person and sends your chauffeur and vehicle details ahead of pickup.',
    },
    {
      title: 'Beyond the region',
      text: 'Need to reach a city outside DC, Maryland or Virginia? Our affiliate network carries the same standard point-to-point service to more than 500 destinations.',
    },
  ],
  gallery: [
    { src: IMAGES.cityStreets, alt: 'Sedan moving through capital streets between stops' },
    { src: IMAGES.executiveSedan, alt: 'Executive sedan ready for a direct journey' },
    { src: IMAGES.cabinInterior, alt: 'Comfortable cabin for a quiet point-to-point ride' },
  ],
  faqs: [
    {
      q: 'How is point-to-point priced?',
      a: 'We quote an all-inclusive flat rate based on the route and vehicle class, confirmed before your trip. There is no meter and no surge pricing at peak times.',
    },
    {
      q: 'Can I add a stop along the way?',
      a: 'Yes. Tell us about any intermediate stop when you book and we will factor it into the plan and the rate. For several stops, hourly charter is often the better fit.',
    },
    {
      q: 'Which vehicle should I choose?',
      a: 'For one to three passengers with light luggage an executive sedan is ideal; add passengers or bags and we will suggest a luxury SUV. Share the details and we recommend the class.',
    },
    {
      q: 'How far in advance should I book?',
      a: 'Reserving a day ahead guarantees your preferred vehicle, but our 24/7 dispatch handles same-day and last-minute point-to-point requests whenever a car is available.',
    },
    {
      q: 'Do you cover trips outside Washington?',
      a: 'Our core coverage is DC, Maryland and Northern Virginia, and for journeys beyond the region our vetted affiliate network provides the same service in 500+ cities.',
    },
  ],
  related: [
    { eyebrow: 'Service', label: 'Airport transfers', href: '/services/airport-transfers' },
    { eyebrow: 'Service', label: 'Hourly charter', href: '/services/hourly-charter' },
    { eyebrow: 'Fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
  ],
  ctaTitle: 'Two addresses,\none easy ride.',
  ctaText: 'Send us the pickup, the destination and the time — we will take care of the rest.',
}

export default function Page() {
  return <DetailPage data={data} />
}
