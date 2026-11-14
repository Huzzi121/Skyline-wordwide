import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'ORF Airport Black Car Transfer Service — Norfolk & Virginia Beach | Skyline Worldwide',
  description:
    'Top-tier ORF Airport Black Car Transfer Service to and from Norfolk International Airport (ORF). Serving Norfolk, Virginia Beach, Chesapeake, Newport News, and the Hampton Roads region.',
  alternates: { canonical: '/airports/orf' },
  openGraph: {
    title: 'ORF Airport Black Car Transfer Service | Skyline Worldwide',
    description:
      'Premier ORF Airport Black Car Transfer Service in Norfolk and Virginia Beach. Professional chauffeurs, real-time flight tracking, and luxury sedans, SUVs, and Sprinters.',
    images: [{ url: img(IMAGES.airportRunway, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport Transfer Service · ORF (Norfolk · Virginia Beach · Hampton Roads)',
  title: 'ORF Airport Black Car\nTransfer Service.',
  intro:
    'Skyline Worldwide provides top-tier ORF Airport Black Car Transfer Service to and from Norfolk International Airport (ORF), ensuring a seamless and comfortable travel experience for individuals and groups of any size.',
  heroImage: IMAGES.airportRunway,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Norfolk International · ORF' },
  ],
  stats: [
    { value: 'ORF', label: 'Norfolk International' },
    { value: '24/7', label: 'Flight Tracking & Dispatch' },
    { value: 'Hampton Roads', label: 'Norfolk · VA Beach · Newport News' },
    { value: '100%', label: 'All-Inclusive Fixed Rates' },
  ],
  lead:
    'Serving Coastal Virginia, naval stations, corporate maritime corridors, and Virginia Beach resorts. We provide punctual, discreet black car service for military commands, executives, and vacationing families.',
  sections: [
    {
      title: 'ORF Airport Black Car Transfer Service',
      text:
        'Skyline Worldwide provides top-tier ORF Airport Black Car Transfer Service to and from Norfolk International Airport (ORF), ensuring a seamless and comfortable travel experience for individuals and groups of any size. Whether you require executive transportation for corporate travel or a reliable ORF Airport Black Car Transfer Service for personal use, our professional chauffeurs prioritize punctuality, safety, and exceptional service. From the moment you land to your final destination, we guarantee a stress-free journey. Our diverse fleet is equipped to handle all airport transportation needs, featuring late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, shuttle buses, and full-size charter coaches. Whether you\'re traveling solo, with colleagues, or with a large group, we have the perfect vehicle to match your requirements. Every ride is designed for comfort, sophistication, and efficiency, ensuring you arrive at your destination in style.',
    },
    {
      title: 'Black Car Transfer Service ORF Airport',
      text:
        'Skyline Worldwide offers competitive pricing and great discounts on all ORF airport chauffeured transportation services. We track flights in real time, providing flexibility in case of delays or early arrivals. Our team is committed to delivering a smooth and worry-free experience, so you can relax knowing that your transportation is in expert hands. With customizable scheduling and premium service, we cater to all your ORF Airport Black Car Transfer Service needs across Norfolk, Virginia Beach, and Coastal Virginia.',
    },
    {
      title: 'ORF Airport Chauffeured Transportation',
      text:
        'With experienced, professional chauffeurs, 24/7 customer support, and real-time dispatch, Skyline Worldwide sets the standard for luxury airport transportation. Whether you need a private ORF Airport Black Car Transfer Service, corporate shuttle, or group transportation, our team is ready to assist. Contact us today for more information, current rates, and exclusive promotions on ORF airport black car services.',
    },
    {
      title: 'Arrival Protocol at Norfolk International',
      text:
        'Your suited chauffeur greets you inside the arrivals terminal at baggage claim holding a personalized nameboard, assists with your luggage, and escorts you directly to your vehicle stationed in the designated ground transportation area.',
    },
    {
      title: 'Connecting Virginia Beach & Maritime Commands',
      text:
        'We specialize in point-to-point and hourly service between Norfolk International, Naval Station Norfolk, Oceana NAS, Virginia Beach Oceanfront resorts, downtown Norfolk financial centers, Williamsburg, and Newport News shipyards.',
    },
    {
      title: 'Fixed Transparent Quotes with Zero Surges',
      text:
        'All ORF airport transfers are backed by transparent, all-inclusive pricing with all bridge tolls, airport fees, and flight delay allowances fully included.',
    },
  ],
  gallery: [
    { src: IMAGES.airportRunway, alt: 'Norfolk International Airport terminal and apron' },
    { src: '/pics/cadilac%20escalade.jpeg', alt: 'Cadillac Escalade ESV Luxury SUV' },
    { src: '/pics/mercedes%20s580.jpeg', alt: 'Mercedes-Benz S580 Executive Sedan' },
    { src: '/pics/shuttle%20bus.jpeg', alt: 'Executive Shuttle Bus for group transfers' },
  ],
  faqs: [
    {
      q: 'Where does the chauffeur meet me at Norfolk International (ORF)?',
      a: 'We provide inside terminal greeting at baggage claim holding a personalized name sign. Curbside pickup outside the baggage claim doors is also available upon request via text message with your driver.',
    },
    {
      q: 'Do you provide black car service from ORF to Virginia Beach resorts?',
      a: 'Yes. Virginia Beach oceanfront hotels, private residences, and golf clubs are among our most requested destinations from Norfolk International. Typical drive time is approximately 25 to 35 minutes.',
    },
    {
      q: 'Can Skyline Worldwide accommodate base access for military or government facilities?',
      a: 'Yes. Our professional chauffeurs maintain proper commercial vetting and licensing, and we routinely handle transportation to Naval Station Norfolk, Little Creek, and regional defense contractor facilities.',
    },
    {
      q: 'What happens if my Norfolk flight arrives late?',
      a: 'We monitor your flight continuously through real-time radar data. Even if your flight is delayed hours or diverted, your chauffeur’s dispatch schedule updates automatically at zero added cost.',
    },
  ],
  related: [
    { label: 'Richmond International · RIC', href: '/airports/ric', eyebrow: 'Central Virginia' },
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Capital Region' },
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'International Hub' },
    { label: 'All 6 Airport Hubs', href: '/airports', eyebrow: 'Directory' },
  ],
  ctaTitle: 'Your Coastal Virginia chauffeur\nis ready on the apron.',
  ctaText: `Book your Norfolk (ORF) black car transfer online or contact our 24/7 dispatch desk at ${BUSINESS.phonePrimary} for immediate reservation assistance.`,
}

export default function ORFPage() {
  return <DetailPage data={data} />
}

