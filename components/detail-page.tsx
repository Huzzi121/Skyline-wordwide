'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronRight, Menu, Minus, Phone, Plus, X } from 'lucide-react'
import { BUSINESS, PRIMARY_NAV, img } from '@/lib/site'

export type Feature = { title: string; text: string }
export type Stat = { label: string; value: string }
export type Faq = { q: string; a: string }
export type Crumb = { label: string; href?: string }
export type RelatedLink = { label: string; href: string; eyebrow?: string }

export type DetailPageData = {
  eyebrow: string
  /** Use \n to split across lines; the final line is italicised. */
  title: string
  intro: string
  heroImage: string
  breadcrumbs: Crumb[]
  /** Short lead paragraph shown above the feature grid. */
  lead?: string
  stats?: Stat[]
  sections: Feature[]
  gallery?: { src: string; alt: string }[]
  faqs?: Faq[]
  related?: RelatedLink[]
  ctaTitle?: string
  ctaText?: string
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="site-header inner-header">
        <a className="wordmark" href="/" aria-label={`${BUSINESS.name} home`}>
          <span>SKYLINE</span>
          <small>WORLDWIDE</small>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {PRIMARY_NAV.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="phone-link" href={BUSINESS.phonePrimaryHref}>
            <Phone size={14} /> {BUSINESS.phonePrimary}
          </a>
          <a className="nav-button" href="/book">
            Reserve
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {open && (
        <nav className="mobile-menu inner-mobile-menu" aria-label="Mobile navigation">
          {PRIMARY_NAV.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/book" onClick={() => setOpen(false)}>
            Book a ride
          </a>
          <a href="/client-login" onClick={() => setOpen(false)}>
            Client login
          </a>
          <a href={BUSINESS.phonePrimaryHref}>Call {BUSINESS.phonePrimary}</a>
        </nav>
      )}
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer section-pad">
      <div className="footer-top">
        <div>
          <a className="wordmark footer-mark" href="/">
            <span>SKYLINE</span>
            <small>WORLDWIDE</small>
          </a>
          <p className="footer-address">
            Discreet ground transportation
            <br />
            for the capital.
          </p>
        </div>
        <div className="footer-column">
          <p className="eyebrow">Services</p>
          <a href="/services/corporate-transportation">Corporate travel</a>
          <a href="/services/airport-transfers">Airport transfers</a>
          <a href="/services/weddings">Events &amp; weddings</a>
          <a href="/services/group-transportation">Group &amp; charter</a>
          <a href="/services/hourly-charter">Hourly charter</a>
        </div>
        <div className="footer-column">
          <p className="eyebrow">Airports</p>
          <a href="/airports/dca">Reagan National · DCA</a>
          <a href="/airports/iad">Dulles · IAD</a>
          <a href="/airports/bwi">Baltimore · BWI</a>
          <span>{BUSINESS.airports.join(' · ')}</span>
          <p className="eyebrow footer-subhead">Client login</p>
          <a href="/client-login">
            Access portal <ArrowUpRight size={13} />
          </a>
        </div>
        <div className="footer-column contact">
          <p className="eyebrow">Contact</p>
          <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a>
          <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a>
          <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
          <a href="/contact">Contact &amp; quotes</a>
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
          <a href="/privacy">Privacy</a> · Terms · Accessibility
        </span>
      </div>
    </footer>
  )
}

function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {items.map((c, i) => (
        <span className="crumb" key={`${c.label}-${i}`}>
          {c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}
          {i < items.length - 1 && <ChevronRight size={12} aria-hidden="true" />}
        </span>
      ))}
    </nav>
  )
}

function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div className={`faq-item ${isOpen ? 'open' : ''}`} key={f.q}>
            <button
              className="faq-q"
              onClick={() => setOpen(isOpen ? null : i)}
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
  )
}

export function DetailPage({ data }: { data: DetailPageData }) {
  const titleLines = data.title.split('\n')
  return (
    <div className="inner-page">
      <SiteHeader />
      <main>
        <section className="inner-hero">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: `url(${img(data.heroImage, 2200)})` }}
            role="img"
            aria-label={data.eyebrow}
          />
          <div className="inner-hero-scrim" />
          <div className="inner-hero-content">
            <Breadcrumbs items={data.breadcrumbs} />
            <p className="eyebrow light">{data.eyebrow}</p>
            <h1>
              {titleLines.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {i === titleLines.length - 1 ? <em>{line}</em> : line}
                </span>
              ))}
            </h1>
            <p>{data.intro}</p>
          </div>
        </section>

        {data.stats && data.stats.length > 0 && (
          <section className="stat-strip">
            {data.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </section>
        )}

        <section className="inner-content section-pad">
          <p className="eyebrow">The Skyline approach</p>
          <div className="inner-intro">
            <h2>
              {data.lead ? (
                data.lead
              ) : (
                <>
                  Every detail
                  <br />
                  <em>has a purpose.</em>
                </>
              )}
            </h2>
            <a href="/book" className="outline-button">
              Plan your journey <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="inner-grid">
            {data.sections.map((item, index) => (
              <article className="inner-card" key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="/book" className="text-link">
                  Learn more <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {data.gallery && data.gallery.length > 0 && (
          <section className="gallery-section section-pad dark-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow light">A closer look</p>
                <h2>
                  Presentation, <em>in detail.</em>
                </h2>
              </div>
            </div>
            <div className="gallery-grid">
              {data.gallery.map((g) => (
                <div
                  className="gallery-item"
                  key={g.src}
                  style={{ backgroundImage: `url(${img(g.src, 1200)})` }}
                  role="img"
                  aria-label={g.alt}
                />
              ))}
            </div>
          </section>
        )}

        {data.faqs && data.faqs.length > 0 && (
          <section className="faq-section section-pad">
            <div className="faq-head">
              <p className="eyebrow">Good to know</p>
              <h2>
                Questions,
                <br />
                <em>answered.</em>
              </h2>
            </div>
            <FaqAccordion faqs={data.faqs} />
          </section>
        )}

        {data.related && data.related.length > 0 && (
          <section className="related-section section-pad">
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
          </section>
        )}

        <section className="inner-cta section-pad">
          <p className="eyebrow light">Available around the clock</p>
          <h2>
            {(data.ctaTitle ?? 'Make the next move\nthe easy one.').split('\n').map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {i === 1 ? <em>{line}</em> : line}
              </span>
            ))}
          </h2>
          {data.ctaText && <p className="cta-text">{data.ctaText}</p>}
          <div className="closing-actions">
            <a className="nav-button" href="/book">
              Request a reservation <ArrowUpRight size={16} />
            </a>
            <a className="outline-button" href={BUSINESS.phonePrimaryHref}>
              Call {BUSINESS.phonePrimary}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
