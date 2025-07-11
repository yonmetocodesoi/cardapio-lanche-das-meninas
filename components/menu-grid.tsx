"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
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
      <div className="bg-gradient-to-br from-pink-500 via-pink-600 to-pink-700 rounded-3xl p-6 shadow-2xl border-4 border-white/20">
        {/* Header com logo */}
        <div className="text-center mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">🍔 Lanches das Meninas ⭐</h1>
          </div>
        </div>

        {/* Grid Layout - Responsivo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna 1 - Sanduíches */}
          <div className="space-y-6">
            {/* Sanduíches */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🍔 SANDUÍCHES</h2>
                <p className="text-sm text-white/90 text-center mt-1">
                  Todos os Sanduíches acompanham Alface, Tomate, Batata Palha e Milho
                </p>
              </div>
              <div className="space-y-2">
                {menuData[0].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                      {item.description && <p className="text-white/70 text-xs mt-1">{item.description}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "SANDUÍCHES")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pão Árabe */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🥙 PÃO ÁRABE</h2>
                <p className="text-sm text-white/90 text-center mt-1">
                  Todos acompanham Batata Palha, Tomate, Alface e Milho
                </p>
              </div>
              <div className="space-y-2">
                {menuData[1].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                      {item.description && <p className="text-white/70 text-xs mt-1">{item.description}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "PÃO ÁRABE")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 2 - Adicionais, Petiscos, Bebidas */}
          <div className="space-y-6">
            {/* Adicionais */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🧀 ADICIONAIS</h2>
              </div>
              <div className="space-y-2">
                {menuData[2].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "ADICIONAIS")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Petiscos */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🍟 PETISCOS</h2>
                <div className="flex items-center justify-center gap-1 text-xs text-yellow-200 mt-1">
                  <AlertTriangle className="w-3 h-3" />
                  <span>Sujeito à disponibilidade</span>
                </div>
              </div>
              <div className="space-y-2">
                {menuData[3].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                      {item.description && <p className="text-white/70 text-xs mt-1">{item.description}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "PETISCOS")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bebidas */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🍹 BEBIDAS</h2>
              </div>
              <div className="space-y-2">
                {menuData[4].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "BEBIDAS")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 3 - Sucos e Combos */}
          <div className="space-y-6">
            {/* Sucos */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🍊 SUCOS</h2>
              </div>
              <div className="space-y-2">
                {menuData[5].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "SUCOS")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Combos */}
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
              <div className="bg-white/30 rounded-xl p-3 mb-4">
                <h2 className="text-2xl font-black text-white text-center drop-shadow-md">🧃 COMBOS</h2>
              </div>
              <div className="space-y-2">
                {menuData[6].items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                    <div className="flex-1">
                      <span className="text-white font-medium text-sm">{item.name}</span>
                      {item.description && <p className="text-white/70 text-xs mt-1">{item.description}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{formatPrice(item.price)}</span>
                      <Button
                        size="sm"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xs px-2 py-1 h-auto"
                        onClick={() => handleAddToCart(item, "COMBOS")}
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personagens decorativos */}
            <div className="text-center">
              <div className="text-6xl animate-bounce">🍔</div>
              <div className="text-2xl mt-2">⭐ 🥤 ⭐</div>
            </div>
          </div>
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
