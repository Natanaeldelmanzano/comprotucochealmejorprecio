"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "Proceso impecable de principio a fin. Me ofrecieron 2.500€ más que la competencia por mi Audi A4. La gestión de los trámites fue rápida y sin complicaciones. Totalmente recomendable.",
    author: "Carlos Martínez",
    location: "Oviedo",
    rating: 5,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    text: "Tenía dudas al principio, pero el servicio superó todas mis expectativas. La tasación fue justa y el pago se realizó en el mismo día. El personal fue muy profesional y atento en todo momento.",
    author: "Laura Sánchez",
    location: "Gijón",
    rating: 5,
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    text: "Vendí mi Ford Focus de 2015 y el proceso fue sorprendentemente rápido. Desde la tasación inicial hasta el pago final pasaron solo 48 horas. Me ahorraron todos los dolores de cabeza de vender por mi cuenta.",
    author: "Miguel Ángel Rodríguez",
    location: "Avilés",
    rating: 4,
    image: "/placeholder.svg?height=50&width=50",
  },
]

export function Testimonials() {
  return (
    <section id="opiniones" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Opiniones de nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80"
          >
            Descubre por qué miles de personas confían en nosotros
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-md p-6 relative"
            >
              <div className="absolute top-6 right-6 text-purple-600">
                <span className="text-4xl font-serif">"</span>
              </div>
              <p className="mb-6 text-foreground/80 italic relative z-10">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

