"use client"
import { useState } from "react"

// Booking data ka type (local hi rakha)
type BookingData = {
  service: string
  date: string
  time: string
  guests: number
  name: string
  email: string
  phone: string
  message: string
  budget: string
}

export default function BookingPage() {
  const [step, setStep] = useState(1)

  // Available services
  const services = [
    { id: "wedding", name: "Wedding Event", description: "Full wedding setup", price: "$2000" },
    { id: "birthday", name: "Birthday Party", description: "Decor + catering", price: "$800" },
    { id: "corporate", name: "Corporate Event", description: "Business package", price: "$1200" },
  ]

  // Booking state
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "wedding",
    date: "",
    time: "",
    guests: 50,
    name: "",
    email: "",
    phone: "",
    message: "",
    budget: "",
  })

  // Update booking state
  const updateBookingData = (data: Partial<BookingData>) =>
    setBookingData((prev) => ({ ...prev, ...data }))

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Event</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Let us help you create an unforgettable experience. Select your service and date to get started.
          </p>
        </section>

        {/* Step Indicator */}
        <section className="py-8 bg-white shadow-sm">
          <div className="flex justify-center space-x-10">
            {["Service & Date", "Details", "Confirmation"].map((title, idx) => {
              const number = idx + 1
              return (
                <div key={title} className="flex items-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold ${
                      step >= number ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {number}
                  </div>
                  <span className={`ml-3 ${step >= number ? "text-gray-900" : "text-gray-400"}`}>
                    {title}
                  </span>
                  {number < 3 && (
                    <div
                      className={`w-16 h-0.5 ml-8 ${
                        step > number ? "bg-pink-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Step 1: Service + Date + Time */}
        {step === 1 && (
          <section className="py-16 container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Select Service & Date</h2>

            {/* Service Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {services.map((s) => (
                <div
                  key={s.id}
                  onClick={() => updateBookingData({ service: s.id })}
                  className={`p-6 border-2 rounded-xl cursor-pointer transition ${
                    bookingData.service === s.id
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-pink-300"
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-2">{s.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{s.description}</p>
                  <p className="text-pink-500 font-semibold">{s.price}</p>
                </div>
              ))}
            </div>

            {/* Date */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-700">Select Date</label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => updateBookingData({ date: e.target.value })}
                className="w-full border rounded-lg p-3"
              />
            </div>

            {/* Time */}
            {bookingData.date && (
              <div className="mb-6">
                <label className="block mb-2 font-medium text-gray-700">Select Time</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => updateBookingData({ time: t })}
                      className={`p-3 border rounded-lg ${
                        bookingData.time === t
                          ? "bg-pink-500 text-white border-pink-500"
                          : "hover:border-pink-300"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={nextStep}
                disabled={!bookingData.date || !bookingData.time}
                className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 disabled:opacity-50"
              >
                Next Step
              </button>
            </div>
          </section>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <section className="py-16 container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Details</h2>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={bookingData.name}
                onChange={(e) => updateBookingData({ name: e.target.value })}
                className="w-full border rounded-lg p-3"
              />
              <input
                type="email"
                placeholder="Email"
                value={bookingData.email}
                onChange={(e) => updateBookingData({ email: e.target.value })}
                className="w-full border rounded-lg p-3"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={bookingData.phone}
                onChange={(e) => updateBookingData({ phone: e.target.value })}
                className="w-full border rounded-lg p-3"
              />
              <input
                type="number"
                placeholder="Guests"
                value={bookingData.guests}
                onChange={(e) => updateBookingData({ guests: Number(e.target.value) })}
                className="w-full border rounded-lg p-3"
              />
              <textarea
                placeholder="Message"
                value={bookingData.message}
                onChange={(e) => updateBookingData({ message: e.target.value })}
                className="w-full border rounded-lg p-3"
              />

              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  className="px-6 py-3 border rounded-lg font-semibold hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <section className="py-16 container mx-auto px-4 max-w-xl text-center">
            <div className="bg-white shadow rounded-xl p-8">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your booking. We’ll contact you within 24 hours to confirm details.
              </p>

              {/* Summary */}
              <div className="text-left text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span>{services.find((s) => s.id === bookingData.service)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span>{bookingData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span>{bookingData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Guests:</span>
                  <span>{bookingData.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Contact:</span>
                  <span>{bookingData.email}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => {
                    setStep(1)
                    setBookingData({
                      service: "wedding",
                      date: "",
                      time: "",
                      guests: 50,
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                      budget: "",
                    })
                  }}
                  className="px-6 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50"
                >
                  Book Another
                </button>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  Return Home
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
