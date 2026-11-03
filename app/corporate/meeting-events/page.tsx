import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Meetings & Corporate Events Transportation | Skyline Worldwide',
  description:
    'Ground transportation for executive meetings, conferences and hosted programs in Washington DC — hotel-to-venue shuttles, attendee movement and one coordinator.',
  alternates: { canonical: '/corporate/meeting-events' },
  openGraph: {
    title: 'Meetings & Events | Skyline Worldwide',
    description:
      'Executive meetings, conferences and hosted programs moved smoothly — shuttles between hotel and venue and coordinated attendee movement across the capital region.',
    images: [{ url: img(IMAGES.dispatchDesk, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Meetings & events',
  title: 'Programs that run\nexactly to plan.',
  intro:
    'From a single board meeting to a multi-day hosted program, we move executives and attendees between hotels, venues and airports so the agenda stays on time and your team stays focused on content.',
  heroImage: IMAGES.dispatchDesk,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Meetings & events' },
  ],
  stats: [
    { value: '24/7', label: 'Dispatch' },
    { value: '1', label: 'Coordinator' },
    { value: '500+', label: 'Affiliate cities' },
    { value: 'Since 2000', label: 'Capital region' },
  ],
  sections: [
    {
      title: 'Executive meetings',
      text: 'For leadership gatherings and board days, we stage cars to arrive and depart on the agenda, so principals move between sessions, meals and the airport without a gap in the schedule.',
    },
    {
      title: 'Conference support',
      text: 'We handle the transportation layer of your conference — speaker cars, VIP arrivals and the steady movement of attendees — as one coordinated plan rather than a scramble of individual rides.',
    },
    {
      title: 'Hosted programs',
      text: 'Multi-day programs with dinners, offsites and tours are built into a single timeline, with vehicles sized to each moment from an executive sedan to a full motor coach.',
    },
    {
      title: 'Hotel-to-venue shuttles',
      text: 'Continuous shuttle loops between the host hotel and the venue keep attendees flowing on a published cadence, so no one waits and no session starts half-empty.',
    },
    {
      title: 'Attendee movement',
      text: 'Arrivals, group transfers and departures are batched and timed together, matching vehicle capacity to the headcount so the whole group reaches the room together.',
    },
    {
      title: 'One coordinator',
      text: 'A single Skyline contact owns the program and works directly with your planner, backed by 24/7 dispatch that adjusts live when an agenda shifts on the day.',
    },
  ],
  gallery: [
    { src: IMAGES.dispatchDesk, alt: 'Coordinator managing event transportation from the dispatch desk' },
    { src: IMAGES.eventVenue, alt: 'Guests arriving at a conference venue entrance' },
    { src: IMAGES.corporateArrival, alt: 'Executive arriving by sedan at a meeting venue' },
  ],
  faqs: [
    {
      q: 'Can you run shuttles between our hotel and venue?',
      a: 'Yes. We operate continuous shuttle loops on a published cadence between the host hotel and the venue, sizing vehicles to your headcount so attendees move without waiting.',
    },
    {
      q: 'Do we get a single point of contact for the program?',
      a: 'You do. One coordinator owns your meeting or event end to end, works directly with your planner and is backed by 24/7 dispatch that adjusts in real time if the agenda changes.',
    },
    {
      q: 'What vehicles are available for events?',
      a: 'The full fleet is available — executive sedans and SUVs for VIPs, Sprinters for small groups and motor coaches for larger attendee movements — mixed to fit each part of the program.',
    },
    {
      q: 'Can you coordinate arrivals and departures for a whole group?',
      a: 'We batch airport arrivals and departures by time, group transfers together and align vehicle capacity with the schedule so the group moves as one rather than in scattered rides.',
    },
    {
      q: 'How is an event billed?',
      a: 'The entire program consolidates onto one statement with all-inclusive rates, broken out however your finance team needs for the event budget.',
    },
  ],
  related: [
    { eyebrow: 'Corporate', label: 'Roadshows', href: '/corporate/roadshows' },
    { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Motor coach', href: '/fleet/motor-coach' },
  ],
  ctaTitle: 'Build your program\nan itinerary that holds.',
  ctaText: 'Share your agenda and we will return a transportation plan timed to every session.',
}

export default function Page() {
  return <DetailPage data={data} />
}
