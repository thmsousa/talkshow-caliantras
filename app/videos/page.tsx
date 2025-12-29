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
        <div className="page-container">
            {/* ESTILOS DE RESPONSIVIDADE */}
            <style jsx>{`
                .page-container {
                    padding: 20px 15px; /* Reduzido para mobile */
                    color: var(--color-dark);
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .header-section {
                    text-align: center;
                    margin-bottom: 40px;
                }
                .main-title {
                    font-size: clamp(28px, 6vw, 42px); /* Ajusta fonte conforme a tela */
                    font-weight: 900;
                    margin-bottom: 10px;
                }
                .search-wrapper {
                    max-width: 600px;
                    margin: 0 auto;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                }
                .video-grid {
                    display: grid;
                    /* minmax ajustado para 280px para não quebrar em telas pequenas */
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 25px;
                    padding: 10px 0;
                }

                @media (max-width: 768px) {
                    .page-container { padding: 10px 10px; }
                    .video-grid { 
                        grid-template-columns: 1fr; /* Força uma coluna em celulares */
                        gap: 20px;
                    }
                }
            `}</style>

            <div className="header-section">
                <h1 className="main-title">Catálogo de Vídeos</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 30px' }} />

                <div className="search-wrapper">
                    <input 
                        type="text" 
                        placeholder="Pesquisar episódios..." 
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '16px 25px',
                            paddingRight: '55px', 
                            fontSize: '16px',
                            borderRadius: '50px',
                            border: '1px solid #eee',
                            outline: 'none',
                            transition: 'all 0.3s ease',
                            backgroundColor: '#fff',
                        }}
                    />
                    <div style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: '#888' }}>
                        <Search size={20} strokeWidth={2.5} />
                    </div>
                </div>
            </div>
            
            <div className="video-grid">
                {videosFiltrados.map(episodio => (
                    <div key={episodio.id} 
                        style={{ 
                            backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                            transition: 'transform 0.4s ease', cursor: 'pointer', border: '1px solid #f0f0f0'
                        }}
                        className="video-card"
                        onMouseOver={(e) => {
                            if (window.innerWidth > 768) e.currentTarget.style.transform = 'translateY(-10px)';
                        }}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                                <Image 
                                    src={episodio.imagemCapaUrl} 
                                    alt={episodio.titulo} 
                                    fill 
                                    style={{ objectFit: 'cover', objectPosition: '50% 30%' }} 
                                />
                                
                                {isNovo(episodio.dataLancamento) && (
                                    <div style={{ 
                                        position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--color-accent)',
                                        color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold'
                                    }}>
                                        Novo
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '20px' }}> {/* Padding interno ajustado */}
                                <p style={{ fontSize: '12px', color: '#888', fontWeight: '600', marginBottom: '8px' }}>{formatDate(episodio.dataLancamento)}</p>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px' }}>{episodio.titulo}</h3>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {episodio.descricao}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {videosFiltrados.length === 0 && (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <p style={{ color: '#999' }}>Nenhum vídeo encontrado para a sua pesquisa.</p>
                </div>
            )}
        </div>
    );
}