// app/autores/page.tsx
import Link from 'next/link';
import { Autor } from '../components/utils/types'; 
import AuthorCard from './AuthorCard'; 

// Lista MOCK de Autores/Convidados
export const TODOS_AUTORES: Autor[] = [
    {
        id: 'a1',
        nomeCompleto: 'Pablo Costa',
        fotoUrl: '/images/mock/pablo_cover.jpg', 
        slug: 'pablo-costa',
        bio: "teste1"
    },
    {
        id: 'a2',
        nomeCompleto: 'Gleicielly Medeiros',
        fotoUrl: '/images/mock/gleicy_autor.jpg', 
        slug: 'gleicielly-medeiros',
        bio: "teste1"
    },
    {
        id: 'a3',
        nomeCompleto: 'Nayra',
        fotoUrl: '/images/mock/nayra.jpg', 
        slug: 'nayra',
        bio: "teste123232323"
    },
    // adc mais autores 
];

// Função que simula a busca de todos os autores (Server side)
async function getTodosAutores(): Promise<Autor[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return TODOS_AUTORES;
}


// --------------------------------------------------
// PÁGINA PRINCIPAL DE AUTORES (Server Component)
// --------------------------------------------------
export default async function AutoresPage() {
    const autores = await getTodosAutores();

    return (
        <div style={{ padding: '20px 0', color: 'var(--color-dark)' }}>
            
            {/* TÍTULO PRINCIPAL */}
            <h1 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold', 
                color: 'var(--color-dark)', 
                borderBottom: '4px solid var(--color-accent)', 
                paddingBottom: '15px',
                marginBottom: '40px'
            }}>
                👥 Autores e Convidados
            </h1>

            {/* LISTA DE AUTORES */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'flex-start' }}>
                {autores.map(autor => (
                    // ✅ Usa o componente Client para cada cartão
                    <AuthorCard key={autor.id} autor={autor} />
                ))}
            </div>
        </div>
    );
}