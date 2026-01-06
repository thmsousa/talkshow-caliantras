'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
        // Mesma lógica de cor translúcida do Header para o efeito de vidro
        backgroundColor: 'rgba(18, 18, 18, 0.85)', 
        color: 'white', 
        marginTop: '60px', 
        padding: '40px 0', 
        // Borda superior fina e discreta em vez da borda grossa anterior
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        width: '100%',
        // Efeito de desfoque idêntico ao Header
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'relative',
        zIndex: 10
      }}>
      <div className="container footer-container">
        <div className="footer-info">
          <p style={{ 
            fontSize: '22px', 
            fontWeight: '900', 
            color: 'var(--color-accent)', 
            margin: 0,
            letterSpacing: '-1px' 
          }}>
            CALIANDRAS
          </p> 
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
        
        <nav className="footer-nav">
          <ul>
            <li><Link href="/sobre" className="footer-link">Sobre</Link></li>
            <li><Link href="https://www.instagram.com/caliandrasshow/" target="_blank" className="footer-link">Contato</Link></li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 25px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 30px;
        }

        /* Estilização dos links para seguir o padrão editorial */
        .footer-nav :global(.footer-link) {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
        }

        .footer-nav :global(.footer-link:hover) {
          color: var(--color-accent);
          opacity: 1;
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
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