"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CarBrands } from "./car-brands"
import { CarDetails } from "./car-details"
import { ContactInfo } from "./contact-info"
import { ValuationResult } from "./valuation-result"

const steps = [
  { id: 1, name: "Marca y Modelo" },
  { id: 2, name: "Detalles del Vehículo" },
  { id: 3, name: "Información de Contacto" },
  { id: 4, name: "Resultado" },
]

export function CarValuator() {
  const [currentStep, setCurrentStep] = useState(1)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    fuel: "",
    transmission: "",
    kilometers: "",
    condition: "",
    name: "",
    email: "",
    phone: "",
    province: "",
    city: "",
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length))
    // Mantener la posición de scroll
    if (sectionRef.current) {
      const yOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: yOffset, behavior: "smooth" })
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    // Mantener la posición de scroll
    if (sectionRef.current) {
      const yOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: yOffset, behavior: "smooth" })
    }
  }

  return (
    <section id="tasacion" className="py-16 md:py-24 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tasación de tu Vehículo</h2>
          <p className="text-lg text-foreground/80">
            Obtén una valoración precisa de tu coche en pocos pasos. Te garantizamos el mejor precio del mercado.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      step.id === currentStep
                        ? "bg-blue-600 text-white"
                        : step.id < currentStep
                          ? "bg-green-500 text-white"
                          : "bg-muted text-foreground/60"
                    }`}
                  >
                    {step.id < currentStep ? "✓" : step.id}
                  </div>
                  <span className="text-sm mt-2 hidden md:block">{step.name}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-muted w-full rounded"></div>
              <motion.div
                className="absolute top-0 left-0 h-1 bg-blue-600 rounded"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </div>
          </div>

          {/* Step Content */}
          <div className="min-h-[400px]">
            {currentStep === 1 && <CarBrands formData={formData} updateFormData={updateFormData} />}
            {currentStep === 2 && <CarDetails formData={formData} updateFormData={updateFormData} />}
            {currentStep === 3 && <ContactInfo formData={formData} updateFormData={updateFormData} />}
            {currentStep === 4 && <ValuationResult formData={formData} />}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button variant="outline" onClick={prevStep}>
                Anterior
              </Button>
            )}
            {currentStep < steps.length && (
              <Button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white" onClick={nextStep}>
                {currentStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

