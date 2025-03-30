"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface CarModelsProps {
  brand: string
  models: string[]
  selectedModel: string
  onSelectModel: (model: string) => void
}

export function CarModels({ brand, models, selectedModel, onSelectModel }: CarModelsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredModels, setFilteredModels] = useState(models)

  useEffect(() => {
    setFilteredModels(models.filter((model) => model.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm, models])

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Selecciona el modelo de {brand}</h3>
      <Input
        type="text"
        placeholder="Buscar modelo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filteredModels.map((model) => (
          <div
            key={model}
            className={`p-3 border rounded-lg text-center cursor-pointer transition-colors ${
              selectedModel === model
                ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                : "border-border hover:border-purple-300"
            }`}
            onClick={() => onSelectModel(model)}
          >
            {model}
          </div>
        ))}
      </div>
    </div>
  )
}

