'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react'; 
import { TODOS_EPISODIOS } from '@/lib/mockData'; // Importa dados centralizados
import { Episodio } from '../components/utils/types';

export default function VideosIndexPage() {
    const [busca, setBusca] = useState('');
    const [videosFiltrados, setVideosFiltrados] = useState<Episodio[]>(TODOS_EPISODIOS);

    // Efeito para filtrar a lista de vídeos conforme a pesquisa
    useEffect(() => {
        const termoBusca = busca.toLowerCase();
        const resultados = TODOS_EPISODIOS.filter(episodio => 
            episodio.titulo.toLowerCase().includes(termoBusca) || 
            episodio.descricao.toLowerCase().includes(termoBusca)
        );
        setVideosFiltrados(resultados);
    }, [busca]);

    // Lógica para verificar se o vídeo foi lançado nos últimos 7 dias
    const isNovo = (dateString: string) => {
        const dataLancamento = new Date(dateString);
        const hoje = new Date();
        // Constante de 7 dias convertida para milissegundos
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
        <div style={{ padding: '20px 0', color: 'var(--color-dark)' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '10px' }}>Catálogo de Vídeos</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 30px' }} />

                {/* BARRA DE BUSCA POLIDA */}
                <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
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
            
            {/* GRID DE CARDS COM LÓGICA DE SELO DE 7 DIAS */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px', padding: '10px' }}>
                {videosFiltrados.map(episodio => (
                    <div key={episodio.id} 
                        style={{ 
                            backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                            transition: 'transform 0.4s ease', cursor: 'pointer', border: '1px solid #f0f0f0'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                                <Image src={episodio.imagemCapaUrl} alt={episodio.titulo} fill style={{ objectFit: 'cover', objectPosition: '50% 30%' }} />
                                
                                {/* SELO APARECE APENAS SE TIVER MENOS DE 7 DIAS */}
                                {isNovo(episodio.dataLancamento) && (
                                    <div style={{ 
                                        position: 'absolute', top: '15px', left: '15px', backgroundColor: 'var(--color-accent)',
                                        color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold'
                                    }}>
                                        Novo
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '25px' }}>
                                <p style={{ fontSize: '12px', color: '#888', fontWeight: '600', marginBottom: '8px' }}>{formatDate(episodio.dataLancamento)}</p>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px' }}>{episodio.titulo}</h3>
                                <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {episodio.descricao}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* FEEDBACK SE NÃO HOUVER RESULTADOS */}
            {videosFiltrados.length === 0 && (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <p style={{ color: '#999' }}>Nenhum vídeo encontrado para a sua pesquisa.</p>
                </div>
            )}
        </div>
    );
}