'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react'; 
import { TODOS_EPISODIOS } from '@/lib/mockData'; 
import { Episodio } from '../components/utils/types';

export default function VideosIndexPage() {
    const [busca, setBusca] = useState('');
    const [videosFiltrados, setVideosFiltrados] = useState<Episodio[]>(TODOS_EPISODIOS);

    useEffect(() => {
        const termoBusca = busca.toLowerCase();
        const resultados = TODOS_EPISODIOS.filter(episodio => 
            episodio.titulo.toLowerCase().includes(termoBusca) || 
            episodio.descricao.toLowerCase().includes(termoBusca)
        );
        setVideosFiltrados(resultados);
    }, [busca]);

    const isNovo = (dateString: string) => {
        const dataLancamento = new Date(dateString);
        const hoje = new Date();
        const seteDiasEmMs = 7 * 24 * 60 * 60 * 1000;
        return (hoje.getTime() - dataLancamento.getTime()) < seteDiasEmMs;
    };

    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
        } catch (e) { return dateString; }
    };

    return (
        <main style={{ maxWidth: '1250px', margin: '0 auto', padding: 'min(40px, 8vw) 20px' }}>
            
            <header style={{ marginBottom: '50px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <h1 style={{ 
                        fontSize: 'clamp(28px, 5vw, 42px)', 
                        fontWeight: '800', 
                        color: '#1a1a1a', 
                        margin: 0, 
                        letterSpacing: '-1.5px' 
                    }}>
                        Catálogo de Vídeos
                    </h1>
                    <div style={{ 
                        flex: 1, 
                        height: '2px', 
                        background: 'linear-gradient(90deg, var(--color-accent) 0%, rgba(200,0,0,0.05) 100%)',
                        borderRadius: '2px' 
                    }} />
                </div>
                
                <div style={{ 
                    position: 'relative', 
                    maxWidth: '500px', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)' 
                }}>
                    <input 
                        type="text" 
                        placeholder="Pesquisar episódios..." 
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '14px 20px',
                            paddingRight: '50px',
                            fontSize: '16px',
                            borderRadius: '12px',
                            border: '1px solid #f0f0f0',
                            outline: 'none',
                            backgroundColor: '#fff',
                        }}
                    />
                    <div style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
                        <Search size={20} />
                    </div>
                </div>
            </header>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(350px, 100%), 1fr))', 
                gap: '35px' 
            }}>
                {videosFiltrados.map(episodio => (
                    <div 
                        key={episodio.id} 
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'transform 0.4s ease, boxShadow 0.4s ease',
                            border: '1px solid #f0f0f0',
                            cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                            if (window.innerWidth > 768) e.currentTarget.style.transform = 'translateY(-10px)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                                <Image 
                                    src={episodio.imagemCapaUrl} 
                                    alt={episodio.titulo} 
                                    fill 
                                    style={{ objectFit: 'cover', objectPosition: '50% 30%' }} 
                                />
                                {isNovo(episodio.dataLancamento) && (
                                    <div style={{ 
                                        position: 'absolute', top: '15px', left: '15px', 
                                        backgroundColor: 'var(--color-accent)',
                                        color: '#fff', padding: '4px 12px', borderRadius: '20px', 
                                        fontSize: '11px', fontWeight: 'bold', zIndex: 2
                                    }}>
                                        NOVO
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: '25px' }}>
                                <p style={{ fontSize: '12px', color: 'var(--color-accent)', fontWeight: '800', marginBottom: '10px', textTransform: 'uppercase' }}>
                                    {formatDate(episodio.dataLancamento)}
                                </p>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', lineHeight: '1.3' }}>
                                    {episodio.titulo}
                                </h3>
                                <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.6', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {episodio.descricao}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    );
}