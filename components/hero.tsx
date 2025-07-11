"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToMenu = () => {
    const menuElement = document.getElementById("menu")
    menuElement?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-image.jpg" alt="Lanches das Meninas" fill className="object-cover opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-800/70 to-blue-900/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
            LANCHES DAS
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">MENINAS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Deliciosos sanduíches artesanais preparados com muito carinho. Todos acompanham alface, tomate, batata palha
            e milho.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-2xl"
            onClick={scrollToMenu}
          >
            Ver Cardápio
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg backdrop-blur-sm shadow-2xl"
            onClick={() => window.open("https://wa.me/5588992503868", "_blank")}
          >
            Fazer Pedido
          </Button>
        </div>
      </div>
    </section>
  )
}
