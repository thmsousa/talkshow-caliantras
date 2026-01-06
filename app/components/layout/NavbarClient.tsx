'use client'; 
import Link from 'next/link';

const navItems = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Autores', href: '/autores' },
    { name: 'Sobre', href: '/sobre' }, 
];

export default function NavbarClient() {
    return (
        <nav style={{ width: '100%', maxWidth: 'max-content' }}>
            <ul style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center',
                listStyle: 'none', 
                margin: 0, 
                padding: 0,
                gap: 'clamp(8px, 2vw, 20px)' // Gap reduzido para economizar espaço
            }}>
                {navItems.map((item) => (
                    <li key={item.name} style={{ display: 'flex', alignItems: 'center' }}> 
                        <Link href={item.href} style={{ 
                            color: 'white', 
                            fontWeight: '600', 
                            fontSize: 'clamp(12px, 1.5vw, 14px)', // Fonte menor para navbar fina
                            transition: 'all 0.3s ease',
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            padding: '4px 2px', // Padding vertical mínimo
                            opacity: 0.8
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.color = 'white'; }}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}