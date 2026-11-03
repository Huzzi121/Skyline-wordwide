import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Events & Roadshows Chauffeur & Black Car Service | Skyline Worldwide',
  description:
    'Multi-stop event and investor roadshow transportation in Washington DC and beyond. Printed manifests, venue access, one dedicated coordinator and 24/7 dispatch since 2000.',
  alternates: { canonical: '/services/events-roadshows' },
  openGraph: {
    title: 'Events & Roadshows | Skyline Worldwide',
    description:
      'Multi-stop event and investor roadshow transportation in Washington DC and beyond. Printed manifests, venue access, one dedicated coordinator and 24/7 dispatch since 2000.',
    images: [{ url: img(IMAGES.eventVenue, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Events & roadshows',
  title: 'Many moving parts,\none point of contact.',
  intro:
    'Investor roadshows, conferences and executive programs where timing is everything — planned as a single itinerary and run by a coordinator who owns the whole day.',
  heroImage: IMAGES.eventVenue,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Events & roadshows' },
  ],
  stats: [
    { value: '1', label: 'Dedicated coordinator' },
    { value: '24/7', label: 'Live dispatch' },
    { value: 'Multi-city', label: 'Affiliate reach' },
    { value: 'Since 2000', label: 'Program experience' },
  ],
  sections: [
    {
      title: 'Multi-stop itineraries',
      text: 'A full day of meetings becomes one coordinated plan. We sequence pickups, buffer the drive times and keep every car in position so the program never waits on the cars.',
    },
    {
      title: 'Printed manifests',
      text: 'Every chauffeur, principal and driver carries the same manifest — stops, times, contacts and vehicle assignments — so the whole team is reading from one script all day.',
    },
    {
      title: 'Venue access',
      text: 'We confirm loading zones, security protocols and private entrances ahead of time, so vehicles arrive where they are allowed to be and principals move discreetly in and out.',
    },
    {
      title: 'One point of contact',
      text: 'You brief a single coordinator who holds the plan, directs the fleet and absorbs the changes. When a meeting runs long, they re-sequence the day — you make one call.',
    },
    {
      title: 'Built to flex',
      text: 'Roadshow days rarely run to plan. With dispatch live throughout, we add a stop, hold a car or reroute on the move without the program ever feeling the strain.',
    },
    {
      title: 'Beyond Washington',
      text: 'When the program travels, our vetted affiliate network keeps the same manifests, standards and single-contact coordination across more than 500 cities.',
    },
  ],
  gallery: [
    { src: IMAGES.eventVenue, alt: 'Guests arriving at an evening event venue' },
    { src: IMAGES.roadshow, alt: 'Executive vehicles staged for a multi-stop roadshow' },
    { src: IMAGES.corporateArrival, alt: 'Principal arriving at a meeting during a roadshow day' },
    { src: IMAGES.executiveSprinter, alt: 'Executive Sprinter used to move a program team together' },
  ],
  faqs: [
    {
      q: 'Do we get one contact for the whole program?',
      a: 'Yes. A single coordinator holds the itinerary, briefs the chauffeurs and manages every change, so your team never has to chase multiple drivers or dispatchers during the day.',
    },
    {
      q: 'Can you handle several vehicles running at once?',
      a: 'Routinely. We stage and sequence multiple vehicles against a shared manifest, keeping cars in position across parallel meetings so no principal is ever left waiting.',
    },
    {
      q: 'What is a manifest and who gets it?',
      a: 'It is the master schedule of stops, times, passengers, contacts and vehicle assignments. Every chauffeur and your lead contact carry it, so the whole program is aligned minute to minute.',
    },
    {
      q: 'What if the schedule changes mid-day?',
      a: 'Roadshows almost always shift. Our dispatch stays live throughout, re-sequencing stops, holding or releasing cars and adding runs on the fly, coordinated through your single contact.',
    },
    {
      q: 'Can you support a roadshow that leaves Washington?',
      a: 'Yes. Our affiliate network extends the same coordinated, manifest-driven service to more than 500 cities, so a multi-city program feels like one seamless operation.',
    },
  ],
  related: [
    { eyebrow: 'Service', label: 'Corporate transportation', href: '/services/corporate-transportation' },
    { eyebrow: 'Service', label: 'Group transportation', href: '/services/group-transportation' },
    { eyebrow: 'Fleet', label: 'Executive sprinter', href: '/fleet/executive-sprinter' },
  ],
  ctaTitle: 'Hand us the itinerary,\nkeep your focus.',
  ctaText: 'Share the dates, stops and headcount and we will return a coordinated transportation plan.',
}

export default function Page() {
  return <DetailPage data={data} />
}
