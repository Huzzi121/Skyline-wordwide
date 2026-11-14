'use client'

import { ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { IMAGES, img } from '@/lib/site'
import { Reveal, Stagger, StaggerItem, WordReveal, useHeroParallax } from '@/components/motion'

const CARD_POOL = [IMAGES.cabinInterior, IMAGES.blackCarDetail, IMAGES.executiveSedan, IMAGES.cityEvening, IMAGES.chauffeurOffice, IMAGES.luxurySUV]

type Section = { title: string; text: string; href?: string; image?: string }
type Related = { label: string; href: string; eyebrow?: string }
type PageData = {
  eyebrow: string
  title: string
  intro: string
  image: string
  sections: Section[]
  related?: Related[]
}

const pageData: Record<string, PageData> = {
  services: {
    eyebrow: 'Our services',
    title: 'Transportation with\nintention.',
    intro: 'From a single airport transfer to a multi-day roadshow, Skyline brings the same quiet precision to every movement.',
    image: IMAGES.roadshow,
    sections: [
      { title: 'Corporate travel', text: 'Make every meeting, arrival and departure feel considered. Dedicated dispatch, traveler profiles and consolidated billing keep your team moving without friction.', href: '/services/corporate-transportation', image: IMAGES.corporateArrival },
      { title: 'Airport transfers', text: 'Your chauffeur is tracking the flight before you land. Meet-and-greet, luggage assistance and curbside coordination are included as standard.', href: '/services/airport-transfers', image: IMAGES.airportWindow },
      { title: 'Events & roadshows', text: 'A single point of contact for the moments where timing matters most — from executive delegations to weddings and multi-stop programs.', href: '/services/events-roadshows', image: IMAGES.eventVenue },
      { title: 'Groups & charter', text: 'Sprinters, shuttles and motor coaches coordinated around your itinerary, with experienced group transportation specialists behind the scenes.', href: '/services/group-transportation', image: IMAGES.motorCoach },
    ],
    related: [
      { eyebrow: 'Service', label: 'Point to point', href: '/services/point-to-point' },
      { eyebrow: 'Service', label: 'Hourly charter', href: '/services/hourly-charter' },
      { eyebrow: 'Service', label: 'Weddings', href: '/services/weddings' },
    ],
  },
  fleet: {
    eyebrow: 'The fleet',
    title: 'The right vehicle\nfor the moment.',
    intro: 'Quiet cabins, professional presentation and room to move. Choose a vehicle class that matches the occasion.',
    image: IMAGES.luxurySUV,
    sections: [
      { title: 'Executive sedan', text: 'A refined, discreet cabin for up to three passengers. Ideal for airport transfers, executive travel and point-to-point service.', href: '/fleet/executive-sedan', image: IMAGES.executiveSedan },
      { title: 'Luxury SUV', text: 'Additional space for passengers and luggage, without giving up the calm, composed experience Skyline is known for.', href: '/fleet/luxury-suv', image: IMAGES.luxurySUV },
      { title: 'Stretch limousine', text: 'For weddings, celebrations and milestone evenings — elegant presentation with room for the whole party.', href: '/fleet/stretch-limousine', image: IMAGES.stretchLimo },
      { title: 'Executive Sprinter', text: 'A mobile meeting room for teams of up to fourteen. Comfortable seating, generous luggage capacity and a professional presence.', href: '/fleet/executive-sprinter', image: IMAGES.executiveSprinter },
    ],
    related: [
      { eyebrow: 'Fleet', label: 'Shuttle & coach', href: '/fleet/shuttle-coach' },
      { eyebrow: 'Fleet', label: '55-seat motor coach', href: '/fleet/motor-coach' },
      { eyebrow: 'Service', label: 'Group transportation', href: '/services/group-transportation' },
    ],
  },
  airports: {
    eyebrow: 'Airport transportation',
    title: 'The smoothest part\nof your journey.',
    intro: 'Arrive at DCA, IAD or BWI and find your next move already handled.',
    image: IMAGES.airportWindow,
    sections: [
      { title: 'Ronald Reagan Washington National · DCA', text: 'Convenient curbside service for Washington, Arlington, Alexandria and the surrounding region.', href: '/airports/dca', image: IMAGES.washingtonDC },
      { title: 'Washington Dulles International · IAD', text: 'Reliable transfers to and from Northern Virginia, downtown DC and Maryland.', href: '/airports/iad', image: IMAGES.airportTerminal },
      { title: 'Baltimore/Washington International · BWI', text: 'A comfortable, predictable connection between BWI and the entire capital region.', href: '/airports/bwi', image: IMAGES.capitalRegion },
      { title: 'Meet-and-greet, included', text: 'We monitor your flight, adjust for delays and greet you in arrivals so your chauffeur is ready when you are.', href: '/airports/airport-meet-and-greet', image: IMAGES.airportWindow },
    ],
    related: [
      { eyebrow: 'Service', label: 'Airport transfers', href: '/services/airport-transfers' },
      { eyebrow: 'Fleet', label: 'Executive sedan', href: '/fleet/executive-sedan' },
      { eyebrow: 'Fleet', label: 'Luxury SUV', href: '/fleet/luxury-suv' },
    ],
  },
  corporate: {
    eyebrow: 'Corporate transportation',
    title: 'A private desk\nfor your organization.',
    intro: 'The standards of a great executive assistant, applied to every mile.',
    image: IMAGES.chauffeurOffice,
    sections: [
      { title: 'Corporate accounts', text: 'One clear statement, traveler profiles, approvals and reporting that fits the way your organization works.', href: '/corporate/accounts', image: IMAGES.chauffeurOffice },
      { title: 'Roadshows', text: 'One itinerary, many cities and a transportation plan that stays in step with the program.', href: '/corporate/roadshows', image: IMAGES.roadshow },
      { title: 'Government & delegations', text: 'Protocol-aware, discreet service for officials, agencies and visiting delegations.', href: '/corporate/government', image: IMAGES.corporateArrival },
      { title: 'Meetings & events', text: 'Executive meetings, conferences and hosted programs, coordinated by people who know the account.', href: '/corporate/meeting-events', image: IMAGES.dispatchDesk },
    ],
    related: [
      { eyebrow: 'Service', label: 'Corporate transportation', href: '/services/corporate-transportation' },
      { eyebrow: 'Events', label: 'Conferences', href: '/events/conferences' },
      { eyebrow: 'Fleet', label: 'Executive Sprinter', href: '/fleet/executive-sprinter' },
    ],
  },
  contact: {
    eyebrow: 'Make a reservation',
    title: 'Your next move,\nhandled.',
    intro: 'Tell us where you are going and when. Our dispatch team will take it from there.',
    image: IMAGES.cityEvening,
    sections: [
      { title: 'Call dispatch', text: 'Reach a real person around the clock at (866) 787-3318 or (202) 964-2112.' },
      { title: 'Request a quote', text: 'Share your itinerary and we will return a considered, all-inclusive proposal for your travel.' },
      { title: 'Corporate accounts', text: 'For recurring travel, roadshows and team movement, ask about a private transportation desk.', href: '/corporate/accounts', image: IMAGES.chauffeurOffice },
      { title: 'Client login', text: 'Existing clients can access their account, traveler profiles and billing portal.', href: '/client-login', image: IMAGES.clientWorkspace },
    ],
    related: [
      { eyebrow: 'Service', label: 'Corporate travel desk', href: '/corporate' },
      { eyebrow: 'Airports', label: 'Airport meet & greet', href: '/airports/airport-meet-and-greet' },
      { eyebrow: 'Fleet', label: 'Explore the full fleet', href: '/fleet' },
    ],
  },
  about: {
    eyebrow: 'About Skyline',
    title: 'Professionalism\nwithout the performance.',
    intro: 'Skyline Worldwide Transportation has served the capital region since 2000, with a simple belief: the best service is felt, not announced.',
    image: IMAGES.dispatchDesk,
    sections: [
      { title: 'Built in the capital', text: 'We know the roads, the hotels, the venues and the rhythm of Washington, Maryland and Virginia.', image: IMAGES.washingtonDC },
      { title: 'Human dispatch, always', text: 'Technology helps us move quickly. Experienced people make the right calls when plans change.', image: IMAGES.dispatchDesk },
      { title: 'A wider network', text: 'When your itinerary takes you beyond the region, our vetted affiliate network extends the same standards to more than 500 cities.', image: IMAGES.cityEvening },
      { title: 'Ready when you are', text: 'Day or night, a real person is available to help with the next move.', image: IMAGES.blackCarDetail },
    ],
    related: [
      { eyebrow: 'Services', label: 'Executive transportation', href: '/services/corporate-transportation' },
      { eyebrow: 'Fleet', label: 'View our luxury fleet', href: '/fleet' },
      { eyebrow: 'Coverage', label: 'Service areas & hubs', href: '/locations' },
    ],
  },
  locations: {
    eyebrow: 'Service areas',
    title: 'The capital region,\nwell covered.',
    intro: 'Local expertise across Washington, Maryland and Virginia, with a trusted network for travel beyond the region.',
    image: IMAGES.cityStreets,
    sections: [
      { title: 'Washington, DC', text: 'Executive transportation across downtown, Georgetown, Capitol Hill, Dupont Circle and every meeting in between.', href: '/locations/washington-dc', image: IMAGES.washingtonDC },
      { title: 'Arlington & Alexandria', text: 'Dedicated coverage for Rosslyn, Clarendon, Crystal City, Old Town and the DCA corridor.', href: '/locations/arlington-va', image: IMAGES.capitalRegion },
      { title: 'Tysons, Reston & McLean', text: 'Northern Virginia’s business corridor, minutes from Dulles International.', href: '/locations/tysons-va', image: IMAGES.chauffeurOffice },
      { title: 'Bethesda, Rockville & Baltimore', text: 'Reliable Maryland service from the DC line out to the Inner Harbor and BWI.', href: '/locations/bethesda-md', image: IMAGES.cityEvening },
    ],
    related: [
      { eyebrow: 'Location', label: 'Silver Spring, MD', href: '/locations/silver-spring-md' },
      { eyebrow: 'Location', label: 'Springfield, VA', href: '/locations/springfield-va' },
      { eyebrow: 'Location', label: 'Chevy Chase, MD', href: '/locations/chevy-chase-md' },
    ],
  },
  booking: {
    eyebrow: 'Online reservations',
    title: 'Make a reservation\nwith ease.',
    intro: 'Tell us the details once. Our dispatch team will confirm the next step with a real person.',
    image: IMAGES.reservationCabin,
    sections: [
      { title: 'Airport transfer', text: 'Include your flight number and we will monitor the arrival, adjust for delays and coordinate your greeting.', href: '/services/airport-transfers', image: IMAGES.airportWindow },
      { title: 'Point to point', text: 'For a single ride, provide the addresses, timing and passenger count so we can prepare the right vehicle.', href: '/services/point-to-point', image: IMAGES.executiveSedan },
      { title: 'Hourly service', text: 'Keep a chauffeur at hand for meetings, shopping, events or a full day of movement.', href: '/services/hourly-charter', image: IMAGES.cityEvening },
      { title: 'Need a proposal?', text: 'Corporate programs, weddings and roadshows are best handled by our reservations team directly.', href: '/events/weddings', image: IMAGES.weddingArrival },
    ],
    related: [
      { eyebrow: 'Fleet', label: 'Executive Sedans', href: '/fleet/executive-sedan' },
      { eyebrow: 'Fleet', label: 'Luxury SUVs', href: '/fleet/luxury-suv' },
      { eyebrow: 'Corporate', label: 'Corporate Accounts', href: '/corporate/accounts' },
    ],
  },
  'client-login': {
    eyebrow: 'Client portal',
    title: 'Your travel desk,\nwherever you are.',
    intro: 'Access saved traveler profiles, billing information and upcoming reservations through the Skyline client portal.',
    image: IMAGES.clientWorkspace,
    sections: [
      { title: 'Traveler profiles', text: 'Keep preferences, frequent addresses and special instructions in one secure place.', image: IMAGES.clientWorkspace },
      { title: 'Upcoming reservations', text: 'Review your confirmed rides and share itinerary details with your team.', image: IMAGES.reservationCabin },
      { title: 'Centralized billing', text: 'For approved corporate accounts, access statements and reservation history.', href: '/corporate/accounts', image: IMAGES.chauffeurOffice },
      { title: 'Need access?', text: 'Call dispatch and we will help connect your account to the client portal.', image: IMAGES.dispatchDesk },
    ],
    related: [
      { eyebrow: 'Booking', label: 'Book a ride online', href: '/book' },
      { eyebrow: 'Corporate', label: 'Open a corporate account', href: '/corporate/accounts' },
      { eyebrow: 'Support', label: 'Contact dispatch', href: '/contact' },
    ],
  },
  wedding: {
    eyebrow: 'Events & weddings',
    title: 'Every arrival\nmatters.',
    intro: 'A transportation plan as considered as the celebration itself, from the first guest to the final departure.',
    image: IMAGES.weddingArrival,
    sections: [
      { title: 'Weddings', text: 'Keep the couple, wedding party and guests comfortable and on time between hotels, ceremony, reception and after-party.', href: '/events/weddings', image: IMAGES.weddingArrival },
      { title: 'Galas & black-tie', text: 'Red-carpet arrivals timed to the minute, with sedans and limousines presented to match the occasion.', href: '/events/galas', image: IMAGES.stretchLimo },
      { title: 'Conferences', text: 'Attendee shuttles, airport batching and venue loops run by one dedicated coordinator.', href: '/events/conferences', image: IMAGES.motorCoach },
      { title: 'Private events', text: 'Birthdays, anniversaries, wine tours and nights out, booked by the hour with room to roam.', href: '/events/private-events', image: IMAGES.cityEvening },
    ],
    related: [
      { eyebrow: 'Fleet', label: 'Stretch limousine', href: '/fleet/stretch-limousine' },
      { eyebrow: 'Service', label: 'Events & roadshows', href: '/services/events-roadshows' },
      { eyebrow: 'Fleet', label: 'Motor coach', href: '/fleet/motor-coach' },
    ],
  },
}

export function SkylinePage({ page }: { page: keyof typeof pageData }) {
  useHeroParallax()
  const data = pageData[page]
  const titleLines = data.title.split('\n')
  return (
    <div className="inner-page">
      <SiteHeader />
      <main>
        <section className="inner-hero">
          <div className="inner-hero-image" style={{ backgroundImage: `url(${img(data.image, 2200)})` }} role="img" aria-label={data.eyebrow} />
          <div className="inner-hero-scrim" />
          <div className="inner-hero-content">
            <Reveal delay={0.05}><p className="eyebrow light">{data.eyebrow}</p></Reveal>
            <h1>
              {titleLines.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  <WordReveal text={line} italic delay={0.12 + i * 0.18} />
                </span>
              ))}
            </h1>
            <Reveal delay={0.35}><p>{data.intro}</p></Reveal>
          </div>
        </section>

        <section className="inner-content section-pad">
          <Reveal>
            <p className="eyebrow">The Skyline approach</p>
            <div className="inner-intro">
              <h2>
                Every detail
                <br />
                <em>has a purpose.</em>
              </h2>
              <a href="/book" className="outline-button">
                Plan your journey <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
          <Stagger className="inner-grid" gap={0.09}>
            {data.sections.map((item, index) => (
              <StaggerItem className="inner-card" key={item.title}>
                <div className="inner-card-media">
                  <div style={{ backgroundImage: `url(${img(item.image ?? CARD_POOL[index % CARD_POOL.length], 900)})` }} role="img" aria-label={item.title} />
                  <span className="inner-card-num">0{index + 1}</span>
                </div>
                <div className="inner-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href={item.href ?? '/book'} className="text-link">
                    {item.href ? 'Explore' : 'Learn more'} <ArrowUpRight size={15} />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {data.related && data.related.length > 0 && (
          <section className="related-section section-pad">
            <Reveal>
              <p className="eyebrow">Continue exploring</p>
              <div className="related-grid">
                {data.related.map((r) => (
                  <a className="related-card" href={r.href} key={r.href}>
                    {r.eyebrow && <p className="eyebrow">{r.eyebrow}</p>}
                    <span>{r.label}</span>
                    <ArrowUpRight size={18} />
                  </a>
                ))}
              </div>
            </Reveal>
          </section>
        )}

        <section className="inner-cta section-pad">
          <Reveal>
            <p className="eyebrow light">Available around the clock</p>
            <h2>
              Make the next move
              <br />
              <em>the easy one.</em>
            </h2>
            <div className="closing-actions">
              <a className="nav-button" href="/book">
                Request a reservation <ArrowUpRight size={16} />
              </a>
              <a className="outline-button" href="tel:+18667873318">
                Call dispatch (866) 787-3318
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
