"use client"

import { useState, useEffect } from "react"
import { ArrowLeft } from "lucide-react"

interface CartIndicatorProps {
  show: boolean
}

export function CartIndicator({ show }: CartIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => setIsVisible(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [show])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-28 left-2 z-40 animate-bounce">
      <div className="bg-slate-900 text-white rounded-lg px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2 text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          <span>Clique aqui para finalizar pedido</span>
        </div>
      </div>
    </div>
  )
}