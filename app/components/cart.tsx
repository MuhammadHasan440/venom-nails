"use client"

import Image from "next/image"
import type { CartItem } from "../hooks/use-cart"

interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
  totalPrice: number
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, totalPrice }: CartProps) {
  if (!isOpen) return null

  const handleCheckout = () => {
    alert("Checkout functionality would be integrated with a payment processor like Stripe")
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>

      {/* Drawer */}
      <div className="ml-auto w-full max-w-md h-full bg-white shadow-2xl flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-pink-200">
          <h2 className="text-xl font-semibold text-pink-600">Shopping Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-pink-100 rounded-lg transition">
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 text-pink-300">
              <p>Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 bg-pink-50 rounded-lg p-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover rounded-lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-pink-700 truncate">{item.name}</h4>
                  <p className="text-sm text-pink-400">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                    className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium text-pink-600">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition"
                  >
                    +
                  </button>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="p-2 text-red-500 hover:text-red-700 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-pink-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-pink-600">Total:</span>
              <span className="text-2xl font-bold text-pink-700">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full mt-3 border-2 border-pink-600 text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
