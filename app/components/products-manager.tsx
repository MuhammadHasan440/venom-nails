"use client"

import { useState } from "react"
import Image from "next/image"

interface Product {
  id: number
  name: string
  price: number
  category: string
  stock: number
  status: "active" | "inactive"
  image: string
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Premium Rose Bouquet",
    price: 89.99,
    category: "Bouquets",
    stock: 15,
    status: "active",
    image: "/placeholder.svg?key=rose-bouquet",
  },
  {
    id: 2,
    name: "Luxury Chocolate Box",
    price: 45.99,
    category: "Gifts",
    stock: 8,
    status: "active",
    image: "/placeholder.svg?key=chocolate-box",
  },
  {
    id: 3,
    name: "Orchid Centerpiece",
    price: 125.0,
    category: "Centerpieces",
    stock: 5,
    status: "active",
    image: "/placeholder.svg?key=orchid-center",
  },
  {
    id: 4,
    name: "Teddy Bear & Flowers",
    price: 65.99,
    category: "Combo",
    stock: 0,
    status: "inactive",
    image: "/placeholder.svg?key=teddy-flowers",
  },
]

export default function ProductsManager() {
  const [products] = useState<Product[]>(mockProducts)
  const [isAddingProduct, setIsAddingProduct] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Products Management</h2>
          <p className="text-muted-foreground">Manage your shop inventory and products</p>
        </div>

        <button
          onClick={() => setIsAddingProduct(true)}
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
        >
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-card rounded-xl overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name.replace(/'/g, "&apos;")}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.status}
                </span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-card-foreground mb-2">
                {product.name.replace(/'/g, "&apos;")}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                {product.category.replace(/'/g, "&apos;")}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-primary">${product.price}</span>
                <span className="text-sm text-muted-foreground">Stock: {product.stock}</span>
              </div>

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
