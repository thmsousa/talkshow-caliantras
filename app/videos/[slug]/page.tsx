// app/videos/[slug]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';

// Tipos básicos (Você deve ter esses tipos definidos no seu projeto)
type Episodio = { id: string; titulo: string; slug: string; dataLancamento: string; urlVideo: string; descricao: string; imagemCapaUrl: string; };
type Autor = { id: string; nomeCompleto: string; fotoUrl: string; slug: string; };

interface EpisodioPageProps {
  params: {
    slug: string; 
  };
}

// --- MOCK API: Função de busca do Episódio ---
async function getEpisodioData(slug: string): Promise<{ episodio: Episodio, autor: Autor } | null> {

  const episodios: Episodio[] = [
    {
      id: '1',
      titulo: 'Ep. 1: Talkshow - Biblioteca (IFTO)',
      slug: 'ep-1-biblioteca',
      dataLancamento: '24/11/2025',
      urlVideo: 'lGyrgOFSn1U', // ID do YouTube
      descricao: 'Neste episódio especial, exploramos as vertentes da obra "Espírito Ilícito", na Biblioteca do Campus Palmas.',
      imagemCapaUrl: '/images/mock/pablo_cover.jpg'
    },
    {
      id: '2',
      titulo: 'Ep. 2: Talkshow - CEM Santa Rita de Cássia',
      slug: 'ep-2-cem-rita-de-cassia',
      dataLancamento: '28/11/2025',
      urlVideo: 'dQw4w9WgXcQ',
      descricao: 'Conversa com alunos e professores no CEM Santa Rita de Cássia.',
      imagemCapaUrl: '/images/mock/cover_cemrdc.jpg'
    },
    {
      id: '3',
      titulo: 'Ep. 3: Talkshow - Literatura Regional',
      slug: 'ep-3-literatura-regional',
      dataLancamento: '18/11/2025',
      urlVideo: 'dQw4w9WgXcQ',
      descricao: 'Debate sobre literatura regional e produção cultural.',
      imagemCapaUrl: '/images/mock/cover_lr.jpg'
    }
  ];

  const episodio = episodios.find(ep => ep.slug === slug);

  if (!episodio) return null;

  const autor: Autor = {
    id: 'a1',
    nomeCompleto: 'Pablo Silva',
    fotoUrl: '/images/mock/pablo_autor.jpg',
    slug: 'pablo-silva'
  };

  return { episodio, autor };
}

export default async function EpisodioPage({ params }: EpisodioPageProps) {
  const data = await getEpisodioData(params.slug);

  if (!data) return notFound();

  const { episodio, autor } = data;
  
    // Padrão de URL de embed do YouTube:
    const getEmbedUrl = (videoId: string) => `https://www.youtube.com/embed/${videoId}?autoplay=0`; 

    return (
        <div style={{ padding: '20px', color: 'white' }}>
            
            {/* TÍTULO E PLAYER DE VÍDEO */}
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>{episodio.titulo}</h1>
            
            {/* PLAYER EMBEDADO (Formato 16:9) */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: '30px', backgroundColor: 'var(--color-dark)' }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                    src={getEmbedUrl(episodio.urlVideo)}
                    title={`Player do YouTube para ${episodio.titulo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            {/* CONTEÚDO E SIDEBAR (Estrutura Flexbox) */}
            <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                
                {/* DESCRIÇÃO PRINCIPAL */}
                <div style={{ flex: '2', minWidth: '300px' }}>
                    <h2 style={{ fontSize: '24px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '5px', marginBottom: '15px' }}>
                        Sobre o Episódio
                    </h2>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'var(--color-text)' }}>{episodio.descricao}</p>
                    
                    <h3 style={{ fontSize: '18px', marginTop: '20px' }}>Detalhes:</h3>
                    <p style={{ color: 'gray' }}>Lançamento: {episodio.dataLancamento}</p>
                </div>

                {/* SIDEBAR - CONTEÚDO RELACIONADO */}
                <aside style={{ flex: '1', minWidth: '250px', padding: '20px', borderRadius: '8px', backgroundColor: 'var(--color-dark)' }}>
                    <h2 style={{ fontSize: '20px', color: 'var(--color-accent)', marginBottom: '15px' }}>
                        Convidado
                    </h2>
                    
                    <Link href={`/autores/${autor.slug}`} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        {/* Placeholder para imagem do Autor */}
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#555', marginRight: '15px' }}></div>
                        <span style={{ fontWeight: 'bold', color: 'white' }}>{autor.nomeCompleto}</span>
                    </Link>

                    <h3 style={{ fontSize: '18px', borderBottom: '1px solid #333', paddingBottom: '5px', marginTop: '20px', marginBottom: '10px', color: 'var(--color-text)' }}>
                        Materiais Relacionados
                    </h3>
                    <ul>
                        <li><Link href="#" style={{ color: 'var(--color-primary)' }}>Livro: Espírito Ilícito</Link></li>
                        <li><Link href="#" style={{ color: 'var(--color-primary)' }}>Link para a Biblioteca</Link></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}