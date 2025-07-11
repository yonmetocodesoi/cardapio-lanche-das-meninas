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
      const timer = setTimeout(() => setIsVisible(false), 8000) // Hide after 8 seconds
      return () => clearTimeout(timer)
    }
  }, [show])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-28 left-2 z-40 animate-bounce">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg px-4 py-3 shadow-2xl border-2 border-white/20 backdrop-blur-sm transform hover:scale-110 transition-all">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span>👈 Clique aqui para finalizar pedido</span>
        </div>
        <div className="flex justify-center mt-1">
          <ArrowLeft className="w-5 h-5 text-white animate-pulse" />
        </div>
      </div>
    </div>
  )
}
