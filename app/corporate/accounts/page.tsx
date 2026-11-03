import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Corporate Accounts & Traveler Profiles | Skyline Worldwide',
  description:
    'Open a corporate chauffeur account in Washington DC, Maryland and Virginia: saved traveler profiles, approval workflows, one monthly statement and a dedicated contact.',
  alternates: { canonical: '/corporate/accounts' },
  openGraph: {
    title: 'Corporate Accounts | Skyline Worldwide',
    description:
      'Saved traveler profiles, approval workflows, consolidated monthly billing and a dedicated account contact for organizations across the capital region.',
    images: [{ url: img(IMAGES.chauffeurOffice, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Corporate accounts',
  title: 'One account,\nthe whole company moving.',
  intro:
    'A single corporate account that holds your travelers, your preferences and your billing in one place — so booking takes seconds and reconciliation takes minutes.',
  heroImage: IMAGES.chauffeurOffice,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Corporate', href: '/corporate' },
    { label: 'Accounts' },
  ],
  stats: [
    { value: 'Since 2000', label: 'Capital region' },
    { value: '1', label: 'Monthly statement' },
    { value: '24/7', label: 'Dispatch' },
    { value: '1', label: 'Point of contact' },
  ],
  sections: [
    {
      title: 'Guided onboarding',
      text: 'We set up your account in one short conversation — travelers, approved bookers, billing terms and reporting needs — and you are live the same day, without a procurement marathon.',
    },
    {
      title: 'Traveler profiles',
      text: 'Each executive’s preferences, frequent addresses, vehicle choice and special instructions live on file. Every trip is prepared to their standard before a chauffeur is ever assigned.',
    },
    {
      title: 'Saved preferences',
      text: 'Temperature, route, newspaper, car seat, quiet cabin — whatever matters to a traveler is remembered, so the experience is identical whether they book or an assistant books for them.',
    },
    {
      title: 'Approval workflows',
      text: 'Decide who can book, who must approve and what limits apply. Assistants reserve in seconds while spend stays inside the rules your organization has already set.',
    },
    {
      title: 'One monthly statement',
      text: 'A drawer of loose receipts becomes a single clear invoice. Allocate by traveler, department or cost center with all-inclusive rates and no surprise line items.',
    },
    {
      title: 'A dedicated contact',
      text: 'You reach a named account contact who knows your travelers and your schedule — not a queue. Changes, exceptions and new travelers are handled by someone who already has context.',
    },
  ],
  gallery: [
    { src: IMAGES.chauffeurOffice, alt: 'Professional chauffeur in business attire beside a sedan' },
    { src: IMAGES.dispatchDesk, alt: 'Skyline dispatch desk coordinating corporate accounts' },
    { src: IMAGES.clientWorkspace, alt: 'Account manager reviewing a corporate travel statement' },
  ],
  faqs: [
    {
      q: 'How long does it take to open a corporate account?',
      a: 'Usually the same day. We gather your travelers, approved bookers, billing terms and reporting preferences in a single conversation, then activate your account and priority dispatch line right away.',
    },
    {
      q: 'Can several assistants book under one account?',
      a: 'Yes. We authorize as many bookers as you need, each able to reserve against shared traveler profiles, while every trip rolls up to the same consolidated monthly statement.',
    },
    {
      q: 'How do approval workflows work?',
      a: 'You decide who can book freely, who needs sign-off and what spending limits apply. We enforce those rules at the point of booking so compliance happens automatically.',
    },
    {
      q: 'What reporting can finance receive?',
      a: 'Statements can be broken out by traveler, department or cost center, with trip-level detail suitable for expense systems, internal allocation and audit.',
    },
    {
      q: 'Are rates all-inclusive?',
      a: 'They are. Quoted rates cover the chauffeur, vehicle, wait time and standard gratuity, so your statement reflects what you expected with no hidden charges.',
    },
  ],
  related: [
    { eyebrow: 'Corporate', label: 'Roadshows', href: '/corporate/roadshows' },
    { eyebrow: 'Service', label: 'Corporate transportation', href: '/services/corporate-transportation' },
    { eyebrow: 'Fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
  ],
  ctaTitle: 'Give your team\na transportation desk.',
  ctaText: 'Tell us how your organization travels and we will build an account around it.',
}

export default function Page() {
  return <DetailPage data={data} />
}
