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
        
        {/* LOGO: "C" em Amoresa e "aliandras" em Perandory */}
        <Link href="/" style={{ 
            textDecoration: 'none', 
            display: 'flex', 
            alignItems: 'center',
            transform: 'translateY(4px)', 
            paddingTop: "10px",
            height: '100%',
            padding: '8px 0'
        }}>
          <span className="font-amoresa" style={{ 
            fontSize: 'clamp(24px, 3.5vw, 30px)',
            lineHeight: '0.8',
            color: 'var(--color-accent)',
            display: 'inline-block'
          }}>
            C
          </span>
          <span className="font-perandory" style={{ 
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: '#ffffff', 
            marginLeft: '-3px', 
            textTransform: 'lowercase'
          }}>
            aliandras
          </span>
        </Link>

        {/* NAVEGAÇÃO CLIENT SIDE COM LOGICA DE MENU OCULTO */}
        <NavbarClient /> 

      </div>

      <style jsx>{`
        .header-flex-container {
          padding: 5px 20px;
          display: flex;
          flex-direction: row; 
          align-items: center;
          justify-content: space-between;
        }

        @media (min-width: 768px) {
          .header-flex-container {
            padding: 10px 40px;
          }
        }
      `}</style>
    </header>
  );
}