export default function TermsOfServicePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> LEGAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">
            Effective Date: July 18, 2026 &nbsp;·&nbsp; Last Updated: July 18, 2026
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-12">
          Welcome to Stovetop Radio. By accessing or using our website, radio
          platform, booking services, or any other services we offer, you agree
          to be bound by these Terms of Service (&quot;Terms&quot;). Please read
          them carefully. If you do not agree, do not use our services.
        </p>

        <div className="space-y-12">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-400 leading-relaxed">
              By visiting stovetopradio.com or using any of our services —
              including music streaming, playlist submissions, live sound
              bookings, interview bookings, and partnership inquiries — you
              confirm that you are at least 18 years of age (or have parental
              consent) and that you accept these Terms in full. These Terms
              apply to all users, visitors, and third parties who access or
              use our services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              2. Services Provided
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Stovetop Radio provides the following services, subject to these Terms:
            </p>
            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span><span className="text-white font-semibold">Radio Streaming</span> — curated DJ playlists, mixes, and live broadcasts accessible via our platform.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span><span className="text-white font-semibold">Playlist Submission</span> — artists may submit tracks for consideration on Stovetop Radio playlists via our paid submission tiers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span><span className="text-white font-semibold">Live Sound Services</span> — professional audio engineering for small, medium, and large venues at published hourly rates.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span><span className="text-white font-semibold">Interview Bookings</span> — in-studio and remote interview sessions to promote artists, businesses, and events.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span><span className="text-white font-semibold">Partnership Opportunities</span> — coalition membership for DJs, radio personalities, videographers, and promotion teams.</span>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              3. Playlist Submissions & Payments
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When submitting music to Stovetop Radio playlists, you agree to
              the following:
            </p>
            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0">◎</span>
                <span>Submission fees are non-refundable. Payment confirms your submission has been received and will be reviewed — it does not guarantee placement.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0">◎</span>
                <span>Single Upload ($25) allows up to 2 tracks per submission. Featured Artist ($45) provides priority placement consideration. Songs will be uploaded within 7 business days upon approval.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0">◎</span>
                <span>You confirm that you own or have the rights to all submitted content. Stovetop Radio is not liable for copyright claims arising from submitted tracks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0">◎</span>
                <span>Stovetop Radio reserves the right to decline any submission that does not meet our content standards.</span>
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              4. Live Sound & Booking Services
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When booking live sound services through our platform, you agree that:
            </p>
            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span>Published rates are $75/hr (Small Venue), $85/hr (Medium Venue), and $95/hr (Large Venue). Final pricing may vary based on event duration, equipment requirements, and travel distance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span>Our service radius is 125 miles. Events outside this range may incur additional travel fees.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span>Booking requests submitted via our forms are not confirmed until you receive a written confirmation from Stovetop Radio.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">✓</span>
                <span>Cancellations must be made at least 48 hours in advance. Late cancellations may be subject to a cancellation fee.</span>
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              5. Interview Bookings
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Interview slots are subject to availability and confirmed via
              email. You are responsible for arriving on time for in-studio
              sessions (please arrive 15 minutes early for soundcheck) or
              being online and ready for remote sessions. Stovetop Radio
              reserves the right to reschedule or cancel interviews that do
              not meet our broadcast standards or content guidelines.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              6. User Conduct
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              When using any Stovetop Radio service, you agree not to:
            </p>
            <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
              <li className="flex gap-3"><span className="text-purple-400 flex-shrink-0">◎</span><span>Submit content that infringes on any intellectual property rights.</span></li>
              <li className="flex gap-3"><span className="text-purple-400 flex-shrink-0">◎</span><span>Use our platform to distribute spam, malware, or harmful content.</span></li>
              <li className="flex gap-3"><span className="text-purple-400 flex-shrink-0">◎</span><span>Impersonate any person or entity or misrepresent your affiliation.</span></li>
              <li className="flex gap-3"><span className="text-purple-400 flex-shrink-0">◎</span><span>Attempt to gain unauthorised access to any part of our platform or systems.</span></li>
              <li className="flex gap-3"><span className="text-purple-400 flex-shrink-0">◎</span><span>Use our services for any unlawful purpose or in violation of any applicable regulations.</span></li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              7. Intellectual Property
            </h2>
            <p className="text-gray-400 leading-relaxed">
              All content on the Stovetop Radio website and platform —
              including logos, graphics, text, audio, and video — is the
              property of Stovetop Radio or its content partners and is
              protected by applicable copyright and trademark laws. You may
              not reproduce, distribute, or create derivative works without
              our prior written consent. Artists who submit music retain
              ownership of their content; submission grants Stovetop Radio a
              non-exclusive licence to broadcast and promote the track on our
              platform.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              8. Third-Party Services
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our platform may link to or integrate with third-party services
              including payment processors, streaming platforms, and social
              media channels. Stovetop Radio is not responsible for the
              content, policies, or practices of any third-party service. Use
              of third-party services is governed by their respective terms
              and conditions.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Stovetop Radio services are provided &quot;as is&quot; and &quot;as
              available&quot; without warranties of any kind, either express or
              implied. We do not warrant that the platform will be
              uninterrupted, error-free, or free of viruses. We reserve the
              right to modify, suspend, or discontinue any service at any
              time without notice.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-400 leading-relaxed">
              To the fullest extent permitted by law, Stovetop Radio shall
              not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of — or inability
              to use — our services. Our total liability for any claim
              related to our services shall not exceed the amount you paid
              us in the 30 days preceding the claim.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              11. Modifications to Terms
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to update these Terms at any time. Changes
              will be posted on this page with a revised effective date.
              Continued use of our services after changes are posted
              constitutes your acceptance of the updated Terms. We recommend
              reviewing this page periodically.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              12. Governing Law
            </h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms shall be governed by and construed in accordance
              with the laws of the United States. Any disputes arising under
              these Terms shall be subject to the exclusive jurisdiction of
              the courts located in the applicable jurisdiction.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-white">
              13. Contact Us
            </h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-gray-300 space-y-2">
              <p><span className="text-white font-semibold">Stovetop Radio</span></p>
              <p>
                Email:{' '}
                <a
                  href="https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=Terms%20of%20Service%20Inquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  stovetopradio@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2026 Stovetop Radio. All rights reserved.
        </div>

      </div>
    </main>
  )
}
