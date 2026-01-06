'use client';

import Link from 'next/link';
import { Autor } from '../components/utils/types';

export default function AuthorCard({ autor }: { autor: Autor }) {
    return (
        <Link 
            href={`/autores/${autor.slug}`}
            style={{ 
                flex: '1 1 300px',
                maxWidth: '380px',
                textDecoration: 'none',
                borderRadius: '12px', 
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                display: 'block',
                border: '1px solid #f0f0f0',
                backgroundColor: '#fff'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            }}
        >
            <div style={{
                position: 'relative',
                height: '400px', 
                backgroundSize: 'cover',
                backgroundPosition: 'center 20%', 
                backgroundImage: `url(${autor.fotoUrl})`, 
            }}>
                <div style={{ 
                    position: 'absolute', 
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'flex-end', 
                    padding: '25px'
                }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '5px', letterSpacing: '-0.5px' }}>
                        {autor.nomeCompleto}
                    </h2>
                    <p style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'var(--color-accent)' }}>
                        ver perfil →
                    </p>
                </div>
            </div>
        </Link>
    );
}