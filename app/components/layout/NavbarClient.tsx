'use client'; 
import { useState } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'Eventos', href: '/eventos' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Autores', href: '/autores' },
    { name: 'Sobre', href: '/sobre' }, 
];

export default function NavbarClient() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav>
            <button 
                onClick={toggleMenu}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '24px',
                    height: '18px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    zIndex: 2001,
                    position: 'relative'
                }}
                className="mobile-toggle"
            >
                <div style={{ 
                    width: '100%', height: '2px', background: 'white', transition: '0.3s',
                    transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'rotate(0)' 
                }} />
                <div style={{ 
                    width: '100%', height: '2px', background: 'white', transition: '0.3s',
                    opacity: isOpen ? 0 : 1 
                }} />
                <div style={{ 
                    width: '100%', height: '2px', background: 'white', transition: '0.3s',
                    transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'rotate(0)' 
                }} />
            </button>

            {/* GAVETA LATERAL DE NAVEGAÇÃO */}
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                {navItems.map((item) => (
                    <li key={item.name}> 
                        <Link href={item.href} 
                            onClick={() => setIsOpen(false)}
                            className="nav-link"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <style jsx>{`
                .nav-list {
                    display: flex;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    gap: clamp(8px, 2vw, 20px);
                }

                :global(.nav-link) {
                    color: white;
                    font-weight: 600;
                    font-size: clamp(12px, 1.5vw, 14px);
                    transition: all 0.3s ease;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    padding: 4px 2px;
                    opacity: 0.8;
                    text-decoration: none;
                }

                :global(.nav-link:hover) {
                    opacity: 1;
                    color: var(--color-accent) !important;
                }

                .mobile-toggle {
                    display: none !important;
                }

                @media (max-width: 768px) {
                    .mobile-toggle {
                        display: flex !important;
                    }

                    .nav-list {
                        position: fixed;
                        top: 0;
                        right: 0;
                        height: 100vh;
                        width: 75%;
                        background: rgba(10, 10, 10, 0.98);
                        backdrop-filter: blur(25px);
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: 35px;
                        transform: translateX(100%);
                        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
                        z-index: 2000;
                        box-shadow: -15px 0 40px rgba(0,0,0,0.6);
                    }

                    .nav-list.open {
                        transform: translateX(0);
                    }

                    :global(.nav-link) {
                        font-size: 22px;
                        letter-spacing: 2px;
                    }
                }
            `}</style>
        </nav>
    );
}