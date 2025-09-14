"use client"

import type React from "react"
import type { BookingData } from "../booking/types"

interface BookingFormProps {
  bookingData: BookingData
  updateBookingData: (data: Partial<BookingData>) => void
  onNext: () => void
  onPrev: () => void
}

export default function BookingForm({ bookingData, updateBookingData, onNext, onPrev }: BookingFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onNext()
  }

  const isFormValid = bookingData.name && bookingData.email && bookingData.phone

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Event Details</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={bookingData.name}
              onChange={(e) => updateBookingData({ name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={bookingData.email}
              onChange={(e) => updateBookingData({ email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={bookingData.phone}
              onChange={(e) => updateBookingData({ phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
          </div>

          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
              Number of Guests
            </label>
            <select
              id="guests"
              value={bookingData.guests}
              onChange={(e) => updateBookingData({ guests: Number.parseInt(e.target.value) })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value={10}>10-25 guests</option>
              <option value={50}>25-50 guests</option>
              <option value={100}>50-100 guests</option>
              <option value={200}>100-200 guests</option>
              <option value={300}>200+ guests</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            value={bookingData.budget}
            onChange={(e) => updateBookingData({ budget: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select budget range</option>
            <option value="under-1000">Under $1,000</option>
            <option value="1000-2500">$1,000 - $2,500</option>
            <option value="2500-5000">$2,500 - $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="over-10000">Over $10,000</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Special Requests or Additional Information
          </label>
          <textarea
            id="message"
            rows={4}
            value={bookingData.message}
            onChange={(e) => updateBookingData({ message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            placeholder="Tell us about your vision, special requirements, or any questions you have..."
          />
        </div>

        <div className="bg-muted rounded-lg p-6">
          <h3 className="font-semibold text-foreground mb-4">Booking Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service:</span>
              <span className="text-foreground capitalize">{bookingData.service} Services</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Date:</span>
              <span className="text-foreground">
                {bookingData.date ? new Date(bookingData.date).toLocaleDateString() : "Not selected"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Time:</span>
              <span className="text-foreground">{bookingData.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated Guests:</span>
              <span className="text-foreground">{bookingData.guests}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={onPrev}
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Previous
          </button>
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  )
}
