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
        <nav>
            <ul style={{ 
                display: 'flex', 
                flexWrap: 'wrap', // 
                justifyContent: 'center',
                listStyle: 'none', 
                margin: 0, 
                padding: 0 
            }}>
                {navItems.map((item) => (
                    <li key={item.name} style={{ margin: '5px 15px' }}> 
                        <Link href={item.href} style={{ 
                            color: 'white', 
                            fontWeight: 'bold',
                            fontSize: '17px', 
                            transition: 'opacity 0.2s',
                            letterSpacing: '0.8px' }}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}