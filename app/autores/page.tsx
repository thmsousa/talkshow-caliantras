import { TODOS_AUTORES } from '@/lib/mockData';
import AuthorCard from './AuthorCard';

export default async function AutoresPage() {
    return (
        <main style={{ maxWidth: '1250px', margin: '0 auto', padding: 'min(40px, 8vw) 20px' }}>
            <header style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
                    <h1 style={{ 
                        fontSize: 'clamp(32px, 6vw, 42px)', 
                        fontWeight: '900', 
                        color: '#1a1a1a',
                        margin: 0,
                        letterSpacing: '-2px'
                    }}>
                        Autores e Convidados
                    </h1>
                    <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0' }} />
                </div>
                <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px' }}>
                    Conheça as mentes brilhantes que dão vida às intervenções poéticas e audiovisuais do Caliandras.
                </p>
            </header>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', 
                gap: '35px', 
                justifyContent: 'center' 
            }}>
                {TODOS_AUTORES.map(autor => (
                    <AuthorCard key={autor.id} autor={autor} />
                ))}
            </div>
        </main>
    );
}