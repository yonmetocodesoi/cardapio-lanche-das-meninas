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
      {/* Floating Cart Button - LADO ESQUERDO com efeitos */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="relative">
          {/* Efeito de pulso */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-ping opacity-75"></div>

          <Button
            size="lg"
            className="relative bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full shadow-2xl px-4 py-4 md:px-6 transform hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
                {/* Badge com número de itens - com animação */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
                  {totalItems}
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium">
                  {totalItems} {totalItems === 1 ? "item" : "itens"}
                </div>
                <div className="text-xs opacity-90">{formatPrice(totalWithDelivery)}</div>
              </div>
            </div>
          </Button>
        </div>
      </div>

      {/* Cart Sidebar - LADO ESQUERDO */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex justify-start">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <Card className="w-full sm:max-w-md h-full bg-white/95 backdrop-blur-md border-r border-white/20 rounded-none overflow-hidden animate-slide-in-left">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white sticky top-0 z-10">
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

            <CardContent className="flex-1 overflow-y-auto p-3 space-y-3">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 transform hover:scale-105 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 pr-2">
                      <h4 className="font-medium text-gray-900 text-sm leading-tight">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                      <p className="text-sm font-semibold text-pink-600 mt-1">{formatPrice(item.price)} cada</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:bg-red-50 p-1 h-auto transform hover:scale-110 transition-all"
                      onClick={() => onUpdateQuantity(item.id, 0)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-gray-200 transform hover:scale-110 transition-all"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center font-medium text-sm animate-pulse">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-8 h-8 p-0 hover:bg-gray-200 transform hover:scale-110 transition-all"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{formatPrice(item.price * item.quantity)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            <div className="p-4 border-t bg-white sticky bottom-0">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 mb-4 space-y-2 transform hover:scale-105 transition-all">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium text-gray-800">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Taxa de entrega:</span>
                  <span className="font-medium text-gray-800">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Total:</span>
                    <span className="text-2xl font-bold text-pink-600 animate-pulse">
                      {formatPrice(totalWithDelivery)}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 text-base font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => {
                  setIsOpen(false)
                  onCheckout()
                }}
              >
                🚀 Finalizar Pedido no WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
