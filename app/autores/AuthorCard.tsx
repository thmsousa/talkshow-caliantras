// app/autores/AuthorCard.tsx
'use client'; // <-- ESSENCIAL: Transforma em Client Component

import Link from 'next/link';
import { Autor } from '../components/utils/types'; 
import React from 'react';

export default function AuthorCard({ autor }: { autor: Autor }) {

    // A lógica de hover/interatividade é controlada AQUI.
    return (
        <Link 
            key={autor.id} 
            href={`/autores/${autor.slug}`}
            style={{ 
                flex: '0 0 calc(33.33% - 20px)', 
                minWidth: '280px', 
                textDecoration: 'none',
                color: 'inherit',
                borderRadius: '12px', 
                overflow: 'hidden',
                transition: 'transform 0.3s',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
            }}
            // ✅ MANIPULADORES DE EVENTO AGORA FUNCIONAM AQUI
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            
            <div 
                // CONTAINER DA IMAGEM E TEXTO SOBREPOSTO
                style={{
                    position: 'relative',
                    height: '350px', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%', 
                    backgroundImage: `url(${autor.fotoUrl})`, 
                }}
            >
                {/* OVERLAY ESCURO */}
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