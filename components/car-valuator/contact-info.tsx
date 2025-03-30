"use client"

import type React from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface ContactInfoProps {
  formData: {
    name: string
    email: string
    phone: string
    province: string
    city: string
  }
  updateFormData: (data: Partial<ContactInfoProps["formData"]>) => void
}

export function ContactInfo({ formData, updateFormData }: ContactInfoProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    updateFormData({ [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    updateFormData({ [name]: value })
  }

  const provinces = [
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Islas Baleares",
    "Jaén",
    "La Coruña",
    "La Rioja",
    "Las Palmas",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Pontevedra",
    "Salamanca",
    "Santa Cruz de Tenerife",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza",
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre completo*</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Ej: Juan Pérez García"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email*</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Ej: juan@ejemplo.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono*</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Ej: 600123456"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="province">Provincia*</Label>
          <Select value={formData.province} onValueChange={(value) => handleSelectChange("province", value)}>
            <SelectTrigger id="province">
              <SelectValue placeholder="Selecciona provincia" />
            </SelectTrigger>
            <SelectContent>
              {provinces.map((province) => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Localidad*</Label>
          <Input
            type="text"
            id="city"
            name="city"
            placeholder="Ej: Madrid"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-4 md:col-span-2">
          <div className="flex items-start space-x-2">
            <Checkbox id="privacy" name="privacy" required />
            <Label htmlFor="privacy" className="text-sm">
              He leído y acepto la{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Política de Privacidad
              </a>{" "}
              y los{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Términos y Condiciones
              </a>
              .*
            </Label>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox id="marketing" name="marketing" />
            <Label htmlFor="marketing" className="text-sm">
              Acepto recibir comunicaciones comerciales personalizadas sobre productos y servicios relacionados.
            </Label>
          </div>
        </div>
      </div>
    </div>
  )
}

