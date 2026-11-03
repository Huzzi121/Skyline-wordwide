// Central business facts + curated image library for Skyline Worldwide Transportation.
// Sourced from skylineworldwidetrans.com. Keep this the single source of truth so every
// page shares the same phone numbers, service areas and imagery.

export const BUSINESS = {
  name: 'Skyline Worldwide Transportation',
  since: 2000,
  tagline: 'Competitive rates · Professional drivers · 24/7',
  phonePrimary: '(866) 787-3318',
  phonePrimaryHref: 'tel:+18667873318',
  phoneLocal: '(202) 964-2112',
  phoneLocalHref: 'tel:+12029642112',
  email: 'contact@skylineworldwidetrans.com',
  emailHref: 'mailto:contact@skylineworldwidetrans.com',
  address: '7406 Alban Station Ct, Springfield, VA 22150',
  addressLines: ['7406 Alban Station Ct', 'Springfield, VA 22150'],
  airports: ['DCA', 'IAD', 'BWI', 'RIC', 'ORF', 'MTN'],
} as const

export const PRIMARY_NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Airports', href: '/airports' },
  { label: 'Locations', href: '/locations' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'About', href: '/about' },
]

// Resolve an image reference to a URL. Local paths ("/images/..") and absolute
// URLs are returned as-is; a bare Unsplash id is expanded. `w` applies to Unsplash only.
export const img = (ref: string, w = 1800) =>
  ref.startsWith('/') || ref.startsWith('http')
    ? ref
    : `https://images.unsplash.com/${ref}?auto=format&fit=crop&w=${w}&q=85`

// Curated, human-verified luxury photography, stored locally in /public/images.
// Every file was visually reviewed for an on-brand black-car / executive look.
export const IMAGES = {
  // Heroes / brand
  heroChauffeurNight: '/images/hero-sedan.jpg', // black Porsche Panamera at dusk
  blackCarDetail: '/images/luxury-coupe.jpg', // moody grey coupe, detail
  cabinInterior: '/images/car-interior.jpg', // cockpit / navigation detail
  chauffeurOffice: '/images/office.jpg', // glass executive corridor
  dispatchDesk: '/images/meeting.jpg', // working session
  cityEvening: '/images/city-dusk.jpg', // skyline at blue hour

  // Fleet
  executiveSedan: '/images/executive-sedan.jpg', // black Porsche Panamera sedan
  luxurySUV: '/images/luxury-suv.jpg', // black Range Rover
  stretchLimo: '/images/rolls-royce.jpg', // Rolls-Royce for limo / celebration
  executiveSprinter: '/images/shuttle.jpg', // minibus / executive van
  shuttleBus: '/images/shuttle.jpg', // shuttle minibus, group boarding
  motorCoach: '/images/motor-coach.jpg', // 55-seat touring coach
  gClass: '/images/g-class.jpg', // black Mercedes G-Class, city arrival

  // Airports
  airportWindow: '/images/airport-wing.jpg', // wing above the clouds at sunset
  airportTerminal: '/images/airport-cabin.jpg', // cabin interior
  airportRunway: '/images/airport-wing.jpg',

  // Occasions
  corporateArrival: '/images/g-class.jpg', // black Mercedes G-Class city arrival
  weddingArrival: '/images/rolls-royce.jpg', // white Rolls-Royce
  eventVenue: '/images/wedding.jpg', // event table setting
  roadshow: '/images/executive-sedan.jpg',

  // Places
  washingtonDC: '/images/capitol.jpg', // US Capitol
  capitalRegion: '/images/monument.jpg', // Washington Monument, cherry blossoms
  cityStreets: '/images/city-dusk.jpg',
  clientWorkspace: '/images/office.jpg',
  reservationCabin: '/images/hotel-night.jpg', // hotel at night
} as const
