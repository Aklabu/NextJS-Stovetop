'use client'

import { useState } from 'react'

interface PricingOption {
  id: string
  title: string
  price: string
  detail: string | null
  desc: string
}

export default function PricingCards({ options }: { options: PricingOption[] }) {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {options.map((option) => {
        const isSelected = selected === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setSelected(isSelected ? null : option.id)}
            className={`rounded-2xl border p-8 text-left transition-all duration-200 ${
              isSelected
                ? 'border-purple-400/80 bg-purple-900/20 ring-1 ring-purple-500/40'
                : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
            }`}
          >
            <h3 className="text-lg font-bold mb-1">{option.title}</h3>
            {option.detail && (
              <p className="text-sm text-gray-400 mb-3">{option.detail}</p>
            )}
            <p className={`text-4xl font-extrabold mb-4 ${isSelected ? 'text-purple-300' : 'text-white'}`}>
              {option.price}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{option.desc}</p>
          </button>
        )
      })}
    </div>
  )
}
