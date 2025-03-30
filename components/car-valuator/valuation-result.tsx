"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { calculateCarValue } from "@/lib/car-valuation"

interface ValuationResultProps {
  formData: {
    brand: string
    model: string
    year: string
    kilometers: string
    condition: string
    fuel: string
    name: string
    phone: string
  }
}

export function ValuationResult({ formData }: ValuationResultProps) {
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to get valuation
    const timer = setTimeout(() => {
      const value = calculateCarValue(
        formData.brand,
        formData.model,
        Number.parseInt(formData.year),
        Number.parseInt(formData.kilometers),
        formData.condition,
        formData.fuel,
      )
      setEstimatedValue(value)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [formData])

  return (
    <div className="text-center space-y-8">
      <h3 className="text-xl font-semibold mb-4">Resultado de la Tasación</h3>

      {loading ? (
        <div className="py-12">
          <div className="w-16 h-16 border-4 border-t-blue-600 border-b-blue-600 border-l-transparent border-r-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg">Calculando el valor de tu vehículo...</p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <p className="text-lg mb-2">Valor estimado de tu vehículo:</p>
            <h4 className="text-4xl font-bold text-blue-600">{estimatedValue?.toLocaleString("es-ES")} €</h4>
            <p className="text-sm text-muted-foreground mt-2">
              *Esta es una estimación inicial basada en los datos proporcionados
            </p>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Resumen de tu vehículo</h4>
            <ul className="space-y-2 text-left">
              <li>
                <span className="font-medium">Marca:</span> {formData.brand}
              </li>
              <li>
                <span className="font-medium">Modelo:</span> {formData.model}
              </li>
              <li>
                <span className="font-medium">Año:</span> {formData.year}
              </li>
              <li>
                <span className="font-medium">Kilometraje:</span>{" "}
                {Number.parseInt(formData.kilometers).toLocaleString("es-ES")} km
              </li>
              <li>
                <span className="font-medium">Estado:</span> {formData.condition}
              </li>
              <li>
                <span className="font-medium">Combustible:</span> {formData.fuel}
              </li>
            </ul>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">¿Qué sucede ahora?</h4>
            <p className="mb-4">
              Hemos recibido tu solicitud de tasación. Uno de nuestros especialistas se pondrá en contacto contigo en
              las próximas 24 horas al número {formData.phone} para confirmar los detalles y ofrecerte una valoración
              definitiva.
            </p>
            <p>¡Gracias por confiar en ComproTuCocheAlMejorPrecio, {formData.name}!</p>
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <Button variant="outline">Imprimir tasación</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contactar ahora</Button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

