// app/videos/page.tsx
// Página de listagem completa de vídeos.

import Link from 'next/link';

export default function VideosIndexPage() {
    return (
        <div style={{ padding: '40px', color: 'var(--color-dark)', backgroundColor: 'transparent' }}>
            
            {/* TÍTULO PRINCIPAL: Preto, com linha Caliandra */}
            <h1 style={{ 
                fontSize: '30px', 
                fontWeight: 'bold', 
                color: 'var(--color-dark)', 
                borderBottom: '2px solid var(--color-c)', // Linha Caliandra
                paddingBottom: '10px',
                marginBottom: '25px'
            }}>
                🎬 Todos os Episódios
            </h1>
            
            <p style={{ marginTop: '20px' }}>
                Aqui será exibido o catálogo completo de vídeos (paginação, filtros, busca).
            </p>
            
            {/* LINKS DE TESTE */}
            <h2 style={{ marginTop: '30px', fontSize: '20px', color: 'var(--color-dark)' }}>Links de Teste:</h2>
            <ul>
                <li style={{ marginBottom: '10px' }}>
                    {/* Link em Caliandra (para destaque) */}
                    <Link href="/videos/ep-1-biblioteca" style={{ color: 'var(--color-c)', fontWeight: 'bold' }}>
                        Ep. 1: Talkshow - Biblioteca (Teste Rota Dinâmica) →
                    </Link>
                </li>
                {/* Adicione mais links de mock aqui se desejar */}
            </ul>
            
            {/* Link Voltar para Home */}
            <Link href="/" style={{ display: 'block', marginTop: '40px', color: 'var(--color-dark)', textDecoration: 'underline' }}>
                ← Voltar para Home
            </Link>
        </div>
    );
}