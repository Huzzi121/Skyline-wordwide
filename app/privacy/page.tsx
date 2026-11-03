import type { Metadata } from 'next'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { BUSINESS } from '@/lib/site'

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
        <section className="legal-hero">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <span className="crumb">
              <a href="/">Home</a>
            </span>
            <span className="crumb">
              <span aria-current="page">Privacy</span>
            </span>
          </nav>
          <p className="eyebrow light">Legal</p>
          <h1 className="legal-title">
            Privacy <em>policy.</em>
          </h1>
          <p className="legal-lead">
            {BUSINESS.name} has served the capital region since {BUSINESS.since}. This summary
            explains what we collect when you book chauffeured travel, how we use it and the choices
            you have. Last updated November 2026.
          </p>
        </section>
        <section className="legal-page section-pad">
          <div className="legal-body">
            {sections.map((s) => (
              <section className="legal-section" key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}

            <section className="legal-section">
              <h2>Contact us</h2>
              <p>
                Questions about this policy or your information? Reach our dispatch team at{' '}
                <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> or{' '}
                <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a>, by email at{' '}
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>, or by mail at {BUSINESS.address}.
              </p>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
