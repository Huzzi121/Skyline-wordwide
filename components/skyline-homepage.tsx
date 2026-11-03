'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Check, Clock3, Globe2, Luggage, MapPin, Menu, Phone, UsersRound, X } from 'lucide-react'
import { BUSINESS, IMAGES, img } from '@/lib/site'
import { Counter, Reveal, Stagger, StaggerItem, WordReveal, useHeroParallax, useScrolled } from '@/components/motion'

const services = [
  { number: '01', title: 'Corporate & Government Travel', text: 'Quiet, considered movement for executives, officials and visiting delegations.', image: img(IMAGES.corporateArrival), href: '/services/corporate-transportation' },
  { number: '02', title: 'Airport Meet & Greet', text: 'Flight tracking, arrivals-hall greeting and a seamless handoff from air to road.', image: img(IMAGES.airportRunway), href: '/services/airport-transfers' },
  { number: '03', title: 'Events, Roadshows & Weddings', text: 'A calm transportation desk for the days when every arrival matters.', image: img(IMAGES.eventVenue), href: '/services/events-roadshows' },
  { number: '04', title: 'Group & Charter', text: 'Sprinters, minibuses and coaches coordinated around your itinerary.', image: img(IMAGES.blackCarDetail), href: '/services/group-transportation' },
]

const fleet = [
  { name: 'Executive Sedan', detail: 'Mercedes-Benz class', image: img(IMAGES.executiveSedan), passengers: '3', bags: '2', href: '/fleet/executive-sedan' },
  { name: 'Luxury SUV', detail: 'Cadillac Escalade class', image: img(IMAGES.luxurySUV), passengers: '6', bags: '5', href: '/fleet/luxury-suv' },
  { name: 'Stretch Limousine', detail: 'Lincoln MKT class', image: img(IMAGES.stretchLimo), passengers: '8', bags: '4', href: '/fleet/stretch-limousine' },
  { name: 'Executive Sprinter', detail: 'Mercedes-Benz Sprinter', image: img(IMAGES.executiveSprinter), passengers: '14', bags: '12', href: '/fleet/executive-sprinter' },
  { name: 'Executive Shuttle', detail: 'Minibus class', image: img(IMAGES.shuttleBus), passengers: '33', bags: '24', href: '/fleet/shuttle-coach' },
  { name: 'Motor Coach', detail: 'Setra · 55 passengers', image: img(IMAGES.motorCoach), passengers: '55', bags: '55', href: '/fleet/motor-coach' },
]

const numbers = [
  { value: '26', label: 'Years in service' },
  { value: '6', label: 'Airports served' },
  { value: '500+', label: 'Cities via affiliates' },
  { value: '24/7', label: 'Human dispatch' },
]

export function SkylineHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingTab, setBookingTab] = useState('Airport')
  const scrolled = useScrolled()
  useHeroParallax()
  const tabs = ['Airport', 'Point to point', 'Hourly', 'Group']

  return (
    <div className="site-shell">
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <a className="wordmark" href="#top" aria-label={`${BUSINESS.name} home`}>
          <span>SKYLINE</span><small>WORLDWIDE</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {['Services', 'Fleet', 'Airports', 'Corporate', 'About'].map((item) => <a href={`/${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href={BUSINESS.phonePrimaryHref}><Phone size={14} /> {BUSINESS.phonePrimary}</a>
          <a className="nav-button" href="/book">Reserve</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>
      {menuOpen && <div className="mobile-menu">{['Services', 'Fleet', 'Airports', 'Locations', 'Corporate', 'About'].map((item) => <a onClick={() => setMenuOpen(false)} href={`/${item.toLowerCase()}`} key={item}>{item}</a>)}<a onClick={() => setMenuOpen(false)} href="/book">Book a ride</a><a onClick={() => setMenuOpen(false)} href="/client-login">Client login</a><a href={BUSINESS.phonePrimaryHref}>Call {BUSINESS.phonePrimary}</a></div>}

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-scrim" />
          <div className="hero-content">
            <Reveal delay={0.1}><p className="eyebrow light">Washington · Maryland · Virginia</p></Reveal>
            <h1>
              <WordReveal text="Your chauffeur" delay={0.15} />
              <br />
              <WordReveal text="in the capital." italic delay={0.5} />
            </h1>
            <Reveal delay={0.9}><p className="hero-copy">Discreet, punctual, chauffeured travel across DC, Maryland and Virginia — since 2000.</p></Reveal>
          </div>
          <div className="hero-bottom"><span>24/7 human dispatch</span><span className="hero-scroll">Scroll to explore <ArrowDownRight size={16} /></span></div>
          <BookingBar tabs={tabs} active={bookingTab} onChange={setBookingTab} />
        </section>

        <div className="trust-strip"><span>Since 2000</span><i /> <span>24/7 Dispatch</span><i /> <span>DCA</span><i /> <span>IAD</span><i /> <span>BWI</span><i /> <span>Nationwide Network</span></div>

        <section className="statement section-pad">
          <Reveal><p className="eyebrow">The Skyline Standard</p></Reveal>
          <h2><WordReveal text="We are in the business of" /><br /><WordReveal text="arriving unnoticed and on time." italic delay={0.2} /></h2>
        </section>

        <section id="services" className="services-section section-pad">
          <Reveal className="section-heading"><div><p className="eyebrow">What we do</p><h2>Travel, <em>considered.</em></h2></div><span className="section-count">04 services</span></Reveal>
          <Stagger className="service-list" gap={0.12}>{services.map((service, index) => <StaggerItem key={service.number}><article className={`service-row ${index % 2 ? 'reverse' : ''}`}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>{service.number}</span></div><div className="service-copy"><p className="eyebrow">Service {service.number}</p><h3>{service.title}</h3><p>{service.text}</p><a href={service.href} className="text-link">Discover <ArrowUpRight size={15} /></a></div></article></StaggerItem>)}</Stagger>
        </section>

        <section id="fleet" className="fleet-section section-pad dark-section">
          <Reveal className="section-heading"><div><p className="eyebrow light">The fleet</p><h2>Arrive in <em>comfort.</em></h2></div><a className="text-link light-link" href="/fleet">View all vehicles <ArrowUpRight size={15} /></a></Reveal>
          <Stagger className="fleet-grid" gap={0.08}>{fleet.map((item) => <StaggerItem key={item.name}><article className="fleet-card"><div className="fleet-image" style={{ backgroundImage: `url(${item.image})` }} /><div className="fleet-info"><p className="eyebrow light">{item.detail}</p><h3>{item.name}</h3><div className="fleet-meta"><span><UsersRound size={14} /> {item.passengers}</span><span><Luggage size={14} /> {item.bags}</span><a href={item.href}>Reserve this class <ArrowUpRight size={14} /></a></div></div></article></StaggerItem>)}</Stagger>
        </section>

        <section className="numbers-section section-pad">
          <Reveal className="numbers-head"><p className="eyebrow">Why Skyline</p><h2>A standard you can<br /><em>count on.</em></h2></Reveal>
          <Stagger className="numbers-grid" gap={0.12}>{numbers.map((n) => <StaggerItem className="number-cell" key={n.label} y={18}><strong><Counter value={n.value} /></strong><span>{n.label}</span></StaggerItem>)}</Stagger>
        </section>

        <section className="standard-section section-pad">
          <Reveal className="standard-intro"><p className="eyebrow">The Skyline Standard</p><h2>Nothing left<br /><em>to chance.</em></h2></Reveal>
          <Stagger className="standard-grid" gap={0.1}>{[['01', 'Vetted, uniformed chauffeurs'], ['02', 'Real-time flight tracking'], ['03', 'Confidentiality by default'], ['04', '24/7 human dispatch']].map(([number, text]) => <StaggerItem className="standard-point" key={number}><span>{number}</span><p>{text}</p><Check size={16} /></StaggerItem>)}</Stagger>
        </section>

        <section id="corporate" className="corporate-section section-pad">
          <Reveal><p className="eyebrow light">For organizations</p><h2>A private transportation desk<br />for <em>your organization.</em></h2></Reveal>
          <Reveal delay={0.12} className="corporate-right"><p>Centralized billing, priority dispatch, traveler profiles and roadshow coordination — all managed by a team that knows your standards.</p><a className="outline-button" href="/corporate/accounts">Open a corporate account <ArrowUpRight size={16} /></a></Reveal>
        </section>

        <section id="airports" className="coverage-section section-pad">
          <Reveal className="coverage-copy"><p className="eyebrow">Our reach</p><h2>Local knowledge.<br /><em>National reach.</em></h2><p>From a quiet Georgetown arrival to a multi-city roadshow, your itinerary is in experienced hands.</p><p className="coverage-note"><Globe2 size={16} /> 500+ cities through our affiliate network</p></Reveal>
          <Reveal delay={0.12} className="map-art" aria-label="Coverage map of Washington DC, Maryland and Virginia"><div className="map-line line-one" /><div className="map-line line-two" /><div className="map-line line-three" /><div className="map-label dc"><span />DC</div><div className="map-label dca"><span />DCA</div><div className="map-label iad"><span />IAD</div><div className="map-label bw"><span />BWI</div><div className="map-region">MD<br />VA</div></Reveal>
        </section>

        <section className="testimonial-section section-pad">
          <Reveal><p className="eyebrow">In their words</p><blockquote>“The rare transportation partner who understands that discretion is not a feature. It is the foundation.”</blockquote><p className="quote-byline">— Director of Events, Global Policy Institute</p></Reveal>
        </section>

        <section id="reserve" className="closing-section section-pad">
          <Reveal><p className="eyebrow light">Available around the clock</p></Reveal>
          <h2><WordReveal text="Reserve your" /><br /><WordReveal text="chauffeur." italic delay={0.2} /></h2>
          <Reveal delay={0.3} className="closing-actions"><a className="nav-button" href={BUSINESS.phonePrimaryHref}>Call {BUSINESS.phonePrimary}</a><a className="outline-button light-outline" href="/book">Request a reservation <ArrowUpRight size={16} /></a></Reveal>
        </section>
      </main>

      <footer className="footer section-pad"><div className="footer-top"><div><a className="wordmark footer-mark" href="#top"><span>SKYLINE</span><small>WORLDWIDE</small></a><p className="footer-address">Discreet ground transportation<br />for the capital.</p></div><div className="footer-column"><p className="eyebrow">Services</p><a href="/services/corporate-transportation">Corporate travel</a><a href="/services/airport-transfers">Airport transfers</a><a href="/services/weddings">Events &amp; weddings</a><a href="/services/group-transportation">Group &amp; charter</a></div><div className="footer-column"><p className="eyebrow">Airports</p><a href="/airports/dca">DCA</a><a href="/airports/iad">IAD</a><a href="/airports/bwi">BWI</a><p className="eyebrow footer-subhead">Client login</p><a href="/client-login">Access portal <ArrowUpRight size={13} /></a></div><div className="footer-column contact"><p className="eyebrow">Contact</p><a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a><a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a><a href={BUSINESS.emailHref}>{BUSINESS.email}</a><a href="/contact">Contact &amp; quotes</a><span>{BUSINESS.addressLines[0]}<br />{BUSINESS.addressLines[1]}</span></div></div><div className="footer-bottom"><span>© {BUSINESS.since}–2026 {BUSINESS.name}</span><span><a href="/privacy">Privacy</a> · Terms · Accessibility</span></div></footer>
      <div className="mobile-sticky"><a href={BUSINESS.phonePrimaryHref}><Phone size={16} /> Call</a><a href="/book"><ArrowUpRight size={16} /> Reserve</a></div>
    </div>
  )
}

function BookingBar({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
  return <div className="booking-wrap"><div className="booking-bar"><div className="booking-tabs">{tabs.map((tab) => <button className={active === tab ? 'active' : ''} onClick={() => onChange(tab)} key={tab}>{tab}</button>)}</div><div className="booking-fields"><label><MapPin size={15} /><span>Pickup</span><input placeholder="Address or airport" /></label><label><MapPin size={15} /><span>Drop-off</span><input placeholder="Address or airport" /></label><label><Clock3 size={15} /><span>Date & time</span><input type="text" placeholder="Select date" /></label><label><UsersRound size={15} /><span>Passengers</span><input type="text" placeholder="1 passenger" /></label><a className="booking-submit" href={`/book?trip=${active.toLowerCase().replace(/ /g, '-')}`}>Check availability <ArrowUpRight size={15} /></a></div></div></div>
}
