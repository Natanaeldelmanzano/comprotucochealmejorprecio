"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contacto
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/80"
          >
            Estamos a tu disposición para resolver cualquier duda
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Oficina central</h4>
                <p className="text-foreground/70">
                  Avenida de la Innovación, 25
                  <br />
                  33011 Oviedo, Asturias
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Teléfono</h4>
                <p className="text-foreground/70">984 263 220</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-foreground/70">info@comprotucochealmejorprecio.net</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Horario</h4>
                <p className="text-foreground/70">
                  Lunes a Viernes: 9:00 - 20:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold mb-3">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl shadow-md p-6 md:p-8"
            style={{
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Nombre completo*
                  </label>
                  <Input id="name" name="name" placeholder="Ej: Juan Pérez García" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email*
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Ej: juan@ejemplo.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">
                  Teléfono*
                </label>
                <Input id="phone" name="phone" type="tel" placeholder="Ej: 600123456" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium">
                  Asunto*
                </label>
                <Input id="subject" name="subject" placeholder="Ej: Consulta sobre tasación" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                  Mensaje*
                </label>
                <Textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

