// app/autores/page.tsx
import { TODOS_AUTORES } from '@/lib/mockData'; // Centralizado
import { Autor } from '../components/utils/types'; 
import AuthorCard from './AuthorCard'; 


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