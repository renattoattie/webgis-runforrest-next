'use client'

import { useEffect, useRef } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { fromLonLat } from 'ol/proj'
import styles from '@/components/MapView/MapView.module.css'

export default function MapView() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-45, -15]),
        zoom: 4
      })
    })

    return () => map.setTarget(undefined)
  }, [])

  return (
    <div ref={mapRef} className={styles.mapContainer} />
  )
}
