// app/sobre/page.tsx
import Link from 'next/link';

export default function SobrePage() {
  return (
    <main style={{ 
        padding: 'clamp(40px, 10vw, 80px) 20px', 
        color: 'var(--color-dark)',
        maxWidth: '1250px', 
        margin: '0 auto' 
    }}>
        
        {/* HERO SECTION: Estilo Editorial Premium */}
        <header style={{ marginBottom: '10px', textAlign: 'center' }}>
            <span style={{ 
                color: 'var(--color-accent)', 
                textTransform: 'uppercase', 
                letterSpacing: '8px', 
                fontSize: '12px', 
                fontWeight: '900',
                display: 'block',
                marginBottom: '20px'
            }}>
                Nossa Essência
            </span>
            <h1 style={{ 
                fontSize: 'clamp(36px, 8vw, 72px)', 
                fontWeight: '900', 
                lineHeight: '1', 
                letterSpacing: '2px', 
                margin: '0 auto 40px',
                maxWidth: '900px',
                color: '#1a1a1a'
            }}>
                Cultura que <span style={{ color: 'var(--color-accent)', letterSpacing: '4px' }}>inspira</span> e conecta.
            </h1>
            <div style={{ 
                width: '60px', 
                height: '2px', // Mais fina para elegância premium
                backgroundColor: 'var(--color-accent)', 
                margin: '0 auto' 
            }} />
        </header>

        {/* CONTEÚDO DIVIDIDO: Missão e Valores */}
        <section style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', 
            gap: '80px', 
            alignItems: 'center',
            marginBottom: '60px' 
        }}>
            <div style={{ position: 'relative' }}>
                <h2 style={{ 
                    fontSize: 'clamp(28px, 5vw, 40px)', 
                    fontWeight: '900', 
                    marginBottom: '15px',
                    letterSpacing: '-2px',
                    color: '#1a1a1a'
                }}>
                    Mais que um Talk Show.
                </h2>
                <p style={{ 
                    fontSize: '18px', 
                    lineHeight: '1.8', 
                    color: '#444',
                    textAlign: 'justify'
                }}>
                    O Caliandras nasceu da urgência de dar palco às vozes que constroem a identidade cultural brasileira. 
                    Exploramos as profundezas da literatura regional e nacional, conectando autores consagrados e novos talentos 
                    a um público ávido por conteúdo inteligente e sensível.
                </p>
            </div>
            
            <div style={{ 
                backgroundColor: '#fff', 
                padding: '50px', 
                borderRadius: '16px', 
                borderLeft: '1px solid var(--color-accent)', // Borda mais discreta
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)', // Sombra em camadas
                position: 'relative'
            }}>
                <span style={{ position: 'absolute', top: '20px', left: '30px', fontSize: '60px', color: '#eee', fontWeight: '900', zIndex: 1 }}>“</span>
                <blockquote style={{ margin: 0, fontSize: '22px', fontWeight: '600', fontStyle: 'italic', lineHeight: '1.6', color: '#333', position: 'relative', zIndex: 2 }}>
                    Nossa missão é transformar a conversa em legado literário e a curiosidade em movimento cultural.
                </blockquote>
            </div>
        </section>

        {/* SEÇÃO DA EQUIPE: Glassmorphism e Profundidade */}
        <section style={{ 
            backgroundColor: 'var(--color-dark)', 
            padding: 'clamp(40px, 8vw, 80px)', 
            borderRadius: '24px', 
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
        }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ 
                    fontSize: 'clamp(32px, 6vw, 48px)', 
                    fontWeight: '900', 
                    marginBottom: '40px', 
                    color: 'var(--color-accent)',
                    letterSpacing: '-1px'
                }}>
                    Mentes por trás do projeto
                </h2>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
                    gap: '50px' 
                }}>
                    <div>
                        <h3 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '15px', letterSpacing: '3px' }}>Curadoria e Voz</h3>
                        <p style={{ fontSize: '22px', fontWeight: '800' }}>Nayra, Gleicy & Emily</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '15px', letterSpacing: '3px' }}>Visão e Direção</h3>
                        <p style={{ fontSize: '22px', fontWeight: '800' }}>Pablo Costa</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '15px', letterSpacing: '3px' }}>Nosso Palco</h3>
                        <p style={{ fontSize: '22px', fontWeight: '800' }}>Tocantins para o Mundo</p>
                    </div>
                </div>
            </div>
            
            {/* Efeito de Luz Decorativo */}
            <div style={{ 
                position: 'absolute', 
                bottom: '-100px', 
                right: '-100px', 
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(210, 27, 72, 0.1) 0%, transparent 70%)', 
                borderRadius: '50%',
                zIndex: 1
            }} />
        </section>

        {/* CTA FINAL: Estilo Pílula */}
        <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '60px' }}>
            <Link 
                href="/videos" 
                style={{ 
                    fontSize: '12px', 
                    color: 'white', 
                    fontWeight: '900',
                    backgroundColor: 'var(--color-accent)', 
                    padding: '24px 80px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textTransform: 'uppercase',
                    letterSpacing: '4px',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: '0 20px 40px rgba(177, 35, 35, 0.2)'
                }}
            >
                Explore a Galeria 
            </Link>
        </div>
        
    </main>
  );
}