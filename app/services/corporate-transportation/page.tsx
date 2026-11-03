import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Corporate Transportation Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Executive and government ground transportation in Washington DC, Maryland and Virginia. Traveler profiles, priority dispatch, consolidated billing and quiet confidentiality since 2000.',
  alternates: { canonical: '/services/corporate-transportation' },
  openGraph: {
    title: 'Corporate Transportation | Skyline Worldwide',
    description:
      'Executive and government ground transportation in Washington DC, Maryland and Virginia. Traveler profiles, priority dispatch, consolidated billing and quiet confidentiality since 2000.',
    images: [{ url: img(IMAGES.corporateArrival, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Corporate transportation',
  title: 'Executive travel,\nwithout friction.',
  intro:
    'A private ground-transportation desk for your organization — for leadership, visiting delegations and the recurring routes your team runs every week.',
  heroImage: IMAGES.corporateArrival,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Corporate transportation' },
  ],
  stats: [
    { value: 'Since 2000', label: 'Serving the capital' },
    { value: '24/7', label: 'Priority dispatch' },
    { value: '1', label: 'Consolidated invoice' },
    { value: '500+', label: 'Affiliate cities' },
  ],
  sections: [
    {
      title: 'Traveler profiles',
      text: 'We hold your executives’ preferences, frequent addresses and special instructions on file. Each trip is prepared to their standard before the chauffeur ever pulls up.',
    },
    {
      title: 'Priority dispatch',
      text: 'Your assistants reach people who already know the account, the travelers and the schedule. No scripts, no re-explaining — just a direct line to a decision-maker, around the clock.',
    },
    {
      title: 'Consolidated billing',
      text: 'One clear monthly statement replaces a drawer of loose receipts. Allocate by traveler, department or cost center, with reporting that fits how your finance team already works.',
    },
    {
      title: 'Visiting delegations',
      text: 'When clients, board members or officials come to Washington, we coordinate arrivals, hotel transfers and meeting runs as a single program with a named point of contact.',
    },
    {
      title: 'Recurring routes',
      text: 'For the trips you make week after week — office to the Hill, headquarters to Dulles — we lock the timing and the vehicle so it simply happens without a phone call.',
    },
    {
      title: 'Confidentiality by default',
      text: 'Chauffeurs are vetted and discreet. Conversations, manifests and movements stay private, which is why government offices and law firms across the region trust us.',
    },
  ],
  gallery: [
    { src: IMAGES.corporateArrival, alt: 'Executive stepping from a black sedan outside a corporate entrance' },
    { src: IMAGES.chauffeurOffice, alt: 'Professional chauffeur in business attire beside a sedan' },
    { src: IMAGES.cabinInterior, alt: 'Quiet leather cabin set up for a working commute' },
    { src: IMAGES.dispatchDesk, alt: 'Skyline dispatch desk coordinating executive travel' },
  ],
  faqs: [
    {
      q: 'Can you set up a corporate account for recurring travel?',
      a: 'Yes. We create a dedicated account with saved traveler profiles, approved billing terms and a priority dispatch line, so your team can book in seconds and reconcile in one statement.',
    },
    {
      q: 'How do you handle confidentiality for sensitive travel?',
      a: 'Chauffeurs are background-checked professionals briefed to keep passenger identities, destinations and conversations private. We can also arrange unmarked vehicles and limit itinerary detail on request.',
    },
    {
      q: 'Can multiple assistants book under one account?',
      a: 'They can. We authorize as many bookers as you need, each able to reserve against shared traveler profiles while every trip rolls up to the same consolidated invoice.',
    },
    {
      q: 'Do you support travel beyond the Washington region?',
      a: 'When an executive’s itinerary leaves DC, Maryland or Virginia, our vetted affiliate network extends the same standards to more than 500 cities, coordinated through your Skyline contact.',
    },
    {
      q: 'What reporting can we receive?',
      a: 'Statements can be broken out by traveler, department or cost center, with trip detail suitable for expense systems and internal allocation.',
    },
  ],
  related: [
    { eyebrow: 'Service', label: 'Airport transfers', href: '/services/airport-transfers' },
    { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
  ],
  ctaTitle: 'Give your team\na transportation desk.',
  ctaText: 'Tell us how your organization travels and we will build an account around it.',
}

export default function Page() {
  return <DetailPage data={data} />
}
