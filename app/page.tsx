"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Cart } from "@/components/cart"
import { CheckoutModal } from "@/components/checkout-modal"
import { CartIndicator } from "@/components/cart-indicator"
import { MenuGrid } from "@/components/menu-grid"
import { PowerpuffBackground } from "@/components/powerpuff-background"

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  category: string
}

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [showCartIndicator, setShowCartIndicator] = useState(false)

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        // Mostrar indicador mesmo quando adicionar mais do mesmo item
        setShowCartIndicator(true)
        return prev.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem,
        )
      }
      // Mostrar indicador quando adicionar qualquer item
      setShowCartIndicator(true)
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const DELIVERY_FEE = 6.0

  const getTotalWithDelivery = () => {
    return getTotalPrice() + DELIVERY_FEE
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo das Meninas Superpoderosas */}
      <PowerpuffBackground />

      <div className="relative z-20">
        <Header />

        {/* Cardápio direto sem hero */}
        <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
          <MenuGrid onAddToCart={addToCart} />
        </main>

        <Cart
          items={cartItems}
          totalPrice={getTotalPrice()}
          totalItems={getTotalItems()}
          deliveryFee={DELIVERY_FEE}
          totalWithDelivery={getTotalWithDelivery()}
          onUpdateQuantity={updateQuantity}
          onCheckout={() => setIsCheckoutOpen(true)}
        />

        <CartIndicator show={showCartIndicator} />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          cartItems={cartItems}
          totalPrice={getTotalPrice()}
          deliveryFee={DELIVERY_FEE}
          totalWithDelivery={getTotalWithDelivery()}
        />
      </div>
    </div>
  )
}
