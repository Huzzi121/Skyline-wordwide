import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Executive Sprinter — Chauffeured | Skyline Worldwide',
  description:
    'Chauffeured Mercedes-Benz executive Sprinter van seating up to 14 with generous luggage. A mobile meeting room for corporate groups, roadshows and team travel in the DC region.',
  alternates: { canonical: '/fleet/executive-sprinter' },
  openGraph: {
    title: 'Executive Sprinter — Chauffeured | Skyline Worldwide',
    description:
      'Chauffeured Mercedes-Benz executive Sprinter seating up to 14 with generous luggage space — a mobile meeting room for corporate groups and multi-stop roadshows.',
    images: [{ url: img(IMAGES.executiveSprinter, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'The fleet · Executive Sprinter',
  title: 'The meeting travels\nwith the team.',
  intro:
    'A Mercedes-Benz executive Sprinter seating up to fourteen in a stand-up cabin built for working, briefing and arriving together — luggage and all.',
  heroImage: IMAGES.executiveSprinter,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Fleet', href: '/fleet' },
    { label: 'Executive Sprinter' },
  ],
  stats: [
    { value: '14', label: 'Passengers' },
    { value: 'Generous', label: 'Luggage' },
    { value: 'Mercedes', label: 'Executive van' },
    { value: '24/7', label: 'Dispatch' },
  ],
  sections: [
    {
      title: 'Built for the corporate group',
      text: 'When the whole team needs to move as one — to the conference, the client site, the dinner — the Sprinter keeps the group together and the schedule intact across every stop.',
    },
    {
      title: 'A mobile meeting room',
      text: 'High-back executive seating faces inward around work surfaces, with device charging, climate control and room to stand. Hold the pre-meeting briefing on the way in and the debrief on the way out.',
    },
    {
      title: 'Roadshows, stop after stop',
      text: 'For investor days and multi-site roadshows, one chauffeured Sprinter replaces a convoy of cars. Everyone arrives on the same clock, with the same notes, to the same door.',
    },
    {
      title: 'Luggage without the squeeze',
      text: 'Generous dedicated cargo space takes the team’s roller bags, pitch materials and gear without piling anything on seats — a genuine advantage on the IAD and BWI group run.',
    },
    {
      title: 'Who it suits',
      text: 'Corporate teams, production crews and extended families of up to fourteen. Below eight, the luxury SUV is tidier; above fourteen, step up to the shuttle coach.',
    },
    {
      title: 'How to reserve',
      text: 'Book online or call dispatch with the headcount, the itinerary and the stops. We confirm an all-inclusive rate and assign a chauffeur who knows the route.',
    },
  ],
  gallery: [
    { src: IMAGES.executiveSprinter, alt: 'Mercedes-Benz executive Sprinter van detailed for a corporate group' },
    { src: IMAGES.cabinInterior, alt: 'Executive Sprinter cabin with facing high-back seats and work surfaces' },
    { src: IMAGES.roadshow, alt: 'Executive team departing a building on a multi-stop roadshow' },
    { src: IMAGES.corporateArrival, alt: 'Corporate group arriving together by van' },
  ],
  faqs: [
    {
      q: 'How many passengers and bags does the Sprinter hold?',
      a: 'Up to fourteen passengers with generous dedicated luggage space — enough for the team’s roller bags and materials without stacking anything on seats.',
    },
    {
      q: 'Can you provide child seats?',
      a: 'Yes. Tell us the number of children and each one’s age and weight when you book and we install the appropriate seats before pickup.',
    },
    {
      q: 'Are the rates all-inclusive?',
      a: 'They are. The quote covers the chauffeur, reserved hours, standard wait and tolls across every stop on the itinerary — no surprise fees at the end.',
    },
    {
      q: 'Is the Sprinter hourly or transfer-based?',
      a: 'Either. Book a single group transfer to or from the airport, or reserve the van and chauffeur by the hour for a full day of meetings and roadshow stops.',
    },
    {
      q: 'What amenities come standard?',
      a: 'High-back executive seating, device charging, climate control, bottled water and standing room. Share any requirement — a specific stop order or Wi-Fi need — and we plan for it.',
    },
  ],
  related: [
    { eyebrow: 'The fleet', label: 'Shuttle & coach', href: '/fleet/shuttle-coach' },
    { eyebrow: 'Service', label: 'Group transportation', href: '/services/group-transportation' },
    { eyebrow: 'Airports', label: 'Baltimore · BWI', href: '/airports/bwi' },
  ],
  ctaTitle: 'Move the whole team\non one clock.',
  ctaText: `Reserve the executive Sprinter online or call ${BUSINESS.phonePrimary} — send us the headcount and the itinerary.`,
}

export default function Page() {
  return <DetailPage data={data} />
}
