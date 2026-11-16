import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/detail-page'
import { Reveal, Stagger, StaggerItem, WordReveal } from '@/components/motion'
import { BUSINESS, IMAGES, img } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Service Acknowledgment & Policies | Skyline Worldwide',
  description:
    'Official terms and conditions, service acknowledgment, rates, cancellation policies, pickup grace periods, affiliate standards, and website terms of use for Skyline Worldwide Chauffeured Transportation.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <div className="inner-page">
      <SiteHeader />
      <main>
        {/* ==================================================================
            TILE 01: LEGAL HERO BANNER (OBSIDIAN BLACK — 100% VIEWPORT AT 90% ZOOM)
            ================================================================== */}
        <section className="legal-hero inner-hero" id="top">
          <div
            className="inner-hero-image"
            style={{ backgroundImage: `url(${img(IMAGES.blackCarDetail, 2200)})` }}
            role="img"
            aria-label="Skyline Worldwide Terms and Conditions"
          />
          <div className="inner-hero-scrim" />
          <div className="inner-hero-content">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <span className="crumb">
                <a href="/">Home</a>
              </span>
              <span className="crumb">
                <span aria-current="page">Terms &amp; Conditions</span>
              </span>
            </nav>
            <Reveal delay={0.05}>
              <p className="eyebrow light">Legal &amp; Policy</p>
            </Reveal>
            <h1 className="legal-title">
              <WordReveal text="Terms &amp;" delay={0.12} />{' '}
              <WordReveal text="conditions." italic delay={0.3} />
            </h1>
            <Reveal delay={0.4}>
              <p className="legal-lead">
                Welcome to {BUSINESS.name}. Please review our complete service acknowledgment,
                transparent rate policies, cancellation schedules, pickup grace periods, and website terms of use.
                Last updated November 2026.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ==================================================================
            TILE 02: LEGAL ARTICLES (WARM LUXURY BEIGE TILE)
            ================================================================== */}
        <section className="legal-page section-pad">
          <Stagger className="legal-body" gap={0.07}>
            {/* SECTION 1: SERVICE ACKNOWLEDGMENT & RATES */}
            <StaggerItem className="legal-section">
              <h2>01. Service Acknowledgment &amp; Rates</h2>

              <h3>Rates &amp; Charges</h3>
              <p>
                You acknowledge that all provided rates are estimates only. Final charges will be determined based on the
                actual services rendered. Charges may include point-to-point, hourly, and garage-to-garage services,
                billed according to the contracted service hours. Any additional time beyond the contracted hours will be
                added to the final bill.
              </p>
              <p>
                Additional fees may apply for extra stops, tolls, meet-and-greet services, parking, waiting time, and
                phone usage.
              </p>

              <h3>Mandatory Surcharges</h3>
              <p>
                A 20% service charge will be applied to all reservations, along with a 15% fuel surcharge, an
                administrative fee, and a Surface Transportation Charge (STC) applied to all services. The service
                charge is calculated on the base fare, stops, waiting time, and holiday surcharges, and will be added and
                itemized on the client billing statement.
              </p>

              <h3>Gratuity</h3>
              <p>
                Gratuity is at the customer’s discretion. A standard gratuity of 15%–20% may be added to the total cost.
              </p>

              <h3>Rate Changes &amp; Currency</h3>
              <p>
                All published rates are subject to change without prior notice. All rates are calculated in local
                currency and billed in U.S. dollars at the prevailing exchange rate at the time of billing. Applicable
                taxes will be charged as required.
              </p>

              <h3>Payment &amp; Authorization</h3>
              <p>
                A valid credit card or corporate account number is required to secure your reservation. To prevent
                fraudulent activity, a credit card imprint and/or authorization form may be requested.
              </p>
            </StaggerItem>

            {/* SECTION 2: CANCELLATION POLICY & SCHEDULE */}
            <StaggerItem className="legal-section">
              <h2>02. Cancellation Policy &amp; Schedule</h2>
              <p>
                To request changes or cancellations, please contact us immediately at{' '}
                <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> or{' '}
                <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a>. Cancellations must be made by phone or email
                and will only be valid once acknowledged by Skyline Worldwide Chauffeured Transportation.
              </p>

              <h3>Cancellation Notice Periods</h3>
              <p>
                Cancellation charges will be equal to the full ride rate, regardless of whether the ride was taken,
                unless the following notice periods are met to avoid fees:
              </p>

              <div className="legal-notice-table-wrapper">
                <table className="legal-notice-table">
                  <thead>
                    <tr>
                      <th>Vehicle Category</th>
                      <th>DC, Virginia &amp; Maryland</th>
                      <th>Other States &amp; Nationwide</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Sedans</strong></td>
                      <td>12 hours notice required</td>
                      <td>24 hours notice required</td>
                    </tr>
                    <tr>
                      <td><strong>SUVs</strong></td>
                      <td>12 hours notice required</td>
                      <td>24 hours notice required</td>
                    </tr>
                    <tr>
                      <td><strong>Luxury Sedans</strong></td>
                      <td>72 hours notice required</td>
                      <td>72 hours notice required</td>
                    </tr>
                    <tr>
                      <td><strong>Vans</strong></td>
                      <td>72 hours notice required</td>
                      <td>7 days notice required</td>
                    </tr>
                    <tr>
                      <td><strong>Limousine, Minibus, Party Bus</strong></td>
                      <td>7 days notice required</td>
                      <td>14 days notice required</td>
                    </tr>
                    <tr>
                      <td><strong>Motor Coach</strong></td>
                      <td>21 days notice required</td>
                      <td>28 days notice required</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Deposits</h3>
              <ul>
                <li>A 20% deposit is required at the time of booking for Vans, Minibuses, Limousines, and Party Buses.</li>
                <li>A 30% deposit is required for Motor Coaches.</li>
                <li>Late cancellations will result in full charges.</li>
              </ul>

              <h3>Additional Booking Fees</h3>
              <p>
                For bookings made via phone or email, a non-refundable booking fee of $5.00 per reservation will apply for
                Sedans &amp; SUVs. For Vans, Minibuses, Limousines, Party Buses, and Motor Coaches, the fee is $25.00 per
                reservation.
              </p>
              <p>
                Online bookings made through our website reservation system are not subject to the booking fee. The
                booking fee will only apply to cancelled reservations; reservations that proceed as scheduled will not incur
                this fee.
              </p>

              <h3>Changes &amp; No-Show Policy</h3>
              <ul>
                <li>Changes to same-day Sedans and SUVs must be made at least 4 hours in advance.</li>
                <li>Changes to Vans &amp; Coaches must be made at least 36 hours in advance, subject to availability.</li>
                <li>Greeters/Coordinators must be canceled more than 48 hours prior to the scheduled arrival time.</li>
                <li>
                  <strong>No-Show Fee:</strong> If you fail to appear at the designated pickup location, a fee equal to the
                  fare, gratuity, and any applicable waiting time, child seat fees, tolls, and parking will be charged.
                  If you are unable to locate your chauffeur, contact our dispatch department immediately at{' '}
                  <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> or{' '}
                  <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a>. Leaving without notifying us will result in a
                  No Show and full charges will apply.
                </li>
                <li>Cancellation policies and rates may vary during special market events and differ by location.</li>
              </ul>
            </StaggerItem>

            {/* SECTION 3: PICKUP INFORMATION & GRACE PERIODS */}
            <StaggerItem className="legal-section">
              <h2>03. Pickup Information &amp; Grace Periods</h2>

              <h3>Airport Pickups</h3>
              <ul>
                <li>
                  <strong>Domestic Flights:</strong> Meet your chauffeur at the luggage carousel (where permitted). A
                  grace period of 30 minutes is provided from actual wheels-down time.
                </li>
                <li>
                  <strong>International Flights:</strong> Meet your chauffeur outside customs exit doors. A grace period of
                  45 minutes is provided.
                </li>
                <li>Waiting time charges apply beyond these grace periods.</li>
              </ul>

              <h3>Train Station &amp; Curbside Pickup</h3>
              <p>
                Upon arrival, call <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> or{' '}
                <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a> to arrange to meet your chauffeur at the second
                curb. Waiting time begins at the scheduled pickup time.
              </p>

              <h3>Other Pickup Locations</h3>
              <p>
                A 10-minute grace period is allowed for residential, hotel, or office pickups; waiting time charges apply
                after this period. If you cannot locate your chauffeur, please call dispatch immediately. If you leave
                without contacting us, it will be considered a no-show, and a full charge will apply.
              </p>
            </StaggerItem>

            {/* SECTION 4: WAITING TIME & HOURLY SERVICES */}
            <StaggerItem className="legal-section">
              <h2>04. Waiting Time, Stops &amp; Hourly Services</h2>

              <h3>Waiting Time &amp; Passenger Stops</h3>
              <p>
                <strong>Sedans &amp; SUVs:</strong> A grace period of ten (10) minutes is provided for all pickups. After
                this period, waiting time will be charged in fifteen-minute increments.
              </p>
              <p>
                <strong>Passenger Request Stops:</strong> A grace period of ten (10) minutes is provided for all passenger
                stops. After this period, waiting time will be charged in fifteen-minute increments. Other vehicles are
                subject to charges based on their respective terms and conditions.
              </p>

              <h3>Hourly Services &amp; Minimums</h3>
              <ul>
                <li>
                  <strong>Sedan &amp; SUV Reservations:</strong> Billed in thirty-minute increments, with a three-hour
                  minimum for the Washington D.C. Metropolitan area.
                </li>
                <li>
                  <strong>Other Vehicles:</strong> All other vehicle reservations are subject to their respective terms and
                  conditions.
                </li>
                <li>
                  <strong>Time-Based Rides:</strong> Include a fixed positioning charge, which covers the cost of the vehicle
                  and chauffeur traveling to the pickup location and returning after drop-off. These charges vary based on
                  vehicle type.
                </li>
                <li>
                  <strong>Non-Sedan &amp; SUV Time-Based Reservations:</strong> Billed in full-hour increments.
                </li>
              </ul>

              <h3>Garage-to-Garage Billing</h3>
              <p>
                The Garage-to-Garage charge is based on the applicable hourly rate, starting from the time the chauffeur
                leaves the garage to begin service and continuing until the chauffeur returns to the garage after completing
                the service.
              </p>
              <p>
                The minimum number of billable hours is specified in the estimate but may not reflect the exact duration of
                service. For services in Europe and Asia, an additional kilometer charge will apply.
              </p>
            </StaggerItem>

            {/* SECTION 5: DAMAGES, CONDUCT & MAINTENANCE FEES */}
            <StaggerItem className="legal-section">
              <h2>05. Damages, Vehicle Conduct &amp; Liability</h2>
              <ul>
                <li>The renter is responsible for any damages caused by themselves or their party during the rental period.</li>
                <li><strong>No smoking is allowed in vehicles.</strong></li>
                <li><strong>No illegal drugs or alcohol in minibuses.</strong> Any fines incurred will be the client’s responsibility.</li>
                <li>
                  <strong>Chauffeur’s Discretion:</strong> If there is misconduct or unruly behavior, the chauffeur may
                  terminate the service immediately with no refund.
                </li>
                <li><strong>Sunroof Policy:</strong> Standing through the sunroof is strictly prohibited at all times.</li>
                <li><strong>Sickness Maintenance Fee:</strong> A $250 maintenance fee will apply if anyone becomes sick in the vehicle.</li>
                <li>
                  Skyline Worldwide Transportation reserves the right to charge a minimum of $250 for cleaning or damages
                  beyond normal wear and tear.
                </li>
              </ul>
            </StaggerItem>

            {/* SECTION 6: PAYMENTS, PRE-AUTHORIZATION & COLLECTIONS */}
            <StaggerItem className="legal-section">
              <h2>06. Payments, Pre-Authorization &amp; Collections</h2>

              <h3>Direct Payments &amp; Processing</h3>
              <p>
                Do not make cash payments to the driver unless pre-arranged with the company. Ensure that all payment details
                are provided at the time of booking. A 3% processing fee applies for charges over $1,500.00.
              </p>

              <h3>Pre-Authorization Hold</h3>
              <p>
                Before your trip, Skyline Worldwide Transportation will request a pre-authorization on your credit, debit,
                or prepaid account. This pre-authorization will cover the estimated total of your reservation and up to an
                additional 50% to account for any charges beyond the initial reservation scope (such as extra stops,
                extended wait time, or route adjustments).
              </p>
              <p>
                A pre-authorization is a temporary &ldquo;hold&rdquo; on funds from your bank account. It occurs when we
                first collect your payment details but before we process the final charges for your trip. This hold ensures
                that the provided account has sufficient funds to cover the cost of services provided by Skyline Worldwide
                Transportation. Once the final total is processed, the pre-authorization is removed.
              </p>
              <p>
                Please note, your trip may be canceled if we are unable to obtain a pre-authorization from the provided
                payment method prior to your scheduled service.
              </p>

              <h3>Delinquent Accounts &amp; Legal Remedies</h3>
              <p>
                Skyline Worldwide Chauffeured Transportation reserves the right to utilize all available legal means to
                collect any overdue amounts. In the event of nonpayment or partial payment, the company is entitled to pursue
                and recover all reasonable attorney’s fees and costs incurred during collection efforts.
              </p>
              <p>
                Any invoice from Skyline Worldwide Chauffeured Transportation that remains unpaid for more than thirty (30)
                days from the billing date will incur an interest charge at the maximum rate permitted by law, which is 20%
                per annum in the state of Maryland.
              </p>
            </StaggerItem>

            {/* SECTION 7: PET POLICY & CHILD SAFETY SEATS */}
            <StaggerItem className="legal-section">
              <h2>07. Pet Policy &amp; Child Safety Seats</h2>

              <h3>Pet Transportation Policy</h3>
              <p>
                Pets are allowed. If the pet weighs more than 7 pounds, then they must be placed in a kennel crate. Small pets
                must be leashed or placed in a carrying case and must not travel in the front seat next to your chauffeur.
                Certified service animals do not need to be placed in a crate.
              </p>
              <p>
                To ensure a smooth ride for both you and your pet, please call us beforehand at{' '}
                <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> to make arrangements so we match you with a
                pet-friendly chauffeur.
              </p>

              <h3>Child Safety Seats</h3>
              <p>
                Skyline Worldwide Chauffeured Transportation provides child seats upon request, where available, for an
                additional fee of $35 per seat, which will be reflected in the &ldquo;Other&rdquo; fees in the price
                breakdown.
              </p>
              <p>
                <strong>Installation Responsibility:</strong> Parents and guardians of children are responsible for
                installing any child safety seats. Due to commercial liability insurance restrictions, the chauffeur cannot
                install a child seat.
              </p>
            </StaggerItem>

            {/* SECTION 8: OPERATIONAL POLICIES & INCLEMENT WEATHER */}
            <StaggerItem className="legal-section">
              <h2>08. Operational Policies &amp; Inclement Weather</h2>

              <h3>Affiliates &amp; Subcontractors</h3>
              <p>
                Skyline Worldwide Chauffeured Transportation may, at its sole discretion, use affiliates/subcontractors to
                perform any and all services under this agreement. Moreover, Skyline Worldwide Chauffeured Transportation will
                not be held liable for any incidents that may occur by its affiliates while the affiliate performs this work.
              </p>

              <h3>Vehicle Availability &amp; Substitutions</h3>
              <p>
                Skyline Worldwide Chauffeured Transportation strives to provide the highest level of service to our clients.
                However, please note that we cannot guarantee the specific make, model, or color of the vehicle assigned to
                your reservation. While we make every effort to accommodate your preferences, the availability of vehicles may
                vary based on operational requirements and availability at the time of your reservation.
              </p>
              <p>
                Skyline Worldwide Chauffeured Transportation reserves the right to substitute vehicles, with or without prior
                notice. Vehicle substitutions will be made with an equal or greater passenger capacity and will be considered
                an &ldquo;upgrade&rdquo; at no additional cost to the client. Substitutions will only occur if the originally
                scheduled vehicle is inoperable or due to unforeseen circumstances, such as traffic delays, scheduling
                conflicts, or other similar issues.
              </p>

              <h3>Prohibited Items</h3>
              <p>
                The following items are strictly prohibited from Skyline Worldwide Chauffeured Transportation vehicles
                including affiliates/subcontractors vehicles: alcoholic beverages (where prohibited by law or in
                minibuses), glass containers, smoking/vaping, firearms, explosives, and fireworks.
              </p>

              <h3>Inclement Weather &amp; Snow Emergency Conditions</h3>
              <p>
                Skyline Worldwide Chauffeured Transportation reserves the right to refuse bookings during inclement weather,
                including &ldquo;Snow Emergency&rdquo; conditions, if transportation services cannot be supported safely.
                This applies to both new and pre-existing bookings.
              </p>
              <p>
                If 4x4 or all-wheel drive vehicles are available, Skyline Worldwide Chauffeured Transportation will offer
                them; however, these will not be provided as complimentary upgrades. These vehicles may incur additional
                charges, including &ldquo;garage-to-garage&rdquo; fees, along with a 20% snow emergency fee added to the final
                reservation cost. Clients may refuse service, and if the vehicle has not been dispatched or the ride falls
                under the pre-determined cancellation policy, the reservation will be canceled at no charge.
              </p>

              <h3>Force Majeure &amp; Personal Belongings</h3>
              <p>
                <strong>Force Majeure:</strong> Neither Skyline Worldwide Chauffeured Transportation nor any of its
                subcontractors or affiliates are responsible for delays or service interruptions caused by circumstances beyond
                its control, including weather conditions, strikes, traffic incidents, acts of nature, or other unforeseen
                events.
              </p>
              <p>
                <strong>Personal Belongings:</strong> Skyline Worldwide Chauffeured Transportation, nor any of its
                subcontractors or affiliates are not responsible for any personal items left behind in the vehicle. Please
                make sure to collect all your belongings before the end of your trip.
              </p>

              <h3>Future Reservations Protocol</h3>
              <p>
                Direct reservations with the driver are strictly prohibited. Always contact our central office directly at{' '}
                <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a> or{' '}
                <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a> to schedule any future trips.
              </p>

              <h3>Review Your Confirmation</h3>
              <p>
                Please review your booking confirmation to ensure all flight numbers, dates, times, and addresses are
                correct. If you have any questions or need to make changes, contact us immediately at{' '}
                <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a>.
              </p>
            </StaggerItem>

            {/* SECTION 9: AFFILIATE NETWORK STANDARDS */}
            <StaggerItem className="legal-section">
              <h2>09. Join Our Affiliate Network</h2>
              <p>
                At Skyline Worldwide Chauffeured Transportation, we are proud to collaborate with the industry’s most
                respected transportation providers. Our affiliate network is built on trust, reliability, and a shared
                commitment to delivering exceptional service to clients across the globe.
              </p>
              <p>
                If you are interested in becoming part of our growing affiliate family, please review our mandatory minimum
                requirements:
              </p>

              <h3>Insurance &amp; Licensing Requirements</h3>
              <ul>
                <li>Affiliates must carry and maintain liability insurance coverage between $1,500,000 and $5,000,000.</li>
                <li>All affiliates must be fully licensed and insured for livery operations in their respective jurisdictions.</li>
                <li>A minimum of five (5) years of experience in the livery or chauffeured transportation industry is required.</li>
                <li>Affiliates must maintain a 5-star service rating and a proven history of professionalism and customer satisfaction.</li>
              </ul>

              <h3>Vehicle &amp; Chauffeur Standards</h3>
              <ul>
                <li><strong>Vehicles:</strong> Must be late-model, thoroughly cleaned, properly fueled, and meticulously maintained before each assignment.</li>
                <li><strong>Chauffeur Licensing:</strong> Must possess a valid commercial driver&apos;s license and all required local and state permits.</li>
                <li><strong>Experience:</strong> Must have a minimum of three (3) years of professional chauffeuring experience.</li>
                <li><strong>Local Geography:</strong> Must possess comprehensive knowledge of the local service area to ensure timely and efficient routing.</li>
              </ul>

              <h3>Professional Appearance &amp; Conduct</h3>
              <ul>
                <li>Chauffeurs must wear professional, business-appropriate attire (dark executive suit, pressed shirt, and tie).</li>
                <li>Must maintain a clean, well-groomed appearance at all times.</li>
                <li>Must speak clear and fluent English and demonstrate courteous, professional conduct.</li>
              </ul>
              <p>
                To apply or learn more about joining our global network, please contact us at:{' '}
                <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>.
              </p>
            </StaggerItem>

            {/* SECTION 10: WEBSITE TERMS OF USE */}
            <StaggerItem className="legal-section">
              <h2>10. Website Terms of Use</h2>

              <h3>1. Acceptance</h3>
              <p>
                Use of the Skyline Worldwide Transportation website at{' '}
                <a href="https://www.skylineworldwidetrans.com">www.skylineworldwidetrans.com</a> (collectively, the
                &ldquo;Web Site&rdquo;) and the on-line reservation services (the &ldquo;Services&rdquo;) provided by
                Skyline Worldwide Transportation are subject to the terms and conditions of use set forth below (&ldquo;Terms of
                Use&rdquo;), which include the privacy policy set forth in our online privacy policy and incorporated into
                these Terms of Use by reference.
              </p>
              <p>
                Please read these Terms of Use carefully before using the Web Site or the Services. By using the Web Site or
                the Services, you agree to these Terms of Use. If an individual is using the Web Site on behalf of a business
                entity, whether as an employee, consultant or agent of such business entity, by doing so, such individual
                represents that they have the legal capacity and authority to bind such business entity to the Terms of Use.
                &ldquo;You&rdquo; shall refer both to the individual accessing the Web Site on behalf of a business entity, if
                any, and any such business entity itself. If you do not agree to these Terms of Use, do not use the Web Site or
                the Services. Skyline Worldwide Transportation may change these Terms of Use from time to time without notice,
                and such changes will be effective on the date they are posted on the Web Site. Use of the Web Site after such
                changes have been posted constitutes your acceptance of all such changes.
              </p>

              <h3>2. Use of the Web Site and the Services</h3>
              <p>
                You may only use the Web Site and the Services in accordance with the Terms of Use, any posted policies and
                procedures that appear on the Web Site, and for lawful purposes. You agree not to use the Web Site to:
              </p>
              <ul>
                <li>(a) Transmit any material that infringes or misappropriates any third party’s copyright, trademark, trade secret, patent, or other proprietary rights;</li>
                <li>(b) Transmit any material that is false, inaccurate, fraudulent, or misleading;</li>
                <li>(c) Distribute computer viruses, worms, or software intended to damage or alter a computer system without the owner’s consent;</li>
                <li>(d) Use &ldquo;auto-responders,&rdquo; &ldquo;cancel-bots,&rdquo; or other similar mechanisms that generate excessive network traffic;</li>
                <li>(e) Transmit any unlawful, harmful, defamatory, pornographic, obscene, vulgar, threatening, harassing, or otherwise objectionable material;</li>
                <li>(f) Send or relay any unsolicited advertising or chain letters;</li>
                <li>(g) Exceed your permitted access or attempt to gain unauthorized access to the Web Site or any part thereof, or other accounts, computer systems, or networks connected to the Web Site, through login password mining or any other means;</li>
                <li>(h) Frame any portions of the Web Site within another web site or establish links from any other web site to any page of the Web Site other than the home page; or</li>
                <li>(i) Resell use of, or access to, the Web Site or the Services to any third party without Skyline Worldwide Transportation prior written consent.</li>
              </ul>
              <p>
                Skyline Worldwide Transportation reserves the right to terminate your access to the Web Site or Services at any
                time without notice if it determines, in its sole discretion, that you have abused or violated any of these
                terms and conditions.
              </p>

              <h3>3. ID Number, Password and Security</h3>
              <p>
                You are responsible for maintaining the confidentiality of any user ID and/or password provided to you by
                Skyline Worldwide Transportation for use in connection with the Web Site or the Services. You are solely
                responsible for all activities that occur under your user ID and/or password, and you agree to notify Skyline
                Worldwide Transportation immediately of any unauthorized use of your user ID and/or password or any other breach
                of security related to the Web Site. Skyline Worldwide Transportation will not be liable for any loss or damage
                arising from your failure to safeguard your user ID and/or password or to comply with this section.
              </p>

              <h3>4. Services</h3>
              <p>
                Skyline Worldwide Transportation provision to you of the Services may be subject to other terms, conditions,
                and restrictions set forth on the Web Site or otherwise communicated in writing to you by Skyline Worldwide
                Transportation, including via email. The Services are subject to availability and all price quotes are
                estimates.
              </p>

              <h3>5. Proprietary Rights</h3>
              <p>
                The Web Site, certain content therein, the Services, and any underlying software may be protected by copyright,
                trademark, patent, and/or other intellectual property and proprietary rights laws and are owned (along with all
                proprietary rights therein) by Skyline Worldwide Transportation International and its licensors. You agree that
                you will not copy, distribute, republish, display, post, transmit, download, or modify any content you obtain
                from the Web Site without Skyline Worldwide Transportation prior written permission; provided, however, that you
                may download or print a copy of information from the Web Site for your use in learning about, reserving, or
                using the Services.
              </p>

              <h3>6. Warranty Disclaimer</h3>
              <p>
                The Web Site, the Services, and any information provided through the Web Site are provided by Skyline Worldwide
                Transportation on an &ldquo;AS IS&rdquo; basis, and neither Skyline Worldwide Transportation nor its
                subsidiaries, partners, affiliates, vendors, or subcontractors make any representations or warranties of any
                kind, express or implied, as to the operation of the Web Site or Services or the information made available by or
                through the Web Site or the Services.
              </p>
              <p>
                In addition, Skyline Worldwide Transportation disclaims all warranties, express or implied, statutory and
                non-statutory, including but not limited to, the implied warranties of merchantability, accuracy of
                information, title, quiet enjoyment, fitness for a particular purpose, and non-infringement, or any warranty
                arising from course of dealing or custom of trade. Neither Skyline Worldwide Transportation nor any of its
                subsidiaries, partners, affiliates, vendors, or subcontractors warrants that use of the Web Site will be
                uninterrupted, available at any time or from any particular location, secure, or error-free, that defects will be
                corrected, or that the website is free of viruses or other potentially harmful components. Some jurisdictions
                may not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.
              </p>
            </StaggerItem>

            {/* CONTACT & COMPLIANCE DESK */}
            <StaggerItem className="legal-section">
              <h2>Contact Our Legal &amp; Dispatch Desk</h2>
              <p>
                For questions regarding reservation agreements, billing inquiries, or affiliate applications, reach our
                management desk 24 hours a day, 7 days a week:
              </p>
              <ul>
                <li><strong>Toll-Free Dispatch:</strong> <a href={BUSINESS.phonePrimaryHref}>{BUSINESS.phonePrimary}</a></li>
                <li><strong>Local Dispatch:</strong> <a href={BUSINESS.phoneLocalHref}>{BUSINESS.phoneLocal}</a></li>
                <li><strong>Official Email:</strong> <a href={BUSINESS.emailHref}>{BUSINESS.email}</a></li>
                <li><strong>Corporate Headquarters:</strong> {BUSINESS.address}</li>
              </ul>
            </StaggerItem>
          </Stagger>
        </section>

        {/* ==================================================================
            TILE 03: SERVICE COMMITMENT STRIP (OBSIDIAN BLACK TILE)
            ================================================================== */}
        <section className="legal-trust-strip section-pad">
          <Reveal>
            <blockquote>
              &ldquo;Uncompromising reliability, complete transparency, and considered service on every journey.&rdquo;
            </blockquote>
            <p>Skyline Worldwide Transportation Charter</p>
          </Reveal>
        </section>

        {/* ==================================================================
            TILE 04: DIRECT DISPATCH CTA (WARM LUXURY BEIGE TILE)
            ================================================================== */}
        <section className="inner-cta section-pad">
          <Reveal>
            <p className="eyebrow">Direct Assistance</p>
            <h2>
              Have questions about <em>your itinerary?</em>
            </h2>
            <p className="cta-text">
              Speak directly with a live dispatch manager anytime. We are dedicated to providing
              complete transparency and peace of mind for every reservation.
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

      {/* ==================================================================
          TILE 05: FOOTER (OBSIDIAN BLACK TILE)
          ================================================================== */}
      <SiteFooter />
    </div>
  )
}
