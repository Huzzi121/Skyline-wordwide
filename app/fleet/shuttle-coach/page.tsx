import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Shuttle & Coach — Chauffeured | Skyline Worldwide',
  description:
    'Chauffeured shuttle bus and minibus seating 24–33. Ford F550-class coaches for employee shuttles, event groups and hotel transfers across the Washington region.',
  alternates: { canonical: '/fleet/shuttle-coach' },
  openGraph: {
    title: 'Shuttle & Coach — Chauffeured | Skyline Worldwide',
    description:
      'Chauffeured shuttle bus and minibus seating 24–33 — the dependable workhorse for employee shuttles, event groups and hotel transfers across the DC region.',
    images: [{ url: img(IMAGES.shuttleBus, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The fleet · Shuttle & coach',
  title: 'Move thirty people\nlike they are one guest.',
  intro:
    'A Ford F550-class shuttle bus seating twenty-four to thirty-three — the dependable middle ground that turns a crowd into a group arriving together, on time, at the same door.',
  heroImage: IMAGES.shuttleBus,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Shuttle & coach' },
  ],
  stats: [
    { value: '24–33', label: 'Passengers' },
    { value: 'F550', label: 'Class coach' },
    { value: 'Loop', label: 'Or transfer' },
    { value: '24/7', label: 'Dispatch' },
  ],
  sections: [
    {
      title: 'The right size for the crowd',
      text: 'Too many for a Sprinter, not quite a full motor coach — the shuttle covers the twenty-four to thirty-three range cleanly. One vehicle, one chauffeur, the whole group together.',
    },
    {
      title: 'Employee & hotel shuttles',
      text: 'Run a fixed loop between office, parking and transit, or a continuous hotel-to-venue shuttle for an offsite. We build the schedule with you and keep it running without gaps.',
    },
    {
      title: 'Event groups, handled',
      text: 'Conferences, weddings with a large party, sports teams and tour groups ride in a clean, climate-controlled cabin with ample room for bags, gear and gift bags underfoot.',
    },
    {
      title: 'A comfortable, practical cabin',
      text: 'Forward-facing cushioned seating, climate control and easy step-in access for every guest. Straightforward, comfortable and sized to keep a large group moving smoothly.',
    },
    {
      title: 'Who it suits',
      text: 'Corporate shuttles, event logistics and mid-size groups of up to thirty-three. For a conference-scale party or long-distance charter, the full motor coach is the next step up.',
    },
    {
      title: 'How to reserve',
      text: 'Call dispatch or book online with your headcount, route and hours. We confirm an all-inclusive rate and, for recurring loops, a standing schedule you can rely on.',
    },
  ],
  gallery: [
    { src: IMAGES.shuttleBus, alt: 'Shuttle bus ready to board an event group' },
    { src: IMAGES.eventVenue, alt: 'Guests arriving at an event venue by shuttle' },
    { src: IMAGES.cabinInterior, alt: 'Shuttle cabin with forward-facing cushioned seating' },
    { src: IMAGES.corporateArrival, alt: 'Group boarding a shuttle outside an office' },
  ],
  faqs: [
    {
      q: 'How many passengers does the shuttle hold?',
      a: 'Between twenty-four and thirty-three depending on the coach assigned. Share your headcount and we match you to the right-sized vehicle, or multiple shuttles for a larger group.',
    },
    {
      q: 'Can it run a continuous shuttle loop?',
      a: 'Yes. We regularly operate employee and hotel-to-venue loops on a fixed schedule, keeping the rotation gap-free so no one waits long between pickups.',
    },
    {
      q: 'Is there room for luggage?',
      a: 'There is ample space for bags, gear and event materials, with underfloor or rear storage depending on the coach. Tell us the load and we plan the layout.',
    },
    {
      q: 'Are the rates all-inclusive?',
      a: 'Yes. Your quote covers the chauffeur, the reserved hours and standard wait. For recurring shuttles we set a clear, consistent rate per run.',
    },
    {
      q: 'Can I provide a child seat?',
      a: 'For individual children we can arrange appropriate seating — tell us ages and weights at booking. For family travel specifically, the luxury SUV is often the better fit.',
    },
  ],
  related: [
    { eyebrow: 'The fleet', label: 'Motor coach', href: '/fleet/motor-coach' },
    { eyebrow: 'Service', label: 'Group transportation', href: '/services/group-transportation' },
    { eyebrow: 'Airports', label: 'Dulles · IAD', href: '/airports/iad' },
  ],
  ctaTitle: 'One coach,\nthe whole group.',
  ctaText: `Reserve a shuttle or minibus online or call ${BUSINESS.phonePrimary} — give us the headcount, route and hours.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
