'use client'

import Link from 'next/link'
import { useState } from 'react'

const categories = [
  {
    label: 'Playlist Submissions',
    icon: '🎵',
    faqs: [
      {
        q: 'How do I submit my music to Stovetop Radio?',
        a: 'Visit the Playlist page, choose either the Single Upload ($25) or Featured Artist ($45) tier, then click the submission button. Your track will be reviewed and uploaded to our playlist within 7 business days of approval.',
      },
      {
        q: 'What is the difference between Single Upload and Featured Artist?',
        a: 'Single Upload ($25) allows up to 2 tracks per submission and places your song in the general rotation. Featured Artist ($45) provides priority placement consideration near the top of the playlist, along with custom DJ drops and sound effects.',
      },
      {
        q: 'Is my submission fee refundable?',
        a: 'Submission fees are non-refundable. Payment confirms your submission has been received and will be reviewed — it does not guarantee placement on a playlist.',
      },
      {
        q: 'How long does it take for my song to appear on a playlist?',
        a: 'Once your track is approved, it will be uploaded to our Stovetop Radio playlist within 7 business days.',
      },
      {
        q: 'Can I submit more than one song at a time?',
        a: 'The Single Upload tier includes up to 2 tracks per submission. If you want to submit additional tracks, you are welcome to purchase another submission.',
      },
      {
        q: 'What music genres do you accept?',
        a: 'We accept a wide range of genres including R&B, Rap, Pop, Soul, Jazz, Reggae, and more. Check our active playlists on the Playlist page to find the best match for your sound.',
      },
    ],
  },
  {
    label: 'Live Sound Services',
    icon: '🔊',
    faqs: [
      {
        q: 'What venues do you cover for live sound?',
        a: 'We provide professional audio engineering for small venues (up to 100 guests), medium venues (up to 400 guests), and large venues (500 or more guests). We serve events within a 125-mile radius.',
      },
      {
        q: 'What are your hourly rates for live sound?',
        a: 'Our rates are $75/hr for Small Venue, $85/hr for Medium Venue, and $95/hr for Large Venue. Final pricing may vary depending on event duration, equipment requirements, and travel distance.',
      },
      {
        q: 'How do I book a live sound service?',
        a: 'Visit the Live Sound page or the homepage, click "Book Now" in the Precision Audio Services section, fill in your event details (name, date, time, location, number of guests, occasion, and music genre), and submit. We will confirm your booking via email.',
      },
      {
        q: 'Do you travel outside the 125-mile radius?',
        a: 'Events outside our standard 125-mile service area may be accommodated with additional travel fees. Contact us directly at stovetopradio@gmail.com to discuss your event.',
      },
      {
        q: 'What equipment do you bring?',
        a: 'We bring professional-grade equipment tailored to your venue size, including our 10kW Peavey Sound System for large venues, compact sound systems with karaoke capability for small venues, and a 4k-watt system for medium venues.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancellations must be made at least 48 hours in advance. Late cancellations may be subject to a cancellation fee. Booking requests are not confirmed until you receive a written confirmation from us.',
      },
    ],
  },
  {
    label: 'Interview Bookings',
    icon: '🎙️',
    faqs: [
      {
        q: 'How do I book an interview with Stovetop Radio?',
        a: 'Go to the Book an Interview page, choose your format (In-Studio or Remote via Zoom), fill in your name, email, preferred date and time, and your talking points or promotion goals, then submit. We will confirm availability via email.',
      },
      {
        q: 'What is the difference between In-Studio and Remote via Zoom?',
        a: 'In-Studio sessions are recorded at our main hub for the highest audio fidelity — ideal for local artists and brand owners. Remote via Zoom sessions allow you to broadcast professionally from anywhere in the world using a high-quality digital connection.',
      },
      {
        q: 'What should I prepare before my interview?',
        a: 'Have a high-res photo and a 1-page bio ready to share. For Zoom sessions, use a dedicated microphone and headphones. If attending in-studio, arrive 15 minutes before your scheduled time for soundcheck.',
      },
      {
        q: 'Will my interview be available after it airs?',
        a: 'Yes. Every interview is filmed and clipped for Instagram and TikTok, and broadcast simultaneously on Twitch, YouTube, and FM. You will have content you can use to promote your brand on social media.',
      },
    ],
  },
  {
    label: 'Partnership & Careers',
    icon: '🤝',
    faqs: [
      {
        q: 'How do I join the Stovetop DJ coalition?',
        a: 'Visit the Partnership page and click "Join the Coalition." You can reach us via email or through our Direct Contact page to start the conversation about joining one of the fastest-growing DJ coalitions.',
      },
      {
        q: 'What opportunities are available for radio personalities?',
        a: 'If you have a passion for journalism or broadcasting, we offer podcast hosting and live FM streaming opportunities. Reach out through the Partnership page to start your broadcast journey.',
      },
      {
        q: 'Can I join as a videographer or promotion team member?',
        a: 'Yes. We are always looking for videographers to capture exclusive footage at events and promotion team members to help grow our social media presence. Visit the Partnership page to learn more and get in touch.',
      },
      {
        q: 'What benefits do coalition members receive?',
        a: 'Stovetop DJ coalition members gain access to global event placements, brand sponsorship deals, and exclusive networking opportunities within the nightlife and entertainment industry.',
      },
    ],
  },
  {
    label: 'General',
    icon: '💬',
    faqs: [
      {
        q: 'How do I contact Stovetop Radio?',
        a: 'You can reach us by emailing stovetopradio@gmail.com or by visiting our Contact page. We aim to respond to all inquiries within 1–2 business days.',
      },
      {
        q: 'Where is Stovetop Radio based?',
        a: 'Stovetop Radio operates within a 125-mile service radius for live events. Our radio platform and streaming services are available globally online.',
      },
      {
        q: 'How do I follow Stovetop Radio on social media?',
        a: 'You can find us on Facebook, Instagram, and YouTube. Links to all our social media channels are available in the footer of every page.',
      },
      {
        q: 'I have a question not answered here. What should I do?',
        a: 'Send us a message at stovetopradio@gmail.com or visit the Contact page and we will be happy to help.',
      },
    ],
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-white hover:text-gray-200 transition"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span
          className={`flex-shrink-0 h-6 w-6 rounded-full border border-white/20 flex items-center justify-center text-xs transition-transform ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm text-gray-400 leading-relaxed pr-10">
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> SUPPORT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl">
            Everything you need to know about Stovetop Radio — from submitting
            your music to booking live sound for your next event.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <section key={cat.label}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
                <h2 className="text-xl font-bold">{cat.label}</h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6">
                {cat.faqs.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 via-black to-black p-10 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Still have questions?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
            Our team is happy to help. Reach out directly and we will get back
            to you within 1–2 business days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=FAQ%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
            >
              Email Us
            </a>
            <Link
              href="/contact"
              className="rounded-full px-8 py-3 font-semibold border border-white/30 hover:bg-white/10 transition"
            >
              Contact Page
            </Link>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
          © 2026 Stovetop Radio. All rights reserved.
        </div>

      </div>
    </main>
  )
}
