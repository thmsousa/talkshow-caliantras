// app/_components/layout/Footer.tsx
'use client'; // <-- ESSENCIAL PARA O new Date().getFullYear()

import Link from 'next/link';

export default function Footer() {
  return (
    // Fundo Preto/Cinza Escuro (Cor Secundária)
    <footer style={{ 
        backgroundColor: 'var(--color-dark)', 
        color: 'white', 
        marginTop: '30px', 
        padding: '20px 0', 
        borderTop: '4px solid var(--color-primary)' // Linha Caliandra
      }}>
      <div className="container" style={{ margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-accent)' }}>CALIANTRAS</p> 
          <p style={{ fontSize: '12px', color: 'gray' }}>© {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link href="/sobre" style={{ color: 'white', marginLeft: '15px' }}>Sobre</Link></li>
            <li><Link href="https://www.instagram.com/calintras/" style={{ color: 'white', marginLeft: '15px' }}>Contato</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
