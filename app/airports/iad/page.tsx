import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'IAD Airport Black Car Transfer Service — Washington Dulles | Skyline Worldwide',
  description:
    'Top-tier IAD Airport Black Car Transfer Service to and from Washington Dulles International Airport (IAD). Professional chauffeurs, real-time flight tracking, and luxury sedans, SUVs, and Sprinters.',
  alternates: { canonical: '/airports/iad' },
  openGraph: {
    title: 'IAD Airport Black Car Transfer Service | Skyline Worldwide',
    description:
      'Premier IAD Airport Black Car Transfer Service serving Northern Virginia, Washington DC, and Maryland with 24/7 flight tracking and executive fleet.',
    images: [{ url: img(IMAGES.airportTerminal, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport Transfer Service · IAD',
  title: 'IAD Airport Black Car\nTransfer Service.',
  intro:
    'Skyline Worldwide provides top-tier IAD Airport Black Car Transfer Service to and from Washington Dulles International Airport (IAD), ensuring a seamless and comfortable travel experience for individuals and groups of any size.',
  heroImage: IMAGES.airportTerminal,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Washington Dulles · IAD' },
  ],
  stats: [
    { value: 'IAD', label: 'International Airport' },
    { value: '24/7', label: 'Real-Time Flight Tracking' },
    { value: 'Main & FBO', label: 'Commercial & Private Aprons' },
    { value: '100%', label: 'All-Inclusive Fixed Rates' },
  ],
  lead:
    'Dulles is the primary international and transcontinental gateway for the Washington capital region. From commercial concourses to private FBOs, we ensure seamless movement between IAD, Northern Virginia, DC, and Maryland.',
  sections: [
    {
      title: 'IAD Airport Black Car Transfer Service',
      text:
        'Skyline Worldwide provides top-tier IAD Airport Black Car Transfer Service to and from Washington Dulles International Airport (IAD), ensuring a seamless and comfortable travel experience for individuals and groups of any size. Whether you require executive transportation for corporate travel or a reliable IAD Airport Black Car Transfer Service for personal use, our professional chauffeurs prioritize punctuality, safety, and exceptional service. From the moment you land to your final destination, we guarantee a stress-free journey. Our diverse fleet is equipped to handle all airport transportation needs, featuring late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, shuttle buses, and full-size charter coaches. Whether you\'re traveling solo, with colleagues, or with a large group, we have the perfect vehicle to match your requirements. Every ride is designed for comfort, sophistication, and efficiency, ensuring you arrive at your destination in style.',
    },
    {
      title: 'Black Car Transfer Service IAD Airport',
      text:
        'Skyline Worldwide offers competitive pricing and great discounts on all IAD airport chauffeured transportation services. We track flights in real time, providing flexibility in case of delays or early arrivals. Our team is committed to delivering a smooth and worry-free experience, so you can relax knowing that your transportation is in expert hands. With customizable scheduling and premium service, we cater to all your IAD Airport Black Car Transfer Service needs.',
    },
    {
      title: 'IAD Airport Chauffeured Transportation',
      text:
        'With experienced, professional chauffeurs, 24/7 customer support, and real-time dispatch, Skyline Worldwide sets the standard for luxury airport transportation. Whether you need a private IAD Airport Black Car Transfer Service, corporate shuttle, or group transportation, our team is ready to assist. Contact us today for more information, current rates, and exclusive promotions on IAD airport black car services.',
    },
    {
      title: 'Main Terminal & Baggage Level Meet',
      text:
        'For domestic and international arrivals at Dulles Main Terminal, your suited chauffeur greets you inside baggage claim with an executive digital nameboard, handles your luggage, and escorts you directly to your waiting vehicle in the reserved chauffeur lane.',
    },
    {
      title: 'Signature Flight Support & Jet Aviation FBOs',
      text:
        'Flying via private jet or corporate charter into IAD? Skyline Worldwide provides direct tarmac-side escort and executive terminal greeting at Signature Flight Support (East & West) and Jet Aviation FBOs, timed to your tail number.',
    },
    {
      title: 'Direct Toll Road Transit to DC & Northern Virginia',
      text:
        'Our chauffeurs utilize the dedicated Dulles Access Corridor and express lanes to bypass local Virginia traffic, delivering quiet, uninterrupted transit directly to Tysons, Reston, Arlington, Bethesda, and downtown DC.',
    },
  ],
  gallery: [
    { src: IMAGES.airportTerminal, alt: 'Washington Dulles Main Terminal architectural view' },
    { src: '/pics/cadilac%20escalade.jpeg', alt: 'Cadillac Escalade ESV staged for IAD pickup' },
    { src: '/pics/mercedes%20s580.jpeg', alt: 'Mercedes-Benz S580 Executive Sedan' },
    { src: IMAGES.airportWindow, alt: 'Aircraft arrival at sunset' },
  ],
  faqs: [
    {
      q: 'Where do I meet my chauffeur at Dulles (IAD)?',
      a: 'We offer inside meet-and-greet at the baggage-claim level corresponding to your airline, holding a personalized greeting sign. If you prefer curbside pickup, your chauffeur stages in the cellphone holding area and pulls directly to the outer arrivals curb when you text upon luggage retrieval.',
    },
    {
      q: 'How do you handle international arrivals with customs and immigration at IAD?',
      a: 'International flights at Dulles frequently experience variable customs lines. Skyline Worldwide tracks your flight touchdown and provides a complimentary 60-minute domestic / 90-minute international wait window to ensure you never feel rushed.',
    },
    {
      q: 'Do you provide car service to private FBO terminals at Dulles?',
      a: 'Yes. We service both Signature Flight Support and Jet Aviation FBOs at IAD. We coordinate directly with ground line service for plane-side or lounge pickups.',
    },
    {
      q: 'How long is the drive from IAD to downtown Washington DC?',
      a: 'Via the dedicated Dulles Access Road and I-66, the drive is approximately 26 miles, typically taking 35 to 50 minutes depending on the time of day.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Regional Hub' },
    { label: 'Baltimore/Washington · BWI', href: '/airports/bwi', eyebrow: 'Regional Hub' },
    { label: 'Richmond International · RIC', href: '/airports/ric', eyebrow: 'Virginia Gateway' },
    { label: 'All 6 Airport Hubs', href: '/airports', eyebrow: 'Directory' },
  ],
  ctaTitle: 'Your IAD chauffeur is\nmonitoring your touchdown.',
  ctaText: `Book your IAD black car transfer online or call our 24/7 dispatch desk at ${BUSINESS.phonePrimary} for immediate reservation confirmation.`,
}

export default function IADPage() {
  return <DetailPage data={data} />
}
