// app/page.tsx
'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import SplashScreen from './components/ui/SplashScreen'; 
import { Episodio } from './components/utils/types'; 
import { TODOS_EPISODIOS } from '@/lib/mockData'; // Centralizado

// Chave para armazenar no navegador para verificar se o usuário já viu o splash
const SPLASH_KEY = 'hasSeenSplash'; 


// Função de busca que ORDENA e LIMITA
const getDestaques = async (): Promise<Episodio[]> => {
    await new Promise(resolve => setTimeout(resolve, 500)); 
    
    // 1. Cria uma cópia e ordena por data (mais recente primeiro)
    const sortedDestaques = TODOS_EPISODIOS
        .slice() 
        .sort((a, b) => {
            const dateA = new Date(a.dataLancamento).getTime();
            const dateB = new Date(b.dataLancamento).getTime();
            return dateB - dateA; // Ordena do mais novo (B) para o mais velho (A)
        });

    // 2. Limita a lista aos 3 primeiros resultados
    return sortedDestaques.slice(0, 3);
};

// Formatação de Data
const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    } catch (e) {
        return dateString;
    }
};

// --- COMPONENTE PRINCIPAL ---
export default function HomePage() {
    // Estados de Tipagem/Dados
    const [destaques, setDestaques] = useState<Episodio[]>([]); 
    
    // Estados de Transição e Memória
    const [showSplash, setShowSplash] = useState(true);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [initialCheckComplete, setInitialCheckComplete] = useState(false);


    // 1. Lógica de Checagem (localStorage e Busca de Dados)
    useEffect(() => {
        // Checagem de localStorage (só roda no cliente)
        const hasUserSeenSplash = localStorage.getItem(SPLASH_KEY);
        if (hasUserSeenSplash === 'true') {
            setShowSplash(false); 
        }

        const loadData = async () => {
            const data = await getDestaques(); 
            setDestaques(data);
            setDataLoaded(true); 
            setInitialCheckComplete(true); 
        };
        loadData();
    }, []);

    const handleTransitionComplete = () => {
        // Chamado APÓS o clique no botão "ABRIR"
        if (dataLoaded) {
             setShowSplash(false); 
             // Armazena a chave para que não apareça na próxima visita
             localStorage.setItem(SPLASH_KEY, 'true'); 
        }
    };
    
    // 2. Renderização Condicional: Lógica de Apresentação
    
    // Mostra a tela de loading/fundo enquanto verifica os dados/localStorage
    if (!initialCheckComplete || !dataLoaded) {
        return <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)' }}></div>;
    }
    
    // Se a checagem terminou E precisamos mostrar o splash (primeira visita):
    if (showSplash) {
        return <SplashScreen onComplete={handleTransitionComplete} />;
    }

    // 3. Conteúdo Real da Home Page (Renderizado após o clique)
    return (
        <main>
            {/* --- BANNER PRINCIPAL (Com classe para responsividade) --- */}
            <section 
                className="section-banner" // CLASSE PARA MEDIA QUERIES
                style={{ 
                    backgroundColor: 'var(--color-dark)', 
                    textAlign: 'center', 
                    padding: '60px 20px', 
                    borderRadius: '16px', 
                    marginBottom: '40px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
            >
                {/* Título e Texto */}
                <h1 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '15px', color: 'white', letterSpacing: '-1px' }}>
                    Bem-vindo ao site Caliantras
                </h1>
                <p style={{ fontSize: '18px', marginBottom: '30px', color: '#ddd' }}>
                    Conteúdos diversos, talkshows, livros, obras, autores e muito mais.
                </p>
                
                <Link 
                    href={`/videos/${destaques[0].slug}`}
                    style={{ 
                        display: 'inline-block',
                        backgroundColor: 'var(--color-accent)', // Amarelo
                        color: 'var(--color-dark)', // Texto Preto
                        padding: '12px 30px',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'transform 0.2s'
                    }}
                >
                    ASSISTIR ÚLTIMO EPISÓDIO
                </Link>
            </section>

            {/* --- LISTA DE VÍDEOS (CARDS) --- */}
            <section style={{ marginBottom: '60px' }}>
                <h2 style={{ 
                    fontSize: '28px', 
                    fontWeight: 'bold', 
                    borderLeft: '5px solid var(--color-dark)', 
                    paddingLeft: '15px',
                    marginBottom: '30px',
                    color: 'var(--color-dark)' // Texto PRETO no fundo BRANCO
                }}>
                    Últimos Vídeos
                </h2>
                
                {/* Grid Container (Com classe para responsividade) */}
                <div 
                    className="section-cards" 
                    style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'space-between' }}
                >
                    {destaques.map(episodio => (
                        
                        /* CARD INDIVIDUAL */
                        <div 
                            key={episodio.id} 
                            style={{ 
                                flex: '1 1 300px',
                                minWidth: '280px',
                                backgroundColor: 'var(--color-dark)', 
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                                transition: 'transform 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                
                                {/* Thumbnail da Imagem */}
                                <div style={{ position: 'relative', width: '100%', height: '180px', backgroundColor: 'var(--color-dark)' }}>
                                    <Image
                                        src={episodio.imagemCapaUrl || '/images/placeholder.jpg'}
                                        alt={`Capa: ${episodio.titulo}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                                    />
                                </div>
                                
                                {/* Conteúdo do Card */}
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '10px', lineHeight: '1.4' }}>
                                        {episodio.titulo}
                                    </h3>
                                    <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: 'bold', marginBottom: '10px' }}>
                                        {formatDate(episodio.dataLancamento)}
                                    </p>
                                    <p style={{ fontSize: '14px', color: 'white', lineHeight: '1.5' }}>
                                        {episodio.descricao.length > 80 ? episodio.descricao.substring(0, 100) + '...' : episodio.descricao}
                                    </p>
                                </div>

                            </Link>
                        </div>
                    ))}
                </div>
                
                {/* Botão Ver Todos */}
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <Link 
                        href="/videos" 
                        style={{ 
                            fontSize: '18px', 
                            color: 'var(--color-dark)', 
                            fontWeight: 'bold',
                            borderBottom: '2px solid var(--color-accent)', 
                            paddingBottom: '5px'
                        }}
                    >
                        Ver Todos os Vídeos →
                    </Link>
                </div>
            </section>
        </main>
    );
}