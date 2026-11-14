import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'MTN Airport Black Car Transfer Service — Martin State Private Aviation | Skyline Worldwide',
  description:
    'Top-tier MTN Airport Black Car Transfer Service to and from Martin State Airport (MTN) in Baltimore County, MD. Specialized private jet FBO transfers, tarmac-side meets, and luxury fleet.',
  alternates: { canonical: '/airports/mtn' },
  openGraph: {
    title: 'MTN Airport Black Car Transfer Service | Skyline Worldwide',
    description:
      'Premier MTN Airport Black Car Transfer Service for private aviation and corporate FBOs at Martin State Airport, MD. Professional chauffeurs and tail-number tracking.',
    images: [{ url: img(IMAGES.airportRunway, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport Transfer Service · MTN (Baltimore County · Private Aviation & FBO)',
  title: 'MTN Airport Black Car\nTransfer Service.',
  intro:
    'Skyline Worldwide provides top-tier MTN Airport Black Car Transfer Service to and from Martin State Airport (MTN), ensuring a seamless and comfortable travel experience for individuals and groups of any size.',
  heroImage: IMAGES.airportRunway,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Martin State · MTN' },
  ],
  stats: [
    { value: 'MTN', label: 'Martin State Airport' },
    { value: 'Tail Number', label: 'Private Jet Flight Tracking' },
    { value: 'Tarmac-Side', label: 'Plane-Side Apron Escorts' },
    { value: '24/7', label: 'Live Executive Dispatch' },
  ],
  lead:
    'Martin State Airport is Maryland’s premier general aviation and corporate jet facility. We provide specialized tarmac-side meets, corporate flight department coordination, and discreet luxury ground transportation into Baltimore, Annapolis, and Washington DC.',
  sections: [
    {
      title: 'MTN Airport Black Car Transfer Service',
      text:
        'Skyline Worldwide provides top-tier MTN Airport Black Car Transfer Service to and from Martin State Airport (MTN), ensuring a seamless and comfortable travel experience for individuals and groups of any size. Whether you require executive transportation for corporate travel or a reliable MTN Airport Black Car Transfer Service for personal use, our professional chauffeurs prioritize punctuality, safety, and exceptional service. From the moment you land to your final destination, we guarantee a stress-free journey. Our diverse fleet is equipped to handle all airport transportation needs, featuring late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, shuttle buses, and full-size charter coaches. Whether you\'re traveling solo, with colleagues, or with a large group, we have the perfect vehicle to match your requirements. Every ride is designed for comfort, sophistication, and efficiency, ensuring you arrive at your destination in style.',
    },
    {
      title: 'Black Car Transfer Service MTN Airport',
      text:
        'Skyline Worldwide offers competitive pricing and great discounts on all MTN airport chauffeured transportation services. We track flights in real time, providing flexibility in case of delays or early arrivals. Our team is committed to delivering a smooth and worry-free experience, so you can relax knowing that your transportation is in expert hands. With customizable scheduling and premium service, we cater to all your MTN Airport Black Car Transfer Service needs across Baltimore County, Annapolis, and the mid-Atlantic corridor.',
    },
    {
      title: 'MTN Airport Chauffeured Transportation',
      text:
        'With experienced, professional chauffeurs, 24/7 customer support, and real-time dispatch, Skyline Worldwide sets the standard for luxury airport transportation. Whether you need a private MTN Airport Black Car Transfer Service, corporate shuttle, or group transportation, our team is ready to assist. Contact us today for more information, current rates, and exclusive promotions on MTN airport black car services.',
    },
    {
      title: 'Direct FBO & Tarmac Plane-Side Escorts',
      text:
        'We coordinate directly with Martin State FBO line services and your flight crew. Where airport security permits, your chauffeur stages directly on the apron beside your private jet or waits inside the private executive terminal lounge before wheels touch down.',
    },
    {
      title: 'Fast Highway Access to Baltimore & Annapolis',
      text:
        'Conveniently situated northeast of Baltimore, Martin State Airport provides rapid transit to downtown Baltimore’s Inner Harbor, Johns Hopkins medical centers, Annapolis maritime offices, and Washington DC via I-95 and I-695.',
    },
    {
      title: 'Discreet Private Aviation Protocols',
      text:
        'All chauffeurs assigned to Martin State transfers are vetted, confidentiality-bound, and experienced in private aviation protocols — handling luggage with utmost care, maintaining strict passenger privacy, and executing smooth departures without delay.',
    },
  ],
  gallery: [
    { src: IMAGES.airportRunway, alt: 'Martin State Airport runway and private jet apron' },
    { src: '/pics/mercedes%20s580.jpeg', alt: 'Mercedes-Benz S580 Executive Sedan' },
    { src: '/pics/cadilac%20escalade.jpeg', alt: 'Cadillac Escalade ESV Luxury SUV' },
    { src: '/pics/mercedes%20sprinter%20van.jpeg', alt: 'Mercedes-Benz Executive Sprinter Van' },
  ],
  faqs: [
    {
      q: 'Can my chauffeur pick me up directly plane-side on the tarmac at Martin State?',
      a: 'Yes. In coordination with Martin State Airport FBO operations and TSA security protocol, plane-side tarmac access is available for private jet passengers. Alternatively, we meet you immediately inside the executive terminal lounge.',
    },
    {
      q: 'Do you track private flights by tail number?',
      a: 'Yes. Provide your aircraft tail number at booking, and our dispatch desk monitors your flight status continuously via satellite tracking, adjusting for winds and revised flight plans in real time.',
    },
    {
      q: 'How far is Martin State Airport (MTN) from downtown Baltimore?',
      a: 'Martin State Airport is located approximately 11 miles east of downtown Baltimore. With an executive chauffeur, the drive to the Inner Harbor typically takes 18 to 25 minutes.',
    },
    {
      q: 'What vehicles are available for private aviation transfers at MTN?',
      a: 'We offer Mercedes-Benz S-Class sedans, Cadillac Escalade ESV and Chevrolet Suburban SUVs, and executive Mercedes Sprinter vans with ample luggage capacity for golf bags and ski gear.',
    },
  ],
  related: [
    { label: 'Baltimore/Washington · BWI', href: '/airports/bwi', eyebrow: 'Commercial Hub' },
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Capital Region' },
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'International Hub' },
    { label: 'All 6 Airport Hubs', href: '/airports', eyebrow: 'Directory' },
  ],
  ctaTitle: 'Your private aviation chauffeur\nis staged on the apron.',
  ctaText: `Book your Martin State (MTN) black car transfer online or contact our 24/7 dispatch desk at ${BUSINESS.phonePrimary} for immediate reservation assistance.`,
}

export default function MTNPage() {
  return <DetailPage data={data} />
}

