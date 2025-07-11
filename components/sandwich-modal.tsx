"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface SandwichModalProps {
  isOpen: boolean
  onClose: () => void
  itemName: string
  onConfirm: (withVegetables: boolean) => void
}

export function SandwichModal({ isOpen, onClose, itemName, onConfirm }: SandwichModalProps) {
  if (!isOpen) return null

  const handleChoice = (withVegetables: boolean) => {
    onConfirm(withVegetables)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <Card className="w-full max-w-sm bg-white relative">
        <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">🥬 Com Verduras?</CardTitle>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 text-center space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">{itemName}</h3>
            <p className="text-sm text-gray-600">
              Seu sanduíche vem com alface, tomate, batata palha e milho.
              <br />
              Deseja manter as verduras?
            </p>
          </div>

          <div className="flex gap-3">
            <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white" onClick={() => handleChoice(true)}>
              ✅ Com Verduras
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
              onClick={() => handleChoice(false)}
            >
              ❌ Sem Verduras
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
