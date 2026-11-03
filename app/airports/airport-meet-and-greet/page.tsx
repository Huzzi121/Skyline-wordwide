import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Airport Meet-and-Greet Car Service & Chauffeur | Skyline Worldwide',
  description:
    'How Skyline’s airport meet-and-greet works, step by step: 24/7 flight tracking, a chauffeur waiting in arrivals with a name board, luggage assistance and a quiet ride home.',
  alternates: { canonical: '/airports/airport-meet-and-greet' },
  openGraph: {
    title: 'Airport Meet-and-Greet Car Service & Chauffeur | Skyline Worldwide',
    description:
      'A step-by-step look at Skyline’s airport meet-and-greet — flight tracking, a chauffeur waiting in arrivals, luggage assistance and the drive to your door.',
    images: [{ url: img(IMAGES.blackCarDetail, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The arrival experience',
  title: 'Someone is\nalways waiting.',
  intro:
    'A meet-and-greet is the opposite of a curbside scramble: your chauffeur is inside the terminal, named board in hand, before you have collected a single bag. Here is exactly how the arrival unfolds.',
  heroImage: 'blackCarDetail',
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Meet-and-greet' },
  ],
  stats: [
    { value: '24/7', label: 'flight tracking & dispatch' },
    { value: 'In arrivals', label: 'greeted, not texted' },
    { value: 'All-inclusive', label: 'wait time built in' },
    { value: 'Since 2000', label: 'perfecting the arrival' },
  ],
  sections: [
    {
      title: '01 · We track your flight',
      text: 'From the moment your aircraft pushes back at the origin, dispatch is watching it by flight number. Delays, early landings and gate changes all reach us first, so your pickup is timed to the real arrival — never the booking.',
    },
    {
      title: '02 · Your chauffeur parks and waits',
      text: 'Rather than circling the roadway, your chauffeur parks and walks inside to the arrivals or baggage-claim area, taking position before you reach it. Wait time is already included, so there is no meter running on a delay.',
    },
    {
      title: '03 · Greeted by name',
      text: 'You are met with a name board and a professional greeting inside the terminal. No searching the curb, no phone tag, no wondering which lane — the chauffeur finds you and confirms your party.',
    },
    {
      title: '04 · Luggage assistance',
      text: 'Your chauffeur helps gather the bags from the carousel and carries them out to the vehicle. Oversized cases, golf clubs or a group’s luggage are planned for in advance by matching you to the right class of vehicle.',
    },
    {
      title: '05 · Escorted to the vehicle',
      text: 'Together you walk to the car, staged close by. The chauffeur loads the luggage, opens the door and settles you into a clean, climate-set cabin — the transition from terminal to seat is seamless.',
    },
    {
      title: '06 · The drive to your door',
      text: 'From there it is a quiet, direct ride to your destination along the best route for the time of day. Tolls and airport fees are already in your all-inclusive rate, so arrival is simply arrival.',
    },
  ],
  gallery: [
    { src: 'blackCarDetail', alt: 'Chauffeur presenting a black executive vehicle for an arriving passenger' },
    { src: 'airportTerminal', alt: 'Arrivals hall where the meet-and-greet takes place' },
    { src: 'cabinInterior', alt: 'The quiet, climate-set cabin for the ride to your door' },
  ],
  faqs: [
    {
      q: 'What is the difference between meet-and-greet and a curbside pickup?',
      a: 'With meet-and-greet your chauffeur parks and waits for you inside the terminal with a name board. A curbside pickup stages the car at the arrivals roadway and coordinates by text — faster for light travellers, but without the in-terminal escort.',
    },
    {
      q: 'Where will the chauffeur be standing?',
      a: 'Inside the arrivals or baggage-claim area for your flight, holding a sign with your name. The exact spot depends on the airport and terminal, and we confirm it with you before the day of travel.',
    },
    {
      q: 'What if my flight is delayed?',
      a: 'It is covered. We track the flight live by number and your chauffeur adjusts to the actual landing time. Wait time is included in the rate, so a delay never costs you extra.',
    },
    {
      q: 'Does meet-and-greet cost more?',
      a: 'Meet-and-greet is our standard arrival service, and quotes are all-inclusive — flight tracking, wait time, parking, tolls and luggage assistance are built into the rate rather than added on.',
    },
    {
      q: 'Which airports offer meet-and-greet?',
      a: `We provide it at every airport we serve — ${BUSINESS.airports.join(', ')} — with DCA, IAD and BWI being the busiest for our capital-region clients.`,
    },
    {
      q: 'How far in advance should I arrange it?',
      a: 'A few hours’ notice lets us confirm the chauffeur, vehicle and meeting point, though our 24/7 dispatch handles same-day and last-minute arrivals whenever possible.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Airport' },
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'Airport' },
    { label: 'Baltimore · BWI', href: '/airports/bwi', eyebrow: 'Airport' },
  ],
  ctaTitle: 'Arrive to a name board,\nnot a scramble.',
  ctaText: `Book a meet-and-greet arrival online or call ${BUSINESS.phonePrimary} — our dispatch runs 24/7.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
