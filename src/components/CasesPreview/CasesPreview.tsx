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
      title: 'Dra. Hellen Magalhães',
      category: 'Advogada de Família',
      description: 'Especialista em guarda internacional e defesa de mães. +2.500 mães defendidas e foco em proteção familiar.',
      beforeAfter: {
        before: 'Baixa visibilidade digital',
        after: 'Posicionamento de autoridade'
      },
      results: ['+2.500 mães atendidas', 'Posicionamento de autoridade', 'Agendamento simplificado via Instagram'],
      image: '⚖️',
      bgColor: '#1F2937',
      links: {
        instagram: 'https://www.instagram.com/advhellenmagalhaes/'
      }
    },
    {
      id: 2,
      title: 'Sara Gomes',
      category: 'Psicóloga',
      description: 'Atuação focada em Recomeços, Relações e Amor-próprio. Conteúdo e posicionamento para atrair pacientes e fortalecer autoridade.',
      beforeAfter: {
        before: 'Alcance limitado',
        after: 'Engajamento qualificado'
      },
      results: ['Melhor engajamento', 'Agenda mais qualificada', 'Crescimento de seguidores relevantes'],
      image: '🧠',
      bgColor: '#06B6D4',
      links: {
        instagram: 'https://www.instagram.com/psi.saragomes/',
        website: 'https://psisaragomes.com.br/'
      }
    },
    {
      id: 3,
      title: 'DiasFit Saudável',
      category: 'Alimentação Saudável',
      description: 'Marmitas saudáveis, caldos e sucos funcionais. Comunicação focada em naturalidade e vida saudável, sem conservantes.',
      beforeAfter: {
        before: 'Baixa conversão de pedidos',
        after: 'Pedidos recorrentes e marca reconhecida'
      },
      results: ['Aumento de pedidos', 'Melhor comunicação do cardápio', 'Crescimento de seguidores locais'],
      image: '🥗',
      bgColor: '#10B981',
      links: {
        instagram: 'https://www.instagram.com/diasfit.saudavel/'
      }
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
