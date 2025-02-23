import { Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import styles from './LayerPanel.module.css';

export default function LayerPanel() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  }, [isOpen]);

  return (
    <div className={styles.container}>
      <Button
        variant="outline"
        size="icon"
        className={`${styles.toggleButton} glass rounded-full z-50`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ position: 'relative' }}
      >
        <Layers className="h-5 w-5" />
        <span className="sr-only">Adicionar Camadas</span>
      </Button>

      {isOpen && (
        <div className={`${styles.panel} glass rounded-xl`}>
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
      )}
    </div>
  );
}
