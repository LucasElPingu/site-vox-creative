import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './CasesPreview.module.css';

/**
 * Prévia de cases de sucesso para a página inicial
 * Mostra alguns projetos em destaque
 */
export default function CasesPreview() {
  const cases = [
    {
      id: 1,
      title: 'Advocacia Criminal',
      category: 'Advocacia',
      description: 'Aumento de 300% no alcance e 150% em conversões para escritório especializado em direito criminal.',
      beforeAfter: {
        before: 'Sem presença digital',
        after: '50k+ seguidores'
      },
      results: ['300% alcance', '150% conversões', '50k seguidores'],
      image: '⚖️',
      bgColor: '#1F2937'
    },
    {
      id: 2,
      title: 'Clínica Estética',
      category: 'Saúde & Beleza',
      description: 'Estratégia completa que resultou em agenda lotada e reconhecimento regional da marca.',
      beforeAfter: {
        before: 'Poucos clientes',
        after: 'Agenda lotada'
      },
      results: ['500% leads', 'Agenda lotada', '25k seguidores'],
      image: '💄',
      bgColor: '#EC4899'
    },
    {
      id: 3,
      title: 'Agronegócio',
      category: 'Agro',
      description: 'Posicionamento digital para empresa do agro, gerando leads qualificados e parcerias estratégicas.',
      beforeAfter: {
        before: 'Marketing tradicional',
        after: 'Líder digital'
      },
      results: ['200% leads B2B', 'Parcerias estratégicas', '15k seguidores'],
      image: '🌾',
      bgColor: '#059669'
    }
  ];

  return (
    <section className={styles.casesSection} id="cases">
      <div className={styles.container}>
        {/* Cabeçalho */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            📈 Cases de Sucesso
          </div>
          <h2 className={styles.title}>
            Resultados que{' '}
            <span className={styles.highlight}>falam por si</span>
          </h2>
          <p className={styles.description}>
            Veja como ajudamos nossos clientes a alcançar resultados extraordinários 
            através de estratégias personalizadas e foco em performance.
          </p>
        </div>

        {/* Grid de cases */}
        <div className={styles.casesGrid}>
          {cases.map((case_) => (
            <Card 
              key={case_.id}
              variant="elevated" 
              className={styles.caseCard}
            >
              <div 
                className={styles.caseHeader}
                style={{ backgroundColor: case_.bgColor }}
              >
                <div className={styles.caseIcon}>
                  {case_.image}
                </div>
                <div className={styles.caseCategory}>
                  {case_.category}
                </div>
              </div>
              
              <div className={styles.caseContent}>
                <h3 className={styles.caseTitle}>{case_.title}</h3>
                
                <p className={styles.caseDescription}>
                  {case_.description}
                </p>
                
                {/* Antes e Depois */}
                <div className={styles.beforeAfter}>
                  <div className={styles.beforeAfterItem}>
                    <span className={styles.label}>Antes:</span>
                    <span className={styles.value}>{case_.beforeAfter.before}</span>
                  </div>
                  <div className={styles.arrow}>→</div>
                  <div className={styles.beforeAfterItem}>
                    <span className={styles.label}>Depois:</span>
                    <span className={styles.value}>{case_.beforeAfter.after}</span>
                  </div>
                </div>
                
                {/* Resultados */}
                <div className={styles.results}>
                  <h4 className={styles.resultsTitle}>Resultados:</h4>
                  <ul className={styles.resultsList}>
                    {case_.results.map((result, resultIndex) => (
                      <li key={resultIndex} className={styles.resultItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call-to-action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Quer ser nosso próximo case de sucesso?
            </h3>
            <p className={styles.ctaDescription}>
              Vamos conversar sobre como podemos ajudar sua marca a alcançar resultados incríveis.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="primary" size="large">
                🚀 Quero Meu Case!
              </Button>
              <Button href="/servicos" variant="secondary" size="large">
                🎯 Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
