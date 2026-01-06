// app/sobre/page.tsx
import Link from 'next/link';

export default function SobrePage() {
  return (
    <div style={{ 
        padding: 'clamp(20px, 5vw, 60px) 15px', 
        color: 'var(--color-dark)',
        maxWidth: '1200px', 
        margin: '0 auto' 
    }}>
        
        {/* HERO SECTION DA PÁGINA SOBRE */}
        <header style={{ marginBottom: '80px', textAlign: 'center' }}>
            <span style={{ 
                color: 'var(--color-accent)', 
                textTransform: 'uppercase', 
                letterSpacing: '8px', // Aumentado para um visual mais clean
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
                lineHeight: '1.1', // Aumentado levemente para respirar com o novo espaçamento
                letterSpacing: '2px', // <--- AQUI: Letras mais espaçadas conforme solicitado
                margin: '0 auto 40px',
                maxWidth: '900px',
                textTransform: 'none'
            }}>
                Cultura que <span style={{ color: 'var(--color-accent)', letterSpacing: '4px' }}>inspira</span> e conecta.
            </h1>
            <div style={{ 
                width: '60px', 
                height: '4px', 
                backgroundColor: 'var(--color-accent)', 
                margin: '0 auto' 
            }} />
        </header>

        {/* CONTEÚDO DIVIDIDO (MISSÃO) */}
        <section style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '60px', 
            alignItems: 'center',
            marginBottom: '100px' 
        }}>
            <div style={{ position: 'relative' }}>
                <h2 style={{ 
                    fontSize: 'clamp(28px, 5vw, 40px)', 
                    fontWeight: '800', 
                    marginBottom: '25px',
                    letterSpacing: '-1px' 
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
                backgroundColor: '#fdfdfd', 
                padding: '40px', 
                borderRadius: '24px', 
                borderLeft: '6px solid var(--color-accent)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
            }}>
                <blockquote style={{ margin: 0, fontSize: '22px', fontWeight: '600', fontStyle: 'italic', lineHeight: '1.5', color: '#333' }}>
                    "Nossa missão é transformar a conversa em legado literário e a curiosidade em movimento cultural."
                </blockquote>
            </div>
        </section>

        {/* SEÇÃO DA EQUIPE (MODERNA) */}
        <section style={{ 
            backgroundColor: 'var(--color-dark)', 
            padding: 'clamp(40px, 8vw, 80px)', 
            borderRadius: '40px', 
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ 
                    fontSize: 'clamp(32px, 6vw, 48px)', 
                    fontWeight: '900', 
                    marginBottom: '50px', 
                    color: 'var(--color-accent)',
                    letterSpacing: '1px'
                }}>
                    Mentes por trás do projeto
                </h2>
                
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '40px' 
                }}>
                    <div>
                        <h3 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '15px', letterSpacing: '3px' }}>Curadoria e Voz</h3>
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>Nayra, Gleicy & Emily</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '15px', letterSpacing: '3px' }}>Visão e Direção</h3>
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>Pablo Costa</p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '11px', textTransform: 'uppercase', color: '#888', marginBottom: '15px', letterSpacing: '3px' }}>Nosso Palco</h3>
                        <p style={{ fontSize: '20px', fontWeight: '700' }}>Tocantins para o Mundo</p>
                    </div>
                </div>
            </div>
            
            <div style={{ 
                position: 'absolute', 
                bottom: '-50px', 
                right: '-50px', 
                width: '300px', 
                height: '300px', 
                background: 'radial-gradient(circle, rgba(210, 27, 72, 0.15) 0%, transparent 70%)', 
                borderRadius: '50%' 
            }} />
        </section>

        {/* CTA FINAL */}
        <div style={{ textAlign: 'center', marginTop: '100px', marginBottom: '60px' }}>
            <Link 
                href="/videos" 
                style={{ 
                    fontSize: '13px', 
                    color: 'white', 
                    fontWeight: '900',
                    backgroundColor: 'var(--color-accent)', 
                    padding: '22px 60px',
                    borderRadius: '100px',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textTransform: 'uppercase',
                    letterSpacing: '4px', // Espaçamento maior também no botão para combinar
                    transition: 'all 0.3s ease',
                    boxShadow: '0 15px 35px rgba(177, 35, 35, 0.25)'
                }}
            >
                Explore a Galeria 
            </Link>
        </div>
        
    </div>
  );
}