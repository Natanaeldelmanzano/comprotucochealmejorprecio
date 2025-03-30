"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Bot, MessageSquare, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AIAssistantShowcase() {
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy el asistente virtual de ComproTuCocheAlMejorPrecio. ¿En qué puedo ayudarte?", isBot: true },
  ])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Añadir mensaje del usuario
    setMessages((prev) => [...prev, { text: inputValue, isBot: false }])
    setInputValue("")

    // Simular respuesta del bot
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          text: "Puedo ayudarte con la tasación de tu vehículo, explicarte nuestro proceso de compra o resolver cualquier duda sobre la venta de tu coche.",
          isBot: true,
        },
      ])
    }, 1500)
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Asistente Virtual</h2>
            <p className="text-lg text-foreground/80">
              Resuelve todas tus dudas al instante con nuestro asistente inteligente, disponible 24/7
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Bot size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Respuestas Instantáneas</h3>
                <p className="text-foreground/70">
                  Obtén información inmediata sobre tasaciones, documentación necesaria, proceso de venta y más.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <MessageSquare size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consultas Personalizadas</h3>
                <p className="text-foreground/70">
                  Resuelve dudas específicas sobre tu vehículo y recibe información adaptada a tus necesidades.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Sparkles size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Inteligencia Avanzada</h3>
                <p className="text-foreground/70">
                  Nuestro asistente utiliza tecnología de IA para ofrecerte la información más precisa y actualizada.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white group"
                onClick={() => document.getElementById("chatbot-demo")?.focus()}
              >
                Prueba nuestro asistente
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Efecto de sombra y elevación */}
            <div
              className="absolute inset-0 bg-white rounded-2xl transform translate-x-2 translate-y-2"
              style={{
                filter: "blur(20px)",
                opacity: 0.7,
                zIndex: -1,
              }}
            ></div>

            <div
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
                transform: "translateZ(0)",
              }}
            >
              <div className="bg-blue-600 p-4 text-white">
                <h3 className="text-xl font-semibold">Asistente Virtual</h3>
                <p className="text-sm opacity-90">Disponible 24/7 para resolver tus dudas</p>
              </div>

              <div className="h-[350px] p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.isBot ? "bg-white shadow-md" : "bg-blue-600 text-white"
                        }`}
                        style={{
                          boxShadow: message.isBot ? "0 4px 10px rgba(0, 0, 0, 0.05)" : "none",
                        }}
                      >
                        <p>{message.text}</p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div
                        className="max-w-[80%] rounded-lg p-3 bg-white shadow-md"
                        style={{
                          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)",
                        }}
                      >
                        <div className="flex space-x-1">
                          <div
                            className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 rounded-full bg-blue-600 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 border-t bg-white">
                <div className="flex items-center space-x-2">
                  <Input
                    id="chatbot-demo"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSendMessage()
                      }
                    }}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Send size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

