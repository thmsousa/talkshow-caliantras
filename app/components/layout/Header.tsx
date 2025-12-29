"use client"; 
import Link from 'next/link';
import NavbarClient from './NavbarClient'; 

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'var(--color-dark)', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', 
      position: 'sticky', top: 0, zIndex: 10 
    }}>
      <div className="container" style={{ 
          padding: '15px 0', 
          display: 'flex', 
          flexDirection: 'column', // Empilha em mobile por padrão
          gap: '10px',
          alignItems: 'center',
          textAlign: 'center'
      }}>
        {/* Título */}
        <Link href="/" style={{ fontSize: '24px', fontWeight: '600', color: 'var(--color-accent)', textTransform: 'uppercase' }}>
          CALIANTRAS
        </Link>
        <NavbarClient /> 
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .container {
            flex-direction: row !important; /* Volta para linha no desktop */
            justify-content: space-between !important;
            padding: 20px 0 !important;
          }
        }
      `}</style>
    </header>
  );
}