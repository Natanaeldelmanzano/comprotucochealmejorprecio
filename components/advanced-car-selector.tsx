"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, ChevronRight, Car, Calendar, Gauge, Info, User, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { carBrands, getCarModels } from "@/lib/car-data"

export function AdvancedCarSelector() {
  const [step, setStep] = useState(1)
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedYear, setSelectedYear] = useState("")
  const [selectedCondition, setSelectedCondition] = useState("")
  const [availableModels, setAvailableModels] = useState<string[]>([])
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Generar años desde el actual hasta 20 años atrás
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 21 }, (_, i) => (currentYear - i).toString())

  // Condiciones del vehículo
  const conditions = ["Excelente", "Muy bueno", "Bueno", "Regular", "Mejorable"]

  // Actualizar modelos disponibles cuando cambia la marca
  useEffect(() => {
    if (selectedBrand) {
      const models = getCarModels(selectedBrand)
      setAvailableModels(models)
    } else {
      setAvailableModels([])
    }
  }, [selectedBrand])

  // Organizar marcas en grupos de 4 para mantener simetría
  const brandGroups: string[][] = []
  for (let i = 0; i < carBrands.length; i += 4) {
    brandGroups.push(carBrands.slice(i, i + 4))
  }

  // Organizar modelos en grupos de 3 para mantener simetría
  const modelGroups: string[][] = []
  for (let i = 0; i < availableModels.length; i += 3) {
    modelGroups.push(availableModels.slice(i, i + 3))
  }

  // Organizar años en grupos de 4 para mantener simetría
  const yearGroups: string[][] = []
  for (let i = 0; i < years.length; i += 4) {
    yearGroups.push(years.slice(i, i + 4))
  }

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 5))
  }

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContactInfo((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulación de envío de datos
    setTimeout(() => {
      console.log({
        vehicle: {
          brand: selectedBrand,
          model: selectedModel,
          year: selectedYear,
          condition: selectedCondition,
        },
        contact: contactInfo,
      })

      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const isContactValid = () => {
    return (
      contactInfo.name.trim() !== "" &&
      contactInfo.phone.trim() !== "" &&
      contactInfo.email.trim() !== "" &&
      contactInfo.location.trim() !== ""
    )
  }

  return (
    <section id="tasacion-avanzada" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selector Avanzado de Vehículos</h2>
            <p className="text-lg text-foreground/80">Encuentra el valor exacto de tu coche en pocos pasos</p>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Indicador de pasos */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4, 5].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center relative">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium ${
                      step === stepNumber
                        ? "bg-blue-600 text-white"
                        : step > stepNumber
                          ? "bg-green-500 text-white"
                          : "bg-white text-blue-600 border-2 border-blue-600"
                    }`}
                    initial={{ scale: 1 }}
                    animate={{
                      scale: step === stepNumber ? [1, 1.1, 1] : 1,
                      boxShadow:
                        step === stepNumber ? "0 0 0 rgba(37, 99, 235, 0.5), 0 0 20px rgba(37, 99, 235, 0.3)" : "none",
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: step === stepNumber ? Number.POSITIVE_INFINITY : 0,
                      repeatDelay: 2,
                    }}
                  >
                    {step > stepNumber ? <Check size={24} /> : stepNumber}
                  </motion.div>
                  <span className="text-sm mt-2 font-medium">
                    {stepNumber === 1 && "Marca"}
                    {stepNumber === 2 && "Modelo"}
                    {stepNumber === 3 && "Año"}
                    {stepNumber === 4 && "Estado"}
                    {stepNumber === 5 && "Contacto"}
                  </span>
                </div>
              ))}
            </div>

            {/* Línea conectora */}
            <div className="relative mt-6">
              <div className="absolute top-0 left-[calc(10%)] right-[calc(10%)] h-1 bg-gray-200 rounded-full"></div>
              <motion.div
                className="absolute top-0 left-[calc(10%)] h-1 bg-blue-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(step - 1) * 25}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </div>

          {/* Contenedor principal con efecto de flotabilidad */}
          {!isSubmitted ? (
            <motion.div
              className="bg-white rounded-2xl overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Cabecera */}
              <div className="bg-blue-600 p-6 text-white">
                <div className="flex items-center space-x-3">
                  {step === 1 && <Car size={24} />}
                  {step === 2 && <Car size={24} />}
                  {step === 3 && <Calendar size={24} />}
                  {step === 4 && <Gauge size={24} />}
                  {step === 5 && <User size={24} />}
                  <h3 className="text-xl font-semibold">
                    {step === 1 && "Selecciona la marca de tu vehículo"}
                    {step === 2 && "Selecciona el modelo"}
                    {step === 3 && "¿De qué año es tu vehículo?"}
                    {step === 4 && "¿En qué estado se encuentra?"}
                    {step === 5 && "Información de contacto"}
                  </h3>
                </div>
              </div>

              {/* Contenido del paso */}
              <div className="p-6 min-h-[400px]">
                {/* Paso 1: Selección de marca */}
                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-foreground/70 mb-6">
                      Selecciona la marca de tu vehículo para comenzar la tasación
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {brandGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-4">
                          {group.map((brand) => (
                            <motion.div
                              key={brand}
                              className={`p-4 rounded-xl cursor-pointer transition-all ${
                                selectedBrand === brand
                                  ? "bg-blue-50 border-2 border-blue-600"
                                  : "bg-white border-2 border-gray-100 hover:border-blue-200"
                              }`}
                              whileHover={{ y: -5 }}
                              onClick={() => setSelectedBrand(brand)}
                              style={{
                                boxShadow:
                                  selectedBrand === brand
                                    ? "0 10px 20px rgba(37, 99, 235, 0.1)"
                                    : "0 4px 6px rgba(0, 0, 0, 0.05)",
                              }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{brand}</span>
                                {selectedBrand === brand && (
                                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Check size={12} className="text-white" />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Paso 2: Selección de modelo */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="font-medium">Marca seleccionada:</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedBrand}
                      </span>
                    </div>

                    <p className="text-foreground/70 mb-6">Selecciona el modelo específico de tu {selectedBrand}</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {modelGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-4">
                          {group.map((model) => (
                            <motion.div
                              key={model}
                              className={`p-4 rounded-xl cursor-pointer transition-all ${
                                selectedModel === model
                                  ? "bg-blue-50 border-2 border-blue-600"
                                  : "bg-white border-2 border-gray-100 hover:border-blue-200"
                              }`}
                              whileHover={{ y: -5 }}
                              onClick={() => setSelectedModel(model)}
                              style={{
                                boxShadow:
                                  selectedModel === model
                                    ? "0 10px 20px rgba(37, 99, 235, 0.1)"
                                    : "0 4px 6px rgba(0, 0, 0, 0.05)",
                              }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{model}</span>
                                {selectedModel === model && (
                                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Check size={12} className="text-white" />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Paso 3: Selección de año */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="font-medium">Vehículo seleccionado:</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedBrand}
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedModel}
                      </span>
                    </div>

                    <p className="text-foreground/70 mb-6">Selecciona el año de matriculación de tu vehículo</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {yearGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-4">
                          {group.map((year) => (
                            <motion.div
                              key={year}
                              className={`p-4 rounded-xl cursor-pointer transition-all ${
                                selectedYear === year
                                  ? "bg-blue-50 border-2 border-blue-600"
                                  : "bg-white border-2 border-gray-100 hover:border-blue-200"
                              }`}
                              whileHover={{ y: -5 }}
                              onClick={() => setSelectedYear(year)}
                              style={{
                                boxShadow:
                                  selectedYear === year
                                    ? "0 10px 20px rgba(37, 99, 235, 0.1)"
                                    : "0 4px 6px rgba(0, 0, 0, 0.05)",
                              }}
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">{year}</span>
                                {selectedYear === year && (
                                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                    <Check size={12} className="text-white" />
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Paso 4: Selección de estado */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="font-medium">Vehículo seleccionado:</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedBrand}
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedModel}
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedYear}
                      </span>
                    </div>

                    <p className="text-foreground/70 mb-6">¿En qué estado se encuentra tu vehículo?</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {conditions.map((condition) => (
                        <motion.div
                          key={condition}
                          className={`p-5 rounded-xl cursor-pointer transition-all ${
                            selectedCondition === condition
                              ? "bg-blue-50 border-2 border-blue-600"
                              : "bg-white border-2 border-gray-100 hover:border-blue-200"
                          }`}
                          whileHover={{ y: -5 }}
                          onClick={() => setSelectedCondition(condition)}
                          style={{
                            boxShadow:
                              selectedCondition === condition
                                ? "0 10px 20px rgba(37, 99, 235, 0.1)"
                                : "0 4px 6px rgba(0, 0, 0, 0.05)",
                          }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-lg">{condition}</span>
                            {selectedCondition === condition && (
                              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                                <Check size={12} className="text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-foreground/70">
                            {condition === "Excelente" &&
                              "Como nuevo, sin defectos visibles y con mantenimiento al día."}
                            {condition === "Muy bueno" && "Mínimos detalles de uso, mecánicamente perfecto."}
                            {condition === "Bueno" && "Algunos detalles estéticos menores, buen estado mecánico."}
                            {condition === "Regular" && "Desgaste visible y posibles problemas mecánicos menores."}
                            {condition === "Mejorable" && "Necesita reparaciones estéticas y/o mecánicas."}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Paso 5: Información de contacto */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <span className="font-medium">Vehículo seleccionado:</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedBrand}
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedModel}
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedYear}
                      </span>
                      <ChevronRight size={16} className="text-gray-400" />
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedCondition}
                      </span>
                    </div>

                    <p className="text-foreground/70 mb-6">
                      Para finalizar, necesitamos tus datos de contacto para enviarte la tasación
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="flex items-center text-sm font-medium">
                          <User size={16} className="mr-2 text-blue-600" />
                          Nombre completo*
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleContactChange}
                          placeholder="Ej: Juan Pérez García"
                          className="border-gray-200 focus:border-blue-600"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="flex items-center text-sm font-medium">
                          <Phone size={16} className="mr-2 text-blue-600" />
                          Teléfono*
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={contactInfo.phone}
                          onChange={handleContactChange}
                          placeholder="Ej: 600123456"
                          className="border-gray-200 focus:border-blue-600"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="flex items-center text-sm font-medium">
                          <Mail size={16} className="mr-2 text-blue-600" />
                          Email*
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={contactInfo.email}
                          onChange={handleContactChange}
                          placeholder="Ej: juan@ejemplo.com"
                          className="border-gray-200 focus:border-blue-600"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="location" className="flex items-center text-sm font-medium">
                          <MapPin size={16} className="mr-2 text-blue-600" />
                          Localidad*
                        </label>
                        <Input
                          id="location"
                          name="location"
                          value={contactInfo.location}
                          onChange={handleContactChange}
                          placeholder="Ej: Oviedo"
                          className="border-gray-200 focus:border-blue-600"
                          required
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm text-foreground/70">
                        Al enviar este formulario, aceptas nuestra política de privacidad y términos de uso.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Botones de navegación */}
              <div className="p-6 border-t border-gray-100 flex justify-between">
                {step > 1 ? (
                  <Button variant="outline" onClick={prevStep}>
                    Anterior
                  </Button>
                ) : (
                  <div></div> // Espacio vacío para mantener la alineación
                )}

                {step < 5 ? (
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={nextStep}
                    disabled={
                      (step === 1 && !selectedBrand) ||
                      (step === 2 && !selectedModel) ||
                      (step === 3 && !selectedYear) ||
                      (step === 4 && !selectedCondition)
                    }
                  >
                    Siguiente
                  </Button>
                ) : (
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleSubmit}
                    disabled={!isContactValid() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Enviando</span>
                        <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                      </>
                    ) : (
                      "Obtener tasación"
                    )}
                  </Button>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="bg-green-600 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Check size={24} />
                  <h3 className="text-xl font-semibold">¡Solicitud enviada con éxito!</h3>
                </div>
              </div>

              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check size={40} className="text-green-600" />
                </div>

                <h4 className="text-2xl font-bold mb-4">Gracias, {contactInfo.name}</h4>

                <p className="text-lg mb-6">
                  Hemos recibido tu solicitud de tasación para tu {selectedBrand} {selectedModel} del año {selectedYear}
                  .
                </p>

                <p className="mb-8">
                  Uno de nuestros especialistas se pondrá en contacto contigo en las próximas 24 horas al número{" "}
                  {contactInfo.phone} para ofrecerte una valoración personalizada.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      setStep(1)
                      setSelectedBrand("")
                      setSelectedModel("")
                      setSelectedYear("")
                      setSelectedCondition("")
                      setContactInfo({
                        name: "",
                        phone: "",
                        email: "",
                        location: "",
                      })
                      setIsSubmitted(false)
                    }}
                  >
                    Tasar otro vehículo
                  </Button>

                  <Button variant="outline">Volver al inicio</Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Nota informativa */}
          <div className="mt-6 flex items-start space-x-2 text-sm text-foreground/70">
            <Info size={16} className="flex-shrink-0 mt-0.5" />
            <p>
              Esta herramienta proporciona una estimación inicial. Para una tasación precisa, uno de nuestros
              especialistas evaluará personalmente tu vehículo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

