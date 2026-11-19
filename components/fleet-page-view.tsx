'use client'

import { useState, useEffect, useRef } from 'react'
import {
  ArrowUpRight,
  Briefcase,
  CalendarCheck,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  Luggage,
  Minus,
  Phone,
  Plus,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wifi,
} from 'lucide-react'
import { BUSINESS, IMAGES, img } from '@/lib/site'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { Reveal, Stagger, StaggerItem, WordReveal, useHeroParallax } from '@/components/motion'

// ==========================================================================
// 16 REAL FLEET VEHICLES SOURCED FROM PUBLIC/PICS/
// ==========================================================================
export type Vehicle = {
  id: string
  categoryId: 'sedan' | 'suv' | 'limo' | 'sprinter'
  categoryLabel: string
  name: string
  subtitle: string
  image: string
  passengers: number | string
  luggage: number | string
  highlights: string[]
  description: string
  detailHref: string
}

export const FLEET_VEHICLES: Vehicle[] = [
  // ------------------------------------------------------------------------
  // CATEGORY 01: EXECUTIVE SEDANS (3)
  // ------------------------------------------------------------------------
  {
    id: 'mercedes-s580',
    categoryId: 'sedan',
    categoryLabel: 'Executive Sedan',
    name: 'Mercedes-Benz S580',
    subtitle: 'Flagship Executive Sedan',
    image: '/pics/mercedes%20s580.jpeg',
    passengers: 3,
    luggage: 3,
    highlights: ['Acoustic Privacy Glass', 'Heated & Reclining Rear Seats', 'On-Board Wi-Fi', 'Bottled Mineral Water'],
    description:
      'The undisputed global benchmark of chauffeured luxury. Features whisper-quiet cabin insulation, executive rear climate zones, and unmatched prestige for diplomatic missions and corporate travel.',
    detailHref: '/fleet/executive-sedan',
  },
  {
    id: 'cadillac-ct5',
    categoryId: 'sedan',
    categoryLabel: 'Executive Sedan',
    name: 'Cadillac CT5',
    subtitle: 'Modern American Luxury Sedan',
    image: '/pics/cadilac%20ct5.jpeg',
    passengers: 3,
    luggage: 2,
    highlights: ['Supple Leather Seating', 'Bose Studio Audio', 'High-Speed USB-C Power', 'Quiet Cabin Protocol'],
    description:
      'Athletic refinement with sharp executive poise. Designed for agile point-to-point transfers across downtown Washington, Capitol Hill meetings, and airport connections.',
    detailHref: '/fleet/executive-sedan',
  },
  {
    id: 'lincoln-continental',
    categoryId: 'sedan',
    categoryLabel: 'Executive Sedan',
    name: 'Lincoln Continental',
    subtitle: 'Presidential Heritage Sedan',
    image: '/pics/lincoln%20Continental.jpeg',
    passengers: 3,
    luggage: 3,
    highlights: ['Expansive Rear Legroom', 'Bridge of Weir Leather', 'Dual-Zone Climate Control', 'Active Noise Damping'],
    description:
      'Timeless presidential elegance featuring exceptional rear cabin space. Built for relaxed travel, seamless airport transfers, and quiet composure between engagements.',
    detailHref: '/fleet/executive-sedan',
  },

  // ------------------------------------------------------------------------
  // CATEGORY 02: LUXURY SUVS (3)
  // ------------------------------------------------------------------------
  {
    id: 'cadillac-escalade',
    categoryId: 'suv',
    categoryLabel: 'Luxury SUV',
    name: 'Cadillac Escalade ESV',
    subtitle: 'The Capital’s Flagship SUV',
    image: '/pics/cadilac%20escalade.jpeg',
    passengers: 6,
    luggage: 6,
    highlights: ['Curved OLED Displays', 'AKG Studio Sound', 'Tri-Zone Climate Control', 'Power Retractable Steps'],
    description:
      'The definitive prestige vehicle of the capital region. Extended ESV wheelbase delivers commanding passenger room and generous luggage volume for executive teams and family delegations.',
    detailHref: '/fleet/luxury-suv',
  },
  {
    id: 'chevrolet-suburban',
    categoryId: 'suv',
    categoryLabel: 'Luxury SUV',
    name: 'Chevrolet Suburban Premier',
    subtitle: 'Executive Full-Size SUV',
    image: '/pics/chevrolet%20suburban.jpeg',
    passengers: 6,
    luggage: 6,
    highlights: ['Magnetic Ride Control', 'Generous 3rd Row Space', 'Rear Power Outlets', 'Deep Privacy Tint'],
    description:
      'Discreet, dependable executive transportation trusted by government institutions and corporate leaders. Combines maximum luggage utility with refined road manners.',
    detailHref: '/fleet/luxury-suv',
  },
  {
    id: 'gmc-yukon-denali',
    categoryId: 'suv',
    categoryLabel: 'Luxury SUV',
    name: 'GMC Yukon Denali XL',
    subtitle: 'First-Class Luxury SUV',
    image: '/pics/gmc%20yukon%20denali.jpeg',
    passengers: 6,
    luggage: 6,
    highlights: ['Galvano Chrome Accents', 'Executive Captain’s Chairs', 'Panoramic Vista Roof', 'Rear Seat Entertainment'],
    description:
      'First-class luxury appointments paired with robust performance. Delivers a composed, quiet cabin experience with generous cargo space for extended itineraries.',
    detailHref: '/fleet/luxury-suv',
  },

  // ------------------------------------------------------------------------
  // CATEGORY 03: STRETCH LIMOUSINES (3)
  // ------------------------------------------------------------------------
  {
    id: 'cadillac-escalade-limo',
    categoryId: 'limo',
    categoryLabel: 'Stretch Limousine',
    name: 'Cadillac Escalade Stretch Limousine',
    subtitle: 'Ultra-Luxury VIP Stretch SUV',
    image: '/pics/cadilac%20escalade%20limo.jpeg',
    passengers: '14–18',
    luggage: 6,
    highlights: ['Starlight Fiber-Optic Ceiling', 'Dual Ice Wells & Crystal Glassware', 'Surround Sound Media', 'Chauffeur Privacy Partition'],
    description:
      'An extraordinary VIP statement for galas, red-carpet events, and high-profile milestone celebrations. Custom interior lounge styling with ambient starlight headliner.',
    detailHref: '/fleet/stretch-limousine',
  },
  {
    id: 'hummer-limo',
    categoryId: 'limo',
    categoryLabel: 'Stretch Limousine',
    name: 'Hummer H2 Super-Stretch Limousine',
    subtitle: 'Show-Stopping Milestone Limousine',
    image: '/pics/humer%20limo.jpeg',
    passengers: '16–20',
    luggage: 6,
    highlights: ['Color-Changing Neon Ambiance', 'VIP Rear Lounge Quarters', 'Subwoofer Audio System', 'Dual Champagne Chillers'],
    description:
      'Unmatched visual impact and room for the whole party. Tailored for landmark wedding celebrations, graduation galas, and festive evenings across the DC area.',
    detailHref: '/fleet/stretch-limousine',
  },
  {
    id: 'lincoln-limo',
    categoryId: 'limo',
    categoryLabel: 'Stretch Limousine',
    name: 'Lincoln MKT Stretch Limousine',
    subtitle: 'Classic Red-Carpet Limousine',
    image: '/pics/lincoln%20limo.jpeg',
    passengers: '8–10',
    luggage: 4,
    highlights: ['Solid Privacy Partition', 'Champagne Flutes & Decanters', 'Subtle Mood Lighting', 'Premium Leather J-Seating'],
    description:
      'The quintessential silhouette of traditional chauffeured elegance. Understated exterior charm with an intimate, private cabin designed for weddings and black-tie evenings.',
    detailHref: '/fleet/stretch-limousine',
  },

  // ------------------------------------------------------------------------
  // CATEGORY 04: SPRINTERS, COACHES & SHUTTLES (7)
  // ------------------------------------------------------------------------
  {
    id: 'mercedes-sprinter-van',
    categoryId: 'sprinter',
    categoryLabel: 'Executive Sprinter',
    name: 'Mercedes-Benz Sprinter Passenger Van',
    subtitle: 'Corporate Group Van',
    image: '/pics/mercedes%20sprinter%20van.jpeg',
    passengers: 14,
    luggage: 14,
    highlights: ['High-Roof Stand-Up Cabin', 'Forward-Facing Reclining Seats', 'Dedicated Rear Luggage Bay', 'Individual USB Outlets'],
    description:
      'Stand-up walk-in headroom engineered for corporate roadshows, team airport movements, and conference batching. Clean presentation and ample luggage hold.',
    detailHref: '/fleet/executive-sprinter',
  },
  {
    id: 'shuttle-bus',
    categoryId: 'sprinter',
    categoryLabel: 'Executive Shuttle',
    name: 'Executive Shuttle Bus',
    subtitle: 'Punctual Event & Airport Shuttle',
    image: '/pics/shuttle%20bus.jpeg',
    passengers: 28,
    luggage: 24,
    highlights: ['Dedicated Rear Luggage Compartment', 'Overhead Climate Vents', 'Low-Step Entryway', 'PA Audio System'],
    description:
      'Punctual, comfortable group transport for convention loop shuttles, wedding guest transfers, and corporate campus connectors.',
    detailHref: '/fleet/shuttle-coach',
  },
  {
    id: 'minibus',
    categoryId: 'sprinter',
    categoryLabel: 'Executive Mini Bus',
    name: 'Luxury Mini Bus',
    subtitle: 'Agile Group Charter',
    image: '/pics/minibus.jpeg',
    passengers: 24,
    luggage: 20,
    highlights: ['Panoramic Tinted Windows', 'Overhead Parcel Racks', 'Wide Access Aisle', 'Plush Ergonomic Seating'],
    description:
      'Balanced group transit navigating urban capital boulevards with ease while providing generous legroom and luggage hold for mid-sized groups.',
    detailHref: '/fleet/shuttle-coach',
  },
  {
    id: 'charter-bus',
    categoryId: 'sprinter',
    categoryLabel: 'Charter Motor Coach',
    name: 'Grand Charter Bus',
    subtitle: 'Long-Range Group Charter',
    image: '/pics/charter%20bus.jpeg',
    passengers: 50,
    luggage: 45,
    highlights: ['Pass-Through Luggage Bays', 'Reclining Seats with Footrests', 'On-Board Restroom Facility', 'Overhead Video Monitors'],
    description:
      'Heavy-duty long-distance luxury group transit. Equipped for intercity delegation travel, university athletic charters, and major conference movements.',
    detailHref: '/fleet/motor-coach',
  },
  {
    id: 'executive-motor-coach',
    categoryId: 'sprinter',
    categoryLabel: 'Flagship Motor Coach',
    name: 'Executive Touring Motor Coach',
    subtitle: '56-Passenger Flagship Coach',
    image: '/pics/WhatsApp%20Image%202026-11-14%20at%2012.09.29%20PM.jpeg',
    passengers: 56,
    luggage: 56,
    highlights: ['Lavatory On-Board', 'Expansive Underbelly Cargo Holds', 'Individual Climate & Reading Lights', 'Complete AV Presentation System'],
    description:
      'The pinnacle of group charter movement. Flagship touring coach aesthetics, colossal luggage capacity, clean onboard restroom, and supreme highway smoothness.',
    detailHref: '/fleet/motor-coach',
  },
]

// ==========================================================================
// 4 CATEGORIES (EXACTLY AS PROVIDED IN SCREENSHOT)
// ==========================================================================
export const FLEET_CATEGORIES = [
  {
    id: 'sedan' as const,
    num: '01',
    title: 'Executive sedan',
    count: 3,
    description:
      'A refined, discreet cabin for up to three passengers. Ideal for airport transfers, executive travel and point-to-point service.',
    image: '/pics/executive-sedan-card.jpg',
  },
  {
    id: 'suv' as const,
    num: '02',
    title: 'Luxury SUV',
    count: 3,
    description:
      'Additional space for passengers and luggage, without giving up the calm, composed experience Skyline is known for.',
    image: '/pics/luxury-suv-card.jpg',
  },
  {
    id: 'limo' as const,
    num: '03',
    title: 'Stretch limousine',
    count: 3,
    description:
      'For weddings, celebrations and milestone evenings — elegant presentation with room for the whole party.',
    image: '/pics/stretch-limousine-card.jpg',
  },
  {
    id: 'sprinter' as const,
    num: '04',
    title: 'Executive Sprinter',
    count: 5,
    description:
      'A mobile meeting room for teams of up to fourteen. Comfortable seating, generous luggage capacity and professional presence.',
    image: '/pics/executive-sprinter-card.jpg',
  },
]

export const FLEET_FAQS = [
  {
    q: 'How do I choose between an Executive Sedan and a Luxury SUV?',
    a: 'For one or two passengers traveling with standard carry-on bags, our executive sedans (Mercedes S-Class, Cadillac CT5, Lincoln Continental) offer ideal quiet refinement. If you have 3 to 6 passengers, extensive luggage, or prefer higher ground clearance and commanding sightlines, choose our luxury SUVs (Cadillac Escalade, Chevy Suburban, GMC Yukon Denali).',
  },
  {
    q: 'Can we book multiple vehicles for a corporate delegation or wedding?',
    a: 'Yes. Our 24/7 dispatch desk routinely batches combinations of sedans, SUVs, executive Sprinters and 56-passenger motor coaches for major summits, embassy visits, and wedding parties. A single coordinator oversees the entire manifest.',
  },
  {
    q: 'What amenities are included in each vehicle?',
    a: 'All Skyline Worldwide vehicles include complimentary bottled mineral water, high-speed device charging cables (Lightning and USB-C), discreet chauffeur attire, and multi-zone climate control. Executive Sprinters and Limousines feature additional media, bar wells, and Wi-Fi.',
  },
  {
    q: 'Are your rates fixed and all-inclusive?',
    a: 'Every quotation provided by Skyline Worldwide is 100% all-inclusive — covering fuel, tolls, wait time allowances, and airport parking fees. There are never surprise add-on surcharges at completion.',
  },
]

export function FleetPageView() {
  useHeroParallax()
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sedan' | 'suv' | 'limo' | 'sprinter'>('all')
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const showcaseRef = useRef<HTMLElement>(null)

  // Listen for hash changes if any
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '')
      if (['sedan', 'suv', 'limo', 'sprinter'].includes(hash)) {
        setSelectedCategory(hash as any)
      }
    }
  }, [])

  const handleSelectCategory = (catId: 'all' | 'sedan' | 'suv' | 'limo' | 'sprinter') => {
    setSelectedCategory(catId)
    if (showcaseRef.current) {
      showcaseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const filteredVehicles =
    selectedCategory === 'all'
      ? FLEET_VEHICLES
      : FLEET_VEHICLES.filter((v) => v.categoryId === selectedCategory)

  return (
    <div className="inner-page fleet-page-root">
      <SiteHeader />

      <main>
        {/* ==================================================================
            TILE 01: HERO BANNER (OBSIDIAN BLACK — 100% VIEWPORT AT 90% ZOOM)
            ================================================================== */}
        <section className="inner-hero" id="top">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: `url(${img(IMAGES.luxurySUV, 2200)})` }}
            role="img"
            aria-label="Skyline Worldwide luxury fleet"
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
                  <span aria-current="page">The Fleet</span>
                </span>
              </nav>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="eyebrow light">The Skyline Worldwide Fleet</p>
            </Reveal>

            <h1>
              <WordReveal text="The right vehicle" delay={0.12} />
              <br />
              <WordReveal text="for the moment." italic delay={0.32} />
            </h1>

            <Reveal delay={0.4}>
              <p>
                Quiet cabins, meticulous pre-assignment detailing, and room to move. Choose a vehicle class
                below to inspect all chauffeured sedans, SUVs, stretch limousines, and executive coaches.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="fleet-hero-quick-actions">
                <button
                  type="button"
                  onClick={() => handleSelectCategory('all')}
                  className="hero-quote-btn"
                  aria-label="Browse full vehicle fleet"
                >
                  <span className="quote-btn-sheen" aria-hidden="true" />
                  <span className="quote-btn-text">Browse Full Fleet ({FLEET_VEHICLES.length})</span>
                  <ArrowUpRight size={16} className="quote-btn-icon" aria-hidden="true" />
                </button>

                <a className="hero-secondary-btn" href="/book" aria-label="Request a reservation">
                  <span>Reserve a Ride</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================================
            TILE 02: CATEGORY SELECTOR (WARM LUXURY BEIGE — AS GIVEN IN SS)
            ================================================================== */}
        <section className="inner-content section-pad fleet-category-selector-section" id="categories">
          <Reveal>
            <p className="eyebrow">Vehicle Categories</p>
            <div className="inner-intro">
              <h2>
                Precision matched
                <br />
                <em>to every itinerary.</em>
              </h2>
              <div className="category-hint-pill">
                <Sparkles size={14} />
                <span>Click any category card below to view its vehicles</span>
              </div>
            </div>
          </Reveal>

          {/* 4 CATEGORY CARDS FROM THE SCREENSHOT */}
          <Stagger className="fleet-category-cards-grid" gap={0.09}>
            {FLEET_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id
              return (
                <StaggerItem key={cat.id}>
                  <div
                    className={`fleet-cat-card ${isSelected ? 'active-card' : ''}`}
                    data-category={cat.id}
                    onClick={() => handleSelectCategory(cat.id)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Filter by ${cat.title} (${cat.count} vehicles)`}
                    onKeyDown={(e: React.KeyboardEvent) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleSelectCategory(cat.id)
                      }
                    }}
                  >
                    <div className="fleet-cat-media">
                      <div
                        className="fleet-cat-img"
                        style={{ backgroundImage: `url(${cat.image})` }}
                        role="img"
                        aria-label={cat.title}
                      />
                      <span className="fleet-cat-num">{cat.num}</span>
                      <span className="fleet-cat-badge">{cat.count} Vehicles</span>
                    </div>

                    <div className="fleet-cat-body">
                      <h3>{cat.title}</h3>
                      <p>{cat.description}</p>
                      <div className="fleet-cat-action">
                        <span className="fleet-cat-explore-link">
                          {isSelected ? 'Currently Viewing' : 'Explore'} <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </section>

        {/* ==================================================================
            TILE 03: INTERACTIVE VEHICLE SHOWCASE (OBSIDIAN BLACK TILE)
            ================================================================== */}
        <section className="fleet-vehicles-section section-pad" ref={showcaseRef} id="fleet-vehicles">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow light">The Fleet Showcase</p>
              <h2>
                Presentation, <em>in detail.</em>
              </h2>
            </div>

            <div className="showcase-counter-badge">
              <span>Showing {filteredVehicles.length} of {FLEET_VEHICLES.length} Vehicles</span>
              {selectedCategory !== 'all' && (
                <button
                  type="button"
                  onClick={() => handleSelectCategory('all')}
                  className="reset-filter-btn"
                  aria-label="Show all vehicles"
                >
                  <RotateCcw size={12} /> Show All
                </button>
              )}
            </div>
          </Reveal>

          {/* CATEGORY TABS / PILLS FILTER */}
          <Reveal delay={0.08}>
            <div className="fleet-tabs" role="tablist" aria-label="Filter fleet by category">
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'all'}
                className={`fleet-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All Vehicles ({FLEET_VEHICLES.length})
              </button>
              {FLEET_CATEGORIES.map((cat) => (
                <button
                  type="button"
                  role="tab"
                  key={cat.id}
                  aria-selected={selectedCategory === cat.id}
                  className={`fleet-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.title} ({cat.count})
                </button>
              ))}
            </div>
          </Reveal>

          {/* 16 CARDS SHOWCASE */}
          <div className="fleet-grid">
            {filteredVehicles.map((car, index) => (
              <article className="fleet-card" key={car.id}>
                <div
                  className="fleet-image"
                  style={{ backgroundImage: `url(${car.image})` }}
                  role="img"
                  aria-label={car.name}
                >
                  <span className="fleet-card-number">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  <span className="fleet-category-pill">{car.categoryLabel}</span>
                </div>

                <div className="fleet-info">
                  <p className="eyebrow">{car.subtitle}</p>
                  <h3>{car.name}</h3>
                  <p className="fleet-detail-text">{car.description}</p>

                  {/* Highlights list */}
                  <div className="fleet-amenity-tags" aria-label="Vehicle amenities">
                    {car.highlights.slice(0, 3).map((h) => (
                      <span className="amenity-tag" key={h}>
                        <Check size={11} /> {h}
                      </span>
                    ))}
                  </div>

                  <div className="fleet-meta">
                    <span title="Passenger Capacity">
                      <UsersRound size={15} /> {car.passengers} Seats
                    </span>
                    <span title="Luggage Capacity">
                      <Luggage size={15} /> {car.luggage} Bags
                    </span>
                    <span title="Discreet Protocol">
                      <ShieldCheck size={15} /> Vetted
                    </span>
                  </div>

                  <div className="fleet-actions">
                    <a
                      className="fleet-reserve-link"
                      href={`/book?vehicle=${encodeURIComponent(car.name)}`}
                      aria-label={`Reserve ${car.name}`}
                    >
                      Reserve Ride <ArrowUpRight size={13} />
                    </a>
                    <a
                      className="fleet-details-link"
                      href={car.detailHref}
                      aria-label={`Vehicle specifications for ${car.name}`}
                    >
                      Class Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==================================================================
            TILE 04: FLEET STANDARDS & FAQS (WARM LUXURY BEIGE TILE)
            ================================================================== */}
        <section className="faq-section section-pad" id="standards">
          <Reveal className="faq-head">
            <p className="eyebrow">The Skyline Assurance</p>
            <h2>
              Considered service.
              <br />
              <em>Every journey.</em>
            </h2>
            <div className="fleet-standards-list">
              <div className="standard-item">
                <ShieldCheck size={18} className="standard-icon" />
                <div>
                  <strong>Meticulous Pre-Trip Detailing</strong>
                  <p>Every interior is sanitized, inspected, and restocked before assignment.</p>
                </div>
              </div>
              <div className="standard-item">
                <Clock size={18} className="standard-icon" />
                <div>
                  <strong>Real-Time Flight Tracking</strong>
                  <p>Dispatch monitors your aircraft wheels-down time to adjust for variances automatically.</p>
                </div>
              </div>
              <div className="standard-item">
                <Sparkles size={18} className="standard-icon" />
                <div>
                  <strong>Uniformed, Vetted Chauffeurs</strong>
                  <p>Background-checked, confidentiality-bound, and trained in executive road protocol.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="faq-list">
              {FLEET_FAQS.map((f, i) => {
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
            TILE 05: CONTINUE EXPLORING (OBSIDIAN BLACK TILE)
            ================================================================== */}
        <section className="related-section section-pad">
          <Reveal>
            <p className="eyebrow">Continue Exploring</p>
            <div className="related-grid">
              <a className="related-card" href="/services/corporate-transportation">
                <p className="eyebrow">Services</p>
                <span>Corporate travel desk</span>
                <ArrowUpRight size={18} />
              </a>
              <a className="related-card" href="/services/airport-transfers">
                <p className="eyebrow">Services</p>
                <span>Airport meet &amp; greet</span>
                <ArrowUpRight size={18} />
              </a>
              <a className="related-card" href="/events/weddings">
                <p className="eyebrow">Events</p>
                <span>Weddings &amp; galas</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </Reveal>
        </section>

        {/* ==================================================================
            TILE 06: AVAILABLE AROUND THE CLOCK CTA (WARM LUXURY BEIGE TILE)
            ================================================================== */}
        <section className="inner-cta section-pad">
          <Reveal>
            <p className="eyebrow">Available Around The Clock</p>
            <h2>
              Make the next move
              <br />
              <em>the easy one.</em>
            </h2>
            <p className="cta-text">
              Tell us your itinerary once. A live dispatcher confirms your vehicle class and provides an all-inclusive
              rate with no hidden surcharges.
            </p>
            <div className="closing-actions">
              <a className="nav-button" href="/book">
                Request a reservation <ArrowUpRight size={16} />
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
