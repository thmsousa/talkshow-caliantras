'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
        backgroundColor: 'var(--color-dark)', 
        color: 'white', 
        marginTop: '30px', 
        padding: '30px 0', 
        borderTop: '4px solid var(--color-primary)' 
      }}>
      <div className="container footer-container">
        <div className="footer-info">
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-accent)', margin: 0 }}>CALIANTRAS</p> 
          <p style={{ fontSize: '12px', color: 'gray', marginTop: '5px' }}>
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        
        <nav className="footer-nav">
          <ul>
            <li><Link href="/sobre">Sobre</Link></li>
            <li><Link href="https://www.instagram.com/calintras/">Contato</Link></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .footer-container {
          display: flex;
          flex-direction: column; /* Mobile first: empilha */
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .footer-nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 20px;
        }

        .footer-nav :global(a) {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row; /* Desktop: lado a lado */
            justify-content: space-between;
            text-align: left;
            align-items: center;
          }
          
          .footer-info {
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}