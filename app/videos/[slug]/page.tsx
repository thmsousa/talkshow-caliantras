// app/videos/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { TODOS_EPISODIOS, TODOS_AUTORES } from '@/lib/mockData'; // Dados centralizados
import { Episodio, Autor } from '../../components/utils/types'; 
import styles from './EpisodioPage.module.css'; 

// 1. SEO Dinâmico: Define o título da aba do navegador conforme o vídeo
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const episodio = TODOS_EPISODIOS.find((ep) => ep.slug === slug);
  
  return {
    title: `${episodio?.titulo || 'Vídeo'} | Caliantras Talk Show`,
    description: episodio?.descricao.substring(0, 160),
  };
}

// 2. Busca de Dados centralizada
async function getEpisodioData(slug: string): Promise<{ episodio: Episodio; autor: Autor; relacionados: Episodio[] } | null> {
  const episodio = TODOS_EPISODIOS.find((ep) => ep.slug === slug);
  if (!episodio) return null;

  // Busca o autor (Exemplo: Pablo Costa como padrão para simplificar)
  const autor = TODOS_AUTORES[0]; 

  // Sugestão de vídeos relacionados (outros episódios que não o atual)
  const relacionados = TODOS_EPISODIOS.filter((ep) => ep.slug !== slug).slice(0, 3);

  return { episodio, autor, relacionados };
}

export default async function EpisodioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getEpisodioData(slug);

  if (!data) return notFound();

  const { episodio, autor, relacionados } = data;
  const embedUrl = `https://www.youtube.com/embed/${episodio.urlVideo}?autoplay=0&rel=0`;

  return (
    <div className={styles.mainContainer}>
      {/* TÍTULO E PLAYER */}
      <h1 className={styles.title}>{episodio.titulo}</h1>

      <div className={styles.playerWrapper}>
        <iframe
          src={embedUrl}
          title={`Player do YouTube para ${episodio.titulo}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>

      <div className={styles.contentLayout}>
        {/* COLUNA PRINCIPAL: DESCRIÇÃO */}
        <main style={{ flex: '2', minWidth: '320px' }}>
          <h2 className={styles.sectionTitle}>Sobre este Episódio</h2>
          <p className={styles.descriptionText}>{episodio.descricao}</p>
        </main>

        {/* SIDEBAR: AUTOR E RELACIONADOS */}
        <aside className={styles.aside}>
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '15px', fontSize: '18px' }}>CONVIDADO</h3>
            <Link href={`/autores/${autor.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
              <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--color-accent)' }}>
                <Image src={autor.fotoUrl} alt={autor.nomeCompleto} fill style={{ objectFit: 'cover' }} />
              </div>
              <span style={{ fontWeight: 'bold', color: 'white' }}>{autor.nomeCompleto}</span>
            </Link>
          </div>

          <div>
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '15px', fontSize: '18px' }}>VER A SEGUIR</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {relacionados.map((rel) => (
                <Link key={rel.id} href={`/videos/${rel.slug}`} style={{ display: 'flex', gap: '10px', textDecoration: 'none' }}>
                  <div style={{ position: 'relative', width: '80px', height: '50px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                    <Image src={rel.imagemCapaUrl} alt={rel.titulo} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '13px', color: '#ccc', fontWeight: 'bold', lineHeight: '1.2' }}>{rel.titulo}</p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}