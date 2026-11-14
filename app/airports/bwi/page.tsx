import type { Metadata } from 'next'
import { DetailPage, type DetailPageData } from '@/components/detail-page'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'BWI Airport Black Car Transfer Service & Chauffeured Transportation | Skyline Worldwide',
  description:
    'Top-tier BWI Airport Black Car Transfer Service to and from Baltimore-Washington International Airport (BWI). Professional chauffeurs, real-time flight tracking, and competitive pricing.',
  alternates: { canonical: '/airports/bwi' },
  openGraph: {
    title: 'BWI Airport Black Car Transfer Service | Skyline Worldwide',
    description:
      'Premier BWI Airport Black Car Transfer Service. Real-time flight tracking, 24/7 human dispatch, and luxury sedans, SUVs, and Sprinters for Baltimore and Washington DC.',
    images: [{ url: img(IMAGES.airportRunway, 1200) }],
  },
}

const data: DetailPageData = {
  eyebrow: 'Airport Transfer Service · BWI',
  title: 'BWI Airport Black Car\nTransfer Service.',
  intro:
    'Skyline Worldwide provides top-tier BWI Airport Black Car Transfer Service to and from Baltimore-Washington International Airport (BWI), ensuring a seamless and comfortable travel experience for individuals and groups of any size.',
  heroImage: IMAGES.airportRunway,
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Airports', href: '/airports' },
    { label: 'Baltimore/Washington · BWI' },
  ],
  stats: [
    { value: 'BWI', label: 'International Airport' },
    { value: '24/7', label: 'Real-Time Flight Tracking' },
    { value: '100%', label: 'All-Inclusive Fixed Rates' },
    { value: '500+', label: 'Cities Nationwide Network' },
  ],
  lead:
    'From the moment you land to your final destination, we guarantee a stress-free journey with late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, and charter coaches.',
  sections: [
    {
      title: 'BWI Airport Black Car Transfer Service',
      text:
        'Skyline Worldwide provides top-tier BWI Airport Black Car Transfer Service to and from Baltimore-Washington International Airport (BWI), ensuring a seamless and comfortable travel experience for individuals and groups of any size. Whether you require executive transportation for corporate travel or a reliable BWI Airport Black Car Transfer Service for personal use, our professional chauffeurs prioritize punctuality, safety, and exceptional service. From the moment you land to your final destination, we guarantee a stress-free journey. Our diverse fleet is equipped to handle all airport transportation needs, featuring late-model luxury sedans, executive SUVs, corporate Sprinter vans, mini buses, shuttle buses, and full-size charter coaches. Whether you\'re traveling solo, with colleagues, or with a large group, we have the perfect vehicle to match your requirements. Every ride is designed for comfort, sophistication, and efficiency, ensuring you arrive at your destination in style.',
    },
    {
      title: 'Black Car Transfer Service BWI Airport',
      text:
        'Skyline Worldwide offers competitive pricing and great discounts on all BWI airport chauffeured transportation services. We track flights in real time, providing flexibility in case of delays or early arrivals. Our team is committed to delivering a smooth and worry-free experience, so you can relax knowing that your transportation is in expert hands. With customizable scheduling and premium service, we cater to all your BWI Airport Black Car Transfer Service needs.',
    },
    {
      title: 'BWI Airport Chauffeured Transportation',
      text:
        'With experienced, professional chauffeurs, 24/7 customer support, and real-time dispatch, Skyline Worldwide sets the standard for luxury airport transportation. Whether you need a private BWI Airport Black Car Transfer Service, corporate shuttle, or group transportation, our team is ready to assist. Contact us today for more information, current rates, and exclusive promotions on BWI airport black car services.',
    },
    {
      title: 'Meet-and-Greet in Baggage Claim',
      text:
        'Your suited chauffeur waits on the baggage-claim level of your concourse with an executive nameboard. BWI’s lower level keeps arrivals close together, so you are greeted immediately as you reach the carousels with luggage assistance directly to your staged vehicle.',
    },
    {
      title: 'Connecting Baltimore, Bethesda, Silver Spring & DC',
      text:
        'BWI sits in an ideal corridor connecting Baltimore, Bethesda, Silver Spring, Columbia, and downtown Washington DC. Dispatch plans optimal routes avoiding I-95 and BW Parkway bottlenecks so you arrive comfortably on time.',
    },
    {
      title: 'Transparent, All-Inclusive Quotations',
      text:
        'Every quotation for BWI transportation is fixed and all-inclusive — airport access fees, tolls, parking, and generous flight delay grace periods are built in with zero unexpected surcharges at drop-off.',
    },
  ],
  gallery: [
    { src: IMAGES.airportRunway, alt: 'Aircraft on the runway at Baltimore/Washington International' },
    { src: IMAGES.airportWindow, alt: 'Passenger view through a BWI terminal window' },
    { src: '/pics/mercedes%20s580.jpeg', alt: 'Mercedes-Benz S580 Executive Sedan' },
    { src: '/pics/cadilac%20escalade.jpeg', alt: 'Cadillac Escalade ESV Luxury SUV' },
  ],
  faqs: [
    {
      q: 'Where will my chauffeur meet me at BWI Airport?',
      a: 'Your chauffeur greets you inside the terminal at the baggage-claim level corresponding to your airline, holding a personalized greeting sign. If you prefer a quick curbside pickup, simply let us know at booking and text your chauffeur upon collecting your bags.',
    },
    {
      q: 'What happens if my BWI flight is delayed or arrives early?',
      a: 'Skyline Worldwide monitors all commercial and charter flights in real time. If your flight is delayed or arrives early, your chauffeur’s dispatch schedule automatically adjusts to your actual wheels-down time at no extra charge.',
    },
    {
      q: 'What vehicle options are available for BWI airport transfers?',
      a: 'Our diverse fleet includes executive sedans (Mercedes-Benz S580, Cadillac CT5), luxury SUVs (Cadillac Escalade, Chevy Suburban), executive Sprinter vans, mini buses, and 56-passenger motor coaches.',
    },
    {
      q: 'Are your BWI airport transfer rates all-inclusive?',
      a: 'Yes. All rates are 100% all-inclusive — including fuel, tolls, airport parking, meet-and-greet service, and wait time. The price quoted is the price you pay.',
    },
    {
      q: 'Can you accommodate early morning or late night BWI flights?',
      a: 'Absolutely. Skyline Worldwide operates a 24/7 human dispatch desk and can handle red-eye arrivals and crack-of-dawn departures with guaranteed punctuality.',
    },
  ],
  related: [
    { label: 'Reagan National · DCA', href: '/airports/dca', eyebrow: 'Regional Hub' },
    { label: 'Washington Dulles · IAD', href: '/airports/iad', eyebrow: 'Regional Hub' },
    { label: 'Martin State Airport · MTN', href: '/airports/mtn', eyebrow: 'Private Aviation FBO' },
    { label: 'All 6 Airport Hubs', href: '/airports', eyebrow: 'Directory' },
  ],
  ctaTitle: 'Your BWI chauffeur is\nalready on the way.',
  ctaText: `Book your BWI black car transfer online or call our 24/7 dispatch desk at ${BUSINESS.phonePrimary} for immediate reservation confirmation.`,
}

export default function BWIPage() {
  return <DetailPage data={data} />
}
