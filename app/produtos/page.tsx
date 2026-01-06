'use client';

import Image from 'next/image';
import { TODOS_PRODUTOS } from '@/lib/mockData';
import styles from './Produtos.module.css';
import ChatBot from '../components/ChatBot';

export default function ProdutosPage() {
    const handleBuyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // Dispara a função global definida no ChatBot
        if (typeof window !== 'undefined' && (window as any).openCaliantrasChat) {
            (window as any).openCaliantrasChat();
        }
    };

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.modernTitle}>Loja Caliandras</h1>
                <div className={styles.redLine} />
                <p className={styles.subtitle}>
                    Adquira as obras literárias e materiais exclusivos do nosso universo cultural.
                </p>
            </header>

            <div className={styles.productGrid}>
                {TODOS_PRODUTOS.map((produto) => (
                    <div key={produto.id} className={styles.productCard}>
                        <div className={styles.imageWrapper}>
                            <span className={styles.categoryTag}>{produto.categoria}</span>
                            <Image 
                                src={produto.imagemUrl} 
                                alt={produto.titulo} 
                                fill
                                priority 
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className={styles.productImage} 
                            />
                        </div>
                        
                        <div className={styles.infoContent}>
                            <h3 className={styles.productTitle}>{produto.titulo}</h3>
                            <p className={styles.productDescription}>{produto.descricao}</p>
                            
                            <div className={styles.footerRow}>
                                <span className={styles.price}>{produto.preco}</span>
                                <button 
                                    onClick={handleBuyClick}
                                    className={styles.buyButton}
                                >
                                    COMPRAR
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ChatBot />
        </main>
    );
}