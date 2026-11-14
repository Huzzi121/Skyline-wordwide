import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'RIC Airport Black Car Transfer Service — Richmond International | Skyline Worldwide',
  description:
    'Top-tier RIC Airport Black Car Transfer Service to and from Richmond International Airport (RIC), serving Central Virginia, the State Capitol, and intercity connections to Washington DC.',
  alternates: { canonical: '/airports/ric' },
  openGraph: {
    title: 'RIC Airport Black Car Transfer Service | Skyline Worldwide',
    description:
      'Premier RIC Airport Black Car Transfer Service in Richmond, Virginia. Professional chauffeurs, real-time flight tracking, and luxury sedans, SUVs, and Sprinters.',
    images: [{ url: img(IMAGES.airportRunway, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport Transfer Service · RIC (Richmond · Central Virginia)',
  title: 'RIC Airport Black Car\nTransfer Service.',
  intro:
    'Skyline Worldwide provides top-tier RIC Airport Black Car Transfer Service to and from Richmond International Airport (RIC), ensuring a seamless and comfortable travel experience for individuals and groups of any size.',
  heroImage: IMAGES.airportRunway,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Richmond International · RIC' },
  ],
  stats: [
    { value: 'RIC', label: 'Richmond International' },
    { value: '24/7', label: 'Flight Tracking & Dispatch' },
    { value: 'Central VA', label: 'Capitol & Corporate Hubs' },
    { value: '100%', label: 'All-Inclusive Fixed Rates' },
  ],
  lead:
    'Richmond International Airport is Central Virginia’s premier gateway. Whether you are traveling for legislative sessions at the State Capitol, Fortune 500 corporate meetings, or intercity travel to Washington DC, we deliver peerless black car luxury.',
  sections: [
    {
      title: 'RIC Airport Black Car Transfer Service',
      text:
        'Skyline Worldwide provides top-tier RIC Airport Black Car Transfer Service to and from Richmond International Airport (RIC), ensuring a seamless and comfortable travel experience for individuals and groups of any size. Whether you require executive transportation for corporate travel or a reliable RIC Airport Black Car Transfer Service for personal use, our professional chauffeurs prioritize punctuality, safety, and exceptional service. From the moment you land to your final destination, we guarantee a stress-free journey. Our diverse fleet is equipped to handle all airport transportation needs, featuring late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, shuttle buses, and full-size charter coaches. Whether you\'re traveling solo, with colleagues, or with a large group, we have the perfect vehicle to match your requirements. Every ride is designed for comfort, sophistication, and efficiency, ensuring you arrive at your destination in style.',
    },
    {
      title: 'Black Car Transfer Service RIC Airport',
      text:
        'Skyline Worldwide offers competitive pricing and great discounts on all RIC airport chauffeured transportation services. We track flights in real time, providing flexibility in case of delays or early arrivals. Our team is committed to delivering a smooth and worry-free experience, so you can relax knowing that your transportation is in expert hands. With customizable scheduling and premium service, we cater to all your RIC Airport Black Car Transfer Service needs across Central Virginia and the I-95 corridor.',
    },
    {
      title: 'RIC Airport Chauffeured Transportation',
      text:
        'With experienced, professional chauffeurs, 24/7 customer support, and real-time dispatch, Skyline Worldwide sets the standard for luxury airport transportation. Whether you need a private RIC Airport Black Car Transfer Service, corporate shuttle, or group transportation, our team is ready to assist. Contact us today for more information, current rates, and exclusive promotions on RIC airport black car services.',
    },
    {
      title: 'Richmond Terminal & FBO Meet Services',
      text:
        'Your chauffeur meets you promptly inside the lower baggage claim terminal with an executive digital greeting sign or provides coordinated curbside pickup along the outer arrivals roadway. We also service Richmond Executive Aviation and private FBOs with tarmac-side coordination.',
    },
    {
      title: 'Intercity Route Between Richmond & Washington DC',
      text:
        'Skyline Worldwide frequently handles seamless, quiet intercity highway transfers between Richmond, Fredericksburg, Quantico, Northern Virginia, and Washington DC. Avoid Amtrak delays and crowded airports with door-to-door chauffeured privacy.',
    },
    {
      title: 'Corporate Billing & Transparent Quotes',
      text:
        'All RIC quotations are guaranteed fixed and all-inclusive. Corporate travel desks benefit from centralized billing, consolidated monthly expense statements, and dedicated flight manifest tracking.',
    },
  ],
  gallery: [
    { src: IMAGES.airportRunway, alt: 'Richmond International runway and aircraft operations' },
    { src: '/pics/mercedes%20s580.jpeg', alt: 'Mercedes-Benz S580 Executive Sedan' },
    { src: '/pics/chevrolet%20suburban.jpeg', alt: 'Chevrolet Suburban Premier SUV' },
    { src: '/pics/mercedes%20sprinter%20van.jpeg', alt: 'Mercedes-Benz Executive Sprinter Van' },
  ],
  faqs: [
    {
      q: 'Where will my chauffeur meet me at Richmond International (RIC)?',
      a: 'We offer inside meet-and-greet on the baggage-claim level holding a personalized name sign, or streamlined curbside pickup directly outside the terminal exit doors coordinated via real-time SMS.',
    },
    {
      q: 'Do you offer chauffeured car service from RIC to Washington DC?',
      a: 'Yes. We provide direct point-to-point transfers between Richmond and Washington DC, Reagan National (DCA), Dulles (IAD), and Baltimore (BWI) with fixed, all-inclusive rates.',
    },
    {
      q: 'How does Skyline Worldwide track incoming RIC flights?',
      a: 'Our dispatch team connects directly to live FAA and satellite flight tracking systems. Whether your commercial flight arrives early or encounters weather delays, your chauffeur is positioned when your flight lands.',
    },
    {
      q: 'What types of vehicles can I book at Richmond International?',
      a: 'Our fleet in the region includes Mercedes-Benz S-Class and Cadillac sedans, Cadillac Escalade and Chevy Suburban SUVs, executive Sprinters, and luxury mini buses for group travel.',
    },
  ],
  related: [
    { label: 'Norfolk International · ORF', href: '/airports/orf', eyebrow: 'Coastal Virginia' },
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Capital Region' },
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'International Hub' },
    { label: 'All 6 Airport Hubs', href: '/airports', eyebrow: 'Directory' },
  ],
  ctaTitle: 'Your Richmond chauffeur is\nready upon landing.',
  ctaText: `Book your RIC black car transfer online or contact our 24/7 dispatch desk at ${BUSINESS.phonePrimary} for immediate reservation assistance.`,
}

export default function RICPage() {
  return <DetailPage data={data} />
}

