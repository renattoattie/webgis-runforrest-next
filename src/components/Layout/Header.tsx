'use client'

import { Map, Settings, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/Layout/ThemeProvider'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 h-14 glass z-10 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <Map className="h-6 w-6" />
        <h1 className="text-lg font-semibold">WebGIS</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-primary/10"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Configurações</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-primary/10"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </div>
    </header>
  )
}