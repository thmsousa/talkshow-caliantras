// app/videos/[slug]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Importa os tipos centralizados
import { Episodio, Autor } from '../../components/utils/types'; 

// Importa o módulo CSS para estilização
import styles from './EpisodioPage.module.css'; 

// --------------------------------------------------
// MOCK API: Função de busca do Episódio (Assíncrona)
// --------------------------------------------------
async function getEpisodioData(
  slug: string
): Promise<{ episodio: Episodio; autor: Autor } | null> {

  const episodios: Episodio[] = [
    {
      id: '1',
      titulo: 'Ep. 1: Talkshow - Biblioteca (IFTO)',
      slug: 'ep-1-biblioteca',
      dataLancamento: '24/11/2025',
      urlVideo: 'lGyrgOFSn1U',
      descricao: 'Neste episódio especial, exploramos as vertentes da obra "Espírito Ilícito", na Biblioteca do Campus Palmas.',
      imagemCapaUrl: '/images/mock/pablo_cover.jpg'
    },
    {
      id: '2',
      titulo: 'Ep. 2: Talkshow - CEM Santa Rita de Cássia',
      slug: 'ep-2-cem-rita-de-cassia',
      dataLancamento: '28/11/2025',
      urlVideo: 'Rx15dflY9DA',
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
    },
    {
        id: '4', 
        titulo: 'Ep. 4: Entrevista Exclusiva (O Mais Novo)', 
        slug: 'ep-4-entrevista-recente', 
        dataLancamento: '05/12/2025', 
        urlVideo: 'SEU_ID_YOUTUBE', 
        descricao: 'O vídeo mais recente e atualizado da série.',
        imagemCapaUrl: '/images/mock/capa_recente.jpg'
    },
  ];

  const episodio = episodios.find((ep) => ep.slug === slug);
  if (!episodio) return null;

  const autor: Autor = {
    id: 'a1',
    nomeCompleto: 'Pablo Costa',
    fotoUrl: '/images/mock/pablo_cover.jpg',
    slug: 'pablo-costa',
    bio: 'Convidado especializado em Literatura e Cultura.'
  };

  return { episodio, autor };
}

// --------------------------------------------------
// PÁGINA PRINCIPAL DO EPISÓDIO (REFATORADA)
// --------------------------------------------------
export default async function EpisodioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getEpisodioData(slug);

  if (!data) return notFound();

  const { episodio, autor } = data;

  const getEmbedUrl = (videoId: string) =>
    `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`;

  return (
    <div className={styles.mainContainer}>
      
      {/* TÍTULO */}
      <h1 className={styles.title}>
        {episodio.titulo}
      </h1>

      {/* PLAYER EMBEDADO RESPONSIVO */}
      <div className={styles.playerWrapper}>
        <iframe
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
          }}
          src={getEmbedUrl(episodio.urlVideo)}
          title={`Player do YouTube para ${episodio.titulo}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* CONTEÚDO + SIDEBAR */}
      <div className={styles.contentLayout}>
        
        {/* DESCRIÇÃO */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h2 className={styles.sectionTitle}>
            Sobre o Episódio
          </h2>

          <p className={styles.descriptionText}>
            {episodio.descricao}
          </p>
        </div>

        {/* SIDEBAR */}
        <aside className={styles.aside}>
          <h2 style={{ fontSize: '20px', color: 'var(--color-accent)', marginBottom: '15px' }}>
            Autor
          </h2>

          <Link
            href={`/autores/${autor.slug}`}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', // Importante para o círculo
                  marginRight: '15px',
                  position: 'relative' // Necessário para o fill
              }}>
                <Image
                    src={autor.fotoUrl || '/images/pablo_cover.jpg'} 
                    alt={`Foto de ${autor.nomeCompleto}`}
                    fill
                    sizes="50px"
                    style={{ objectFit: 'cover' }}
                />
             </div> 

            <span style={{ fontWeight: 'bold', color: 'white' }}>
              {autor.nomeCompleto}
            </span>
          </Link>
        </aside>
      </div>
    </div>
  );
}
