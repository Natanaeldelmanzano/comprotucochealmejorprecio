import type React from "react"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "ComproTuCocheAlMejorPrecio | Vende tu coche al mejor precio garantizado",
  description:
    "Vende tu coche usado al mejor precio garantizado. Tasación online gratuita, pago inmediato y gestión de trámites sin coste adicional en toda España.",
  keywords:
    "compra coches usados, venta coches segunda mano, tasación online coche, mejor precio coche usado, vender mi coche rápido, compraventa vehículos",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'