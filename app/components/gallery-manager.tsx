"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryImage {
  id: number
  title: string
  category: string
  image: string
  uploadDate: string
}

const mockImages: GalleryImage[] = [
  {
    id: 1,
    title: "Elegant Wedding Setup",
    category: "Weddings",
    image: "/elegant-wedding-venue-ceremony.jpg",
    uploadDate: "2024-03-01",
  },
  {
    id: 2,
    title: "Corporate Event Hall",
    category: "Corporate",
    image: "/corporate-event-venue-professional.jpg",
    uploadDate: "2024-03-02",
  },
  {
    id: 3,
    title: "Birthday Celebration",
    category: "Birthdays",
    image: "/birthday-party-venue-decoration.jpg",
    uploadDate: "2024-03-03",
  },
  {
    id: 4,
    title: "Rose Arrangement",
    category: "Florals",
    image: "/luxury-rose-bridal-bouquet.jpg",
    uploadDate: "2024-03-04",
  },
]

export default function GalleryManager() {
  const [images] = useState<GalleryImage[]>(mockImages)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = ["all", "Weddings", "Corporate", "Birthdays", "Florals", "Venues"]

  const filteredImages =
    selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Gallery Management</h2>
          <p className="text-muted-foreground">Upload and organize your portfolio images</p>
        </div>

        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
          Upload Images
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors capitalize ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-card rounded-xl overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.title.replace(/'/g, "&apos;")}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-card-foreground mb-1">
                {image.title.replace(/'/g, "&apos;")}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {image.category.replace(/'/g, "&apos;")}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Uploaded: {image.uploadDate}
              </p>

              <div className="flex space-x-2">
                <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg text-sm font-medium hover:bg-accent transition-colors">
                  Edit
                </button>
                <button className="flex-1 border border-border text-foreground py-2 rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
