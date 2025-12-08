// app/videos/page.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image';
import { Episodio } from '../components/utils/types'; 

// --- 1. MOCK DATA (Lista Completa Integrada, na ordem desejada) ---
const TODOS_EPISODIOS: Episodio[] = [
    {
        id: '1',
        titulo: 'Ep. 1: Talkshow - Biblioteca (IFTO - Palmas)',
        slug: 'ep-1-biblioteca',
        dataLancamento: '2025-11-24T12:00:00',
        urlVideo: 'lGyrgOFSn1U',
        descricao: 'Explorando as vertentes da obra "Espiríto Ilícitio", na Biblioteca do Campus Palmas.',
        imagemCapaUrl: '/images/mock/pablo_cover.jpg'
    },
    {
        id: '2',
        titulo: 'Ep. 2: Talkshow - CEM Santa Rita de Cássia',
        slug: 'ep-2-cem-rita-de-cassia',
        dataLancamento: '2025-11-28T12:00:00',
        urlVideo: 'Rx15dflY9DA',
        descricao: 'Conversa com alunos e professores no CEM Santa Rita de Cássia.',
        imagemCapaUrl: '/images/mock/cover_cemrdc.jpg'
    },
    {
        id: '3',
        titulo: 'Ep. 3: Talkshow - Literatura Regional',
        slug: 'ep-3-literatura-regional',
        dataLancamento: '2025-11-18T12:00:00',
        urlVideo: 'dQw4w9WgXcQ',
        descricao: 'Debate sobre literatura regional e produção cultural.',
        imagemCapaUrl: '/images/mock/cover_lr.jpg'
    },
    {
        id: '4', 
        titulo: 'Ep. 4: Entrevista Exclusiva (O Mais Novo)', 
        slug: 'ep-4-entrevista-recente', 
        dataLancamento: '2025-12-05T10:00:00', 
        urlVideo: 'SEU_ID_YOUTUBE', 
        descricao: 'O vídeo mais recente e atualizado da série.',
        imagemCapaUrl: '/images/mock/capa_recente.jpg'
    },
];

const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    } catch (e) {
        return dateString;
    }
};

// 2. Função que retorna a lista sem ordenação (mantendo a ordem por ID/inserção)
const getTodosOsVideos = (): Episodio[] => {
    return TODOS_EPISODIOS; 
};


// 3. COMPONENTE DA PÁGINA
export default function VideosIndexPage() {
    // Busca a lista completa na ordem definida no MOCK
    const videos = getTodosOsVideos();

    return (
        <div style={{ padding: '0px', color: 'var(--color-dark)', backgroundColor: 'transparent' }}>
            
            {/* TÍTULO PRINCIPAL */}
            <h1 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold', 
                color: 'var(--color-dark)', 
                borderBottom: '4px solid var(--color-accent)', 
                paddingBottom: '15px',
                marginBottom: '40px'
            }}>
                Catálogo Completo de Vídeos
            </h1>
            
            {/* GRID CONTAINER PARA TODOS OS VÍDEOS */}
            <div 
                className="section-cards" 
                style={{ 
                    display: 'flex', 
                    gap: '25px', 
                    flexWrap: 'wrap', 
                    justifyContent: 'flex-start' 
                }}
            >
                {videos.map(episodio => (
                    
                    /* CARD INDIVIDUAL */
                    <div 
                        key={episodio.id} 
                        style={{ 
                            flex: '0 0 calc(33.33% - 17px)', 
                            maxWidth: '350px', 
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
        </div>
    );
}