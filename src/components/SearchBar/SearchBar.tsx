import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input'
import styles from '@/components/SearchBar/SearchBar.module.css'

export default function SearchBar() {
  return (
    <div className={`${styles.searchContainer} glass rounded-lg`}>
      <Search className={`${styles.searchIcon} text-muted-foreground`} />
      <Input 
        type="search" 
        placeholder="Buscar endereço..." 
        className={styles.searchInput}
      />
    </div>
  )
}
