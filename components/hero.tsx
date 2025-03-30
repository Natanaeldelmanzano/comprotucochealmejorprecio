"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { carBrands, getCarModels } from "@/lib/car-data"

export function Hero() {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    kilometers: "",
    phone: "",
  })
  const [availableModels, setAvailableModels] = useState<string[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Actualizar modelos disponibles cuando cambia la marca
  useEffect(() => {
    if (formData.brand) {
      const models = getCarModels(formData.brand)
      setAvailableModels(models)
    } else {
      setAvailableModels([])
    }
  }, [formData.brand])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  // Generate years from current year to 20 years ago
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 21 }, (_, i) => (currentYear - i).toString())

  return (
    <section id="inicio" className="pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600">
              Vende tu coche al mejor precio garantizado
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Te ofrecemos la valoración más competitiva del mercado por tu vehículo usado. Proceso rápido, seguro y sin
              complicaciones. Recibe el pago en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8">
                Tasar mi coche ahora
              </Button>
              <Button variant="outline" className="text-lg py-6 px-8">
                ¿Cómo funciona?
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform hover:translate-y-[-5px] transition-all duration-300"
            style={{
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08), 0 6px 10px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Tasación Rápida</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="brand" className="block text-sm font-medium">
                  Marca
                </label>
                <Select value={formData.brand} onValueChange={(value) => handleSelectChange("brand", value)}>
                  <SelectTrigger id="brand" className="w-full">
                    <SelectValue placeholder="Selecciona marca" />
                  </SelectTrigger>
                  <SelectContent>
                    {carBrands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {formData.brand && (
                <div className="space-y-2">
                  <label htmlFor="model" className="block text-sm font-medium">
                    Modelo
                  </label>
                  <Select value={formData.model} onValueChange={(value) => handleSelectChange("model", value)}>
                    <SelectTrigger id="model" className="w-full">
                      <SelectValue placeholder="Selecciona modelo" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableModels.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="year" className="block text-sm font-medium">
                  Año
                </label>
                <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
                  <SelectTrigger id="year" className="w-full">
                    <SelectValue placeholder="Selecciona año" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                    <SelectItem value="older">Anterior a {currentYear - 20}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="kilometers" className="block text-sm font-medium">
                  Kilometraje
                </label>
                <Input
                  type="number"
                  id="kilometers"
                  name="kilometers"
                  placeholder="Ej: 120000"
                  value={formData.kilometers}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Teléfono
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Ej: 600123456"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                Solicitar tasación
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

