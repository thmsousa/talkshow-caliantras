import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { TODOS_EPISODIOS, TODOS_AUTORES } from '@/lib/mockData';
import styles from './EpisodioPage.module.css';

// Função auxiliar para formatar a data de forma amigável
const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: 'long', 
            year: 'numeric' 
        });
    } catch (e) { return dateString; }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const episodio = TODOS_EPISODIOS.find((ep) => ep.slug === slug);
  return { title: `${episodio?.titulo || 'Vídeo'} | Caliandras` };
}

export default async function EpisodioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episodio = TODOS_EPISODIOS.find((ep) => ep.slug === slug);

  if (!episodio) return notFound();

  // Lógica para encontrar o autor específico deste vídeo
  const autorRelacionado = TODOS_AUTORES.find(a => a.id === episodio.autorId) || TODOS_AUTORES[0];
  
  const relacionados = TODOS_EPISODIOS.filter((ep) => ep.slug !== slug).slice(0, 4);
  const embedUrl = `https://www.youtube.com/embed/${episodio.urlVideo}?autoplay=0&rel=0`;

  return (
    <div className={styles.mainContainer}>
      {/* Título Moderno */}
      <h1 className={styles.title}>{episodio.titulo}</h1>

      <div className={styles.upperLayout}>
        {/* LADO ESQUERDO: PLAYER E INFOS */}
        <div className={styles.playerSection}>
          <div className={styles.playerWrapper}>
            <iframe
              src={embedUrl}
              title={episodio.titulo}
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>

          <div className={styles.playerBar}>
            <div className={styles.tagList}>
              <span className={styles.badge}>#Literatura</span>
              <span className={styles.badge}>#Cultura</span>
              <span className={styles.badge}>#Tocantins</span>
            </div>
          
          </div>
        </div>

        {/* LADO DIREITO: SIDEBAR DINÂMICA */}
        <aside className={styles.sidebarSection}>
          <div className={styles.sidebarCard}>
            <div className={styles.authorBox}>
              <h3 className={styles.miniTag}>Convidado</h3>
              <Link href={`/autores/${autorRelacionado.slug}`} className={styles.authorLink}>
                <div className={styles.avatar}>
                  <Image 
                    src={autorRelacionado.fotoUrl} 
                    alt={autorRelacionado.nomeCompleto} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
                <div>
                    <span className={styles.authorName}>{autorRelacionado.nomeCompleto}</span>
                    <span style={{ color: 'var(--color-accent)', fontSize: '10px', fontWeight: 'bold', display: 'block' }}>
                        VER PERFIL →
                    </span>
                </div>
              </Link>
            </div>

            <div className={styles.dividerHorizontal} />

            <div className={styles.relatedBox}>
              <h3 className={styles.miniTag}>Relacionados</h3>
              <div className={styles.relatedGrid}>
                {relacionados.map((rel, index) => (
                  <div key={rel.id}>
                    <Link href={`/videos/${rel.slug}`} className={styles.relatedItem}>
                      <div className={styles.thumb}>
                        <Image src={rel.imagemCapaUrl} alt={rel.titulo} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <p className={styles.relatedTitle}>{rel.titulo}</p>
                    </Link>
                    {index < relacionados.length - 1 && <div className={styles.itemDivider} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* DESCRIÇÃO ABAIXO */}
      <section className={styles.descriptionSection}>
        <div className={styles.descriptionHeader}>
          <h2 className={styles.modernSectionTitle}>Sobre o Episódio</h2>
          <div className={styles.redLine} />
        </div>
        <p className={styles.descriptionText}>{episodio.descricao}</p>
      </section>
    </div>
  );
}