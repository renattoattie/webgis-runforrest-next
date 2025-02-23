'use client'

import MapView from "@/components/MapView/MapView"
import LayerPanel from "@/components/LayerPanel/LayerPanel"
import BaseMapSwitch from "@/components/BaseMapSwitch/BaseMapSwitch"
import SearchBar from "@/components/SearchBar/SearchBar"
import Toolbar from "@/components/Layout/Toolbar"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"

export default function MapPage() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <MapView />
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none">
        <SearchBar />
        <LayerPanel />
        <BaseMapSwitch />
        <Toolbar />
      </div>
      <Footer />
    </div>
  )
}