"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, MessageCircle } from "lucide-react"
import type { CartItem } from "@/app/page"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  totalPrice: number
  deliveryFee: number
  totalWithDelivery: number
}

export function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  totalPrice,
  deliveryFee,
  totalWithDelivery,
}: CheckoutModalProps) {
  const [customerData, setCustomerData] = useState({
    name: "",
    address: "",
    phone: "",
    observations: "",
  })

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`
  }

  const generateWhatsAppMessage = () => {
    let message = `🍔 *PEDIDO - LANCHES DAS MENINAS* 🍔\n\n`
    message += `👤 *Cliente:* ${customerData.name}\n`
    message += `📍 *Endereço:* ${customerData.address}\n`
    if (customerData.phone) {
      message += `📱 *Telefone:* ${customerData.phone}\n`
    }
    message += `\n📋 *ITENS DO PEDIDO:*\n`

    cartItems.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`
    })

    message += `\n💰 *RESUMO:*\n`
    message += `• Subtotal: ${formatPrice(totalPrice)}\n`
    message += `• Taxa de entrega: ${formatPrice(deliveryFee)}\n`
    message += `• *TOTAL: ${formatPrice(totalWithDelivery)}*\n`

    if (customerData.observations) {
      message += `\n📝 *Observações:* ${customerData.observations}\n`
    }

    message += `\n✅ Pedido realizado pelo site!`

    return encodeURIComponent(message)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!customerData.name.trim() || !customerData.address.trim()) {
      alert("Por favor, preencha seu nome e endereço.")
      return
    }

    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/5588992503868?text=${whatsappMessage}`

    window.open(whatsappUrl, "_blank")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <Card className="w-full max-w-md bg-white relative max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle>Finalizar Pedido</CardTitle>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome Completo *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={customerData.name}
                onChange={(e) => setCustomerData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Endereço Completo *</Label>
              <Textarea
                id="address"
                placeholder="Rua, número, bairro, cidade..."
                value={customerData.address}
                onChange={(e) => setCustomerData((prev) => ({ ...prev, address: e.target.value }))}
                required
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone (opcional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(88) 99999-9999"
                value={customerData.phone}
                onChange={(e) => setCustomerData((prev) => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="observations">Observações (opcional)</Label>
              <Textarea
                id="observations"
                placeholder="Alguma observação sobre seu pedido..."
                value={customerData.observations}
                onChange={(e) => setCustomerData((prev) => ({ ...prev, observations: e.target.value }))}
                rows={2}
              />
            </div>

            <div className="border-t pt-4">
              <div className="space-y-2 mb-4 bg-gray-50 rounded-lg p-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Taxa de entrega:</span>
                  <span className="font-medium">{formatPrice(deliveryFee)}</span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total do Pedido:</span>
                    <span className="text-2xl font-bold text-pink-600">{formatPrice(totalWithDelivery)}</span>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar Pedido via WhatsApp
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
