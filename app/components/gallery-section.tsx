"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryItem {
  id: number
  title: string
  image: string
  category: string
}

interface GallerySectionProps {
  title: string
  items: GalleryItem[]
  columns?: number
}

export default function GallerySection({ title, items, columns = 3 }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{title}</h2>

        <div className={`grid ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.image || "/placeholder.svg"}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
