import React from "react"

type Stat = {
  label: string
  value: string
  change: string
  trend: "up" | "down"
}

type Booking = {
  id: number
  client: string
  service: string
  date: string
  status: "confirmed" | "pending" | "completed"
}

export default function DashboardOverview() {
  const stats: Stat[] = [
    { label: "Total Bookings", value: "127", change: "+12%", trend: "up" },
    { label: "Revenue", value: "$45,230", change: "+8%", trend: "up" },
    { label: "Products Sold", value: "89", change: "+15%", trend: "up" },
    { label: "Gallery Views", value: "2,340", change: "+5%", trend: "up" },
  ]

  const recentBookings: Booking[] = [
    { id: 1, client: "Sarah Johnson", service: "Wedding", date: "2024-03-15", status: "confirmed" },
    { id: 2, client: "Tech Corp", service: "Corporate Event", date: "2024-03-18", status: "pending" },
    { id: 3, client: "Mike Davis", service: "Birthday Party", date: "2024-03-20", status: "confirmed" },
    { id: 4, client: "Emma Wilson", service: "Floral Design", date: "2024-03-22", status: "completed" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s what&apos;s happening with your business.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-card-foreground mt-1">{stat.value}</p>
              </div>
              <div
                className={`flex items-center space-x-1 text-sm ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.trend === "up" ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"}
                  />
                </svg>
                <span>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Bookings */}
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{booking.client}</p>
                  <p className="text-sm text-muted-foreground">{booking.service}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-foreground">{booking.date}</p>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : booking.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors">
              <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="text-sm font-medium">Add Product</span>
            </button>

            <button className="p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium">Upload Image</span>
            </button>

            <button className="p-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                />
              </svg>
              <span className="text-sm font-medium">View Bookings</span>
            </button>

            <button className="p-4 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
              <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-sm font-medium">Analytics</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
