"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

// --- Types ---
type GalleryCategory = "all" | "weddings" | "corporate" | "birthdays" | "florals" | "venues"

interface GalleryItem {
  id: number
  title: string
  category: GalleryCategory
  image: string
  description: string
}

// --- Demo Data ---
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Elegant Wedding Ceremony",
    category: "weddings",
    image: "/elegant-wedding-venue.png",
    description: "Beautiful outdoor wedding setup with floral arches",
  },
  {
    id: 2,
    title: "Rose Bridal Bouquet",
    category: "florals",
    image: "/luxury-rose-bridal-bouquet.jpg",
    description: "Premium roses with baby breath accents",
  },
  {
    id: 3,
    title: "Corporate Gala Setup",
    category: "corporate",
    image: "/gala.jpg",
    description: "Professional event space with modern lighting",
  },
  {
    id: 4,
    title: "Birthday Party Decor",
    category: "birthdays",
    image: "/luxury-birthday-party-decoration.jpg",
    description: "Colorful and festive birthday celebration setup",
  },
]

// --- Page ---
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all")
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  // categories for buttons
  const categories = [
    { key: "all" as const, label: "All" },
    { key: "weddings" as const, label: "Weddings" },
    { key: "corporate" as const, label: "Corporate" },
    { key: "birthdays" as const, label: "Birthdays" },
    { key: "florals" as const, label: "Florals" },
    { key: "venues" as const, label: "Venues" },
  ]

  // filter logic
  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-pink-500/10 via-rose-400/15 to-pink-600/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30"></div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Explore our collection of stunning venues, exquisite floral arrangements, and memorable celebrations
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                    selectedCategory === category.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                ✕
              </button>
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
