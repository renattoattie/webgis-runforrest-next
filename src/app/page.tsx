// src/app/page.tsx
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">WebGIS Platform</h1>
      <Link 
        href="/map" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Acessar Mapa
      </Link>
    </main>
  )
}