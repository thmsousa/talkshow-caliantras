// app/components/layout/Header.tsx

import Link from 'next/link';
import NavbarClient from './NavbarClient'; 

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'var(--color-dark)', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', 
      position: 'sticky', top: 0, zIndex: 10 
    }}>
      <div className="container" style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Título */}
        <Link 
            href="/" 
            style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: 'var(--color-accent)', 
                textTransform: 'uppercase'
            }}
        >
          CALIANTRAS
        </Link>
        
        <NavbarClient /> 
        
      </div>
    </header>
  );
}