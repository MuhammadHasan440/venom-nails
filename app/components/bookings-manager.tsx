"use client"

import { useState } from "react"

interface Booking {
  id: number
  client: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  guests: number
  status: "pending" | "confirmed" | "completed" | "cancelled"
  budget: string
  message: string
}

const mockBookings: Booking[] = [
  {
    id: 1,
    client: "Sarah Johnson",
    email: "sarah@email.com",
    phone: "+1 (555) 123-4567",
    service: "Wedding",
    date: "2024-03-15",
    time: "2:00 PM",
    guests: 150,
    status: "confirmed",
    budget: "5000-10000",
    message: "Looking for an elegant outdoor ceremony with floral arrangements.",
  },
  {
    id: 2,
    client: "Tech Corp",
    email: "events@techcorp.com",
    phone: "+1 (555) 987-6543",
    service: "Corporate Event",
    date: "2024-03-18",
    time: "6:00 PM",
    guests: 80,
    status: "pending",
    budget: "2500-5000",
    message: "Annual company celebration with catering needs.",
  },
  {
    id: 3,
    client: "Mike Davis",
    email: "mike.davis@email.com",
    phone: "+1 (555) 456-7890",
    service: "Birthday Party",
    date: "2024-03-20",
    time: "4:00 PM",
    guests: 25,
    status: "confirmed",
    budget: "1000-2500",
    message: "50th birthday celebration with family and friends.",
  },
]

export default function BookingsManager() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings)
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const filteredBookings =
    filterStatus === "all" ? bookings : bookings.filter((booking) => booking.status === filterStatus)

  const updateBookingStatus = (id: number, status: Booking["status"]) => {
    setBookings((prev) => prev.map((booking) => (booking.id === id ? { ...booking, status } : booking)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Bookings Management</h2>
          <p className="text-muted-foreground">Manage and track all event bookings</p>
        </div>

        <div className="flex items-center space-x-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="bg-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Client</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Service</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Date & Time</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Guests</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-card-foreground">{booking.client}</p>
                      <p className="text-sm text-muted-foreground">{booking.email}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">{booking.service}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-foreground">{booking.date}</p>
                      <p className="text-sm text-muted-foreground">{booking.time}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">{booking.guests}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedBooking(booking)}
                        className="text-primary hover:text-accent transition-colors"
                      >
                        View
                      </button>
                      <select
                        value={booking.status}
                        onChange={(e) => updateBookingStatus(booking.id, e.target.value as Booking["status"])}
                        className="text-sm px-2 py-1 rounded border border-border bg-input"
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-foreground">Booking Details</h3>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Client Name</label>
                  <p className="text-foreground">{selectedBooking.client}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Service</label>
                  <p className="text-foreground">{selectedBooking.service}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-foreground">{selectedBooking.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Phone</label>
                  <p className="text-foreground">{selectedBooking.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date & Time</label>
                  <p className="text-foreground">
                    {selectedBooking.date} at {selectedBooking.time}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Guests</label>
                  <p className="text-foreground">{selectedBooking.guests}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Budget</label>
                  <p className="text-foreground">${selectedBooking.budget}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status</label>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedBooking.status)}`}
                  >
                    {selectedBooking.status}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">Message</label>
                <p className="text-foreground mt-1">{selectedBooking.message}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
