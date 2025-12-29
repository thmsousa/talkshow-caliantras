'use client';

import Image from 'next/image';
import { TODOS_PRODUTOS } from '@/lib/mockData';
import styles from './Produtos.module.css';

export default function ProdutosPage() {
    return (
        <main className={styles.container}>
            {/* Título Editorial Moderno */}
            <header className={styles.header}>
                <h1 className={styles.modernTitle}>Loja Caliantras</h1>
                <div className={styles.redLine} />
                <p className={styles.subtitle}>
                    Adquira as obras literárias e materiais exclusivos do nosso universo cultural.
                </p>
            </header>

            {/* Grid de Produtos */}
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
                                className={styles.productImage} // Certifique-se de que o CSS acima aponte para cá 
                            />
                        </div>
                        
                        <div className={styles.infoContent}>
                            <h3 className={styles.productTitle}>{produto.titulo}</h3>
                            <p className={styles.productDescription}>{produto.descricao}</p>
                            
                            <div className={styles.footerRow}>
                                <span className={styles.price}>{produto.preco}</span>
                                <a 
                                    href={produto.linkCompra} 
                                    target="_blank" 
                                    className={styles.buyButton}
                                >
                                    COMPRAR
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}