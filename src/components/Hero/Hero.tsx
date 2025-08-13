import React from 'react';
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
              ✨ Agência de Marketing Digital
            </div>
            
            <h1 className={styles.title}>
              Transformamos{' '}
              <span className={styles.highlight}>jovens empreendedores</span>{' '}
              em{' '}
              <span className={styles.highlight}>marcas de sucesso</span>.
            </h1>
            
            <p className={styles.description}>
              Design minimalista, estratégias eficazes e resultados reais.
              Especializada em jovens empreendedores e empresas que buscam
              identidade visual marcante e presença digital de impacto.
            </p>
            
            <div className={styles.actions}>
              <Button
                href="/contato"
                variant="primary"
                size="large"
                ariaLabel="Falar conosco para iniciar seu projeto"
              >
                💬 Falar Conosco
              </Button>

              <Button
                href="/servicos"
                variant="secondary"
                size="large"
                ariaLabel="Conhecer nossos serviços"
              >
                🎯 Nossos Serviços
              </Button>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projetos</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Satisfação</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24h</span>
                <span className={styles.statLabel}>Resposta</span>
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
