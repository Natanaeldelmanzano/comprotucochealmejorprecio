"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { carBrands, getCarModels } from "@/lib/car-data"

interface CarBrandsProps {
  formData: {
    brand: string
    model: string
  }
  updateFormData: (data: { brand: string; model: string }) => void
}

export function CarBrands({ formData, updateFormData }: CarBrandsProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredBrands, setFilteredBrands] = useState(carBrands)
  const [selectedBrand, setSelectedBrand] = useState(formData.brand)
  const [availableModels, setAvailableModels] = useState<string[]>([])
  const [searchModelTerm, setSearchModelTerm] = useState("")
  const [filteredModels, setFilteredModels] = useState<string[]>([])

  useEffect(() => {
    setFilteredBrands(carBrands.filter((brand) => brand.toLowerCase().includes(searchTerm.toLowerCase())))
  }, [searchTerm])

  useEffect(() => {
    if (selectedBrand) {
      const models = getCarModels(selectedBrand)
      setAvailableModels(models)
      setFilteredModels(models)
    }
  }, [selectedBrand])

  useEffect(() => {
    if (availableModels.length > 0) {
      setFilteredModels(availableModels.filter((model) => model.toLowerCase().includes(searchModelTerm.toLowerCase())))
    }
  }, [searchModelTerm, availableModels])

  const handleBrandSelect = (brand: string) => {
    setSelectedBrand(brand)
    updateFormData({ brand, model: "" })
  }

  const handleModelSelect = (model: string) => {
    updateFormData({ brand: selectedBrand, model })
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Selecciona la marca de tu vehículo</h3>
        <Input
          type="text"
          placeholder="Buscar marca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {filteredBrands.map((brand) => (
            <div
              key={brand}
              className={`p-3 border rounded-lg text-center cursor-pointer transition-colors ${
                selectedBrand === brand
                  ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                  : "border-border hover:border-purple-300"
              }`}
              onClick={() => handleBrandSelect(brand)}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {selectedBrand && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Selecciona el modelo</h3>
          <Input
            type="text"
            placeholder="Buscar modelo..."
            value={searchModelTerm}
            onChange={(e) => setSearchModelTerm(e.target.value)}
            className="mb-4"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredModels.map((model) => (
              <div
                key={model}
                className={`p-3 border rounded-lg text-center cursor-pointer transition-colors ${
                  formData.model === model
                    ? "border-purple-600 bg-purple-50 dark:bg-purple-900/20"
                    : "border-border hover:border-purple-300"
                }`}
                onClick={() => handleModelSelect(model)}
              >
                {model}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

