import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Wedding Venues",
    description: "Elegant spaces for your perfect wedding day, from intimate ceremonies to grand receptions.",
    features: ["Bridal suites", "Garden ceremonies", "Reception halls", "Catering services"],
    image: "/elegant-wedding-venue-ceremony.jpg",
    price: "Starting from $2,500",
    href: "/services/weddings",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Professional venues and services for meetings, conferences, and corporate celebrations.",
    features: ["Meeting rooms", "Conference facilities", "Audio/visual equipment", "Catering options"],
    image: "/corporate-event-venue-professional.jpg",
    price: "Starting from $800",
    href: "/services/corporate",
  },
  {
    id: 3,
    title: "Floral Design",
    description: "Custom floral arrangements and designs for any occasion, crafted with premium blooms.",
    features: ["Bridal bouquets", "Centerpieces", "Ceremony arches", "Event installations"],
    image: "/luxury-floral-arrangement-bouquet.jpg",
    price: "Starting from $150",
    href: "/services/floral",
  },
  {
    id: 4,
    title: "Birthday Parties",
    description: "Memorable birthday celebrations with custom decorations and venue arrangements.",
    features: ["Themed decorations", "Party planning", "Catering coordination", "Entertainment setup"],
    image: "/birthday-party-venue-decoration.jpg",
    price: "Starting from $500",
    href: "/services/birthdays",
  },
  {
    id: 5,
    title: "Event Planning",
    description: "Full-service event planning and coordination to bring your vision to life.",
    features: ["Event design", "Vendor coordination", "Timeline management", "Day-of coordination"],
    image: "/placeholder.svg",
    price: "Custom pricing",
    href: "/services/planning",
  },
  {
    id: 6,
    title: "Venue Rentals",
    description: "Flexible venue rental options for any type of gathering or celebration.",
    features: ["Multiple room sizes", "Flexible layouts", "Equipment included", "Setup assistance"],
    image: "/placeholder.svg",
    price: "Starting from $300",
    href: "/services/rentals",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500/10 via-rose-400/15 to-pink-600/20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive event services to make your special occasions unforgettable
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Included Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <svg
                              className="w-4 h-4 text-primary mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href={service.href}
                        className="flex-1 bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/booking"
                        className="flex-1 border-2 border-primary text-primary text-center py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need a Custom Package?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We create bespoke event experiences tailored to your unique vision and requirements.
            </p>
            <Link
              href="/contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
