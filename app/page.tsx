import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CarValuator } from "@/components/car-valuator"
import { ChatbotButton } from "@/components/chatbot/chatbot-button"
import { AdvancedCarSelector } from "@/components/advanced-car-selector"
import { FinancingCalculator } from "@/components/financing-calculator"
import { AIAssistantShowcase } from "@/components/ai-assistant-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <CarValuator />
      <AdvancedCarSelector />
      <FinancingCalculator />
      <Testimonials />
      <AIAssistantShowcase />
      <Contact />
      <Footer />
      <ChatbotButton />
    </main>
  )
}

