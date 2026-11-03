'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CarFront, Check, ChevronDown, Clock3, Globe2, Luggage, MapPin, Menu, Phone, ShieldCheck, UsersRound, X } from 'lucide-react'
import { BUSINESS, IMAGES, img } from '@/lib/site'

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

export function SkylineHomepage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingTab, setBookingTab] = useState('Airport')
  const tabs = ['Airport', 'Point to point', 'Hourly', 'Group']

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Skyline Worldwide Transportation home">
          <span>SKYLINE</span><small>WORLDWIDE</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {['Services', 'Fleet', 'Airports', 'Corporate', 'About'].map((item) => <a href={`/${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:8667873318"><Phone size={14} /> (866) 787-3318</a>
          <a className="nav-button" href="/book">Reserve</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>
      {menuOpen && <div className="mobile-menu">{['Services', 'Fleet', 'Airports', 'Locations', 'Corporate', 'About'].map((item) => <a onClick={() => setMenuOpen(false)} href={`/${item.toLowerCase()}`} key={item}>{item}</a>)}<a onClick={() => setMenuOpen(false)} href="/book">Book a ride</a><a onClick={() => setMenuOpen(false)} href="/client-login">Client login</a><a href="tel:8667873318">Call (866) 787-3318</a></div>}

      <main id="top">
        <section className="hero">
          <div className="hero-image" />
          <div className="hero-scrim" />
          <div className="hero-content">
            <p className="eyebrow light">Washington · Maryland · Virginia</p>
            <h1>Your chauffeur<br /><em>in the capital.</em></h1>
            <p className="hero-copy">Discreet, punctual, chauffeured travel across DC, Maryland and Virginia — since 2000.</p>
          </div>
          <div className="hero-bottom"><span>24/7 human dispatch</span><span className="hero-scroll">Scroll to explore <ArrowDownRight size={16} /></span></div>
          <BookingBar tabs={tabs} active={bookingTab} onChange={setBookingTab} />
        </section>

        <div className="trust-strip"><span>Since 2000</span><i /> <span>24/7 Dispatch</span><i /> <span>DCA</span><i /> <span>IAD</span><i /> <span>BWI</span><i /> <span>Nationwide Network</span></div>

        <section className="statement section-pad"><p className="eyebrow">The Skyline Standard</p><h2>We are in the business of<br /><em>arriving unnoticed and on time.</em></h2></section>

        <section id="services" className="services-section section-pad">
          <div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Travel, <em>considered.</em></h2></div><span className="section-count">04 services</span></div>
          <div className="service-list">{services.map((service, index) => <article className={`service-row ${index % 2 ? 'reverse' : ''}`} key={service.number}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>{service.number}</span></div><div className="service-copy"><p className="eyebrow">Service {service.number}</p><h3>{service.title}</h3><p>{service.text}</p><a href={service.href} className="text-link">Discover <ArrowUpRight size={15} /></a></div></article>)}</div>
        </section>

        <section id="fleet" className="fleet-section section-pad dark-section"><div className="section-heading"><div><p className="eyebrow light">The fleet</p><h2>Arrive in <em>comfort.</em></h2></div><a className="text-link light-link" href="/fleet">View all vehicles <ArrowUpRight size={15} /></a></div><div className="fleet-grid">{fleet.map((item) => <article className="fleet-card" key={item.name}><div className="fleet-image" style={{ backgroundImage: `url(${item.image})` }} /><div className="fleet-info"><p className="eyebrow light">{item.detail}</p><h3>{item.name}</h3><div className="fleet-meta"><span><UsersRound size={14} /> {item.passengers}</span><span><Luggage size={14} /> {item.bags}</span><a href={item.href}>Reserve this class <ArrowUpRight size={14} /></a></div></div></article>)}</div></section>

        <section className="standard-section section-pad"><div className="standard-intro"><p className="eyebrow">The Skyline Standard</p><h2>Nothing left<br /><em>to chance.</em></h2></div><div className="standard-grid">{[['01', 'Vetted, uniformed chauffeurs'], ['02', 'Real-time flight tracking'], ['03', 'Confidentiality by default'], ['04', '24/7 human dispatch']].map(([number, text]) => <div className="standard-point" key={number}><span>{number}</span><p>{text}</p><Check size={16} /></div>)}</div></section>

        <section id="corporate" className="corporate-section section-pad"><div><p className="eyebrow light">For organizations</p><h2>A private transportation desk<br />for <em>your organization.</em></h2></div><div className="corporate-right"><p>Centralized billing, priority dispatch, traveler profiles and roadshow coordination — all managed by a team that knows your standards.</p><a className="outline-button" href="mailto:contact@skylineworldwidetrans.com">Open a corporate account <ArrowUpRight size={16} /></a></div></section>

        <section id="airports" className="coverage-section section-pad"><div className="coverage-copy"><p className="eyebrow">Our reach</p><h2>Local knowledge.<br /><em>National reach.</em></h2><p>From a quiet Georgetown arrival to a multi-city roadshow, your itinerary is in experienced hands.</p><p className="coverage-note"><Globe2 size={16} /> 500+ cities through our affiliate network</p></div><div className="map-art" aria-label="Coverage map of Washington DC, Maryland and Virginia"><div className="map-line line-one" /><div className="map-line line-two" /><div className="map-line line-three" /><div className="map-label dc"><span />DC</div><div className="map-label dca"><span />DCA</div><div className="map-label iad"><span />IAD</div><div className="map-label bw"><span />BWI</div><div className="map-region">MD<br />VA</div></div></section>

        <section className="testimonial-section section-pad"><p className="eyebrow">In their words</p><blockquote>“The rare transportation partner who understands that discretion is not a feature. It is the foundation.”</blockquote><p className="quote-byline">— Director of Events, Global Policy Institute</p></section>

        <section id="reserve" className="closing-section section-pad"><p className="eyebrow light">Available around the clock</p><h2>Reserve your<br /><em>chauffeur.</em></h2><div className="closing-actions"><a className="nav-button" href="tel:8667873318">Call (866) 787-3318</a><a className="outline-button light-outline" href="mailto:contact@skylineworldwidetrans.com">Request a reservation <ArrowUpRight size={16} /></a></div></section>
      </main>

      <footer className="footer section-pad"><div className="footer-top"><div><a className="wordmark footer-mark" href="#top"><span>SKYLINE</span><small>WORLDWIDE</small></a><p className="footer-address">Discreet ground transportation<br />for the capital.</p></div><div className="footer-column"><p className="eyebrow">Services</p><a href="/corporate">Corporate travel</a><a href="/airports">Airport transfers</a><a href="/weddings">Events & weddings</a><a href="/services">Group & charter</a></div><div className="footer-column"><p className="eyebrow">Airports</p><span>DCA · IAD · BWI</span><span>RIC · ORF · MTN</span><p className="eyebrow footer-subhead">Client login</p><a href="/book">Access portal <ArrowUpRight size={13} /></a></div><div className="footer-column contact"><p className="eyebrow">Contact</p><a href="tel:8667873318">(866) 787-3318</a><a href="mailto:contact@skylineworldwidetrans.com">contact@skylineworldwidetrans.com</a><span>7406 Alban Station Ct<br />Springfield, VA 22150</span></div></div><div className="footer-bottom"><span>© 2026 Skyline Worldwide Transportation</span><span>Privacy · Terms · Accessibility</span></div></footer>
      <div className="mobile-sticky"><a href="tel:8667873318"><Phone size={16} /> Call</a><a href="/book"><ArrowUpRight size={16} /> Reserve</a></div>
    </div>
  )
}

function BookingBar({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (tab: string) => void }) {
  return <div className="booking-wrap"><div className="booking-bar"><div className="booking-tabs">{tabs.map((tab) => <button className={active === tab ? 'active' : ''} onClick={() => onChange(tab)} key={tab}>{tab}</button>)}</div><div className="booking-fields"><label><MapPin size={15} /><span>Pickup</span><input placeholder="Address or airport" /></label><label><MapPin size={15} /><span>Drop-off</span><input placeholder="Address or airport" /></label><label><Clock3 size={15} /><span>Date & time</span><input type="text" placeholder="Select date" /></label><label><UsersRound size={15} /><span>Passengers</span><input type="text" placeholder="1 passenger" /></label><button className="booking-submit">Check availability <ArrowUpRight size={15} /></button></div></div></div>
}
