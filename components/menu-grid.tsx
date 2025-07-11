"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, AlertTriangle } from "lucide-react"
import { SandwichModal } from "@/components/sandwich-modal"
import { menuData } from "@/data/menu"
import type { CartItem } from "@/app/page"

interface MenuGridProps {
  onAddToCart: (item: Omit<CartItem, "quantity">) => void
}

export function MenuGrid({ onAddToCart }: MenuGridProps) {
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

  const handleAddToCart = (item: any, sectionTitle: string) => {
    if (item.requiresVegetableChoice) {
      setSandwichModal({ isOpen: true, item: { ...item, sectionTitle } })
    } else {
      onAddToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        category: sectionTitle,
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
      category: item.sectionTitle,
    })
  }

  return (
    <>
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-light text-slate-900">Nosso Cardápio</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Deliciosos sanduíches artesanais preparados com ingredientes frescos e muito carinho.
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-16">
          {menuData.map((section, sectionIndex) => (
            <section 
              key={section.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{section.emoji}</span>
                  <h2 className="text-2xl font-medium text-slate-900">{section.title}</h2>
                </div>
                {section.description && (
                  <p className="text-slate-600 flex items-center justify-center gap-2">
                    {section.description.includes("⚠️") && (
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                    )}
                    {section.description.replace("⚠️", "").trim()}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, itemIndex) => (
                  <Card 
                    key={item.id} 
                    className="group hover:shadow-md transition-all duration-300 border-slate-200 hover:border-slate-300"
                    style={{ animationDelay: `${(sectionIndex * 0.1) + (itemIndex * 0.05)}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-medium text-slate-900 leading-tight">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          {item.hasSubstitutionWarning && (
                            <div className="flex items-center gap-2 text-xs text-amber-600">
                              <AlertTriangle className="w-3 h-3" />
                              <span>Sujeito à disponibilidade</span>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xl font-semibold text-slate-900">
                            {formatPrice(item.price)}
                          </span>
                          <Button
                            size="sm"
                            className="bg-slate-900 hover:bg-slate-800 text-white"
                            onClick={() => handleAddToCart(item, section.title)}
                          >
                            <Plus className="w-4 h-4 mr-1" />
                            Adicionar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <SandwichModal
        isOpen={sandwichModal.isOpen}
        onClose={() => setSandwichModal({ isOpen: false, item: null })}
        itemName={sandwichModal.item?.name || ""}
        onConfirm={handleSandwichConfirm}
      />
    </>
  )
}