import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Conference & Attendee Shuttle Transportation | Skyline Worldwide',
  description:
    'Conference transportation in Washington DC: attendee shuttles, batched airport arrivals, venue loops and motor coaches or Sprinters managed by one coordinator.',
  alternates: { canonical: '/events/conferences' },
  openGraph: {
    title: 'Conference Transportation | Skyline Worldwide',
    description:
      'Attendee shuttles, batched airport arrivals and venue loops on motor coaches and Sprinters — one coordinator for the entire conference.',
    images: [{ url: img(IMAGES.eventVenue, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Conferences',
  title: 'Hundreds of attendees,\none moving plan.',
  intro:
    'Conference transportation that moves your attendees from the airport to the hotel to the venue and back on a reliable cadence — scaled to the room and run by a single coordinator.',
  heroImage: IMAGES.eventVenue,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Events' },
    { label: 'Conferences' },
  ],
  stats: [
    { value: '24/7', label: 'Dispatch' },
    { value: '1', label: 'Coordinator' },
    { value: '6', label: 'Capital airports' },
    { value: '500+', label: 'Affiliate cities' },
  ],
  sections: [
    {
      title: 'Attendee shuttles',
      text: 'Continuous loops between host hotels and the venue keep attendees flowing on a published schedule, sized to the headcount so no one waits and sessions start full.',
    },
    {
      title: 'Batched airport arrivals',
      text: 'We group arrivals by time across DCA, IAD, BWI and the region’s other airports, meeting attendees with flight monitoring and moving them together rather than one car at a time.',
    },
    {
      title: 'Venue loops',
      text: 'For multi-site programs, scheduled loops connect the venue, hotels and offsite dinners, so attendees can step out knowing the next shuttle is minutes away.',
    },
    {
      title: 'Motor coaches & Sprinters',
      text: 'Motor coaches move large groups efficiently while executive Sprinters handle VIPs, speakers and smaller breakouts — the right capacity matched to each part of the program.',
    },
    {
      title: 'One coordinator',
      text: 'A single Skyline contact owns the entire conference and works directly with your planner, backed by 24/7 dispatch that reflows shuttles live when a session runs long.',
    },
    {
      title: 'Capacity that scales',
      text: 'Whether it is fifty delegates or several hundred, we scale vehicle mix and frequency to demand and adjust on the day so the plan keeps pace with the actual crowd.',
    },
  ],
  gallery: [
    { src: IMAGES.eventVenue, alt: 'Attendees arriving at a conference venue' },
    { src: IMAGES.motorCoach, alt: 'Motor coach staged for conference attendee shuttles' },
    { src: IMAGES.executiveSprinter, alt: 'Executive Sprinter van for VIP and speaker transport' },
  ],
  faqs: [
    {
      q: 'Can you shuttle conference attendees between hotels and the venue?',
      a: 'Yes. We run continuous shuttle loops on a published cadence between host hotels and the venue, sized to your headcount so attendees move steadily without waiting.',
    },
    {
      q: 'How do you handle hundreds of airport arrivals?',
      a: 'We batch arrivals by time across the region’s airports, monitor flights and group attendees onto coaches or Sprinters, so a wave of arrivals becomes a handful of coordinated transfers.',
    },
    {
      q: 'What size groups can you move?',
      a: 'From small VIP and speaker groups in Sprinters to several hundred attendees on motor coaches, we scale the vehicle mix and frequency to the size and shape of your program.',
    },
    {
      q: 'Is there a single contact for the event?',
      a: 'Yes. One coordinator owns the whole conference, builds the shuttle schedule with your planner and is backed by 24/7 dispatch that adjusts in real time as the agenda moves.',
    },
    {
      q: 'How is conference transportation billed?',
      a: 'Everything consolidates onto one statement with all-inclusive rates, broken out however your team needs for the event budget and reconciliation.',
    },
  ],
  related: [
    { eyebrow: 'Request a proposal', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Motor coach', href: '/fleet/motor-coach' },
    { eyebrow: 'Corporate', label: 'Meetings & events', href: '/corporate/meeting-events' },
  ],
  ctaTitle: 'Tell us the headcount.\nWe will build the shuttles.',
  ctaText: 'Share your venues, hotels and attendee numbers and we will send a conference proposal.',
}

export default function Page() {
  return <DetailPage data={data} />
}
