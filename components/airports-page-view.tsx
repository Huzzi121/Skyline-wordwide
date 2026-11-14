'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronRight,
  Clock,
  Minus,
  Plus,
  Radio,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { BUSINESS, IMAGES, img } from '@/lib/site'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { Reveal, Stagger, StaggerItem, WordReveal, useHeroParallax } from '@/components/motion'

export type AirportCardData = {
  id: string
  code: string
  name: string
  region: string
  tagline: string
  description: string
  image: string
  href: string
  driveTime: string
  terminals: string
}

export const AIRPORTS_LIST: AirportCardData[] = [
  {
    id: 'dca',
    code: 'DCA',
    name: 'Ronald Reagan Washington National',
    region: 'Washington DC · Maryland · Virginia',
    tagline: 'Minutes from Capitol Hill & Downtown DC',
    description:
      'Direct curbside and baggage claim greeting serving downtown Washington, Arlington, Alexandria, and the metropolitan capital corridor with real-time flight tracking.',
    image: IMAGES.washingtonDC,
    href: '/airports/dca',
    driveTime: '≈ 15 min to Downtown DC',
    terminals: 'Terminals 1 & 2',
  },
  {
    id: 'iad',
    code: 'IAD',
    name: 'Washington Dulles International',
    region: 'Northern Virginia · DC Technology Corridor',
    tagline: 'Main Concourse & Private FBOs',
    description:
      'Premier long-haul and international transfer service connecting Dulles with downtown DC, Tysons, Bethesda, and private FBOs (Signature & Jet Aviation).',
    image: IMAGES.airportTerminal,
    href: '/airports/iad',
    driveTime: '≈ 40 min to Downtown DC',
    terminals: 'Main Terminal & FBOs',
  },
  {
    id: 'bwi',
    code: 'BWI',
    name: 'Baltimore/Washington International',
    region: 'Maryland · Baltimore · DC Metro Corridor',
    tagline: 'Real-Time Flight & Highway Sync',
    description:
      'Seamless black car transfers to Baltimore, Bethesda, Silver Spring, Annapolis, and the District with dedicated highway and radar flight monitoring.',
    image: IMAGES.airportRunway,
    href: '/airports/bwi',
    driveTime: '≈ 50 min to DC / 20 min to Baltimore',
    terminals: 'Concourses A–E',
  },
  {
    id: 'ric',
    code: 'RIC',
    name: 'Richmond International Airport',
    region: 'Richmond · Central Virginia · State Capitol',
    tagline: 'Executive Central VA Transit',
    description:
      'Executive transfers between Richmond International, corporate headquarters along I-95, the Virginia State Capitol, and intercity connections to Washington DC.',
    image: IMAGES.airportWindow,
    href: '/airports/ric',
    driveTime: 'Central VA & Intercity I-95',
    terminals: 'Main Terminal & FBO Aprons',
  },
  {
    id: 'orf',
    code: 'ORF',
    name: 'Norfolk International Airport',
    region: 'Norfolk · Virginia Beach · Hampton Roads',
    tagline: 'Coastal VA & Military Commands',
    description:
      'Dependable chauffeured black car service for naval commands, Virginia Beach resorts, Hampton Roads maritime centers, and airport transfers.',
    image: IMAGES.cityEvening,
    href: '/airports/orf',
    driveTime: 'Norfolk · VA Beach · Newport News',
    terminals: 'Arrivals Concourse A & B',
  },
  {
    id: 'mtn',
    code: 'MTN',
    name: 'Martin State Airport',
    region: 'Baltimore County · Private Aviation & Corporate FBO',
    tagline: 'Tarmac-Side & Apron Escort',
    description:
      'Discreet tarmac-side meet-and-greet and corporate FBO executive car service for private jet charters, helicopters, and corporate flight departments.',
    image: IMAGES.blackCarDetail,
    href: '/airports/mtn',
    driveTime: '≈ 20 min to Baltimore Inner Harbor',
    terminals: 'Executive FBO Facilities',
  },
]

export const AIRPORT_FAQS = [
  {
    q: 'How does your chauffeur meet me at the airport?',
    a: 'We offer two seamless options: Inside Baggage Claim (your suited chauffeur stands near the luggage carousel holding an executive digital nameboard) or Curbside Outer Lanes (your chauffeur stages in the holding area and pulls directly to the outer curb when you text upon luggage retrieval).',
  },
  {
    q: 'What happens if my flight is delayed, early, or diverted?',
    a: 'Skyline Worldwide monitors commercial and private aviation flight numbers in real time. We automatically adjust chauffeur staging to your actual landing time, providing generous complimentary wait windows with zero extra fees.',
  },
  {
    q: 'Are tolls, airport fees, and parking included in your airport quotes?',
    a: 'Yes. Every quotation is 100% all-inclusive — covering fuel, airport access fees, parking, and tolls. The rate dispatch confirms is the final figure you pay.',
  },
  {
    q: 'Can you accommodate large group luggage, child seats, or golf bags?',
    a: 'Yes. Our diverse fleet ranges from executive sedans to full-size SUVs (Escalade ESV, Suburban) and 14-passenger Sprinter vans with dedicated luggage bays. Child safety seats are pre-installed upon request.',
  },
]

export function AirportsPageView() {
  useHeroParallax()
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <div className="inner-page airports-page-root">
      <SiteHeader />

      <main>
        {/* ==================================================================
            TILE 01: HERO BANNER (OBSIDIAN BLACK — 100% VIEWPORT AT 90% ZOOM)
            ================================================================== */}
        <section className="inner-hero" id="top">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: `url(${img(IMAGES.airportWindow, 2200)})` }}
            role="img"
            aria-label="Airport tarmac and runway at sunset"
          />
          <div className="inner-hero-scrim" />
          <div className="inner-hero-content">
            <Reveal>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <span className="crumb">
                  <a href="/">Home</a>
                </span>
                <ChevronRight size={12} aria-hidden="true" />
                <span className="crumb">
                  <span aria-current="page">Airports</span>
                </span>
              </nav>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="eyebrow light">The Capital &amp; Regional Airport Network</p>
            </Reveal>

            <h1>
              <WordReveal text="Six regional runways," delay={0.12} />
              <br />
              <WordReveal text="handled with precision." italic delay={0.32} />
            </h1>

            <Reveal delay={0.4}>
              <p>
                Commercial concourses and private aviation FBOs across Washington DC, Maryland, and Virginia.
                Continuous satellite flight tracking, professional baggage-claim meet and greet, and immaculate
                chauffeured sedans, SUVs, and executive Sprinters.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="fleet-hero-quick-actions">
                <a className="hero-quote-btn" href="#airports-directory" aria-label="Explore all 6 airport hubs">
                  <span className="quote-btn-sheen" aria-hidden="true" />
                  <span className="quote-btn-text">Explore All 6 Airports</span>
                  <ArrowUpRight size={16} className="quote-btn-icon" aria-hidden="true" />
                </a>

                <a className="hero-secondary-btn" href="/book" aria-label="Request an airport transfer">
                  <span>Reserve an Airport Ride</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================================
            TILE 02: 6-AIRPORT DIRECTORY GRID (WARM LUXURY BEIGE TILE)
            ================================================================== */}
        <section className="inner-content section-pad airport-directory-section" id="airports-directory">
          <Reveal>
            <p className="eyebrow">Six Commercial &amp; Private Aviation Gateways</p>
            <div className="inner-intro">
              <h2>
                Six major gateways.
                <br />
                <em>One flawless standard.</em>
              </h2>
              <div className="category-hint-pill">
                <Sparkles size={14} />
                <span>Select any airport below to view dedicated terminal procedures and services</span>
              </div>
            </div>
          </Reveal>

          {/* 6 AIRPORT CARDS GRID */}
          <Stagger className="airports-cards-grid" gap={0.09}>
            {AIRPORTS_LIST.map((airport) => (
              <StaggerItem key={airport.id}>
                <div className="airport-hub-card">
                  <div className="airport-hub-media">
                    <div
                      className="airport-hub-img"
                      style={{ backgroundImage: `url(${img(airport.image, 1200)})` }}
                      role="img"
                      aria-label={airport.name}
                    />
                    <span className="airport-hub-code">{airport.code}</span>
                    <span className="airport-hub-badge">{airport.terminals}</span>
                  </div>

                  <div className="airport-hub-body">
                    <p className="airport-hub-region">{airport.region}</p>
                    <h3>{airport.name}</h3>
                    <p className="airport-hub-tagline">
                      <Radio size={13} className="live-icon" /> {airport.tagline}
                    </p>
                    <p className="airport-hub-desc">{airport.description}</p>

                    <div className="airport-hub-meta">
                      <span className="hub-meta-item">
                        <Clock size={13} /> {airport.driveTime}
                      </span>
                      <span className="hub-meta-item">
                        <ShieldCheck size={13} /> Flight Tracking 24/7
                      </span>
                    </div>

                    <div className="airport-hub-action">
                      <a className="airport-explore-link" href={airport.href} aria-label={`Explore ${airport.code} services`}>
                        Explore {airport.code} Services <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* ==================================================================
            TILE 03: AIRPORT FAQS & GUIDELINES (OBSIDIAN BLACK TILE)
            ================================================================== */}
          <section className="faq-section dark-faq-section section-pad" id="faqs" data-theme="dark">
            <Reveal className="faq-head">
              <p className="eyebrow light">Airport Travel FAQs</p>
              <h2>
                Questions,
                <br />
                <em>answered.</em>
              </h2>
              <p className="faq-head-copy">
                Everything you need to know about airport arrivals, terminal meet points, and our 24/7 flight monitoring
                guarantee.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="faq-list">
                {AIRPORT_FAQS.map((f, i) => {
                  const isOpen = faqOpen === i
                  return (
                    <div className={`faq-item ${isOpen ? 'open' : ''}`} key={f.q}>
                      <button
                        type="button"
                        className="faq-q"
                        onClick={() => setFaqOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                      >
                        <span>{f.q}</span>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </button>
                      {isOpen && <p className="faq-a">{f.a}</p>}
                    </div>
                  )
                })}
              </div>
            </Reveal>
          </section>

          {/* ==================================================================
            TILE 04: AVAILABLE AROUND THE CLOCK CTA (WARM LUXURY BEIGE TILE)
            ================================================================== */}
          <section className="inner-cta section-pad">
            <Reveal>
              <p className="eyebrow">Available Around The Clock</p>
              <h2>
                Your runway transfer,
                <br />
                <em>confirmed in minutes.</em>
              </h2>
              <p className="cta-text">
                Enter your flight number and destination once. A live dispatcher coordinates your vehicle and provides a
                guaranteed, all-inclusive rate.
              </p>
              <div className="closing-actions">
                <a className="nav-button" href="/book">
                  Reserve an airport transfer <ArrowUpRight size={16} />
                </a>
                <a className="outline-button" href={BUSINESS.phonePrimaryHref}>
                  Call dispatch {BUSINESS.phonePrimary}
                </a>
              </div>
            </Reveal>
          </section>
      </main>

      {/* ==================================================================
          TILE 07: FOOTER (OBSIDIAN BLACK TILE)
          ================================================================== */}
      <SiteFooter />
    </div>
  )
}

