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
      icon: '🏢',
      title: 'Agência Nacional',
      description: 'Presença em 4 cidades estratégicas'
    },
    {
      icon: '💼',
      title: 'Sede Digital',
      description: 'Atendimento 100% online e presencial'
    },
    {
      icon: '🎯',
      title: 'Foco em Resultados',
      description: 'Estratégias baseadas em dados reais'
    },
    {
      icon: '👥',
      title: 'Time Especializado',
      description: 'Profissionais qualificados em cada área'
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
              Agência nacional com{' '}
              <span className={styles.highlight}>sede digital</span>{' '}
              em 4 cidades
            </h2>
            
            <p className={styles.description}>
              A <strong>Vox Creative</strong> é uma agência de marketing digital que nasceu 
              com o propósito de democratizar o acesso a estratégias de marketing de alta 
              qualidade. Com sede em <strong>Embu das Artes (SP)</strong>, <strong>Goiânia (GO)</strong>, 
              <strong>Guanambi (BA)</strong> e <strong>Recife (PE)</strong>, oferecemos 
              atendimento nacional com a proximidade regional.
            </p>
            
            <p className={styles.description}>
              Nossa missão é simples: <strong>transformar marcas em referências</strong> nos 
              seus segmentos através de identidade visual marcante, estratégia digital eficiente 
              e resultados mensuráveis.
            </p>
            
            <div className={styles.actions}>
              <Button href="/sobre" variant="primary" size="large">
                📖 Nossa História Completa
              </Button>
              <Button href="/time" variant="secondary" size="large">
                👥 Conheça o Time
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
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Cidades</span>
              <span className={styles.statDescription}>Presença nacional</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Clientes</span>
              <span className={styles.statDescription}>Marcas atendidas</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Projetos</span>
              <span className={styles.statDescription}>Entregues com sucesso</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>2+</span>
              <span className={styles.statLabel}>Anos</span>
              <span className={styles.statDescription}>De experiência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
