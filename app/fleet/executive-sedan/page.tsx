import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Executive Sedan — Chauffeured | Skyline Worldwide',
  description:
    'Chauffeured executive sedan — Mercedes-Benz E/S-Class or equivalent. Seats 3 with 2–3 bags for airport transfers and point-to-point travel across the DC region.',
  alternates: { canonical: '/fleet/executive-sedan' },
  openGraph: {
    title: 'Executive Sedan — Chauffeured | Skyline Worldwide',
    description:
      'Chauffeured executive sedan seating 3 with room for 2–3 bags. The quiet workhorse of the Washington region for airport runs and executive point-to-point travel.',
    images: [{ url: img(IMAGES.executiveSedan, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The fleet · Executive sedan',
  title: 'The quiet standard\nfor a single move.',
  intro:
    'A Mercedes-Benz E or S-Class — or its equal — kept immaculate and driven by a professional who treats the back seat as your office, your pause, or your arrival.',
  heroImage: IMAGES.executiveSedan,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Executive sedan' },
  ],
  stats: [
    { value: '3', label: 'Passengers' },
    { value: '2–3', label: 'Bags' },
    { value: '24/7', label: 'Dispatch' },
    { value: 'E / S-Class', label: 'Or equivalent' },
  ],
  sections: [
    {
      title: 'Built for the solo executive',
      text: 'The sedan is the default for one or two travelers heading to a meeting, a dinner or the airport. Low-profile, unmistakably composed, and never more car than the occasion calls for.',
    },
    {
      title: 'A cabin that works',
      text: 'Supple leather, climate you control, and enough quiet to take the call you were dreading. Device charging and bottled water come standard; the partition between you and the day is included free.',
    },
    {
      title: 'Presentation that reads right',
      text: 'Detailed before every assignment — glass clean, paint dark, interior reset. When the sedan pulls to the curb, it says the trip was handled by people who sweat the details.',
    },
    {
      title: 'Airport transfers, handled',
      text: 'With 2–3 bags and up to three seats, the sedan covers the overwhelming majority of DCA, IAD and BWI runs. We track the flight and meet you without a text from you.',
    },
    {
      title: 'Who it suits',
      text: 'The individual traveler, the executive pair, the client you are collecting personally. If the party grows or the luggage does, the SUV is one call away.',
    },
    {
      title: 'How to reserve',
      text: 'Book online or call dispatch any hour. Give us the pickup, the flight or the time, and we confirm an all-inclusive rate — the number quoted is the number paid.',
    },
  ],
  gallery: [
    { src: IMAGES.executiveSedan, alt: 'Black executive sedan detailed and ready for pickup' },
    { src: IMAGES.cabinInterior, alt: 'Leather sedan cabin with soft interior lighting' },
    { src: IMAGES.blackCarDetail, alt: 'Close detail of a polished black sedan at the curb' },
    { src: IMAGES.cityEvening, alt: 'City streets at dusk seen from the back seat' },
  ],
  faqs: [
    {
      q: 'How many passengers and bags does the sedan hold?',
      a: 'Comfortably three passengers with two to three standard bags. For a fuller load or a fourth traveler we recommend the luxury SUV.',
    },
    {
      q: 'Can you provide a child seat?',
      a: 'Yes. Tell us the child’s age and weight when you book and we install the right infant, convertible or booster seat before pickup at no surprise cost.',
    },
    {
      q: 'Are the rates all-inclusive?',
      a: 'They are. Standard wait, meet time and tolls are built into the quote. The figure dispatch confirms is the figure you pay, with reasonable grace for delays.',
    },
    {
      q: 'Is the sedan available hourly or only for transfers?',
      a: 'Both. Book a straight point-to-point transfer or reserve the car and chauffeur by the hour for a run of meetings, errands or an evening out.',
    },
    {
      q: 'What amenities are in the car?',
      a: 'Bottled water, device charging, climate control and a clean, quiet cabin as standard. Let us know any preference — a specific route, temperature or silence — and we honor it.',
    },
  ],
  related: [
    { eyebrow: 'The fleet', label: 'Luxury SUV', href: '/fleet/luxury-suv' },
    { eyebrow: 'Service', label: 'Airport transfers', href: '/services/airport-transfers' },
    { eyebrow: 'Airports', label: 'Reagan National · DCA', href: '/airports/dca' },
  ],
  ctaTitle: 'One traveler,\none immaculate car.',
  ctaText: `Reserve an executive sedan online or call ${BUSINESS.phonePrimary} — dispatch answers around the clock.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
