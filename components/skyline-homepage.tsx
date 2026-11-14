'use client'

import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  Compass,
  Luggage,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  UsersRound,
  X,
} from 'lucide-react'
import { BUSINESS, IMAGES, PRIMARY_NAV, img } from '@/lib/site'
import { SiteHeader } from '@/components/detail-page'
import {
  Counter,
  Reveal,
  Stagger,
  StaggerItem,
  WordReveal,
  useHeroParallax,
} from '@/components/motion'

// Editorial Services data
const services = [
  {
    number: '01',
    title: 'Corporate & Government Travel',
    text: 'Quiet, considered movement for executives, officials, and visiting delegations across the capital region.',
    image: img(IMAGES.corporateArrival),
    href: '/services/corporate-transportation',
  },
  {
    number: '02',
    title: 'Airport Meet & Greet',
    text: 'Live flight tracking, arrivals-hall greeting, and seamless curbside or private tarmac coordination.',
    image: img(IMAGES.airportRunway),
    href: '/services/airport-transfers',
  },
  {
    number: '03',
    title: 'Events, Roadshows & Weddings',
    text: 'A dedicated, calm transportation desk for the moments and milestones where every arrival matters.',
    image: img(IMAGES.eventVenue),
    href: '/services/events-roadshows',
  },
  {
    number: '04',
    title: 'Group & Charter',
    text: 'Executive Sprinters, luxury minibuses, and motor coaches coordinated around your multi-stop itinerary.',
    image: img(IMAGES.blackCarDetail),
    href: '/services/group-transportation',
  },
]

// Fleet data
const fleet = [
  {
    name: 'Executive Sedan',
    category: 'Sedans',
    detail: 'Mercedes-Benz S-Class / Porsche Panamera',
    image: img(IMAGES.executiveSedan),
    passengers: '3',
    bags: '2',
    href: '/fleet/executive-sedan',
  },
  {
    name: 'Luxury SUV',
    category: 'SUVs',
    detail: 'Cadillac Escalade / Range Rover',
    image: img(IMAGES.luxurySUV),
    passengers: '6',
    bags: '5',
    href: '/fleet/luxury-suv',
  },
  {
    name: 'Stretch Limousine',
    category: 'Limousines',
    detail: 'Lincoln MKT / Rolls-Royce class',
    image: img(IMAGES.stretchLimo),
    passengers: '8',
    bags: '4',
    href: '/fleet/stretch-limousine',
  },
  {
    name: 'Executive Sprinter',
    category: 'Sprinters & Coaches',
    detail: 'Mercedes-Benz Sprinter Cabin',
    image: img(IMAGES.executiveSprinter),
    passengers: '14',
    bags: '12',
    href: '/fleet/executive-sprinter',
  },
  {
    name: 'Executive Shuttle',
    category: 'Sprinters & Coaches',
    detail: 'Executive Minibus Class',
    image: img(IMAGES.shuttleBus),
    passengers: '33',
    bags: '24',
    href: '/fleet/shuttle-coach',
  },
  {
    name: 'Motor Coach',
    category: 'Sprinters & Coaches',
    detail: 'Setra Touring Coach · 55 Seats',
    image: img(IMAGES.motorCoach),
    passengers: '55',
    bags: '55',
    href: '/fleet/motor-coach',
  },
]

// How It Works 3-step process
const howItWorksSteps = [
  {
    step: '01',
    title: 'Request Your Ride',
    description:
      'Choose your pickup location, destination, vehicle class, and preferred schedule online or with our 24/7 human dispatch.',
  },
  {
    step: '02',
    title: 'Confirm Your Journey',
    description:
      'Receive all-inclusive, fixed pricing with dedicated flight monitoring and verified itinerary details — no automated guesswork.',
  },
  {
    step: '03',
    title: 'Enjoy the Experience',
    description:
      'Step into an immaculate vehicle with a vetted, uniformed chauffeur dedicated to your comfort and absolute privacy.',
  },
]

// Pillars for The Skyline Experience
const experiencePillars = [
  {
    num: '01',
    title: 'Vetted, Uniformed Chauffeurs',
    desc: 'Background-checked, confidentiality-bound, and trained in executive road protocol.',
  },
  {
    num: '02',
    title: 'Real-Time Flight Tracking',
    desc: 'Continuous monitoring ensures your chauffeur is stationed curbside as wheels touch down.',
  },
  {
    num: '03',
    title: 'Confidentiality by Default',
    desc: 'A quiet, secure cabin environment trusted by corporate executives and diplomatic delegations.',
  },
  {
    num: '04',
    title: '24/7 Human Dispatch',
    desc: 'Direct telephone access to an experienced local transportation desk at every hour.',
  },
]

// Bespoke Hero feature vector icons
function ChauffeurIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9.5c0-2.8 3.5-4.5 8-4.5s8 1.7 8 4.5" />
      <path d="M2.5 10.5h19" />
      <circle cx="12" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <path d="M8.5 14a3.5 3.5 0 0 0 7 0" />
      <path d="M5.5 20.5v-1.5a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v1.5" />
      <path d="M12 15.5v3" />
      <path d="M10.8 17.2l1.2 1.5 1.2-1.5" />
    </svg>
  )
}

function FleetIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13.5l1.5-4.2A2 2 0 0 1 6.4 8h5.2a2 2 0 0 1 1.9 1.3L15 13.5" />
      <rect x="2" y="13.5" width="14" height="6" rx="1.5" />
      <circle cx="5.5" cy="16.5" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="12.5" cy="16.5" r="1.1" fill="currentColor" stroke="none" />
      <path d="M14.5 8.5l1.2-2.3a1.5 1.5 0 0 1 1.4-.9h3.4a1.5 1.5 0 0 1 1.3.9L23 8.5" />
      <path d="M16 11h6v2.5h-4" />
      <circle cx="20.5" cy="12.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function RatesIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="7" rx="8" ry="3.5" />
      <path d="M4 7v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V7" />
      <path d="M4 12v5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-5" />
      <path d="M12 5v4" />
      <path d="M13.2 5.8h-2a.8.8 0 0 0 0 1.6h1.6a.8.8 0 0 1 0 1.6h-2" />
    </svg>
  )
}

function SupportIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a9 9 0 0 1 8.5 6h-3" />
      <path d="M20.5 9l-3-3" />
      <path d="M12 21a9 9 0 0 1-8.5-6h3" />
      <path d="M3.5 15l3 3" />
      <circle cx="12" cy="12" r="5.5" />
      <path d="M12 9.5v2.5l1.8 1.2" />
    </svg>
  )
}

const heroFeatures = [
  { word: 'Chauffeur', Icon: ChauffeurIcon },
  { word: 'Fleet', Icon: FleetIcon },
  { word: 'All-Inclusive', Icon: RatesIcon },
  { word: '24/7', Icon: SupportIcon },
]

export function SkylineHomepage() {
  const [fleetFilter, setFleetFilter] = useState('All')
  useHeroParallax()

  const fleetCategories = ['All', 'Sedans', 'SUVs', 'Sprinters & Coaches', 'Limousines']
  const filteredFleet =
    fleetFilter === 'All'
      ? fleet
      : fleet.filter((item) => item.category === fleetFilter)

  return (
    <div className="site-shell">
      {/* SECTION 01 — DYNAMIC TRANSLUCENT NAVBAR */}
      <SiteHeader />

      <main id="top">
        {/* SECTION 01 — HERO BANNER */}
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-scrim" />

          <div className="hero-content">
            <Reveal delay={0.1}>
              <p className="eyebrow light">Washington · Maryland · Virginia</p>
            </Reveal>

            <h1>
              <WordReveal text="Your chauffeur" delay={0.15} />
              <br />
              <WordReveal text="in the capital." italic delay={0.45} />
            </h1>

            <Reveal delay={0.85}>
              <p className="hero-copy">
                Discreet, punctual, chauffeured travel across DC, Maryland and Virginia — since 2000.
              </p>
            </Reveal>

            {/* CTA Buttons Row */}
            <Reveal delay={1.05}>
              <div className="hero-actions">
                <a className="hero-quote-btn" href="/book" aria-label="Get a quote — reserve your chauffeur">
                  <span className="quote-btn-sheen" aria-hidden="true" />
                  <span className="quote-btn-text">Get a quote</span>
                  <ArrowUpRight size={16} className="quote-btn-icon" aria-hidden="true" />
                </a>

                <a className="hero-secondary-btn" href="/fleet" aria-label="Explore our fleet">
                  <span>Explore our fleet</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </Reveal>

            {/* 4 Feature Indicators Below Buttons */}
            <Reveal delay={1.2}>
              <div className="hero-features-row" aria-label="Skyline advantages">
                {heroFeatures.map(({ word, Icon }) => (
                  <div className="hero-feature-item" key={word}>
                    <div className="hero-feature-icon" aria-hidden="true">
                      <Icon />
                    </div>
                    <span className="hero-feature-word">{word}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* SINGLE-LINE TRUST HIGHLIGHTS AT THE BOTTOM OF HERO (NO BACKGROUND) */}
          <div className="hero-trust-bar" aria-label="Skyline Worldwide credentials">
            <span>Established 2000</span>
            <i aria-hidden="true" />
            <span>Professional Chauffeurs</span>
            <i aria-hidden="true" />
            <span>24/7 Human Dispatch</span>
            <i aria-hidden="true" />
            <span>DCA · IAD · BWI</span>
            <i aria-hidden="true" />
            <span>Washington DC · Maryland · Virginia</span>
            <i aria-hidden="true" />
            <span>500+ Cities Nationwide</span>
          </div>
        </section>

        {/* SECTION 02 — THE SKYLINE STANDARD */}
        <section id="experience" className="experience-section section-pad">
          <div className="experience-layout">
            <div className="experience-copy">
              <Reveal>
                <p className="eyebrow">The Skyline Standard</p>
                <h2>
                  A standard set in 2000. <em>Upheld every day.</em>
                </h2>
                <p className="experience-lead">
                  For over two decades, Skyline Worldwide has provided quiet, considered movement for corporate
                  leaders, diplomats, and institutions whose itineraries demand perfection.
                </p>
              </Reveal>

              <Stagger className="experience-pillars" gap={0.1}>
                {experiencePillars.map((p) => (
                  <StaggerItem className="pillar-item" key={p.num}>
                    <span className="pillar-num">{p.num}</span>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal delay={0.2} className="experience-visual">
              <div
                className="experience-image"
                style={{ backgroundImage: `url(${img(IMAGES.cabinInterior)})` }}
                role="img"
                aria-label="Skyline executive cabin interior"
              />
              <div className="experience-badge">
                <strong><Counter value="26" /></strong>
                <span>Years Serving The Capital</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SECTION 03 — SEAMLESS BOOKING (HOW IT WORKS) */}
        <section id="how-it-works" className="how-section section-pad">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">Seamless Booking</p>
              <h2>
                How it works. <em>Simple, transparent, assured.</em>
              </h2>
            </div>
            <span className="section-count">3-Step Process</span>
          </Reveal>

          <Stagger className="how-grid" gap={0.12}>
            {howItWorksSteps.map((s) => (
              <StaggerItem className="how-card" key={s.step}>
                <span className="how-step">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* CUSTOMER TESTIMONIALS (INTEGRATED INTO SEAMLESS BOOKING STAGE) */}
        <section id="testimonials" className="testimonial-section section-pad">
          <Reveal>
            <div className="testimonial-stars" aria-label="Five star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="eyebrow">Client Confidentiality & Trust</p>
            <blockquote>
              “The rare transportation partner who understands that discretion is not a feature. It is the
              foundation.”
            </blockquote>
            <p className="quote-byline">— Director of Events, Global Policy Institute · Washington, DC</p>
          </Reveal>
        </section>

        {/* SECTION 04 — AVAILABLE AROUND THE CLOCK */}
        <section id="reserve" className="closing-section section-pad">
          <Reveal>
            <p className="eyebrow">Available Around The Clock</p>
            <h2>
              Your next journey <em>deserves better.</em>
            </h2>
            <p className="closing-copy">
              Experience thoughtful service, professional chauffeurs, and transportation tailored around your
              schedule.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="closing-actions">
            <a className="hero-quote-btn" href="/book">
              <span className="quote-btn-sheen" aria-hidden="true" />
              <span className="quote-btn-text">Request a reservation</span>
              <ArrowUpRight size={16} className="quote-btn-icon" aria-hidden="true" />
            </a>
            <a className="outline-button" href={BUSINESS.phonePrimaryHref}>
              Call dispatch {BUSINESS.phonePrimary}
            </a>
          </Reveal>
        </section>

        {/* SECTION 05 — THE FLEET */}
        <section id="fleet" className="fleet-section section-pad">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">The Fleet</p>
              <h2>
                The vehicles. <em>The centerpiece.</em>
              </h2>
            </div>
            <a className="text-link" href="/fleet">
              View all vehicles <ArrowUpRight size={15} />
            </a>
          </Reveal>

          {/* Interactive Category Filter */}
          <div className="fleet-tabs" role="tablist" aria-label="Filter fleet by category">
            {fleetCategories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={fleetFilter === cat}
                className={`fleet-tab-btn ${fleetFilter === cat ? 'active' : ''}`}
                onClick={() => setFleetFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <Stagger className="fleet-grid" gap={0.08}>
            {filteredFleet.map((item) => (
              <StaggerItem key={item.name}>
                <article className="fleet-card">
                  <div className="fleet-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="fleet-info">
                    <p className="eyebrow">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p className="fleet-detail-text">{item.detail}</p>
                    <div className="fleet-meta">
                      <span>
                        <UsersRound size={14} /> {item.passengers} Passengers
                      </span>
                      <span>
                        <Luggage size={14} /> {item.bags} Luggage
                      </span>
                    </div>
                    <div className="fleet-actions">
                      <a href={`/book?vehicle=${encodeURIComponent(item.name.toLowerCase())}`} className="fleet-reserve-link">
                        Reserve class <ArrowUpRight size={14} />
                      </a>
                      <a href={item.href} className="fleet-details-link">
                        Details ↗
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* SECTION 06 — OUR EXPERTISE (SERVICES) */}
        <section id="services" className="services-section section-pad">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">Our Expertise</p>
              <h2>
                Consider every detail, <em>taken care of.</em>
              </h2>
            </div>
            <span className="section-count">04 Core Services</span>
          </Reveal>

          <Stagger className="service-list" gap={0.15}>
            {services.map((service, index) => (
              <StaggerItem key={service.number}>
                <article className={`service-row ${index % 2 === 1 ? 'reverse' : ''}`}>
                  <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
                    <span>{service.number}</span>
                  </div>
                  <div className="service-copy">
                    <p className="eyebrow">Service {service.number}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href={service.href} className="text-link">
                      Discover service <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      </main>

      {/* SECTION 10 — FOOTER */}
      <footer className="footer section-pad">
        <div className="footer-top">
          <div>
            <a className="wordmark footer-mark" href="#top">
              <span>SKYLINE</span>
              <small>WORLDWIDE</small>
            </a>
            <p className="footer-address">
              Discreet ground transportation
              <br />
              for the nation’s capital.
            </p>
          </div>

          <div className="footer-column">
            <p className="eyebrow">Services</p>
            <a href="/services/corporate-transportation">Corporate travel</a>
            <a href="/services/airport-transfers">Airport transfers</a>
            <a href="/services/events-roadshows">Events &amp; roadshows</a>
            <a href="/services/weddings">Weddings</a>
            <a href="/services/group-transportation">Group &amp; charter</a>
            <a href="/services/hourly-charter">Hourly charter</a>
          </div>

          <div className="footer-column">
            <p className="eyebrow">Airports &amp; Fleet</p>
            <a href="/airports/dca">DCA — Reagan</a>
            <a href="/airports/iad">IAD — Dulles</a>
            <a href="/airports/bwi">BWI — Baltimore</a>
            <a href="/fleet/executive-sedan">Executive Sedans</a>
            <a href="/fleet/luxury-suv">Luxury SUVs</a>
            <p className="eyebrow footer-subhead">Client Portal</p>
            <a href="/client-login">Access Portal <ArrowUpRight size={13} /></a>
          </div>

          <div className="footer-column contact">
            <p className="eyebrow">Contact &amp; Dispatch</p>
            <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a>
            <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a>
            <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            <a href="/contact">Quotes &amp; Support</a>
            <span>
              {BUSINESS.addressLines[0]}
              <br />
              {BUSINESS.addressLines[1]}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {BUSINESS.since}–2026 {BUSINESS.name}
          </span>
          <span>
            <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a> · <a href="/accessibility">Accessibility</a>
          </span>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM BAR */}
      <div className="mobile-sticky">
        <a href={BUSINESS.phonePrimaryHref}>
          <Phone size={15} /> Call 24/7
        </a>
        <a href="/book">
          <ArrowUpRight size={15} /> Reserve
        </a>
      </div>
    </div>
  )
}
