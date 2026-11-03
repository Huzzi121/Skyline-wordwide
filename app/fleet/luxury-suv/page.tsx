import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Luxury SUV — Chauffeured | Skyline Worldwide',
  description:
    'Chauffeured luxury SUV — Cadillac Escalade or equivalent. Seats 6 with room for 5–6 bags for families, executives with luggage and small groups across the DC region.',
  alternates: { canonical: '/fleet/luxury-suv' },
  openGraph: {
    title: 'Luxury SUV — Chauffeured | Skyline Worldwide',
    description:
      'Chauffeured luxury SUV seating 6 with space for 5–6 bags. The go-to for families, luggage-heavy arrivals and small groups that still want to travel together.',
    images: [{ url: img(IMAGES.luxurySUV, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The fleet · Luxury SUV',
  title: 'Room for the party\nand all of its bags.',
  intro:
    'A Cadillac Escalade — or its equivalent — that seats six in command-height comfort and still swallows the golf clubs, the ski bags and the week’s worth of luggage.',
  heroImage: IMAGES.luxurySUV,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Luxury SUV' },
  ],
  stats: [
    { value: '6', label: 'Passengers' },
    { value: '5–6', label: 'Bags' },
    { value: 'Escalade', label: 'Or equivalent' },
    { value: '24/7', label: 'Dispatch' },
  ],
  sections: [
    {
      title: 'When a sedan won’t cut it',
      text: 'Five or six travelers, a family with car seats, or two executives with a trunk full of samples. The SUV is the answer whenever headcount or luggage pushes past what a sedan can carry gracefully.',
    },
    {
      title: 'A cabin with real space',
      text: 'Captain’s chairs, generous legroom and a third row that genuinely seats adults. Tri-zone climate, device charging and bottled water throughout — comfort that scales to everyone aboard.',
    },
    {
      title: 'Presence at the curb',
      text: 'Polished dark paint, spotless glass and a reset interior before every assignment. The SUV lands with the kind of quiet authority that reassures a client the moment it arrives.',
    },
    {
      title: 'Luggage-heavy arrivals',
      text: 'Five to six full-size cases, garment carriers, strollers and sports gear fit without stacking bags on laps. Ideal for family airport runs at IAD, DCA and BWI.',
    },
    {
      title: 'Who it suits',
      text: 'Families, small executive teams, and anyone pairing a group of up to six with serious luggage. For a formal celebration, consider the stretch limousine; for more seats, the Sprinter.',
    },
    {
      title: 'How to reserve',
      text: 'Book online or call dispatch any hour with your headcount and bag count. We confirm an all-inclusive rate and send a vehicle sized exactly to the load.',
    },
  ],
  gallery: [
    { src: IMAGES.luxurySUV, alt: 'Black luxury SUV detailed and ready for a group pickup' },
    { src: IMAGES.cabinInterior, alt: 'Spacious SUV cabin with leather captain’s chairs' },
    { src: IMAGES.blackCarDetail, alt: 'Close detail of a polished black SUV' },
    { src: IMAGES.corporateArrival, alt: 'Small group arriving curbside with luggage' },
  ],
  faqs: [
    {
      q: 'How many passengers and bags does the SUV hold?',
      a: 'Up to six passengers with five to six standard bags. If luggage runs over, tell us at booking and we will advise a second vehicle or step up to a Sprinter.',
    },
    {
      q: 'Can you provide child seats?',
      a: 'Yes, and the SUV is our most family-friendly vehicle. Share each child’s age and weight and we install the right infant, convertible or booster seats before pickup.',
    },
    {
      q: 'Are the rates all-inclusive?',
      a: 'They are. Wait time, meet time and tolls are included in the quoted figure — no surprise line items when the trip is done.',
    },
    {
      q: 'Can I book the SUV hourly?',
      a: 'Yes. Reserve it for a single transfer or keep the vehicle and chauffeur by the hour for a day of meetings, shopping or sightseeing with the group.',
    },
    {
      q: 'What amenities come standard?',
      a: 'Bottled water, device charging, tri-zone climate control and a clean, quiet cabin. Note any preference — temperature, route, or a specific meeting point — and we accommodate it.',
    },
  ],
  related: [
    { eyebrow: 'The fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
    { eyebrow: 'Service', label: 'Airport transfers', href: '/services/airport-transfers' },
    { eyebrow: 'Airports', label: 'Dulles · IAD', href: '/airports/iad' },
  ],
  ctaTitle: 'Everyone together,\nnothing left behind.',
  ctaText: `Reserve a luxury SUV online or call ${BUSINESS.phonePrimary} — give us the headcount and the bag count.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
