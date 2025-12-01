// app/page.tsx

import Link from 'next/link';
import Image from 'next/image'; 

// Definição do Tipo para garantir que o TypeScript não reclame
type Episodio = { 
  id: string; 
  titulo: string; 
  slug: string; 
  dataLancamento: string; 
  urlVideo: string; 
  descricao: string; 
  imagemCapaUrl: string; 
}; 

// --- MOCK DATA (Simulação de Dados) ---
const getDestaques = async (): Promise<Episodio[]> => {
    // Simula um pequeno delay de carregamento
    await new Promise(resolve => setTimeout(resolve, 500)); 
    
    return [
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
        urlVideo: '', 
        descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, incidunt quam! Aspernatur ducimus odio molestias dolorum totam vel delectus cumque quam corporis perspiciatis deserunt, consequatur facilis iure dolorem, modi est.', 
        imagemCapaUrl: '/images/mock/cover_cemrdc.jpg' 
      }, 
      { 
        id: '3', 
        titulo: 'Ep. 3: Talkshow - Literatura Regional', 
        slug: 'ep-3-literatura-regional', 
        dataLancamento: '2025-11-18T12:00:00', 
        urlVideo: '', 
        descricao: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, incidunt quam! Aspernatur ducimus odio molestias dolorum totam vel delectus cumque quam corporis perspiciatis deserunt, consequatur facilis iure dolorem, modi est.', 
        imagemCapaUrl: '/images/mock/cover_lr.jpg' 
      },
    ];
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

export default async function HomePage() {
  const destaques = await getDestaques();

  return (
    <main>
      {/* --- BANNER PRINCIPAL --- */}
      <section style={{ 
          backgroundColor: 'var(--color-dark)', 
          textAlign: 'center', 
          padding: '60px 20px', 
          borderRadius: '16px', 
          marginBottom: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ 
            fontSize: '36px', 
            fontWeight: '800', 
            marginBottom: '15px',
            color: 'white',
            letterSpacing: '-1px'
        }}>
          Bem-vindo ao site Caliantras
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '30px', color: '#ccc' }}>
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
            borderLeft: '5px solid var(--color-primary)', // Detalhe Caliandra na esquerda
            paddingLeft: '15px',
            marginBottom: '30px',
            color: 'white' 
        }}>
          Últimos Vídeos
        </h2>
        
        {/* Grid Container */}
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Responsivo automático
            gap: '25px' 
        }}>
          
          {destaques.map(episodio => (
            /* CARD INDIVIDUAL */
            <div key={episodio.id} style={{ 
                backgroundColor: 'var(--color-dark)', 
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
            }}>
              <Link href={`/videos/${episodio.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                
                {/* Thumbnail da Imagem */}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#333' }}>
                    {/* Se a imagem falhar, mostra um fundo cinza. Garanta que as imagens existam em /public */}
                    <Image
                        src={episodio.imagemCapaUrl}
                        alt={`Capa: ${episodio.titulo}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
                    />
                    {/* Overlay de Play ao passar o mouse (opcional, visual) */}
                    <div style={{
                        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'rgba(0,0,0,0.3)'
                    }}>
                        <span style={{ fontSize: '40px' }}>▶️</span>
                    </div>
                </div>
                
                {/* Conteúdo do Texto */}
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: 'bold', 
                        color: 'white', 
                        marginBottom: '10px',
                        lineHeight: '1.4'
                    }}>
                        {episodio.titulo}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '10px' }}>
                        {formatDate(episodio.dataLancamento)}
                    </p>
                    <p style={{ fontSize: '14px', color: '#aaa', lineHeight: '1.5' }}>
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
                    color: 'var(--color-primary)', 
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    borderBottom: '2px solid var(--color-primary)',
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