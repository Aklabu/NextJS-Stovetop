'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // Replace with your real submission logic / API route
    try {
      await new Promise((res) => setTimeout(res, 1000)) // simulate request
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-white py-16 px-4"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          id="contact-heading"
          className="text-3xl font-bold text-gray-900 text-center mb-10"
        >
          Contact Us
        </h2>

        {/* Map + Form */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Map embed */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden min-h-[300px] bg-gray-100">
            <iframe
              title="Stovetop Radio location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.123456789!2d-95.3698!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDQ1JzM3LjQiTiA5NcKwMjInMTEuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 flex flex-col gap-4"
            noValidate
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05252]"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05252]"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f05252] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#f05252] hover:bg-[#e03e3e] disabled:opacity-60 text-white font-semibold py-3 rounded-xl transition-colors"
            >
              {status === 'sending' ? 'Sending…' : 'Send now'}
            </button>

            {status === 'sent' && (
              <p className="text-sm text-green-600 text-center" role="status">
                Message sent! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500 text-center" role="alert">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-100 pt-8">
          {/* Call */}
          <div className="flex items-start gap-3">
            <span className="text-[#f05252] mt-0.5" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
                {/* ring arc */}
                <path d="M14.5 3.5a9 9 0 0 1 6 6" opacity=".5" />
                <path d="M14.5 7.5a5 5 0 0 1 2 2" opacity=".5" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Call</p>
              <a
                href="tel:stovetopradio"
                className="text-gray-500 text-sm hover:text-[#f05252] transition-colors"
              >
                stovetopradio@gmail.com
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <span className="text-[#f05252] mt-0.5" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Email</p>
              <a
                href="mailto:stovetopradio@gmail.com"
                className="text-gray-500 text-sm hover:text-[#f05252] transition-colors"
              >
                stovetopradio@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3">
            <span className="text-[#f05252] mt-0.5" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-gray-800 text-sm">Location</p>
              <p className="text-gray-500 text-sm">Columbia, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
