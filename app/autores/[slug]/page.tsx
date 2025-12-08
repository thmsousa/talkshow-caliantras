// app/autores/[slug]/page.tsx

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { Autor } from '../../components/utils/types'; 
import { TODOS_AUTORES } from '../page'; 

// --------------------------------------------------
// MOCK API: Função de busca do Autor por slug
// --------------------------------------------------
async function getAutorData(slug: string): Promise<Autor | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  const autor = TODOS_AUTORES.find(a => a.slug === slug);
  return autor || null;
}

// --------------------------------------------------
// ✅ CORREÇÃO OFICIAL PARA NEXT 15 (params é Promise)
// --------------------------------------------------
export default async function AutorPage(props: { params: Promise<{ slug: string }> }) {
  
  // ✅ AGORA SIM: resolve a Promise corretamente
  const { slug } = await props.params;

  const autor = await getAutorData(slug);

  if (!autor) return notFound();

  return (
    <div style={{ padding: '40px 0', color: 'var(--color-dark)' }}>
      
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        
        {/* FOTO */}
        <div style={{ flex: '0 0 350px' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
            }}
          >
            <Image
              src={autor.fotoUrl}
              alt={`Foto de ${autor.nomeCompleto}`}
              fill
              sizes="(max-width: 768px) 100vw, 350px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* DADOS */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '900' }}>
            {autor.nomeCompleto}
          </h1>

          <h2 style={{ fontSize: '24px', color: 'var(--color-c)', marginBottom: '30px' }}>
            Convidado Principal do Caliantras
          </h2>

          <div style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
            <p>
              {autor.bio} 
            </p>
          </div>

        
        </div>

      </div>
    </div>
  );
}
