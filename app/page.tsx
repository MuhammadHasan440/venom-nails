import Header from "./components/header"
import Image from "next/image"
import Link from "next/link"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24 bg-gradient-to-br from-pink-500/10 via-rose-400/15 to-pink-600/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-pink-100/20"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, rgba(244, 114, 182, 0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <Image
              src="/images/venome-logo.jpeg"
              alt="Venome Venue"
              width={120}
              height={120}
              className="mx-auto rounded-full mb-6 ring-4 ring-pink-300/60 shadow-2xl shadow-pink-200/50"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
            Venome{" "}
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Venue
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto text-balance">
            {"Where luxury meets elegance. Creating unforgettable moments with exquisite floral arrangements and premium venue services."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-pink-300/40 hover:shadow-2xl hover:shadow-pink-400/50 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Your Event
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">Our Premium Services</h2>
            <p className="text-xl text-pink-500 max-w-2xl mx-auto">
              {"From intimate gatherings to grand celebrations, we bring your vision to life with unmatched elegance."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card */}
            {[
              {
                title: "Venue Booking",
                description:
                  "Elegant spaces for weddings, corporate events, and special celebrations with full-service planning.",
                link: "/services/venue",
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
              {
                title: "Floral Design",
                description:
                  "Custom bouquets, centerpieces, and floral installations crafted with the finest seasonal blooms.",
                link: "/services/floral",
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                title: "Gift Shop",
                description:
                  "Curated selection of premium gifts, flowers, and accessories for every special occasion.",
                link: "/shop",
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                ),
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8 text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-pink-100/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4">{service.title}</h3>
                <p className="text-pink-500 mb-6">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-pink-600 hover:text-pink-800 font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pink-700 mb-4">Recent Celebrations</h2>
            <p className="text-xl text-pink-500">
              {"A glimpse into the magical moments we've helped create"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-xl aspect-square shadow hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={`/elegant-venue-event${item}.jpeg`}
                  alt={`Gallery image ${item}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Elegant Wedding</h4>
                    <p className="text-sm text-white/80">Spring 2024</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {"Let us bring your vision to life with our premium venue services and exquisite floral designs."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
