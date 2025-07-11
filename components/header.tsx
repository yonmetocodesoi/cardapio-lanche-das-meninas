"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            Lanches das <span className="text-pink-400">Meninas</span>
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => window.open("https://wa.me/5588992503868", "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Suporte
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-pink-500/20 border-pink-400/30 text-pink-200 hover:bg-pink-500/30"
            onClick={() => window.open("tel:+5588992503868", "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Ligar
          </Button>
        </div>
      </div>
    </header>
  )
}
