import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Hourly Charter Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Chauffeur by the hour across Washington DC, Maryland and Virginia — for meetings, shopping, shoots and full-day itineraries. Dedicated car, flexible stops and 24/7 dispatch since 2000.',
  alternates: { canonical: '/services/hourly-charter' },
  openGraph: {
    title: 'Hourly Charter | Skyline Worldwide',
    description:
      'Chauffeur by the hour across Washington DC, Maryland and Virginia — for meetings, shopping, shoots and full-day itineraries. Dedicated car, flexible stops and 24/7 dispatch since 2000.',
    images: [{ url: img(IMAGES.cityEvening, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Hourly charter',
  title: 'A chauffeur\nat your disposal.',
  intro:
    'Keep a vehicle and driver on hand for the whole day — meetings, shopping, a shoot or a packed itinerary — without rebooking between every stop.',
  heroImage: IMAGES.cityEvening,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Hourly charter' },
  ],
  stats: [
    { value: 'By the hour', label: 'Booked your way' },
    { value: '24/7', label: 'Dispatch' },
    { value: 'Unlimited', label: 'Stops within your hours' },
    { value: 'Since 2000', label: 'Capital expertise' },
  ],
  sections: [
    {
      title: 'Your day, your way',
      text: 'The car and chauffeur stay with you for the block of time you reserve. Change the order of stops, linger at one or add a detour — it all happens within your hours.',
    },
    {
      title: 'How the minimum works',
      text: 'Hourly charter is booked against a minimum number of hours, which varies by vehicle and date. Billing runs from pickup to drop-off, so you only plan around a sensible floor.',
    },
    {
      title: 'Meetings across town',
      text: 'Hop between appointments on the Hill, in Georgetown and out to Tysons while your chauffeur handles parking and waits ready — your materials and calls stay with you between stops.',
    },
    {
      title: 'Shopping, shoots and errands',
      text: 'For a retail day, a photo or film shoot, or a run of personal errands, a waiting vehicle means bags, gear and schedule changes are never a problem.',
    },
    {
      title: 'How dispatch works',
      text: 'A real person confirms your start time, vehicle and chauffeur, then stays reachable all day. Running over? Dispatch extends the booking on the spot when the vehicle is free.',
    },
    {
      title: 'Full-day itineraries',
      text: 'Hand us a loose plan and we will shape it into a workable day, advising on timing between venues so nothing feels rushed and nothing gets missed.',
    },
  ],
  gallery: [
    { src: IMAGES.cityEvening, alt: 'Chauffeured sedan on capital streets as the city lights come on' },
    { src: IMAGES.blackCarDetail, alt: 'Detail of a polished black car waiting between stops' },
    { src: IMAGES.luxurySUV, alt: 'Luxury SUV suited to a full-day hourly itinerary' },
  ],
  faqs: [
    {
      q: 'Is there a minimum number of hours?',
      a: 'Yes. Hourly charter carries a minimum booking that varies by vehicle class and date. We confirm the exact minimum when you reserve, and you can always book more time than that.',
    },
    {
      q: 'What happens if I run over my booked hours?',
      a: 'Just let your chauffeur or dispatch know. As long as the vehicle has no conflicting reservation, we extend the booking in the moment and bill the additional time at the agreed rate.',
    },
    {
      q: 'Can the chauffeur wait between stops?',
      a: 'That is the point of hourly service. The vehicle and chauffeur remain dedicated to you throughout, waiting nearby and ready while you are in a meeting, a store or on set.',
    },
    {
      q: 'Which vehicles are available hourly?',
      a: 'Everything from an executive sedan to a luxury SUV or executive Sprinter can be chartered by the hour. Choose based on passengers, luggage and the kind of day you are planning.',
    },
    {
      q: 'Can I keep the same chauffeur all day?',
      a: 'For a single-day booking the same chauffeur stays with you throughout. For multi-day programs we aim for continuity and will tell you in advance if a change is needed.',
    },
  ],
  related: [
    { eyebrow: 'Service', label: 'Point-to-point', href: '/services/point-to-point' },
    { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Luxury SUV', href: '/fleet/luxury-suv' },
  ],
  ctaTitle: 'Reserve the day,\nnot just the ride.',
  ctaText: 'Tell us how your day looks and we will keep a chauffeur ready from first stop to last.',
}

export default function Page() {
  return <DetailPage data={data} />
}
