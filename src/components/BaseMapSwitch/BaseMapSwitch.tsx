import { Button } from "@/components/ui/button";
import { Map as MapIcon } from "lucide-react";
import styles from '@/components/BaseMapSwitch/BaseMapSwitch.module.css';

const basemaps = [
  { id: 'osm', name: 'OpenStreetMap' },
  { id: 'satellite', name: 'Satélite' },
  { id: 'terrain', name: 'Terreno' }
];

export default function BasemapSwitch() {
  return (
    <div className={`${styles.basemapSwitch} glass rounded-xl`}>
      <div className={styles.header}>
        <MapIcon className={styles.headerIcon} />
        <span className={styles.headerText}>Basemap</span>
      </div>
      <div className={styles.basemapList}>
        {basemaps.map((basemap) => (
          <Button
            key={basemap.id}
            variant="ghost"
            className={styles.basemapButton}
          >
            {basemap.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
