'use client';

import { EVENTOS_CALINDRAS } from '@/lib/mockData';
import Image from 'next/image';
import Link from 'next/link';

export default function EventosPage() {
    return (
        <main style={{ maxWidth: '1250px', margin: '0 auto', padding: '40px 20px' }}>
            
            {/* Cabeçalho Editorial Profissional */}
            <header style={{ marginBottom: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <h1 style={{ 
                        fontSize: 'clamp(28px, 5vw, 42px)', 
                        fontWeight: '800', 
                        color: '#1a1a1a', 
                        margin: 0, 
                        letterSpacing: '-1.5px' 
                    }}>
                        Agenda Cultural
                    </h1>
                    <div style={{ 
                        flex: 1, 
                        height: '2px', 
                        background: 'linear-gradient(90deg, var(--color-accent) 0%, rgba(200,0,0,0.05) 100%)',
                        borderRadius: '2px' 
                    }} />
                </div>
                <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', lineHeight: '1.6' }}>
                    Fique por dentro de todos os lançamentos, lives e intervenções poéticas do universo Calindras.
                </p>
            </header>

            {/* Grid de Eventos - Agora Responsivo */}
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(350px, 100%), 1fr))', 
                gap: '35px',
                alignItems: 'start' 
            }}>
                {EVENTOS_CALINDRAS.map(evento => (
                    <div 
                        key={evento.id} 
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.4s ease, boxShadow 0.4s ease',
                            border: '1px solid #f0f0f0',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                        }}
                    >
                        <div style={{ width: '100%', lineHeight: 0 }}>
                            <img 
                                src={evento.imagem && evento.imagem.trim() !== "" ? evento.imagem : '/images/placeholder.jpg'} 
                                alt={evento.titulo} 
                                style={{ 
                                    width: '100%', 
                                    height: 'auto', 
                                    display: 'block' 
                                }} 
                            />
                        </div>

                        <div style={{ padding: '25px' }}>
                            <p style={{ 
                                fontSize: '12px', 
                                color: 'var(--color-accent)', 
                                fontWeight: '800', 
                                marginBottom: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {evento.data}
                            </p>
                            
                            <h3 style={{ 
                                fontSize: '22px', 
                                fontWeight: '800', 
                                color: '#1a1a1a', 
                                marginBottom: '12px',
                                lineHeight: '1.3' 
                            }}>
                                {evento.titulo}
                            </h3>
                            
                            <p style={{ 
                                fontSize: '15px', 
                                color: '#666', 
                                lineHeight: '1.6',
                                marginBottom: '20px'
                            }}>
                                Participe deste momento exclusivo da cultura regional com a equipe do Calindras.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}