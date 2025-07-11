"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, AlertTriangle } from "lucide-react"
import { SandwichModal } from "@/components/sandwich-modal"
import type { MenuSection as MenuSectionType } from "@/data/menu"
import type { CartItem } from "@/app/page"

interface MenuSectionProps {
  section: MenuSectionType
  onAddToCart: (item: Omit<CartItem, "quantity">) => void
}

export function MenuSection({ section, onAddToCart }: MenuSectionProps) {
  const [sandwichModal, setSandwichModal] = useState<{
    isOpen: boolean
    item: any
  }>({
    isOpen: false,
    item: null,
  })

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`
  }

  const handleAddToCart = (item: any) => {
    if (item.requiresVegetableChoice) {
      setSandwichModal({ isOpen: true, item })
    } else {
      onAddToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        category: section.title,
      })
    }
  }

  const handleSandwichConfirm = (withVegetables: boolean) => {
    const item = sandwichModal.item
    const itemName = withVegetables ? item.name : `${item.name} (Sem Verduras)`

    onAddToCart({
      id: `${item.id}-${withVegetables ? "com" : "sem"}-verduras`,
      name: itemName,
      price: item.price,
      category: section.title,
    })
  }

  return (
    <>
      <section id="menu" className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
            <span className="text-5xl">{section.emoji}</span>
            {section.title}
          </h2>
          {section.description && (
            <p className="text-pink-200 text-lg flex items-center justify-center gap-2">
              {section.description.includes("⚠️") && <AlertTriangle className="w-5 h-5 text-yellow-400" />}
              {section.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {section.items.map((item) => (
            <Card
              key={item.id}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <CardContent className="p-3 sm:p-4 space-y-3">
                <div className="space-y-2">
                  <h3 className="font-semibold text-white text-base sm:text-lg group-hover:text-pink-200 transition-colors leading-tight">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="text-xs sm:text-sm text-white/70 leading-tight">{item.description}</p>
                  )}
                  {item.hasSubstitutionWarning && (
                    <div className="flex items-center gap-1 text-xs text-yellow-300">
                      <AlertTriangle className="w-3 h-3" />
                      <span>Sujeito à disponibilidade</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-pink-400">{formatPrice(item.price)}</span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xs sm:text-sm px-3 py-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <SandwichModal
        isOpen={sandwichModal.isOpen}
        onClose={() => setSandwichModal({ isOpen: false, item: null })}
        itemName={sandwichModal.item?.name || ""}
        onConfirm={handleSandwichConfirm}
      />
    </>
  )
}
