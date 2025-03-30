"use client"

import type React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CarDetailsProps {
  formData: {
    year: string
    fuel: string
    transmission: string
    kilometers: string
    condition: string
  }
  updateFormData: (data: Partial<CarDetailsProps["formData"]>) => void
}

export function CarDetails({ formData, updateFormData }: CarDetailsProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    updateFormData({ [name]: value })
  }

  // Generate years from current year to 20 years ago
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 21 }, (_, i) => (currentYear - i).toString())

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Detalles del vehículo</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="year">Año de matriculación*</Label>
          <Select value={formData.year} onValueChange={(value) => handleSelectChange("year", value)}>
            <SelectTrigger id="year">
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
          <Label htmlFor="fuel">Combustible*</Label>
          <Select value={formData.fuel} onValueChange={(value) => handleSelectChange("fuel", value)}>
            <SelectTrigger id="fuel">
              <SelectValue placeholder="Selecciona combustible" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gasolina">Gasolina</SelectItem>
              <SelectItem value="Diesel">Diésel</SelectItem>
              <SelectItem value="Híbrido">Híbrido</SelectItem>
              <SelectItem value="Eléctrico">Eléctrico</SelectItem>
              <SelectItem value="GLP">GLP/Gas</SelectItem>
              <SelectItem value="Otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="transmission">Transmisión*</Label>
          <Select value={formData.transmission} onValueChange={(value) => handleSelectChange("transmission", value)}>
            <SelectTrigger id="transmission">
              <SelectValue placeholder="Selecciona transmisión" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Manual">Manual</SelectItem>
              <SelectItem value="Automática">Automática</SelectItem>
              <SelectItem value="Semiautomática">Semiautomática</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="kilometers">Kilometraje*</Label>
          <Input
            type="number"
            id="kilometers"
            name="kilometers"
            placeholder="Ej: 120000"
            value={formData.kilometers}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="condition">Estado general*</Label>
          <Select value={formData.condition} onValueChange={(value) => handleSelectChange("condition", value)}>
            <SelectTrigger id="condition">
              <SelectValue placeholder="Selecciona estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Excelente">Excelente - Como nuevo</SelectItem>
              <SelectItem value="Muy bueno">Muy bueno - Mínimos detalles</SelectItem>
              <SelectItem value="Bueno">Bueno - Pequeños desperfectos</SelectItem>
              <SelectItem value="Regular">Regular - Algunos desperfectos visibles</SelectItem>
              <SelectItem value="Mejorable">Mejorable - Necesita reparaciones</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

