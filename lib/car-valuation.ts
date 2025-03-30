// Valores base por marca (en euros)
const brandBaseValues: Record<string, number> = {
  Audi: 25000,
  BMW: 27000,
  "Mercedes-Benz": 28000,
  Volkswagen: 20000,
  SEAT: 15000,
  Toyota: 18000,
  Renault: 14000,
  Peugeot: 13500,
  Citroën: 13000,
  Ford: 14500,
  Opel: 13000,
  Kia: 15000,
  Hyundai: 14500,
  Mazda: 16000,
  Nissan: 15500,
  Skoda: 14000,
  Fiat: 12000,
  Dacia: 10000,
  Volvo: 22000,
  Honda: 16500,
}

// Valor por defecto para marcas no especificadas
const defaultBrandValue = 15000

// Factores de depreciación por año
const yearDepreciationFactors: Record<number, number> = {
  0: 1, // Nuevo
  1: 0.85, // 1 año
  2: 0.75, // 2 años
  3: 0.67, // 3 años
  4: 0.6, // 4 años
  5: 0.54, // 5 años
  6: 0.49, // 6 años
  7: 0.45, // 7 años
  8: 0.41, // 8 años
  9: 0.38, // 9 años
  10: 0.35, // 10 años
}

// Factores por kilometraje
function getKilometersFactor(kilometers: number): number {
  if (kilometers < 10000) return 1.05
  if (kilometers < 30000) return 1
  if (kilometers < 60000) return 0.95
  if (kilometers < 90000) return 0.9
  if (kilometers < 120000) return 0.85
  if (kilometers < 150000) return 0.8
  if (kilometers < 180000) return 0.75
  if (kilometers < 210000) return 0.7
  return 0.65
}

// Factores por condición
const conditionFactors: Record<string, number> = {
  Excelente: 1.1,
  "Muy bueno": 1.05,
  Bueno: 1,
  Regular: 0.9,
  Mejorable: 0.8,
}

// Factores por tipo de combustible
const fuelFactors: Record<string, number> = {
  Eléctrico: 1.15,
  Híbrido: 1.1,
  Gasolina: 1,
  GLP: 0.95,
  Diesel: 0.9,
  Otro: 0.9,
}

export function calculateCarValue(
  brand: string,
  model: string,
  year: number,
  kilometers: number,
  condition: string,
  fuel: string,
): number {
  // Obtener el valor base de la marca o usar el valor por defecto
  const baseValue = brandBaseValues[brand] || defaultBrandValue

  // Calcular la edad del vehículo
  const currentYear = new Date().getFullYear()
  const age = currentYear - year

  // Obtener el factor de depreciación por año
  const yearFactor = age <= 10 ? yearDepreciationFactors[age] : 0.3

  // Obtener el factor por kilometraje
  const kilometersFactor = getKilometersFactor(kilometers)

  // Obtener el factor por condición
  const conditionFactor = conditionFactors[condition] || 1

  // Obtener el factor por combustible
  const fuelFactor = fuelFactors[fuel] || 1

  // Calcular el valor estimado
  let estimatedValue = baseValue * yearFactor * kilometersFactor * conditionFactor * fuelFactor

  // Añadir un factor aleatorio para simular variaciones del mercado (±5%)
  const randomFactor = 0.95 + Math.random() * 0.1
  estimatedValue *= randomFactor

  // Redondear a centenas
  return Math.round(estimatedValue / 100) * 100
}

