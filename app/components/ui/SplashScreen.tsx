// app/components/ui/SplashScreen.tsx
'use client'; 

import { useState } from 'react';
import Image from 'next/image';

// Tamanhos para a capa dividida
const COVER_WIDTH = 500; 
const COVER_HEIGHT = 700; 

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(true); // Ativa as classes CSS de animação
        
        // Dá tempo para a animação CSS (0.8s) e chama onComplete
        setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 850); 
    };

    if (!isVisible) return null;

    return (
        <div 
            // Fundo fixo de transição
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#ffffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isVisible ? 1 : 0, 
                transition: isClicked ? 'none' : 'opacity 0.5s ease-out',
            }}
        >
            
            {/* STAGE DO LIVRO (book-stage) */}
            <div className="book-stage" style={{ width: `${COVER_WIDTH * 2}px`, height: `${COVER_HEIGHT}px`, display: 'flex', position: 'relative' }}>

                {/* 1. CAPA ESQUERDA (GIRA PARA A ESQUERDA) */}
                <div 
                    className={isClicked ? "page-left" : ""} 
                    style={{
                        width: `${COVER_WIDTH}px`,
                        height: `${COVER_HEIGHT}px`,
                        backgroundColor: 'var(--color-primary)', 
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transition: 'box-shadow 0.2s',
                        boxShadow: isClicked ? 'none' : '5px 0 15px rgba(0,0,0,0.5)'
                    }}
                >
                    <Image
                        src="/images/cover.jpg" // Capa (Parte Esquerda)
                        alt="Capa Esquerda"
                        width={COVER_WIDTH}
                        height={COVER_HEIGHT}
                        style={{ objectFit: 'cover', objectPosition: 'left' }}
                    />
                </div>

                {/* 2. CAPA DIREITA (GIRA PARA A DIREITA) */}
                <div 
                    className={isClicked ? "page-right" : ""} 
                    style={{
                        width: `${COVER_WIDTH}px`,
                        height: `${COVER_HEIGHT}px`,
                        backgroundColor: 'var(--color-primary)',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transition: 'box-shadow 0.2s',
                        boxShadow: isClicked ? 'none' : '-5px 0 15px rgba(0,0,0,0.5)'
                    }}
                >
                    <Image
                        src="/images/cover.jpg" // Capa (Parte Direita)
                        alt="Capa Direita"
                        width={COVER_WIDTH}
                        height={COVER_HEIGHT}
                        style={{ objectFit: 'cover', objectPosition: 'right' }}
                    />
                    
                    {/* BOTÃO DE AÇÃO (Colocado na capa direita) */}
                    <div style={{ 
                        position: 'absolute', 
                        bottom: '15%', 
                        left: '50%', 
                        transform: 'translateX(-150%)',
                        textAlign: 'center',
                        zIndex: 10
                    }}>
                        <button 
                            onClick={handleButtonClick}
                            disabled={isClicked} // Desabilita após o clique
                            style={{ 
                                backgroundColor: 'var(--color-accent)', 
                                color: 'var(--color-dark)', 
                                padding: '15px 40px',
                                borderRadius: '50px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                            }}
                        >
                            CLIQUE PARA ABRIR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}