import { TODOS_AUTORES } from '@/lib/mockData';
import AuthorCard from './AuthorCard';

async function getTodosAutores() {
    // Simulação de busca de dados
    await new Promise(resolve => setTimeout(resolve, 300));
    return TODOS_AUTORES;
}

export default async function AutoresPage() {
    const autores = await getTodosAutores();

    return (
        <div style={{ padding: '20px 0', color: 'var(--color-dark)' }}>
            <h1 style={{ 
                fontSize: 'clamp(28px, 6vw, 36px)', 
                fontWeight: 'bold', 
                color: 'var(--color-dark)', 
                borderBottom: '4px solid var(--color-accent)', 
                paddingBottom: '15px',
                marginBottom: '40px'
            }}>
                Autores e Convidados
            </h1>

            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '25px', 
                justifyContent: 'center' 
            }}>
                {autores.map(autor => (
                    <AuthorCard key={autor.id} autor={autor} />
                ))}
            </div>

            {/* NOTA: Não use <style jsx> aqui, pois este é um Server Component. 
                Use estilos inline ou CSS Modules. */}
        </div>
    );
}