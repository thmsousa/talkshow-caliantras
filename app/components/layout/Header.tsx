"use client";

import Link from 'next/link';
import NavbarClient from './NavbarClient';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'rgba(18, 18, 18, 0.85)', 
      boxShadow: '0 2px 15px rgba(0, 0, 0, 0.3)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      width: '100%',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div className="container header-flex-container">
        
        <Link href="/" style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center',
            paddingTop: '10px',   // Adicione ou aumente este valor para empurrar o título para baixo
            height: '100%',        // Garante que o link ocupe a altura da barra
            padding: '4px 0' // Padding reduzido no logo
        }}>
          <span className="font-amoresa" style={{ 
            fontSize: 'clamp(24px, 3.5vw, 30px)', // Escala de logo menor
            lineHeight: '0.8',
            color: 'var(--color-accent)',
            display: 'inline-block'
          }}>
            C
          </span>
          <span className="font-perandory" style={{ 
            fontSize: 'clamp(18px, 2.5vw, 22px)', // Texto "aliandras" mais discreto
            color: '#ffffff', 
            marginLeft: '-3px', 
            textTransform: 'lowercase'
          }}>
            aliandras
          </span>
        </Link>

        <NavbarClient /> 

      </div>

      <style jsx>{`
        .header-flex-container {
          padding: 5px 20px; /* Padding vertical total reduzido */
          display: flex;
          flex-direction: column;
          gap: 5px; /* Espaço entre logo e menu reduzido no mobile */
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .header-flex-container {
            flex-direction: row;
            justify-content: space-between;
            padding: 15px 40px; /* Altura final otimizada para desktop */
          }
        }
      `}</style>
    </header>
  );
}