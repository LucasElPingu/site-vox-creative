import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';
import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Layout principal do site
 * Inclui Header, Footer e botão do WhatsApp em todas as páginas
 */
export default function Layout({ children, className = '' }: LayoutProps) {
  return (
    <div className={`${styles.layout} ${className}`}>
      <Header />
      
      <main className={styles.main} role="main">
        {children}
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
