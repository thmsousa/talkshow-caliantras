// app/_components/layout/NavbarClient.tsx
'use client'; 

import Link from 'next/link';

const navItems = [
    { name: 'Vídeos', href: '/videos' },
    { name: 'Materiais', href: '/materiais' },
    { name: 'Autores', href: '/autores' },
    { name: 'Sobre', href: '/sobre' }, 
];

export default function NavbarClient() {
    return (
        <nav>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                {navItems.map((item) => (
                    <li key={item.name} style={{ marginLeft: '50px' }}>
                        <Link 
                            href={item.href} 
                            style={{ color: 'white', fontWeight: 'bold' }}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
