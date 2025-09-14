export default function AnalyticsView() {
  const metrics = [
    { label: "Page Views", value: "12,345", change: "+15%" },
    { label: "Unique Visitors", value: "3,456", change: "+8%" },
    { label: "Conversion Rate", value: "3.2%", change: "+12%" },
    { label: "Avg. Session Duration", value: "4:32", change: "+5%" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Analytics</h2>
        <p className="text-muted-foreground">Track your website performance and business metrics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-card rounded-xl p-6">
            <h3 className="text-sm text-muted-foreground mb-2">{metric.label}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-card-foreground">{metric.value}</span>
              <span className="text-sm text-green-600">{metric.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Popular Services</h3>
          <div className="space-y-4">
            {[
              { service: "Wedding Services", bookings: 45, percentage: 65 },
              { service: "Corporate Events", bookings: 23, percentage: 35 },
              { service: "Birthday Parties", bookings: 18, percentage: 28 },
              { service: "Floral Design", bookings: 12, percentage: 18 },
            ].map((item) => (
              <div key={item.service}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground">{item.service}</span>
                  <span className="text-muted-foreground">{item.bookings} bookings</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-card-foreground mb-4">Revenue Breakdown</h3>
          <div className="space-y-4">
            {[
              { source: "Event Bookings", amount: "$32,450", percentage: 72 },
              { source: "Product Sales", amount: "$8,920", percentage: 20 },
              { source: "Consultation Fees", amount: "$3,860", percentage: 8 },
            ].map((item) => (
              <div key={item.source}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground">{item.source}</span>
                  <span className="text-primary font-semibold">{item.amount}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: `${item.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
