import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Stretch Limousine — Chauffeured | Skyline Worldwide',
  description:
    'Chauffeured stretch limousine — Lincoln MKT stretch or equivalent seating up to 8–10. Leather seating, privacy partition, bar and mood lighting for weddings and nights out.',
  alternates: { canonical: '/fleet/stretch-limousine' },
  openGraph: {
    title: 'Stretch Limousine — Chauffeured | Skyline Worldwide',
    description:
      'Chauffeured stretch limousine seating up to 8–10 with leather bench seating, a privacy partition, bar and mood lighting — the centerpiece for weddings and celebrations.',
    images: [{ url: img(IMAGES.stretchLimo, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The fleet · Stretch limousine',
  title: 'The occasion begins\nthe moment you step in.',
  intro:
    'A Lincoln MKT stretch — or its equivalent — where wraparound leather, a stocked bar and tuned lighting turn the drive itself into part of the celebration.',
  heroImage: IMAGES.stretchLimo,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Stretch limousine' },
  ],
  stats: [
    { value: '8–10', label: 'Passengers' },
    { value: 'Bar', label: 'On board' },
    { value: 'Lincoln', label: 'MKT stretch' },
    { value: '24/7', label: 'Dispatch' },
  ],
  sections: [
    {
      title: 'Made for the milestone',
      text: 'Weddings, anniversaries, prom, a milestone birthday or a night on the town — the stretch is the vehicle people remember. It makes an entrance before anyone has stepped out of it.',
    },
    {
      title: 'An interior that sets the mood',
      text: 'Wraparound leather bench seating, a privacy partition, a stocked bar with glassware and color-tuned fiber-optic lighting you can set to the evening. The cabin is the party before the party.',
    },
    {
      title: 'Presentation worth the photos',
      text: 'Mirror-polished black paint, flawless glass and a reset, immaculate interior before every booking — because the limousine lands in the wedding album and the group photo.',
    },
    {
      title: 'Weddings, done right',
      text: 'We coordinate with planners on timing, build in a cushion for the ceremony running long, and hand the couple a calm, unhurried ride between venue and reception.',
    },
    {
      title: 'Who it suits',
      text: 'Celebrations of eight to ten who want the ride to be an event in itself. For a corporate group of the same size, the executive Sprinter is the more business-minded choice.',
    },
    {
      title: 'How to reserve',
      text: 'Book online or call dispatch with your date, headcount and the hours you need. We confirm an all-inclusive rate and reserve the car to your timeline.',
    },
  ],
  gallery: [
    { src: IMAGES.stretchLimo, alt: 'Black stretch limousine polished for an evening event' },
    { src: IMAGES.cabinInterior, alt: 'Stretch limousine cabin with leather bench seating and mood lighting' },
    { src: IMAGES.weddingArrival, alt: 'Couple arriving at a venue by limousine' },
    { src: IMAGES.blackCarDetail, alt: 'Close detail of a gleaming black limousine' },
  ],
  faqs: [
    {
      q: 'How many passengers does the stretch seat?',
      a: 'Up to eight to ten depending on the configuration. Share your final headcount at booking and we confirm the right coach and seating.',
    },
    {
      q: 'What amenities are on board?',
      a: 'Wraparound leather seating, a privacy partition, a stocked bar with glassware and ice, and color-tuned mood lighting. Tell us any theme or request and we set the cabin to match.',
    },
    {
      q: 'Can you provide a child seat?',
      a: 'The stretch is built for adult celebrations and is not the ideal fit for child seats; for family travel we recommend the luxury SUV. Ask dispatch and we will advise the best vehicle.',
    },
    {
      q: 'Are the rates all-inclusive?',
      a: 'Yes. Your quote covers the chauffeur, the reserved hours and standard wait. The figure we confirm is the figure you pay, with no surprise charges at the end of the night.',
    },
    {
      q: 'Is the limousine booked hourly or by the trip?',
      a: 'Most celebrations book by the hour so the car stays with you between stops, but a straight point-to-point transfer is also available. We tailor the reservation to your evening.',
    },
  ],
  related: [
    { eyebrow: 'The fleet', label: 'Executive Sprinter', href: '/fleet/executive-sprinter' },
    { eyebrow: 'Service', label: 'Weddings & events', href: '/services/weddings' },
    { eyebrow: 'Airports', label: 'Reagan National · DCA', href: '/airports/dca' },
  ],
  ctaTitle: 'Make the arrival\nthe memory.',
  ctaText: `Reserve the stretch limousine online or call ${BUSINESS.phonePrimary} — tell us the date and the occasion.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
