import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Investor Roadshow Transportation & Manifests | Skyline Worldwide',
  description:
    'Multi-city roadshow ground transportation with one plan, detailed manifests, tight timing between meetings and 24/7 dispatch keeping step across 500+ affiliate cities.',
  alternates: { canonical: '/corporate/roadshows' },
  openGraph: {
    title: 'Roadshows | Skyline Worldwide',
    description:
      'One plan, detailed manifests and tight timing between meetings — dispatch that keeps step with your roadshow across every city on the itinerary.',
    images: [{ url: img(IMAGES.roadshow, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Roadshows',
  title: 'Many cities,\none seamless program.',
  intro:
    'When the schedule is unforgiving and the cities keep changing, we run the ground transportation as a single coordinated program so the principals only have to think about the room they are walking into.',
  heroImage: IMAGES.roadshow,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Roadshows' },
  ],
  stats: [
    { value: '500+', label: 'Affiliate cities' },
    { value: '24/7', label: 'Dispatch' },
    { value: '1', label: 'Point of contact' },
    { value: 'Since 2000', label: 'Capital region' },
  ],
  sections: [
    {
      title: 'One plan, every city',
      text: 'Your itinerary becomes a single transportation plan rather than a dozen separate bookings. One contact owns it end to end, so a change in one city does not unravel the rest.',
    },
    {
      title: 'Detailed manifests',
      text: 'Every leg is captured on a clear manifest — pickup, principal, vehicle, chauffeur, timing and destination — shared with your team so everyone is reading from the same page.',
    },
    {
      title: 'Timing between meetings',
      text: 'We build in the realistic drive times, traffic patterns and buffers that keep a packed day on schedule, so back-to-back meetings across town stay on the clock.',
    },
    {
      title: 'Dispatch that keeps step',
      text: 'Our 24/7 dispatch tracks the program live. When a meeting runs long or an order flips, cars and timing are adjusted before it becomes a problem.',
    },
    {
      title: 'Consistency across cities',
      text: 'Through a vetted affiliate network in more than 500 cities, the vehicle class, chauffeur standard and experience stay the same whether the day is in New York, Boston or Washington.',
    },
    {
      title: 'Discreet principals',
      text: 'Bankers, executives and their guests travel quietly. Manifests, identities and movements stay confidential, handled by chauffeurs briefed on the sensitivity of the trip.',
    },
  ],
  gallery: [
    { src: IMAGES.roadshow, alt: 'Executive sedan waiting outside a city office for a roadshow leg' },
    { src: IMAGES.dispatchDesk, alt: 'Dispatch team coordinating a multi-city roadshow manifest' },
    { src: IMAGES.cityEvening, alt: 'City skyline at dusk during a multi-city program' },
  ],
  faqs: [
    {
      q: 'Can you handle a roadshow across multiple cities?',
      a: 'Yes. We coordinate the full itinerary as one program through our affiliate network in 500+ cities, with a single Skyline contact owning the plan from the first pickup to the last.',
    },
    {
      q: 'Will we get a manifest for the team?',
      a: 'We provide a detailed manifest for every leg — pickup time, principal, vehicle, chauffeur and destination — and update it as the schedule evolves, so your team always has the current plan.',
    },
    {
      q: 'What happens if a meeting runs over?',
      a: 'Our 24/7 dispatch monitors the day live and adjusts cars and timing in real time, reflowing the remaining legs so a late finish in one meeting does not cascade through the schedule.',
    },
    {
      q: 'How do you keep the experience consistent city to city?',
      a: 'We hold affiliates to the same vehicle class, chauffeur vetting and service standard we run ourselves, so the principals experience one program rather than a patchwork of local vendors.',
    },
    {
      q: 'Is everything billed together?',
      a: 'Yes. The entire roadshow consolidates onto one statement with all-inclusive rates, so finance sees a single clear invoice rather than receipts from every city.',
    },
  ],
  related: [
    { eyebrow: 'Corporate', label: 'Accounts', href: '/corporate/accounts' },
    { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
  ],
  ctaTitle: 'Plan the whole tour\nas one program.',
  ctaText: 'Send us the itinerary and we will return a single plan with manifests and timing.',
}

export default function Page() {
  return <DetailPage data={data} />
}
