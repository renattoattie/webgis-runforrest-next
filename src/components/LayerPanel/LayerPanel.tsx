import { Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import styles from '@/components/LayerPanel/LayerPanel.module.css'

export default function LayerPanel() {
  return (
    <div className={`${styles.layerPanel} glass rounded-xl`}>
      <div className={styles.header}>
        <Layers className="h-5 w-5" />
        <h2 className={styles.title}>Adicionar Camadas</h2>
      </div>
      <div className={styles.content}>
        <Button variant="outline" className="w-full justify-start">
          Adicionar WMS
        </Button>
        <div className={`${styles.noLayersText} text-muted-foreground`}>
          Nenhuma camada adicionada
        </div>
      </div>
    </div>
  );
}
