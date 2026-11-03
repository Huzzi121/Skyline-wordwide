import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Group Transportation Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Group transportation across Washington DC, Maryland and Virginia — executive Sprinters, shuttles and motor coaches with a dedicated group coordinator and 24/7 dispatch since 2000.',
  alternates: { canonical: '/services/group-transportation' },
  openGraph: {
    title: 'Group Transportation | Skyline Worldwide',
    description:
      'Group transportation across Washington DC, Maryland and Virginia — executive Sprinters, shuttles and motor coaches with a dedicated group coordinator and 24/7 dispatch since 2000.',
    images: [{ url: img(IMAGES.shuttleBus, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Group transportation',
  title: 'Move the whole party\ntogether.',
  intro:
    'From a fourteen-seat Sprinter to a full motor coach, we keep teams, delegations and guests moving as one — comfortably, on time and with a coordinator in charge.',
  heroImage: IMAGES.shuttleBus,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Group transportation' },
  ],
  stats: [
    { value: '14–56', label: 'Seats per vehicle' },
    { value: '1', label: 'Group coordinator' },
    { value: '24/7', label: 'Dispatch' },
    { value: 'Since 2000', label: 'Moving groups' },
  ],
  sections: [
    {
      title: 'Executive Sprinters',
      text: 'A mobile meeting room for up to fourteen — generous seating, room for luggage and a professional presence for teams travelling together between the office and the airport.',
    },
    {
      title: 'Shuttles & motor coaches',
      text: 'For larger groups, modern shuttles and motor coaches carry conference delegations, wedding guests and corporate outings with climate comfort and ample bag space.',
    },
    {
      title: 'Capacity, matched',
      text: 'Give us the headcount and we size the vehicle — or the mix of vehicles — so no one travels cramped and you are never paying for empty seats you do not need.',
    },
    {
      title: 'Luggage and gear',
      text: 'Bags, conference materials, trade-show kit or sports equipment are planned for in advance, with underfloor storage and the right vehicle so nothing gets left behind.',
    },
    {
      title: 'A dedicated group coordinator',
      text: 'One coordinator builds the plan, manages pickups and keeps every vehicle in sequence, so your group leader makes a single call rather than chasing drivers.',
    },
    {
      title: 'Continuous loops & transfers',
      text: 'For hotels-to-venue runs we schedule a clear shuttle loop; for one-time moves we coordinate staggered pickups so the whole group arrives together, on time.',
    },
  ],
  gallery: [
    { src: IMAGES.shuttleBus, alt: 'Group shuttle ready to board passengers' },
    { src: IMAGES.motorCoach, alt: 'Motor coach for large-group transportation' },
    { src: IMAGES.executiveSprinter, alt: 'Executive Sprinter configured for a travelling team' },
  ],
  faqs: [
    {
      q: 'How large a group can you move?',
      a: 'From small teams in a fourteen-seat executive Sprinter up to full motor coaches, and larger still by combining vehicles. Share your headcount and we will size the fleet to it.',
    },
    {
      q: 'Is there room for everyone’s luggage?',
      a: 'Yes. We plan luggage, conference materials or equipment when we size the vehicle, using underfloor and rear storage so the group and its bags travel together comfortably.',
    },
    {
      q: 'Do we get a single point of contact?',
      a: 'Every group booking is assigned a coordinator who builds the plan, manages the vehicles and handles changes, so your group leader deals with one person rather than many drivers.',
    },
    {
      q: 'Can you run a shuttle loop between a hotel and a venue?',
      a: 'We do this often for conferences and weddings — a scheduled loop keeps guests flowing between hotel and venue so no one has to drive, park or wait long for the next run.',
    },
    {
      q: 'Can groups travel outside the Washington region?',
      a: 'Yes. For group travel beyond DC, Maryland and Virginia, our vetted affiliate network provides coaches and shuttles to the same standard across more than 500 cities.',
    },
  ],
  related: [
    { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Service', label: 'Weddings', href: '/services/weddings' },
    { eyebrow: 'Fleet', label: 'Executive sprinter', href: '/fleet/executive-sprinter' },
  ],
  ctaTitle: 'One group,\none plan, on time.',
  ctaText: 'Tell us your headcount, dates and route and we will match the right vehicles and a coordinator.',
}

export default function Page() {
  return <DetailPage data={data} />
}
