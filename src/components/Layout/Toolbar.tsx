
'use client'

import { Ruler, Pencil, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Toolbar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 glass rounded-xl p-2 flex flex-col gap-2">
      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
        <Ruler className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
        <Pencil className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" className="hover:bg-primary/10">
        <Printer className="h-5 w-5" />
      </Button>
    </div>
  );
}
