// app/videos/page.tsx
// Página de listagem completa de vídeos.

import Link from 'next/link';
// Você pode reusar a lógica de getDestaques do app/page.tsx
// e os componentes de card aqui se quiser, mas por enquanto, mínimo:

export default function VideosIndexPage() {
    return (
        <div style={{ padding: '40px', color: 'white', backgroundColor: 'var(--color-background)' }}>
            <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
                🎬 Todos os Episódios
            </h1>
            <p style={{ marginTop: '20px' }}>
                Aqui será exibido o catálogo completo de vídeos (paginação, filtros, busca).
            </p>
            
            {/* Links para testar a rota dinâmica que estava falhando */}
            <h2 style={{ marginTop: '30px', fontSize: '20px' }}>Links de Teste:</h2>
            <ul>
                <li>
                    <Link href="/videos/ep-1-biblioteca" style={{ color: 'var(--color-primary)' }}>
                        Ep. 1: Talkshow - Biblioteca (Teste Rota Dinâmica)
                    </Link>
                </li>
            </ul>
            
            <Link href="/" style={{ display: 'block', marginTop: '40px', color: 'white' }}>
                ← Voltar para Home
            </Link>
        </div>
    );
}