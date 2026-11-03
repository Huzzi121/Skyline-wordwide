import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Motor Coach — Chauffeured | Skyline Worldwide',
  description:
    'Chauffeured full-size Setra motor coach seating 55 with onboard restroom, reclining seats, climate, luggage bays and PA — for conferences and long-distance group charters.',
  alternates: { canonical: '/fleet/motor-coach' },
  openGraph: {
    title: 'Motor Coach — Chauffeured | Skyline Worldwide',
    description:
      'Chauffeured full-size Setra motor coach seating 55 with onboard restroom, reclining seats, climate control, luggage bays and PA — built for conferences and long-haul charters.',
    images: [{ url: img(IMAGES.motorCoach, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The fleet · Motor coach',
  title: 'The whole conference,\non the move.',
  intro:
    'A full-size Setra motor coach seating fifty-five, with an onboard restroom, reclining seats, deep luggage bays and a PA — built for the long haul and the large group.',
  heroImage: IMAGES.motorCoach,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Motor coach' },
  ],
  stats: [
    { value: '55', label: 'Passengers' },
    { value: 'Restroom', label: 'On board' },
    { value: 'Setra', label: 'Full-size coach' },
    { value: '24/7', label: 'Dispatch' },
  ],
  sections: [
    {
      title: 'Built for the largest groups',
      text: 'When fifty-plus people need to arrive together, the motor coach is the only sensible answer. Conferences, conventions, large weddings and association trips move as a single, coordinated party.',
    },
    {
      title: 'Long-distance in comfort',
      text: 'Reclining seats, an onboard restroom, full climate control and a smooth, quiet ride make hours on the highway genuinely comfortable. The trip becomes rest, not an ordeal.',
    },
    {
      title: 'Everything a charter needs',
      text: 'A driver PA system for tour commentary and announcements, deep underfloor luggage bays for a coach-full of bags, reading lights and overhead storage — the full-service touring setup.',
    },
    {
      title: 'Conferences & long-haul charters',
      text: 'From a day shuttle between a hotel block and a convention center to a multi-day charter across state lines, we plan the route, the stops and the timing around your agenda.',
    },
    {
      title: 'Who it suits',
      text: 'Conferences, large wedding parties, tour operators and any group of up to fifty-five. For mid-size groups the shuttle coach is more nimble; for executives, the Sprinter.',
    },
    {
      title: 'How to reserve',
      text: 'Call dispatch or book online with your headcount, itinerary and dates. We confirm an all-inclusive rate and assign a professional coach operator for the full journey.',
    },
  ],
  gallery: [
    { src: IMAGES.motorCoach, alt: 'Full-size Setra motor coach ready for a large group' },
    { src: IMAGES.eventVenue, alt: 'Conference attendees arriving by motor coach' },
    { src: IMAGES.cabinInterior, alt: 'Motor coach interior with reclining seats and overhead storage' },
    { src: IMAGES.roadshow, alt: 'Large group departing on a long-distance charter' },
  ],
  faqs: [
    {
      q: 'How many passengers and bags does the motor coach hold?',
      a: 'Up to fifty-five passengers, with deep underfloor luggage bays that take a full coach-load of checked bags plus overhead storage for carry-ons.',
    },
    {
      q: 'Does it have a restroom and other amenities?',
      a: 'Yes. The coach carries an onboard restroom, reclining seats, full climate control, a driver PA system and reading lights — the complete long-distance touring setup.',
    },
    {
      q: 'Are the rates all-inclusive?',
      a: 'They are. The quote covers the operator, reserved hours and standard wait across the itinerary. For multi-day charters we confirm the full schedule and rate up front.',
    },
    {
      q: 'Can you handle multi-day, long-distance charters?',
      a: 'Absolutely. We regularly run conferences, tours and long-haul charters beyond the region, planning routes, rest stops and timing around your agenda.',
    },
    {
      q: 'Can I provide a child seat?',
      a: 'For individual children we can arrange appropriate seating — share ages and weights at booking. For a small family, however, the luxury SUV is usually the better fit.',
    },
  ],
  related: [
    { eyebrow: 'The fleet', label: 'Shuttle & coach', href: '/fleet/shuttle-coach' },
    { eyebrow: 'Service', label: 'Group transportation', href: '/services/group-transportation' },
    { eyebrow: 'Airports', label: 'Baltimore · BWI', href: '/airports/bwi' },
  ],
  ctaTitle: 'Fifty-five travelers,\none seamless charter.',
  ctaText: `Reserve a motor coach online or call ${BUSINESS.phonePrimary} — send us the headcount, dates and itinerary.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
