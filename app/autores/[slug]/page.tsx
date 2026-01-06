import Image from 'next/image'; 
import { notFound } from 'next/navigation';
import { TODOS_AUTORES } from '@/lib/mockData'; 
import styles from './AutorPage.module.css';

export default async function AutorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const autor = TODOS_AUTORES.find(a => a.slug === slug);

  if (!autor) return notFound();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerSection}>
        
        {/* FOTO RESPONSIVA */}
        <div className={styles.avatarWrapper}>
          <Image
            src={autor.fotoUrl}
            alt={`Foto de ${autor.nomeCompleto}`}
            fill
            sizes="(max-width: 768px) 100vw, 350px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        {/* DADOS */}
        <div className={styles.infoBox}>
          <h1 className={styles.nome}>{autor.nomeCompleto}</h1>
          <h2 style={{ fontSize: '20px', color: 'var(--color-c)', marginBottom: '25px' }}>
             Convidado Principal do Caliandras
          </h2>

          <div className={styles.bio}>
            <p>{autor.bio || autor.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}