'use client'; 
import Link from 'next/link';

const navItems = [
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
                flexWrap: 'wrap', // Permite que os itens passem para a linha de baixo
                justifyContent: 'center',
                listStyle: 'none', 
                margin: 0, 
                padding: 0 
            }}>
                {navItems.map((item) => (
                    <li key={item.name} style={{ margin: '5px 15px' }}> 
                        <Link href={item.href} style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}