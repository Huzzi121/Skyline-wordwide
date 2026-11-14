import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'DCA Airport Black Car Transfer Service — Washington DC, Maryland & Virginia | Skyline Worldwide',
  description:
    'Premier DCA Airport Black Car Transfer Service to and from Ronald Reagan Washington National Airport (DCA), serving Washington DC, Maryland, and Virginia with professional chauffeurs and 24/7 flight tracking.',
  alternates: { canonical: '/airports/dca' },
  openGraph: {
    title: 'DCA Airport Black Car Transfer Service | Skyline Worldwide',
    description:
      'Executive DCA Airport Black Car Transfer Service. Real-time flight tracking, curbside and baggage claim meet, serving Washington DC, Maryland, and Northern Virginia.',
    images: [{ url: img(IMAGES.washingtonDC, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport Transfer Service · DCA (Washington DC · Maryland · Virginia)',
  title: 'DCA Airport Black Car\nTransfer Service.',
  intro:
    'Skyline Worldwide provides top-tier DCA Airport Black Car Transfer Service to and from Ronald Reagan Washington National Airport (DCA), ensuring a seamless and comfortable travel experience across Washington DC, Maryland, and Northern Virginia.',
  heroImage: IMAGES.washingtonDC,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Reagan National · DCA' },
  ],
  stats: [
    { value: 'DCA', label: 'Reagan National Airport' },
    { value: 'DC · MD · VA', label: 'Tri-State Capital Coverage' },
    { value: '24/7', label: 'Flight Tracking & Dispatch' },
    { value: 'Minutes', label: 'To Capitol Hill & K Street' },
  ],
  lead:
    'Located just across the Potomac River from downtown Washington, DCA is the capital’s most immediate runway. We guarantee punctual, discreet black car service for solo executives, diplomatic delegations, and private travelers.',
  sections: [
    {
      title: 'DCA Airport Black Car Transfer Service',
      text:
        'Skyline Worldwide provides top-tier DCA Airport Black Car Transfer Service to and from Ronald Reagan Washington National Airport (DCA), ensuring a seamless and comfortable travel experience for individuals and groups of any size across Washington DC, Maryland, and Virginia. Whether you require executive transportation for government and corporate meetings or a reliable DCA Airport Black Car Transfer Service for personal use, our professional chauffeurs prioritize punctuality, safety, and exceptional service. From the moment you land to your final destination, we guarantee a stress-free journey. Our diverse fleet is equipped to handle all airport transportation needs, featuring late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, shuttle buses, and full-size charter coaches. Whether you\'re traveling solo, with colleagues, or with a large group, we have the perfect vehicle to match your requirements. Every ride is designed for comfort, sophistication, and efficiency, ensuring you arrive at your destination in style.',
    },
    {
      title: 'Black Car Transfer Service DCA Airport',
      text:
        'Skyline Worldwide offers competitive pricing and great discounts on all DCA airport chauffeured transportation services. We track flights in real time, providing flexibility in case of delays or early arrivals. Our team is committed to delivering a smooth and worry-free experience, so you can relax knowing that your transportation is in expert hands. With customizable scheduling and premium service, we cater to all your DCA Airport Black Car Transfer Service needs across Washington DC, Maryland, and Northern Virginia.',
    },
    {
      title: 'DCA Airport Chauffeured Transportation',
      text:
        'With experienced, professional chauffeurs, 24/7 customer support, and real-time dispatch, Skyline Worldwide sets the standard for luxury airport transportation. Whether you need a private DCA Airport Black Car Transfer Service, corporate shuttle, or group transportation, our team is ready to assist. Contact us today for more information, current rates, and exclusive promotions on DCA airport black car services.',
    },
    {
      title: 'Curbside & Terminal Baggage Claim Greeting',
      text:
        'Reagan National’s compact layout allows prompt curbside pickup at Terminals 1 and 2 or traditional inside baggage-claim meet and greet with an executive nameboard. Your chauffeur communicates via text as soon as your aircraft wheels touch down, ensuring zero wait time outside.',
    },
    {
      title: 'Serving the Entire Capital Corridor',
      text:
        'Direct, rapid transfers between DCA and Capitol Hill, the White House corridor, downtown DC hotels, Arlington, Alexandria, Tysons, Bethesda, and Chevy Chase. Our chauffeurs possess deep local knowledge of George Washington Parkway and 14th Street Bridge traffic patterns.',
    },
    {
      title: 'All-Inclusive Transparent Pricing',
      text:
        'Every DCA reservation includes all tolls, airport access fees, parking, and generous flight delay grace periods. No unexpected surge pricing during rush hour or weather changes — the price confirmed by dispatch is the final price.',
    },
  ],
  gallery: [
    { src: IMAGES.washingtonDC, alt: 'Aerial view of Washington DC and Reagan National Airport approach' },
    { src: '/pics/mercedes%20s580.jpeg', alt: 'Mercedes-Benz S-Class S580 Executive Sedan' },
    { src: '/pics/cadilac%20escalade.jpeg', alt: 'Cadillac Escalade ESV Luxury SUV' },
    { src: IMAGES.cityStreets, alt: 'Downtown DC street at dusk' },
  ],
  faqs: [
    {
      q: 'Where do I meet my chauffeur at Reagan National (DCA)?',
      a: 'We offer two convenient options: Inside Baggage Claim (your chauffeur meets you near the baggage carousel holding a personalized sign) or Curbside Outer Lanes (your chauffeur coordinates by SMS and pulls up to the curbside pickup zone the moment you step outside).',
    },
    {
      q: 'Does Skyline Worldwide monitor DCA flight delays?',
      a: 'Yes. Every reservation is tethered to your flight number and monitored 24/7 in real time. If your DCA flight arrives early or is delayed by air traffic control, your chauffeur’s dispatch time adjusts automatically.',
    },
    {
      q: 'How quickly can I reach downtown Washington DC from DCA?',
      a: 'DCA is uniquely situated just 4 to 5 miles from downtown DC, the National Mall, and Capitol Hill. Typical drive time with a professional chauffeur is approximately 12 to 20 minutes depending on peak traffic.',
    },
    {
      q: 'Can you handle group transportation from DCA for conferences or summits?',
      a: 'Yes. In addition to luxury sedans and SUVs, our fleet includes 14-passenger Mercedes Sprinter vans, 28-passenger executive shuttles, and 56-passenger motor coaches for delegations and corporate groups.',
    },
  ],
  related: [
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'International Hub' },
    { label: 'Baltimore/Washington · BWI', href: '/airports/bwi', eyebrow: 'Regional Hub' },
    { label: 'Richmond International · RIC', href: '/airports/ric', eyebrow: 'Virginia Gateway' },
    { label: 'All 6 Airport Hubs', href: '/airports', eyebrow: 'Directory' },
  ],
  ctaTitle: 'Your DCA chauffeur is\nstaged on the terminal drive.',
  ctaText: `Book your DCA airport black car transfer online or contact our 24/7 dispatch desk at ${BUSINESS.phonePrimary} for immediate quotes.`,
}

export default function DCAPage() {
  return <DetailPage data={data} />
}
