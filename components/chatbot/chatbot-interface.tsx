"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, Mic, MicOff, Volume2, VolumeX } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ChatbotAvatar } from "./chatbot-avatar"
import { getChatbotResponse } from "@/lib/chatbot-logic"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatbotInterfaceProps {
  onClose: () => void
}

export function ChatbotInterface({ onClose }: ChatbotInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "¡Hola! Soy el asistente virtual de ComproTuCocheAlMejorPrecio. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Speech recognition setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = SpeechRecognition ? new SpeechRecognition() : null

  if (recognition) {
    recognition.lang = "es-ES"
    recognition.continuous = false
    recognition.interimResults = false
  }

  // Speech synthesis setup
  const synth = window.speechSynthesis

  useEffect(() => {
    if (recognition) {
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }
    }
  }, [recognition])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Get bot response
    setTimeout(async () => {
      const botResponse = await getChatbotResponse(inputValue)

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)

      // Speak the response if speech synthesis is enabled
      if (isSpeaking && synth) {
        const utterance = new SpeechSynthesisUtterance(botResponse)
        utterance.lang = "es-ES"
        synth.speak(utterance)
      }
    }, 1000)
  }

  const toggleListening = () => {
    if (!recognition) return

    if (isListening) {
      recognition.stop()
    } else {
      recognition.start()
      setInputValue("")
    }
    setIsListening(!isListening)
  }

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking)

    if (isSpeaking && synth) {
      synth.cancel()
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-blue-600 p-4 text-white">
        <h2 className="text-xl font-semibold">Asistente Virtual</h2>
        <p className="text-sm opacity-90">Estoy aquí para ayudarte con la venta de tu coche</p>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 mr-2 flex-shrink-0">
                  <ChatbotAvatar />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === "user" ? "bg-blue-600 text-white" : "bg-muted"
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div className="flex justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-8 h-8 mr-2 flex-shrink-0">
                <ChatbotAvatar />
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="flex space-x-2">
                  <div
                    className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleSpeaking}
              className="flex-shrink-0"
              aria-label={isSpeaking ? "Desactivar voz" : "Activar voz"}
            >
              {isSpeaking ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleListening}
              className={`flex-shrink-0 ${isListening ? "bg-red-100 text-red-600 border-red-200 dark:bg-red-900/20 dark:border-red-800" : ""}`}
              aria-label={isListening ? "Detener grabación" : "Grabar mensaje"}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </Button>

            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage()
                }
              }}
              placeholder={isListening ? "Escuchando..." : "Escribe tu mensaje..."}
              disabled={isListening}
              className="flex-1"
            />

            <Button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ""}
              className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 text-white"
              aria-label="Enviar mensaje"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

