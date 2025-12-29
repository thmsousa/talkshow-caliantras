'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import SplashScreen from './components/ui/SplashScreen'; 
import { Episodio } from './components/utils/types';
import { TODOS_EPISODIOS } from '@/lib/mockData';

const SPLASH_KEY = 'hasSeenSplash'; 

const getDestaques = async (): Promise<Episodio[]> => {
    await new Promise(resolve => setTimeout(resolve, 500)); 
    const sortedDestaques = TODOS_EPISODIOS
        .slice() 
        .sort((a, b) => new Date(b.dataLancamento).getTime() - new Date(a.dataLancamento).getTime());
    return sortedDestaques.slice(0, 3);
};

const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch (e) { return dateString; }
};

export default function HomePage() {
    const [destaques, setDestaques] = useState<Episodio[]>([]); 
    const [showSplash, setShowSplash] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [initialCheckComplete, setInitialCheckComplete] = useState(false);

    useEffect(() => {
        const hasUserSeenSplash = localStorage.getItem(SPLASH_KEY);
        if (hasUserSeenSplash === 'true') setShowSplash(false); 

        const loadData = async () => {
            const data = await getDestaques(); 
            setDestaques(data);
            setDataLoaded(true); 
            setInitialCheckComplete(true); 
        };
        loadData();
    }, []);

    const handleTransitionComplete = () => {
        if (dataLoaded) {
             setShowSplash(false); 
             localStorage.setItem(SPLASH_KEY, 'true'); 
        }
    };
    
    if (!initialCheckComplete || !dataLoaded) return <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}></div>;
    if (showSplash) return <SplashScreen onComplete={handleTransitionComplete} />;

    return (
        <main>
            {/* --- BANNER PRINCIPAL REFORMULADO --- */}
            <section className="home-hero-banner" 
                style={{ 
                marginBottom: '40px' 
                }}>
                <div className="hero-content">
                    <span className="hero-tagline">Talk Show & Cultura</span>
                    <h1 className="hero-title">
                        Bem-vindo ao <span className="highlight">Caliantras</span>
                    </h1>
                    <p className="hero-subtitle">
                        Explore diálogos profundos, literatura regional e produções culturais exclusivas que dão voz à nossa identidade.
                    </p>
        
                    <div className="hero-actions">
                        <Link 
                            href={`/videos/${destaques[0].slug}`}
                            className="btn-primary"
                        >
                            Assistir Último Episódio
                        </Link>
                        <Link 
                            href="/sobre"
                            className="btn-secondary"
                        >
                            Conhecer o Projeto
                        </Link>
                    </div>
                </div>

                {/* Elemento decorativo de fundo */}
                <div className="hero-visual-effect"></div>
            </section>

            {/* SEÇÃO DE VÍDEOS COM O LAYOUT IGUAL À PÁGINA DE VÍDEOS */}
            <section style={{ marginBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'var(--color-dark)', margin: 0 }}>
                        Últimos Vídeos
                    </h2>
                    <div style={{ flex: 1, height: '4px', backgroundColor: 'var(--color-accent)', marginLeft: '20px', borderRadius: '2px' }} />
                </div>
                
                {/* GRID IDENTICO AO DA PÁGINA DE VÍDEOS */}
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                    gap: '30px'
                }}>
                    {destaques.map(episodio => (
                        <div 
                            key={episodio.id} 
                            style={{ 
                                backgroundColor: '#fff', 
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                cursor: 'pointer',
                                border: '1px solid #f0f0f0'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.08)';
                            }}
                        >
                            <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                                    <Image 
                                        src={episodio.imagemCapaUrl || '/images/placeholder.jpg'} 
                                        alt={episodio.titulo} 
                                        fill 
                                        style={{ objectFit: 'cover' }} 
                                        objectPosition='50% 30%'
                                    />
                                </div>
                                <div style={{ padding: '25px' }}>
                                    <p style={{ fontSize: '12px', color: '#888', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase' }}>
                                        {formatDate(episodio.dataLancamento)}
                                    </p>
                                    <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', lineHeight: '1.3', color: 'var(--color-dark)' }}>
                                        {episodio.titulo}
                                    </h3>
                                    <p style={{ 
                                        fontSize: '14px', 
                                        color: '#666', 
                                        lineHeight: '1.6',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}>
                                        {episodio.descricao}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Link href="/videos" style={{ 
                        fontSize: '18px', 
                        color: 'var(--color-dark)', 
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        borderBottom: '3px solid var(--color-accent)',
                        paddingBottom: '5px'
                    }}>
                        Ver Catálogo Completo →
                    </Link>
                </div>
            </section>
        </main>
    );
}