// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { Providers } from "@/app/provider"
import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "WEBGIS RUNFORREST",
  description: "A SUA PLATAFORMA GIS NA NUVEM",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}