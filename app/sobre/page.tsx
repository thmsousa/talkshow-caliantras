// app/about/page.tsx

import Link from 'next/link';

export default function SobrePage() {
  return (
    <div style={{ padding: '20px', color: 'var(--color-dark)' }}>
        
        {/* TÍTULO PRINCIPAL */}
        <h1 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: 'var(--color-dark)', 
            borderBottom: '4px solid var(--color-accent)', 
            paddingBottom: '15px',
            marginBottom: '30px'
        }}>
            Sobre o Caliantras Talk Show
        </h1>

        {/* SEÇÃO 1: MISSÃO E VISÃO */}
        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: 'var(--color-dark)' }}>
                Nossa Missão
            </h2>
            <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                O Caliantras Talk Show nasceu com o objetivo de ser um espaço aberto para o debate e a divulgação cultural e literária. Focamos em explorar as profundezas de obras regionais e nacionais, trazendo à luz autores, histórias e movimentos que impactam a sociedade.
            </p>
        </section>

        {/* SEÇÃO 2: VALORES E EQUIPE */}
        <section style={{ marginBottom: '40px', padding: '20px', borderRadius: '12px', backgroundColor: 'var(--color-dark)', color: 'white' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px', color: 'var(--color-accent)' }}>
                Nossa Equipe
            </h2>
            <p style={{ marginBottom: '10px' }}>
                Conduzido por entusiastas da cultura e literatura, nossa equipe é composta por:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                <li><strong>Apresentação e Curadoria: </strong>Nayra, Gleicy, Emily.</li>
                <li><strong>Direção: </strong>Pablo Costa.</li>
            </ul>
        </section>

        {/* CHAMADA DE AÇÃO */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link 
                href="/videos" 
                style={{ 
                    fontSize: '18px', 
                    color: 'black', 
                    fontWeight: 'bold',
                    backgroundColor: 'var(--color-accent)', 
                    padding: '10px 25px',
                    borderRadius: '5px',
                    textDecoration: 'none'
                }}
            >
                Assista Nossos Últimos Vídeos →
            </Link>
        </div>
        
    </div>
  );
}