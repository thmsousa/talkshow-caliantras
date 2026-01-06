'use client';
import { useState, useEffect, useCallback } from 'react';
import styles from './ChatBot.module.css';

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const openChat = useCallback(() => setIsOpen(true), []);

    useEffect(() => {
        (window as any).openCaliantrasChat = openChat;
    }, [openChat]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.header}>
                <div className={styles.avatar}>C</div>
                <div className={styles.statusInfo}>
                    <h4>Caliandras</h4>
                </div>
                <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>✕</button>
            </div>

            <div className={styles.chatBody}>
                <div className={styles.bubble}>
                    Olá! <br/> Notei seu interesse em nossas obras. <br/><br/>
                    Como podemos ajudar você hoje?
                </div>

                <div className={styles.buttonContainer}>
                    <a href="https://wa.me/5563981150250" target="_blank" className={`${styles.actionButton} ${styles.whatsapp}`}>
                        CONVERSAR VIA WHATSAPP
                    </a>
                    
                    <a href="https://instagram.com/caliandrasshow" target="_blank" className={`${styles.actionButton} ${styles.instagram}`}>
                        DIRECT NO INSTAGRAM
                    </a>
                </div>
            </div>
            
            <div className={styles.footer}>
                ATENDIMENTO EXCLUSIVO • {new Date().getFullYear()}
            </div>
        </div>
    );
}