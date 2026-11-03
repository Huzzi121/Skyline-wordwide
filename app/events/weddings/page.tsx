import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Wedding Transportation & Limousine Service | Skyline Worldwide',
  description:
    'Elegant wedding transportation in Washington DC, Maryland and Virginia — the couple, the wedding party, guest shuttles and the after-party, all on one timeline.',
  alternates: { canonical: '/events/weddings' },
  openGraph: {
    title: 'Wedding Transportation | Skyline Worldwide',
    description:
      'Stretch limousines, SUVs and guest shuttles for the couple, the wedding party and everyone else — coordinated on one timeline across the capital region.',
    images: [{ url: img(IMAGES.weddingArrival, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Weddings',
  title: 'A day that flows,\nfrom first look to last dance.',
  intro:
    'Elegant wedding transportation for the couple, the wedding party and every guest — planned as one timeline so the only thing you watch on the day is each other.',
  heroImage: IMAGES.weddingArrival,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Events' },
    { label: 'Weddings' },
  ],
  stats: [
    { value: 'Since 2000', label: 'Capital region' },
    { value: '24/7', label: 'Dispatch' },
    { value: '500+', label: 'Affiliate cities' },
    { value: '1', label: 'Point of contact' },
  ],
  sections: [
    {
      title: 'The couple’s car',
      text: 'A pristine sedan, SUV or stretch limousine for the two of you — red-carpet clean, chauffeur in formal attire, timed to the ceremony and ready for the exit whenever you are.',
    },
    {
      title: 'The wedding party',
      text: 'Keep the bridal party and groomsmen together and on schedule with limousines and SUVs that move everyone between the suite, the venue and the photos as one group.',
    },
    {
      title: 'Guest shuttles',
      text: 'Continuous shuttles between hotels, ceremony and reception mean no guest circles for parking or drives after a toast — they simply arrive and, later, get home safely.',
    },
    {
      title: 'After-party transfers',
      text: 'When the reception ends, we carry the newlyweds and guests on to the after-party or back to their hotels, so the celebration keeps its momentum right to the end of the night.',
    },
    {
      title: 'One timeline, one plan',
      text: 'We build a wedding manifest with every pickup, party and vehicle, and share it with you and your planner so the transportation runs to the minute without you managing it.',
    },
    {
      title: 'A chauffeur who elevates it',
      text: 'Formally dressed, calm and discreet, your chauffeur handles doors, dresses and timing with the grace the day deserves — a quiet professional presence, not a distraction.',
    },
  ],
  gallery: [
    { src: IMAGES.weddingArrival, alt: 'Newlyweds arriving by limousine outside a wedding venue' },
    { src: IMAGES.stretchLimo, alt: 'Stretch limousine prepared for a wedding party' },
    { src: IMAGES.blackCarDetail, alt: 'Polished black car detailed for a wedding day' },
  ],
  faqs: [
    {
      q: 'What vehicles do you offer for weddings?',
      a: 'From formal sedans and luxury SUVs to stretch limousines for the party and Sprinters or motor coaches for guest shuttles — mixed to match the couple, the party and the guest count.',
    },
    {
      q: 'Can you shuttle guests between the hotel and venue?',
      a: 'Yes. We run continuous shuttle loops between hotels, the ceremony and the reception on a set cadence, so guests never park, drive or wait, and everyone gets home safely afterward.',
    },
    {
      q: 'Do you build a timeline with our planner?',
      a: 'We create a detailed wedding manifest with every pickup, party and vehicle, coordinate it with you and your planner, and run it to the minute on the day so you never think about logistics.',
    },
    {
      q: 'How far in advance should we book?',
      a: 'Peak wedding dates fill early, so we recommend reserving several months ahead. Send your date and venues and we will hold the right vehicles and return a proposal.',
    },
    {
      q: 'Can you provide after-party or late-night transfers?',
      a: 'Absolutely. We carry the couple and guests to the after-party or back to their hotels at the end of the night, with dispatch available 24/7 for late or shifting end times.',
    },
  ],
  related: [
    { eyebrow: 'Request a proposal', label: 'Events & roadshows', href: '/services/events-roadshows' },
    { eyebrow: 'Fleet', label: 'Stretch limousine', href: '/fleet/stretch-limousine' },
    { eyebrow: 'Event', label: 'Galas', href: '/events/galas' },
  ],
  ctaTitle: 'Tell us your date.\nWe will handle the rest.',
  ctaText: 'Share your venues and guest count and we will send a wedding transportation proposal.',
}

export default function Page() {
  return <DetailPage data={data} />
}
