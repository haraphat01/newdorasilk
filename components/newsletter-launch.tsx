'use client'

import { useState } from "react"

export function NewsletterLaunch() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }
    const res = await fetch("/api/newsletter-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dorasilk-black px-4">
      <div className="bg-dorasilk-white rounded-3xl shadow-xl p-8 md:p-12 max-w-lg w-full text-center">
        <h1 className="text-4xl md:text-5xl font-heading text-dorasilk-black mb-4">We’re Launching Soon!</h1>
        <p className="text-lg text-dorasilk-black mb-8 font-body">
          Sign up for our newsletter and be the first to know when we launch. Exclusive offers, early access, and more!
        </p>
        {submitted ? (
          <div className="text-green-600 font-medium text-lg">Thank you for signing up! 🎉</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              className="border border-dorasilk-gold rounded-full px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-dorasilk-gold"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-dorasilk-gold hover:bg-dorasilk-beige text-dorasilk-black font-cta rounded-full px-6 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Notify Me
            </button>
            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
          </form>
        )}
      </div>
    </div>
  )
} 