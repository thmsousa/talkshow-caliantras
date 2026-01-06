import Image from 'next/image'; 
import { notFound } from 'next/navigation';
import { TODOS_AUTORES } from '@/lib/mockData'; 
import styles from './AutorPage.module.css';

export default async function AutorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const autor = TODOS_AUTORES.find(a => a.slug === slug);

  if (!autor) return notFound();

  return (
    <main className={styles.mainContainer}>
      <article className={styles.headerSection}>
        
        {/* PILHA DE FOTOGRAFIAS REAIS */}
        <div className={styles.photoStack}>
          {/* Camadas decorativas de fundo */}
          <div className={`${styles.photoLayer} ${styles.layerBack}`} />
          <div className={`${styles.photoLayer} ${styles.layerMiddle}`} />
          
          {/* Foto Principal com Moldura Branca */}
          <div className={`${styles.photoLayer} ${styles.avatarWrapper}`}>
            <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
              <Image
                src={autor.fotoUrl}
                alt={autor.nomeCompleto}
                fill
                sizes="(max-width: 850px) 100vw, 400px"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>

        {/* CONTEÚDO EDITORIAL */}
        <div className={styles.infoBox}>
          <span className={styles.subtitulo}>Convidado Principal</span>
          <h1 className={styles.nome}>{autor.nomeCompleto}</h1>
          
          <div style={{ 
            width: '60px', 
            height: '1px', 
            backgroundColor: '#000', 
            margin: '30px 0' 
          }} />

          <div className={styles.bio}>
            {autor.bio.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

      </article>
    </main>
  );
}