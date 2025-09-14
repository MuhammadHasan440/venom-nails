"use client"

import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ProductCard from "../components/product-card"
import Cart from "../components/cart"
import { useCart } from "../hooks/use-cart"

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  inStock: boolean
  rating: number
  reviews: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Rose Bouquet",
    price: 89.99,
    originalPrice: 109.99,
    image: "/placeholder.svg?key=rose-bouquet",
    category: "Bouquets",
    description: "Elegant arrangement of 12 premium red roses with baby breath and greenery",
    inStock: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Luxury Chocolate Box",
    price: 45.99,
    image: "/placeholder.svg?key=chocolate-box",
    category: "Gifts",
    description: "Artisan chocolate collection in elegant gift box, perfect for special occasions",
    inStock: true,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Orchid Centerpiece",
    price: 125.0,
    image: "/placeholder.svg?key=orchid-center",
    category: "Centerpieces",
    description: "Stunning white orchid arrangement in ceramic vase, ideal for events",
    inStock: true,
    rating: 4.7,
    reviews: 56,
  },
  {
    id: 4,
    name: "Teddy Bear & Flowers",
    price: 65.99,
    image: "/placeholder.svg?key=teddy-flowers",
    category: "Combo",
    description: "Adorable teddy bear with mixed flower bouquet, perfect for birthdays",
    inStock: true,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 5,
    name: "Wedding Bouquet",
    price: 199.99,
    image: "/placeholder.svg?key=wedding-bouquet",
    category: "Bouquets",
    description: "Bridal bouquet with white roses, peonies, and eucalyptus",
    inStock: true,
    rating: 5.0,
    reviews: 45,
  },
  {
    id: 6,
    name: "Scented Candle Set",
    price: 35.99,
    image: "/placeholder.svg?key=candle-set",
    category: "Gifts",
    description: "Set of 3 luxury scented candles in elegant glass containers",
    inStock: false,
    rating: 4.4,
    reviews: 92,
  },
  {
    id: 7,
    name: "Sunflower Arrangement",
    price: 55.99,
    image: "/placeholder.svg?key=sunflower-arr",
    category: "Arrangements",
    description: "Bright sunflower arrangement with seasonal foliage in rustic vase",
    inStock: true,
    rating: 4.5,
    reviews: 67,
  },
  {
    id: 8,
    name: "Gift Card",
    price: 100.0,
    image: "/placeholder.svg?key=gift-card",
    category: "Gift Cards",
    description: "Digital gift card for Venome Venue services and products",
    inStock: true,
    rating: 5.0,
    reviews: 234,
  },
]

const categories = ["All", "Bouquets", "Arrangements", "Centerpieces", "Gifts", "Combo", "Gift Cards"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items, addItem, removeItem, updateQuantity, getTotalItems, getTotalPrice } = useCart()

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">Gift Shop</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium flowers, gifts, and accessories for every special occasion
            </p>
          </div>
        </section>

        {/* Filters and Cart */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-border bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>

                {/* Cart Button */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-accent transition-colors"
                >
                  Cart ({getTotalItems()})
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={(product) => addItem(product)} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Cart Sidebar */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        totalPrice={getTotalPrice()}
      />

      <Footer />
    </div>
  )
}
