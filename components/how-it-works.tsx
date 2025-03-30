"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: 1,
    title: "Solicita tasación",
    description:
      "Completa el formulario con los datos de tu vehículo para recibir una valoración inicial sin compromiso.",
  },
  {
    number: 2,
    title: "Peritación gratuita",
    description: "Nuestros técnicos realizarán una inspección detallada de tu vehículo para confirmar su estado.",
  },
  {
    number: 3,
    title: "Oferta definitiva",
    description:
      "Recibirás una oferta final basada en el estado real del vehículo, siempre buscando el mejor precio para ti.",
  },
  {
    number: 4,
    title: "Pago inmediato",
    description:
      "Si aceptas la oferta, recibirás el pago en el momento mediante transferencia bancaria o cheque bancario.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ¿Cómo funciona?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80"
          >
            Vender tu coche nunca fue tan fácil
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Línea conectora en escritorio */}
          <div className="hidden md:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-blue-600"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold relative z-10">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 px-8">Comenzar ahora</Button>
        </motion.div>
      </div>
    </section>
  )
}

