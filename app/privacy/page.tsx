import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Skyline Worldwide',
  description:
    'How Skyline Worldwide Transportation collects, uses and protects the information you share when booking chauffeured travel across the DC region.',
  alternates: { canonical: '/privacy' },
}

const sections: { heading: string; body: string[] }[] = [
  {
    heading: 'Information we collect',
    body: [
      'We collect the details you provide to arrange and deliver transportation: your name, phone number, email address, pickup and drop-off locations, travel dates and times, flight information, passenger counts and any special instructions such as child seats, accessibility needs or meet-and-greet requests.',
      'For corporate accounts we may also hold traveler profiles, billing contacts and approval preferences supplied by your organization.',
    ],
  },
  {
    heading: 'How we use your information',
    body: [
      'Your information is used to confirm reservations, dispatch and route your chauffeur, track flights, process payment, provide receipts and statements, and keep you informed about your trip. For corporate clients it is also used to produce consolidated billing and reporting.',
      'We may contact you by phone, text or email about an active or upcoming reservation, or to respond to a request you have made.',
    ],
  },
  {
    heading: 'How we share information',
    body: [
      'We do not sell your personal information. We share it only as needed to deliver your trip — for example, with the assigned chauffeur, or with a vetted affiliate operator when your itinerary extends beyond our directly served region. These partners are expected to handle your information with the same discretion we do.',
      'We may disclose information when required by law or to protect the safety of travelers, staff and the public.',
    ],
  },
  {
    heading: 'Confidentiality',
    body: [
      'Discretion is central to how we work. Travel schedules, passenger identities and the details of your movements are treated as confidential and shared only with the people required to carry out your service.',
    ],
  },
  {
    heading: 'Data retention & security',
    body: [
      'We retain reservation and billing records as long as needed to provide service, meet legal and accounting obligations and support returning clients. We apply reasonable administrative and technical safeguards to protect the information in our care.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      'You may request access to, correction of, or deletion of the personal information we hold about you, subject to records we are required to keep. To make a request, or to opt out of non-essential messages, contact our dispatch team using the details below.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="inner-page">
      <SiteHeader />
      <main>
        {/* TILE 01: LEGAL HERO BANNER (OBSIDIAN BLACK — 100% VIEWPORT AT 90% ZOOM) */}
        <section className="legal-hero inner-hero">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: `url(${img(IMAGES.blackCarDetail, 2200)})` }}
            role="img"
            aria-label="Privacy and client confidentiality"
          />
          <div className="inner-hero-scrim" />
          <div className="inner-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <span className="crumb">
                <a href="/">Home</a>
              </span>
              <span className="crumb">
                <span aria-current="page">Privacy</span>
              </span>
            </nav>
            <Reveal delay={0.05}>
              <p className="eyebrow light">Client Trust</p>
            </Reveal>
            <h1 className="legal-title">
              <WordReveal text="Privacy" delay={0.12} />{' '}
              <WordReveal text="policy." italic delay={0.3} />
            </h1>
            <Reveal delay={0.4}>
              <p className="legal-lead">
                {BUSINESS.name} has served the capital region since {BUSINESS.since}. This summary
                explains what we collect when you book chauffeured travel, how we use it, and our
                strict confidentiality protocols. Last updated November 2026.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TILE 02: LEGAL ARTICLES (WARM LUXURY BEIGE) */}
        <section className="legal-page section-pad">
          <Stagger className="legal-body" gap={0.07}>
            {sections.map((s) => (
              <StaggerItem className="legal-section" key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </StaggerItem>
            ))}

            <StaggerItem className="legal-section">
              <h2>Contact our compliance desk</h2>
              <p>
                Questions regarding data handling or confidentiality policies? Reach our dispatch
                team 24/7 at <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> or{' '}
                <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a>, by email at{' '}
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>, or by mail at {BUSINESS.address}.
              </p>
            </StaggerItem>
          </Stagger>
        </section>

        {/* TILE 03: CONFIDENTIALITY COMMITMENT (OBSIDIAN BLACK) */}
        <section className="legal-trust-strip section-pad">
          <Reveal>
            <blockquote>
              “Discretion is not an optional feature of executive transportation. It is the
              absolute foundation.”
            </blockquote>
            <p>Skyline Worldwide Code of Professional Conduct</p>
          </Reveal>
        </section>

        {/* TILE 04: DIRECT DISPATCH CTA (WARM LUXURY BEIGE) */}
        <section className="inner-cta section-pad">
          <Reveal>
            <p className="eyebrow">Direct Assistance</p>
            <h2>
              Have questions about <em>your itinerary?</em>
            </h2>
            <p className="cta-text">
              Speak directly with a live dispatch manager anytime. We are dedicated to providing
              complete transparency and peace of mind.
            </p>
            <div className="closing-actions">
              <a className="nav-button" href="/book">
                Reserve your ride <ArrowUpRight size={16} />
              </a>
              <a className="outline-button" href={BUSINESS.phonePrimaryHref}>
                Call dispatch {BUSINESS.phonePrimary}
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* TILE 05: FOOTER (OBSIDIAN BLACK) */}
      <SiteFooter />
    </div>
  )
}
