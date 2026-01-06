'use client'; 

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import SplashScreen from './components/ui/SplashScreen'; 
import { Episodio } from './components/utils/types';
import { TODOS_EPISODIOS, EVENTOS_CALINDRAS } from '@/lib/mockData';

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
    const carrosselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (carrosselRef.current) {
            const scrollAmount = 340; 
            const { scrollLeft } = carrosselRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            carrosselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const loadData = async () => {
            const sorted = [...TODOS_EPISODIOS].sort((a, b) => 
                new Date(b.dataLancamento).getTime() - new Date(a.dataLancamento).getTime()
            );
            setDestaques(sorted.slice(0, 3));
            setDataLoaded(true);
            setInitialCheckComplete(true);
        };
        loadData();
        if (localStorage.getItem('hasSeenSplash') === 'true') setShowSplash(false);
    }, []);

    if (!initialCheckComplete || !dataLoaded) return <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}></div>;
    if (showSplash) return <SplashScreen onComplete={() => { setShowSplash(false); localStorage.setItem('hasSeenSplash', 'true'); }} />;

    return (
        <main style={{ maxWidth: '1250px', margin: '0 auto', padding: '0 20px' }}>
            
            {/* --- SEÇÃO: EVENTOS (Varal Realista) --- */}
            <section style={{ padding: '30px 0 40px', position: 'relative' }}>
                <div style={{ marginBottom: '30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a1a', margin: 0, letterSpacing: '-1px' }}>
                            Eventos
                        </h2>
                        <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0', borderRadius: '1px' }} />
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* CABO DO VARAL: Linha fina que conecta os cards */}
                    <div style={{
                        position: 'absolute',
                        top: '25px', // Alinhado com a posição dos grampos
                        left: '0',
                        right: '0',
                        height: '1px',
                        backgroundColor: '#ccc',
                        zIndex: 5,
                        pointerEvents: 'none'
                    }} />

                    <button onClick={() => scroll('left')} style={navButtonStyle}>‹</button>
                    <button onClick={() => scroll('right')} style={{...navButtonStyle, right: '-25px', left: 'auto'}}>›</button>

                    <div ref={carrosselRef} style={carrosselStyle}>
                        {EVENTOS_CALINDRAS.map((evento, index) => (
                            <div key={evento.id} style={{
                                ...cardBaseStyle,
                                transform: index % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
                                scrollSnapAlign: 'start',
                                transformOrigin: 'top center', // Faz o balanço rotacionar a partir do topo
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'rotate(0deg) translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12), 0 10px 10px rgba(0,0,0,0.05)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1.08)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = index % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                const img = e.currentTarget.querySelector('img');
                                if (img) img.style.transform = 'scale(1)';
                            }}
                            >
                                {/* PIN/GRAMPO: Fica por cima do cabo */}
                                <div style={pinStyle} />
                                
                                <div style={{ 
                                    position: 'relative', 
                                    width: '100%', 
                                    height: '340px', 
                                    overflow: 'hidden',
                                    backgroundColor: '#fdfdfd',
                                    borderBottom: '1px solid #f0f0f0' 
                                }}>
                                    <Image 
                                        src={evento.imagem && evento.imagem.trim() !== "" ? evento.imagem : '/images/placeholder.jpg'} 
                                        alt={evento.titulo} 
                                        fill 
                                        style={{ 
                                            objectFit: 'contain', 
                                            padding: '20px',
                                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' 
                                        }} 
                                        sizes="310px"
                                    />
                                </div>

                                <div style={{ padding: '20px 15px' }}>
                                    <span style={dateTagStyle}>{evento.data}</span>
                                    <h4 style={eventTitleStyle}>{evento.titulo}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO DE VÍDEOS --- */}
            <section style={{ marginTop: '20px', marginBottom: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '35px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a', margin: 0 }}>
                        Últimos Vídeos
                    </h2>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
                </div>
                
                <div style={gridStyle}>
                    {destaques.map(episodio => (
                        <Link href={`/videos/${episodio.slug}`} key={episodio.id} style={{ textDecoration: 'none' }}>
                            <div style={videoCardStyle}
                                 onMouseOver={(e) => {
                                     e.currentTarget.style.transform = 'translateY(-8px)';
                                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                                 }}
                                 onMouseOut={(e) => {
                                     e.currentTarget.style.transform = 'translateY(0)';
                                     e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                 }}
                            >
                                <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                                    <Image src={episodio.imagemCapaUrl} alt={episodio.titulo} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 360px" />
                                </div>
                                <div style={{ padding: '25px' }}>
                                    <p style={{ fontSize: '11px', color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {formatDate(episodio.dataLancamento)}
                                    </p>
                                    <h3 style={videoTitleStyle}>{episodio.titulo}</h3>
                                    <p style={videoDescStyle}>{episodio.descricao}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

const navButtonStyle: React.CSSProperties = {
    position: 'absolute', left: '-25px', top: '45%', transform: 'translateY(-50%)',
    zIndex: 30, background: '#fff', border: 'none', borderRadius: '50%',
    width: '52px', height: '52px', cursor: 'pointer', fontSize: '24px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)', transition: 'all 0.3s ease'
};

const carrosselStyle: React.CSSProperties = {
    display: 'flex', gap: '30px', overflowX: 'auto', padding: '10px 10px 30px',
    scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth',
    scrollSnapType: 'x mandatory',
    zIndex: 10
};

const cardBaseStyle: React.CSSProperties = {
    flex: '0 0 310px', height: '490px', position: 'relative',
    backgroundColor: '#fff', padding: '0', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer', overflow: 'hidden', borderRadius: '4px',
    border: '1px solid #f0f0f0',
    zIndex: 10
};

const pinStyle: React.CSSProperties = {
    position: 'absolute', 
    top: '15px', 
    left: '50%', 
    transform: 'translateX(-50%)',
    width: '20px', 
    height: '25px', // Grampo mais vertical para parecer que "prende" no cabo
    backgroundColor: '#333', 
    borderRadius: '2px', 
    zIndex: 15,
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
};

const dateTagStyle: React.CSSProperties = { 
    fontSize: '11px', fontWeight: '700', color: 'var(--color-accent)', 
    textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '10px'
};

const eventTitleStyle: React.CSSProperties = { 
    margin: 0, fontSize: '18px', fontWeight: '800', lineHeight: '1.4', color: '#1a1a1a',
    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
};

const gridStyle: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '35px' };
const videoCardStyle: React.CSSProperties = { backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', transition: 'all 0.4s ease' };
const videoTitleStyle: React.CSSProperties = { fontSize: '22px', fontWeight: '800', color: '#1a1a1a', marginBottom: '12px' };
const videoDescStyle: React.CSSProperties = { fontSize: '14px', color: '#666', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' };