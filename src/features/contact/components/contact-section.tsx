'use client'

import { useState } from 'react'
import { submitContact, ContactFieldErrors, ContactErrorResponse } from '../api'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (fieldErrors[name as keyof ContactFieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setFieldErrors({})
    setErrorMessage('')

    try {
      await submitContact({ name: form.name, email: form.email, message: form.message })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err: unknown) {
      setStatus('error')
      const data = (err as { response?: { data?: ContactErrorResponse } })?.response?.data
      if (data?.errors) {
        setFieldErrors(data.errors)
      }
      setErrorMessage(data?.message ?? 'Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-16 px-4"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-extrabold mb-4"
          >
            Contact Us
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Get in touch with the pulse of the nightlife. Whether you&apos;re
            looking for professional DJ services, partnerships, or radio
            inquiries, our team is ready to amplify your vision.
          </p>
        </div>

        {/* Map + Form */}
        <div className="flex flex-col md:flex-row gap-6 mb-14">

          {/* Map */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden min-h-[400px] bg-zinc-900">
            <iframe
              title="Stovetop Radio location — Columbia, MO"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.123!2d-92.3276361!3d38.9754665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dcc83b51cab4d5%3A0x45eba5052b20285b!2s2407%20Rangeline%20St%20Ste%20A%2C%20Columbia%2C%20MO%2065202%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form card */}
          <div className="w-full md:w-1/2 bg-[#1a1a2e] rounded-2xl p-6 flex flex-col gap-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 h-full"
              noValidate
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm text-gray-300 font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full bg-[#0d0d1a] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                    fieldErrors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {fieldErrors.name && (
                  <p className="text-xs text-red-400" role="alert">{fieldErrors.name[0]}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm text-gray-300 font-medium">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full bg-[#0d0d1a] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors ${
                    fieldErrors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {fieldErrors.email && (
                  <p className="text-xs text-red-400" role="alert">{fieldErrors.email[0]}</p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label htmlFor="message" className="text-sm text-gray-300 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full flex-1 bg-[#0d0d1a] border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none ${
                    fieldErrors.message ? 'border-red-500' : 'border-white/10'
                  }`}
                />
                {fieldErrors.message && (
                  <p className="text-xs text-red-400" role="alert">{fieldErrors.message[0]}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl font-bold text-black bg-gradient-to-r from-purple-400 to-cyan-400 hover:opacity-90 disabled:opacity-60 transition-opacity"
              >
                {status === 'sending' ? 'Sending…' : 'Send now'}
              </button>

              {status === 'sent' && (
                <p className="text-sm text-green-400 text-center" role="status">
                  Message sent! We&apos;ll be in touch soon.
                </p>
              )}
              {status === 'error' && !Object.keys(fieldErrors).length && (
                <p className="text-sm text-red-400 text-center" role="alert">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Call */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.06 6.06l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Call</p>
              <a
                href="tel:+15734855075"
                className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
              >
                +1 (573) 485-5075
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Email</p>
              <a
                href="mailto:stovetopradio@gmail.com"
                className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
              >
                stovetopradio@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-[#1a1a2e] flex items-center justify-center text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Location</p>
              <a
                href="https://www.google.com/maps/place/2407+Rangeline+St+Ste+A,+Columbia,+MO+65202,+USA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-purple-400 transition-colors"
              >
                2407 Rangeline St Ste A<br />
                Columbia, MO 65202
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
