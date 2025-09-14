"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-pink-200/40 shadow-xl shadow-pink-100/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/venome-logo.jpeg"
                alt="Venome Venue"
                width={60}
                height={60}
                className="rounded-full ring-2 ring-pink-300/60 group-hover:ring-pink-400/80 transition-all duration-300 shadow-lg shadow-pink-200/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400/30 to-rose-500/30 blur-md group-hover:from-pink-500/40 group-hover:to-rose-600/40 transition-all duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-3xl font-bold text-pink-600 drop-shadow-sm">Venome</h1>
              <p className="text-sm text-pink-700 font-semibold tracking-wide">Venue</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { href: "/services", label: "Services" },
              { href: "/booking", label: "Booking" },
              { href: "/shop", label: "Shop" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-900 hover:text-pink-600 transition-all duration-300 font-semibold text-sm uppercase tracking-wide group"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-full group-hover:w-full transition-all duration-300 shadow-sm shadow-pink-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
          {/* CTA Button (Mobile) */}
<Link
  href="/booking"
  onClick={() => setIsMenuOpen(false)}
  className="md:hidden relative overflow-hidden bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide shadow-xl shadow-pink-300/40 hover:shadow-2xl hover:shadow-pink-400/50 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group border border-pink-400/30 mt-4 text-center"
>
  <span className="relative z-10 flex items-center justify-center space-x-2">
    <span>Book Now</span>
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-pink-100/80 transition-all duration-300 border border-pink-200/50 shadow-sm"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-gradient-to-r from-pink-600 to-rose-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
              ></span>
              <span
                className={`bg-gradient-to-r from-pink-600 to-rose-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full my-0.5 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-gradient-to-r from-pink-600 to-rose-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-full ${isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-pink-200/60 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl shadow-pink-200/30">
            <nav className="flex flex-col space-y-4 pt-6 px-2">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/services", label: "Services" },
                { href: "/booking", label: "Booking" },
                { href: "/shop", label: "Shop" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-900 hover:text-pink-600 transition-all duration-300 font-semibold px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:shadow-md hover:shadow-pink-200/30 text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA Button (Mobile) */}
              <Link
                href="/booking"
                onClick={() => setIsMenuOpen(false)}
                className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide shadow-xl shadow-pink-300/40 hover:shadow-2xl hover:shadow-pink-400/50 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group border border-pink-400/30 mt-4 text-center"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Book Now</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
