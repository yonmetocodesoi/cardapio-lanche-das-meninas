"use client"

import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900">
              <span className="text-lg font-semibold text-white">L</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-slate-900">
                Lanches das Meninas
              </h1>
              <p className="text-sm text-slate-500">Delivery de qualidade</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex"
              onClick={() => window.open("https://wa.me/5588992503868", "_blank")}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("tel:+5588992503868", "_blank")}
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Ligar</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}