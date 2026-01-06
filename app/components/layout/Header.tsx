"use client";

import Link from 'next/link';
import NavbarClient from './NavbarClient';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: 'var(--color-dark)', 
      boxShadow: '0 2px 10px rgba(36, 34, 34, 1)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 1000,
      borderBottom: '1px solid #222'
    }}>
      <div className="container header-flex-container">
        
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', paddingTop: '8px', }}>

          <span className="font-amoresa" style={{ 
            fontSize: '30px', 
            lineHeight: '0.8',
            color: 'var(--color-accent)',
            display: 'inline-block'
          }}>
            C
          </span>
          <span className="font-perandory" style={{ 
            fontSize: '24px', 
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
          padding: 8px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 768px) {
          .header-flex-container {
            flex-direction: row;
            justify-content: space-between;
            padding: 18px 0;
          }
        }
      `}</style>
    </header>
  );
}