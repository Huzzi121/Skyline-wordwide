import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Wedding Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Elegant wedding transportation across Washington DC, Maryland and Virginia — for the couple, the wedding party and guest shuttles. One event desk and 24/7 dispatch since 2000.',
  alternates: { canonical: '/services/weddings' },
  openGraph: {
    title: 'Weddings | Skyline Worldwide',
    description:
      'Elegant wedding transportation across Washington DC, Maryland and Virginia — for the couple, the wedding party and guest shuttles. One event desk and 24/7 dispatch since 2000.',
    images: [{ url: img(IMAGES.weddingArrival, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Weddings',
  title: 'Every arrival,\nbeautifully timed.',
  intro:
    'Transportation planned with the same care as the day itself — from the couple’s grand arrival to the last guest home, held together by one calm point of contact.',
  heroImage: IMAGES.weddingArrival,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Weddings' },
  ],
  stats: [
    { value: '1', label: 'Dedicated event desk' },
    { value: '24/7', label: 'Day-of dispatch' },
    { value: 'DC · MD · VA', label: 'Venues covered' },
    { value: 'Since 2000', label: 'Celebrating with you' },
  ],
  sections: [
    {
      title: 'The couple’s journey',
      text: 'Arrive and depart in a vehicle chosen for the moment, with a chauffeur who understands that photographs, timing and a graceful entrance all matter on this one day.',
    },
    {
      title: 'The wedding party',
      text: 'Keep bridesmaids, groomsmen and close family together and unhurried between getting-ready suites, the ceremony and the reception, with room for dresses and details.',
    },
    {
      title: 'Guest shuttles',
      text: 'Comfortable Sprinters, shuttles and motor coaches move guests between hotels and the venue on a clear loop, so no one drives, parks or misses the first dance.',
    },
    {
      title: 'After-party movement',
      text: 'When the celebration carries on, we carry it safely — late-night runs to the after-party and home, so every guest ends the night looked after.',
    },
    {
      title: 'One event desk',
      text: 'A single coordinator builds the timeline with you and your planner, holds the manifest and confirms venue access, so on the day you simply enjoy it.',
    },
    {
      title: 'Grace for the unexpected',
      text: 'Hair runs long, photos overrun, weather turns. With dispatch live all day, we adjust pickups quietly in the background and keep the celebration on its feet.',
    },
  ],
  gallery: [
    { src: IMAGES.weddingArrival, alt: 'Couple arriving by chauffeured car on their wedding day' },
    { src: IMAGES.stretchLimo, alt: 'Elegant stretch vehicle for the wedding party' },
    { src: IMAGES.shuttleBus, alt: 'Guest shuttle waiting to loop between hotel and venue' },
    { src: IMAGES.eventVenue, alt: 'Evening reception venue awaiting guests' },
  ],
  faqs: [
    {
      q: 'How far ahead should we book wedding transportation?',
      a: 'Popular dates book out months in advance, so we recommend reserving as soon as your venue and guest count are set. Our event desk will hold vehicles while the timeline comes together.',
    },
    {
      q: 'Can you move the whole guest list, not just the couple?',
      a: 'Absolutely. Alongside the couple and wedding party, we run guest shuttles on a scheduled loop between hotels and the venue using Sprinters, shuttles or motor coaches sized to your numbers.',
    },
    {
      q: 'Do we get one person to plan with?',
      a: 'Yes. A dedicated event coordinator builds the timeline with you and your planner, carries the manifest and manages the fleet on the day, so you only ever have one contact.',
    },
    {
      q: 'What happens if the schedule slips on the day?',
      a: 'It usually does, and that is fine. With dispatch live throughout, we quietly adjust pickups and hold vehicles in the background so the celebration never feels rushed.',
    },
    {
      q: 'Can you provide late-night and after-party transport?',
      a: 'We do. We arrange safe late-night runs to the after-party and home for the couple and guests, so the evening ends as gracefully as it began.',
    },
  ],
  related: [
    { eyebrow: 'Service', label: 'Group transportation', href: '/services/group-transportation' },
    { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Stretch limousine', href: '/fleet/stretch-limousine' },
  ],
  ctaTitle: 'Let the day flow,\nwe will handle the moving.',
  ctaText: 'Share your date, venues and guest count for a wedding transportation plan made for you.',
}

export default function Page() {
  return <DetailPage data={data} />
}
