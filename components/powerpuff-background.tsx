"use client"

import { useEffect, useState } from "react"

export function PowerpuffBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Céu com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-600"></div>

      {/* Nuvens */}
      <div className="absolute top-10 left-10 w-20 h-12 bg-white/80 rounded-full animate-float"></div>
      <div className="absolute top-20 right-20 w-16 h-10 bg-white/70 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-32 left-1/3 w-24 h-14 bg-white/60 rounded-full animate-float delay-2000"></div>
      <div className="absolute top-16 right-1/3 w-18 h-11 bg-white/75 rounded-full animate-float delay-1500"></div>

      {/* Cidade - Prédios */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        {/* Prédio 1 */}
        <div className="absolute bottom-0 left-4 w-12 h-32 bg-gray-700 rounded-t-lg">
          <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse"></div>
          <div className="absolute top-6 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-500"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-1000"></div>
        </div>

        {/* Prédio 2 */}
        <div className="absolute bottom-0 left-20 w-16 h-40 bg-gray-800 rounded-t-lg">
          <div className="absolute top-3 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-700"></div>
          <div className="absolute top-8 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse"></div>
          <div className="absolute top-3 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-300"></div>
          <div className="absolute top-8 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-1200"></div>
        </div>

        {/* Prédio 3 */}
        <div className="absolute bottom-0 left-40 w-14 h-36 bg-gray-600 rounded-t-lg">
          <div className="absolute top-4 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-400"></div>
          <div className="absolute top-4 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-800"></div>
        </div>

        {/* Prédio 4 */}
        <div className="absolute bottom-0 right-4 w-18 h-44 bg-gray-700 rounded-t-lg">
          <div className="absolute top-2 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-600"></div>
          <div className="absolute top-6 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-200"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-900"></div>
          <div className="absolute top-6 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-1100"></div>
        </div>

        {/* Prédio 5 */}
        <div className="absolute bottom-0 right-24 w-12 h-28 bg-gray-800 rounded-t-lg">
          <div className="absolute top-3 left-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-1300"></div>
          <div className="absolute top-3 right-2 w-2 h-2 bg-yellow-300 rounded-sm animate-pulse delay-100"></div>
        </div>

        {/* Mais prédios para mobile */}
        <div className="absolute bottom-0 left-60 w-10 h-24 bg-gray-600 rounded-t-lg sm:block hidden">
          <div className="absolute top-2 left-1 w-1.5 h-1.5 bg-yellow-300 rounded-sm animate-pulse delay-500"></div>
          <div className="absolute top-2 right-1 w-1.5 h-1.5 bg-yellow-300 rounded-sm animate-pulse delay-1400"></div>
        </div>
      </div>

      {/* Meninas Superpoderosas voando */}
      {/* Florzinha (Rosa) */}
      <div className="absolute top-1/4 left-1/4 animate-fly-1">
        <div className="relative">
          {/* Rastro de voo */}
          <div className="absolute -left-8 top-1/2 w-8 h-1 bg-pink-400/60 rounded-full animate-pulse"></div>
          {/* Corpo */}
          <div className="w-8 h-8 bg-pink-500 rounded-full relative">
            {/* Olhos */}
            <div className="absolute top-2 left-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            {/* Cabelo */}
            <div className="absolute -top-1 left-1 w-6 h-3 bg-orange-400 rounded-t-full"></div>
            {/* Laço */}
            <div className="absolute -top-2 left-2.5 w-3 h-2 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Docinho (Verde) */}
      <div className="absolute top-1/3 right-1/4 animate-fly-2">
        <div className="relative">
          {/* Rastro de voo */}
          <div className="absolute -right-8 top-1/2 w-8 h-1 bg-green-400/60 rounded-full animate-pulse"></div>
          {/* Corpo */}
          <div className="w-8 h-8 bg-green-500 rounded-full relative">
            {/* Olhos */}
            <div className="absolute top-2 left-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            {/* Cabelo */}
            <div className="absolute -top-1 left-1 w-6 h-3 bg-black rounded-t-full"></div>
          </div>
        </div>
      </div>

      {/* Lindinha (Azul) */}
      <div className="absolute top-1/2 left-1/2 animate-fly-3">
        <div className="relative">
          {/* Rastro de voo */}
          <div className="absolute -left-6 top-1/2 w-6 h-1 bg-blue-400/60 rounded-full animate-pulse"></div>
          {/* Corpo */}
          <div className="w-8 h-8 bg-blue-500 rounded-full relative">
            {/* Olhos */}
            <div className="absolute top-2 left-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute top-2 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            {/* Cabelo */}
            <div className="absolute -top-1 left-1 w-6 h-3 bg-yellow-400 rounded-t-full"></div>
            {/* Rabo de cavalo */}
            <div className="absolute -top-2 right-0 w-2 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute -top-2 left-0 w-2 h-4 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Efeitos de velocidade */}
      <div className="absolute top-1/4 left-1/3 w-12 h-0.5 bg-white/40 rounded-full animate-speed-line-1"></div>
      <div className="absolute top-1/3 right-1/3 w-10 h-0.5 bg-white/40 rounded-full animate-speed-line-2"></div>
      <div className="absolute top-1/2 left-1/2 w-8 h-0.5 bg-white/40 rounded-full animate-speed-line-3"></div>

      {/* Estrelas cintilantes */}
      <div className="absolute top-12 left-12 w-2 h-2 bg-white rotate-45 animate-sparkle"></div>
      <div className="absolute top-24 right-16 w-1.5 h-1.5 bg-yellow-300 rotate-45 animate-sparkle delay-1000"></div>
      <div className="absolute top-40 left-1/2 w-2 h-2 bg-white rotate-45 animate-sparkle delay-2000"></div>
      <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-yellow-300 rotate-45 animate-sparkle delay-1500"></div>
    </div>
  )
}
