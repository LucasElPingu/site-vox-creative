import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './AboutSection.module.css';

/**
 * Seção "Quem Somos" da página inicial
 * Mini apresentação da agência
 */
export default function AboutSection() {
  const highlights = [
    {
      icon: '🎆',
      title: 'Público em Geral',
      description: 'Atendemos clientes diversos'
    },
    {
      icon: '🎨',
      title: 'Design Minimalista',
      description: 'Estilo moderno e clean'
    },
    {
      icon: '🎯',
      title: 'Resultados Reais',
      description: 'Estratégias que geram impacto'
    },
    {
      icon: '⚡',
      title: 'Atendimento Rápido',
      description: 'Resposta em até 24 horas'
    }
  ];

  return (
    <section className={styles.aboutSection} id="sobre">
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Conteúdo principal */}
          <div className={styles.mainContent}>
            <div className={styles.badge}>
              👋 Quem Somos
            </div>
            
            <h2 className={styles.title}>
              Especializada em{' '}
              <span className={styles.highlight}>soluções digitais</span>{' '}
              com visão de futuro
            </h2>
            
            <p className={styles.description}>
              A <strong>VOX CREATIVE</strong> é uma agência focada em transformar empresas
              e empreendedores em marcas de sucesso. Nosso diferencial está no design
              minimalista e moderno, aliado a estratégias eficazes que geram resultados reais.
            </p>

            <p className={styles.description}>
              Acreditamos que toda empresa merece uma <strong>identidade visual marcante</strong>
              e uma <strong>presença digital de impacto</strong>. Trabalhamos com dedicação para
              transformar suas ideias em marcas que se destacam no mercado.
            </p>
            
            <div className={styles.actions}>
              <Button href="/sobre" variant="primary" size="large">
                👩‍💼 Conheça a CEO
              </Button>
              <Button href="/contato" variant="secondary" size="large">
                💬 Falar Conosco
              </Button>
            </div>
          </div>
          
          {/* Destaques */}
          <div className={styles.highlights}>
            <div className={styles.highlightsGrid}>
              {highlights.map((item, index) => (
                <Card key={index} variant="bordered" className={styles.highlightCard}>
                  <div className={styles.highlightIcon}>
                    {item.icon}
                  </div>
                  <h4 className={styles.highlightTitle}>
                    {item.title}
                  </h4>
                  <p className={styles.highlightDescription}>
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projetos</span>
              <span className={styles.statDescription}>Entregues com qualidade</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Satisfação</span>
              <span className={styles.statDescription}>Clientes satisfeitos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>24h</span>
              <span className={styles.statLabel}>Resposta</span>
              <span className={styles.statDescription}>Atendimento rápido</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>1</span>
              <span className={styles.statLabel}>Objetivo</span>
              <span className={styles.statDescription}>Seu sucesso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
