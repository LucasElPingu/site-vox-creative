import React from 'react';
import Image from 'next/image';
import Button from '../Button/Button';
import styles from './Hero.module.css';

/**
 * Seção Hero da página inicial
 * Contém a frase principal e botões de call-to-action
 */
export default function Hero() {
  return (
    <section className={styles.hero} role="banner">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Conteúdo principal */}
          <div className={styles.content}>
            <div className={styles.badge}>
              🚀 Agência Nacional Digital
            </div>
            
            <h1 className={styles.title}>
              Sua marca com{' '}
              <span className={styles.highlight}>identidade</span>,{' '}
              <span className={styles.highlight}>estratégia</span> e{' '}
              <span className={styles.highlight}>resultado real</span>.
            </h1>
            
            <p className={styles.description}>
              Somos uma agência nacional de marketing digital com sede em 4 cidades. 
              Oferecemos Social Media, Design Estratégico, Tráfego Pago e Impressos Gráficos 
              para fazer sua marca se destacar no mercado.
            </p>
            
            <div className={styles.actions}>
              <Button 
                href="/servicos/agencia" 
                variant="primary" 
                size="large"
                ariaLabel="Ver planos da agência de marketing digital"
              >
                📋 Ver Planos da Agência
              </Button>
              
              <Button 
                href="/servicos/grafica" 
                variant="secondary" 
                size="large"
                ariaLabel="Solicitar orçamento para produtos gráficos"
              >
                🖨️ Solicitar Orçamento Gráfico
              </Button>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>4+</span>
                <span className={styles.statLabel}>Cidades</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Clientes</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2+</span>
                <span className={styles.statLabel}>Anos</span>
              </div>
            </div>
          </div>
          
          {/* Imagem/Visual */}
          <div className={styles.visual}>
            <div className={styles.imageContainer}>
              <div className={styles.placeholder}>
                {/* Placeholder para imagem hero - pode ser substituída por imagem real */}
                <div className={styles.placeholderContent}>
                  <div className={styles.mockupPhone}>
                    📱
                  </div>
                  <div className={styles.mockupLaptop}>
                    💻
                  </div>
                  <div className={styles.mockupDesign}>
                    🎨
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className={styles.floatingElements}>
                <div className={styles.floatingElement} style={{top: '10%', left: '20%'}}>
                  📈
                </div>
                <div className={styles.floatingElement} style={{top: '60%', right: '15%'}}>
                  ⚡
                </div>
                <div className={styles.floatingElement} style={{bottom: '20%', left: '10%'}}>
                  🎯
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span>Role para baixo</span>
          <div className={styles.arrow}>↓</div>
        </div>
      </div>
    </section>
  );
}
