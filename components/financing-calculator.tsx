"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calculator, DollarSign, Calendar, Percent, ArrowRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export function FinancingCalculator() {
  const [carValue, setCarValue] = useState(15000)
  const [downPayment, setDownPayment] = useState(3000)
  const [interestRate, setInterestRate] = useState(5.9)
  const [loanTerm, setLoanTerm] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  // Calcular el pago mensual y el interés total
  useEffect(() => {
    const principal = carValue - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm

    if (principal > 0 && monthlyRate > 0 && numPayments > 0) {
      const x = Math.pow(1 + monthlyRate, numPayments)
      const monthly = (principal * x * monthlyRate) / (x - 1)

      setMonthlyPayment(monthly)
      setTotalInterest(monthly * numPayments - principal)
    } else {
      setMonthlyPayment(principal / numPayments || 0)
      setTotalInterest(0)
    }
  }, [carValue, downPayment, interestRate, loanTerm])

  const handleCarValueChange = (value: number[]) => {
    setCarValue(value[0])
  }

  const handleDownPaymentChange = (value: number[]) => {
    setDownPayment(value[0])
  }

  const handleInterestRateChange = (value: number[]) => {
    setInterestRate(value[0])
  }

  const handleLoanTermChange = (value: number[]) => {
    setLoanTerm(value[0])
  }

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Calculadora de Financiación</h2>
            <p className="text-lg text-foreground/80">
              Calcula tu cuota mensual y planifica la compra de tu próximo vehículo
            </p>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Formulario de cálculo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <div className="bg-blue-600 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <Calculator size={24} />
                  <h3 className="text-xl font-semibold">Calcula tu financiación</h3>
                </div>
              </div>

              <div className="p-6 space-y-8">
                {/* Valor del vehículo */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <DollarSign size={20} className="text-blue-600" />
                      <label htmlFor="car-value" className="font-medium">
                        Valor del vehículo
                      </label>
                    </div>
                    <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 font-medium">
                      {carValue.toLocaleString("es-ES")} €
                    </div>
                  </div>

                  <Slider
                    id="car-value"
                    min={1000}
                    max={50000}
                    step={500}
                    value={[carValue]}
                    onValueChange={handleCarValueChange}
                    className="py-4"
                  />

                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>1.000 €</span>
                    <span>50.000 €</span>
                  </div>
                </div>

                {/* Entrada inicial */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <DollarSign size={20} className="text-blue-600" />
                      <label htmlFor="down-payment" className="font-medium">
                        Entrada inicial
                      </label>
                    </div>
                    <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 font-medium">
                      {downPayment.toLocaleString("es-ES")} €
                    </div>
                  </div>

                  <Slider
                    id="down-payment"
                    min={0}
                    max={carValue * 0.5}
                    step={500}
                    value={[downPayment]}
                    onValueChange={handleDownPaymentChange}
                    className="py-4"
                  />

                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>0 €</span>
                    <span>{(carValue * 0.5).toLocaleString("es-ES")} €</span>
                  </div>
                </div>

                {/* Tipo de interés */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Percent size={20} className="text-blue-600" />
                      <label htmlFor="interest-rate" className="font-medium">
                        Tipo de interés
                      </label>
                    </div>
                    <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 font-medium">
                      {interestRate.toFixed(1)}%
                    </div>
                  </div>

                  <Slider
                    id="interest-rate"
                    min={1}
                    max={15}
                    step={0.1}
                    value={[interestRate]}
                    onValueChange={handleInterestRateChange}
                    className="py-4"
                  />

                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Plazo del préstamo */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Calendar size={20} className="text-blue-600" />
                      <label htmlFor="loan-term" className="font-medium">
                        Plazo (meses)
                      </label>
                    </div>
                    <div className="bg-blue-50 px-3 py-1 rounded-lg text-blue-700 font-medium">{loanTerm} meses</div>
                  </div>

                  <Slider
                    id="loan-term"
                    min={12}
                    max={84}
                    step={12}
                    value={[loanTerm]}
                    onValueChange={handleLoanTermChange}
                    className="py-4"
                  />

                  <div className="flex justify-between text-sm text-foreground/70">
                    <span>12 meses</span>
                    <span>84 meses</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resultados */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {/* Tarjeta de resultados */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden flex-grow"
                style={{
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05)",
                }}
              >
                <div className="bg-blue-600 p-6 text-white">
                  <h3 className="text-xl font-semibold">Resumen de financiación</h3>
                </div>

                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-foreground/70">Tu cuota mensual estimada</p>
                      <h4 className="text-4xl font-bold text-blue-600 mt-2">
                        {monthlyPayment.toLocaleString("es-ES", { maximumFractionDigits: 2 })} €
                      </h4>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-5 space-y-4">
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Importe del préstamo:</span>
                        <span className="font-medium">{(carValue - downPayment).toLocaleString("es-ES")} €</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-foreground/70">Entrada inicial:</span>
                        <span className="font-medium">{downPayment.toLocaleString("es-ES")} €</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-foreground/70">Tipo de interés:</span>
                        <span className="font-medium">{interestRate.toFixed(1)}%</span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-foreground/70">Plazo del préstamo:</span>
                        <span className="font-medium">{loanTerm} meses</span>
                      </div>

                      <div className="pt-2 border-t border-blue-100 flex justify-between">
                        <span className="text-foreground/70">Interés total:</span>
                        <span className="font-medium">
                          {totalInterest.toLocaleString("es-ES", { maximumFractionDigits: 2 })} €
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-foreground/70">Coste total:</span>
                        <span className="font-medium">
                          {(carValue - downPayment + totalInterest).toLocaleString("es-ES", {
                            maximumFractionDigits: 2,
                          })}{" "}
                          €
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white py-6 group">
                      Solicitar financiación
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button variant="outline" className="py-6">
                      Hablar con un asesor
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Nota informativa */}
              <div className="mt-6 flex items-start space-x-2 text-sm text-foreground/70">
                <Info size={16} className="flex-shrink-0 mt-0.5" />
                <p>
                  Esta calculadora proporciona una estimación. Las condiciones finales pueden variar según tu perfil
                  crediticio y las políticas de la entidad financiera.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

