'use client';

import Link from 'next/link';
import { Autor } from '../components/utils/types';
import React from 'react';

export default function AuthorCard({ autor }: { autor: Autor }) {
    return (
        <Link 
            href={`/autores/${autor.slug}`}
            style={{ 
                flex: '1 1 280px',
                maxWidth: '400px',
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '12px', 
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                display: 'block'
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <div style={{
                position: 'relative',
                height: '350px', 
                backgroundSize: 'cover',
                backgroundPosition: 'center 30%', 
                backgroundImage: `url(${autor.fotoUrl})`, 
            }}>
                <div style={{ 
                    position: 'absolute', 
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 50%)', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'flex-end', 
                    padding: '20px'
                }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '5px' }}>
                        {autor.nomeCompleto}
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--color-accent)' }}>
                        Ver Perfil →
                    </p>
                </div>
            </div>
        </Link>
    );
}