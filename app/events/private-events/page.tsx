import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Private Event & Celebration Transportation | Skyline Worldwide',
  description:
    'Private event transportation in Washington DC, Maryland and Virginia — birthdays, anniversaries, nights out, Virginia wine tours and city tours by the hour.',
  alternates: { canonical: '/events/private-events' },
  openGraph: {
    title: 'Private Events | Skyline Worldwide',
    description:
      'Birthdays, anniversaries, nights out, Virginia wine tours and city tours — a private chauffeur by the hour, as flexible as the occasion.',
    images: [{ url: img(IMAGES.cityEvening, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Private events',
  title: 'Your celebration,\non its own schedule.',
  intro:
    'A private chauffeur by the hour for birthdays, anniversaries, nights out, wine tours and city sightseeing — flexible enough to follow the evening wherever it goes.',
  heroImage: IMAGES.cityEvening,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Events' },
    { label: 'Private events' },
  ],
  stats: [
    { value: 'Since 2000', label: 'Capital region' },
    { value: '24/7', label: 'Dispatch' },
    { value: 'Hourly', label: 'As-directed' },
    { value: '500+', label: 'Affiliate cities' },
  ],
  sections: [
    {
      title: 'Birthdays & anniversaries',
      text: 'Mark the milestone without naming a designated driver. We carry your group between dinner, the venue and home in a sedan, SUV or limousine dressed for the occasion.',
    },
    {
      title: 'Nights out',
      text: 'Dinner, a show, a few bars — your chauffeur stays with you all evening, so the whole party travels together and nobody worries about parking or the drive home.',
    },
    {
      title: 'Virginia wine tours',
      text: 'Spend the day in Virginia wine country while we drive. We plan the route between vineyards, keep to your tasting reservations and get everyone home safely at the end.',
    },
    {
      title: 'City tours',
      text: 'See Washington at your own pace with a chauffeur who knows the city — monuments, neighborhoods and the views, on a loop built around what you want to see.',
    },
    {
      title: 'Flexible hourly service',
      text: 'Book the car as-directed by the hour and change the plan as the day unfolds. The chauffeur waits, adapts and follows your lead rather than a fixed itinerary.',
    },
    {
      title: 'The right vehicle',
      text: 'Choose a sedan for two, an SUV for the family or a stretch limousine for the group — with Sprinters and coaches on hand when the guest list grows.',
    },
  ],
  gallery: [
    { src: IMAGES.cityEvening, alt: 'City lights in the evening during a private night out' },
    { src: IMAGES.stretchLimo, alt: 'Stretch limousine for a private celebration' },
    { src: IMAGES.blackCarDetail, alt: 'Detailed luxury car for a special occasion' },
  ],
  faqs: [
    {
      q: 'Can we book a car by the hour?',
      a: 'Yes. Our as-directed hourly service keeps a chauffeur and vehicle with you for the booked time, following your plan and adapting as the day or evening unfolds.',
    },
    {
      q: 'Do you run Virginia wine tours?',
      a: 'We do. We plan the route between vineyards around your tasting reservations, carry your group all day and get everyone home safely, so no one has to watch the clock or the road.',
    },
    {
      q: 'What vehicles can we choose from?',
      a: 'Everything from executive sedans and luxury SUVs to stretch limousines, plus Sprinters and motor coaches for larger groups — matched to your party size and the occasion.',
    },
    {
      q: 'Can the chauffeur stay with us all evening?',
      a: 'Yes. On an hourly booking the chauffeur remains with your party between stops, so you travel together from dinner to the venue to home without ordering a new ride each time.',
    },
    {
      q: 'How do we request a quote?',
      a: 'Tell us the date, the occasion, your group size and roughly how long you will need the car, and we will return a simple all-inclusive hourly proposal.',
    },
  ],
  related: [
    { eyebrow: 'Request a proposal', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Service', label: 'Hourly charter', href: '/services/hourly-charter' },
    { eyebrow: 'Fleet', label: 'Stretch limousine', href: '/fleet/stretch-limousine' },
  ],
  ctaTitle: 'Tell us the occasion.\nWe will plan the ride.',
  ctaText: 'Share your date and group size and we will send a private event proposal.',
}

export default function Page() {
  return <DetailPage data={data} />
}
