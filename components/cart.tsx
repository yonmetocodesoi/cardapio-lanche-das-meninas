"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Minus, Plus, X, Trash2 } from "lucide-react"
import type { CartItem } from "@/app/page"

interface CartProps {
  items: CartItem[]
  totalPrice: number
  totalItems: number
  deliveryFee: number
  totalWithDelivery: number
  onUpdateQuantity: (id: string, quantity: number) => void
  onCheckout: () => void
}

export function Cart({
  items,
  totalPrice,
  totalItems,
  deliveryFee,
  totalWithDelivery,
  onUpdateQuantity,
  onCheckout,
}: CartProps) {
  const [isOpen, setIsOpen] = useState(false)

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`
  }

  if (totalItems === 0) return null

  return (
    <>
      {/* Floating Cart Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg px-6 py-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingCart className="w-5 h-5" />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {totalItems}
              </div>
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-sm font-medium">
                {totalItems} {totalItems === 1 ? "item" : "itens"}
              </div>
              <div className="text-xs opacity-90">{formatPrice(totalWithDelivery)}</div>
            </div>
          </div>
        </Button>
      </div>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex justify-start">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="w-full sm:max-w-md h-full bg-white rounded-none overflow-hidden animate-slide-in-left">
            <CardHeader className="bg-slate-900 text-white sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Seu Pedido ({totalItems} {totalItems === 1 ? "item" : "itens"})
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-2">
                      <h4 className="font-medium text-slate-900 text-sm leading-tight">{item.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.category}</p>
                      <p className="text-sm font-semibold text-slate-900 mt-1">{formatPrice(item.price)} cada</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:bg-red-50 p-1 h-auto"
                      onClick={() => onUpdateQuantity(item.id, 0)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-slate-100"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-slate-100"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900">{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            <div className="p-4 border-t bg-white sticky bottom-0">
              <div className="bg-slate-50 rounded-lg p-4 mb-4 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Subtotal:</span>
                  <span className="font-medium text-slate-900">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-600">Taxa de entrega:</span>
                  <span className="font-medium text-slate-900">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">Total:</span>
                    <span className="text-2xl font-bold text-slate-900">
                      {formatPrice(totalWithDelivery)}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-medium"
                onClick={() => {
                  setIsOpen(false)
                  onCheckout()
                }}
              >
                Finalizar Pedido no WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}