"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Clock, FileText, Shield, CreditCard, MapPin } from "lucide-react"

const benefits = [
  {
    icon: <BadgeCheck className="w-10 h-10 text-blue-600" />,
    title: "Mejor precio garantizado",
    description:
      "Ofrecemos hasta un 10% más que nuestra competencia. Si encuentras una oferta mejor, la igualamos y mejoramos.",
  },
  {
    icon: <Clock className="w-10 h-10 text-blue-600" />,
    title: "Proceso rápido y eficiente",
    description:
      "Tasación en menos de 2 horas y pago inmediato en el momento de la firma. Sin esperas ni complicaciones.",
  },
  {
    icon: <FileText className="w-10 h-10 text-blue-600" />,
    title: "Gestión de trámites gratuita",
    description: "Nos encargamos de toda la documentación y trámites administrativos sin coste adicional para ti.",
  },
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Seguridad y transparencia",
    description: "Proceso 100% legal y transparente. Somos una empresa con más de 15 años de experiencia en el sector.",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-blue-600" />,
    title: "Pago inmediato",
    description:
      "Recibe el pago en el momento mediante transferencia bancaria o cheque bancario, según tu preferencia.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
    title: "Servicio en toda Asturias",
    description: "Nos desplazamos a cualquier punto de Asturias para evaluar tu vehículo sin coste adicional.",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ¿Por qué elegirnos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80"
          >
            Descubre las ventajas de vender tu coche con nosotros
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

