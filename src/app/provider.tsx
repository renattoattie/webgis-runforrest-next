'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from "@/components/Layout/ThemeProvider"

export function Providers({
  children
}: {
  children: ReactNode
}) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}