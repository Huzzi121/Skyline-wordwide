import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Gala & Black-Tie Event Transportation | Skyline Worldwide',
  description:
    'Black-tie gala transportation in Washington DC — choreographed red-carpet arrivals, sedans and limousines, and guest coordination timed to the minute.',
  alternates: { canonical: '/events/galas' },
  openGraph: {
    title: 'Gala Transportation | Skyline Worldwide',
    description:
      'Choreographed red-carpet arrivals, formal sedans and limousines and seamless guest coordination for galas and black-tie events across the capital region.',
    images: [{ url: img(IMAGES.cityEvening, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Galas & black-tie',
  title: 'An arrival worthy\nof the occasion.',
  intro:
    'Black-tie transportation for galas, benefits and award nights — formal cars, a choreographed red carpet and guest coordination so every arrival lands exactly when it should.',
  heroImage: IMAGES.cityEvening,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Events' },
    { label: 'Galas' },
  ],
  stats: [
    { value: 'Since 2000', label: 'Capital region' },
    { value: '24/7', label: 'Dispatch' },
    { value: '1', label: 'Point of contact' },
    { value: '500+', label: 'Affiliate cities' },
  ],
  sections: [
    {
      title: 'Black-tie arrivals',
      text: 'Guests step out at the entrance, not the parking lot — formally attired chauffeurs, polished cars and doors opened with the poise a black-tie evening calls for.',
    },
    {
      title: 'Red-carpet timing',
      text: 'We stage and release cars so arrivals are spaced to the carpet’s rhythm, avoiding a curbside pile-up and giving each guest or honoree their moment at the entrance.',
    },
    {
      title: 'Sedans & limousines',
      text: 'Executive sedans for couples, luxury SUVs for small groups and stretch limousines for headline guests — the fleet matched to the stature of the evening.',
    },
    {
      title: 'Guest coordination',
      text: 'For honorees, sponsors and VIP tables, we hold a manifest of who travels when, so hosts know precisely when key guests will reach the carpet.',
    },
    {
      title: 'The evening’s end',
      text: 'When the gala winds down, cars are already staged for a graceful departure, carrying guests on to the after-party or home without a wait in the cold.',
    },
    {
      title: 'Discreet, formal chauffeurs',
      text: 'Calm, courteous and impeccably dressed, your chauffeurs read the room and stay invisible until needed — a quiet mark of the event’s quality.',
    },
  ],
  gallery: [
    { src: IMAGES.cityEvening, alt: 'City skyline at evening before a black-tie gala' },
    { src: IMAGES.stretchLimo, alt: 'Stretch limousine staged for gala arrivals' },
    { src: IMAGES.blackCarDetail, alt: 'Polished black car detailed for a formal evening' },
  ],
  faqs: [
    {
      q: 'Can you choreograph red-carpet arrivals?',
      a: 'Yes. We stage and release vehicles to the carpet’s pace so arrivals are spaced rather than stacked, giving each guest or honoree a clean moment at the entrance.',
    },
    {
      q: 'What vehicles suit a black-tie event?',
      a: 'Executive sedans for couples, luxury SUVs for small groups and stretch limousines for headline guests — matched to the formality and the guests you are hosting.',
    },
    {
      q: 'Can you coordinate arrivals for specific VIPs?',
      a: 'We keep a manifest of honorees, sponsors and VIP tables with planned arrival times, so hosts know exactly when key guests will reach the carpet and can plan the program around it.',
    },
    {
      q: 'What about departures at the end of the night?',
      a: 'Cars are pre-staged for a smooth exit, carrying guests to the after-party or home. Our 24/7 dispatch handles late or shifting end times so no one waits at the curb.',
    },
    {
      q: 'How do we get a quote for our gala?',
      a: 'Send us the venue, guest count and the VIPs you are coordinating, and we will return a proposal with the right vehicle mix and an arrival plan for the evening.',
    },
  ],
  related: [
    { eyebrow: 'Request a proposal', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Stretch limousine', href: '/fleet/stretch-limousine' },
    { eyebrow: 'Event', label: 'Weddings', href: '/events/weddings' },
  ],
  ctaTitle: 'Give your guests\nan entrance to remember.',
  ctaText: 'Tell us about the evening and we will send a gala transportation proposal.',
}

export default function Page() {
  return <DetailPage data={data} />
}
