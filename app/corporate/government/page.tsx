import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Government & Protocol Chauffeur Service | Skyline Worldwide',
  description:
    'Discreet, protocol-aware ground transportation for government offices, visiting delegations and dignitaries in Washington DC, Maryland and Virginia with vetted chauffeurs.',
  alternates: { canonical: '/corporate/government' },
  openGraph: {
    title: 'Government Transportation | Skyline Worldwide',
    description:
      'Protocol-aware, confidential chauffeur service for government offices, visiting delegations and dignitaries across the capital region.',
    images: [{ url: img(IMAGES.corporateArrival, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Government & protocol',
  title: 'Discretion first,\nevery mile.',
  intro:
    'Confidential, protocol-aware ground transportation for government offices, agencies and the delegations they host — delivered by chauffeurs who understand that how someone arrives is part of the message.',
  heroImage: IMAGES.corporateArrival,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Government' },
  ],
  stats: [
    { value: 'Since 2000', label: 'Serving the capital' },
    { value: '24/7', label: 'Dispatch' },
    { value: '6', label: 'Capital airports' },
    { value: '1', label: 'Point of contact' },
  ],
  sections: [
    {
      title: 'Confidential by default',
      text: 'Identities, destinations and conversations stay private. Manifests are held closely and itinerary detail is limited to those who need it, which is why offices across the region rely on us.',
    },
    {
      title: 'Protocol-aware service',
      text: 'Our chauffeurs understand order of precedence, curbside timing and the quiet choreography of an official arrival, so principals are received the way protocol expects.',
    },
    {
      title: 'Visiting delegations',
      text: 'When delegations and dignitaries come to Washington, we coordinate airport arrivals, hotel transfers and meeting runs as one program with a single named contact.',
    },
    {
      title: 'Vetted chauffeurs',
      text: 'Chauffeurs are background-checked professionals, briefed on the sensitivity of each assignment and trusted to carry officials and their guests without comment.',
    },
    {
      title: 'Secure handling',
      text: 'We can arrange unmarked vehicles, restrict shared itinerary detail and coordinate with security details so ground movement fits within an existing plan rather than complicating it.',
    },
    {
      title: 'Capital-region fluency',
      text: 'Since 2000 we have run the routes between agencies, embassies, the Hill and DCA, IAD and BWI — so timing accounts for checkpoints, closures and the realities of moving through Washington.',
    },
  ],
  gallery: [
    { src: IMAGES.corporateArrival, alt: 'Dignitary arriving by black sedan at an official entrance' },
    { src: IMAGES.chauffeurOffice, alt: 'Vetted chauffeur in business attire beside a sedan' },
    { src: IMAGES.washingtonDC, alt: 'Washington DC landmarks at dusk' },
  ],
  faqs: [
    {
      q: 'How do you protect confidentiality for sensitive travel?',
      a: 'Chauffeurs are background-checked and briefed to keep passenger identities, destinations and conversations private. We can also provide unmarked vehicles and limit how much itinerary detail is shared.',
    },
    {
      q: 'Can you support visiting delegations and dignitaries?',
      a: 'Yes. We coordinate arrivals, hotel transfers and meeting runs for delegations and dignitaries as a single program, with a named contact managing timing, vehicles and protocol throughout the visit.',
    },
    {
      q: 'Do your chauffeurs understand protocol?',
      a: 'They do. Our chauffeurs are experienced with order of precedence, curbside positioning and the measured pace of an official arrival, so principals are received appropriately.',
    },
    {
      q: 'Can you coordinate with a security detail?',
      a: 'We regularly work alongside security teams, fitting our vehicles and timing into an existing plan and following the detail’s lead on routing, staging and access.',
    },
    {
      q: 'Which airports do you cover for arrivals?',
      a: 'We meet delegations at all six capital-region airports — DCA, IAD, BWI, RIC, ORF and MTN — with flight monitoring so pickups adjust to the actual arrival time.',
    },
  ],
  related: [
    { eyebrow: 'Corporate', label: 'Accounts', href: '/corporate/accounts' },
    { eyebrow: 'Service', label: 'Corporate transportation', href: '/services/corporate-transportation' },
    { eyebrow: 'Fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
  ],
  ctaTitle: 'Arrange discreet\nofficial transportation.',
  ctaText: 'Tell us about the visit and we will plan quiet, protocol-aware ground movement around it.',
}

export default function Page() {
  return <DetailPage data={data} />
}
