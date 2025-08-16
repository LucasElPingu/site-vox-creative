'use client';

import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './cases.module.css';

/**
 * Página de Cases de Sucesso - Galeria completa de projetos por nicho
 */
export default function Cases() {
  const cases = [
    {
      id: 1,
      title: 'Dr. Silva - Advocacia Criminal',
      category: 'Advocacia',
      niche: 'Direito Criminal',
      description: 'Escritório especializado em direito criminal que precisava de presença digital para captar novos clientes.',
      image: '⚖️',
      bgColor: '#1F2937',
      before: 'Sem presença digital',
      after: '50k+ seguidores',
      results: [
        '300% aumento no alcance',
        '150% aumento em conversões',
        '50.000+ seguidores em 8 meses',
        'R$ 80k em novos contratos/mês'
      ],
      strategy: 'Conteúdo educativo sobre direitos, cases reais (sem exposição) e posicionamento como autoridade no nicho.',
      timeline: '8 meses'
    },
    {
      id: 2,
      title: 'Beleza & Estética Fernanda',
      category: 'Saúde & Beleza',
      niche: 'Estética Facial',
      description: 'Clínica de estética que buscava aumentar o agendamento de procedimentos e fortalecer a marca regional.',
      image: '💄',
      bgColor: '#EC4899',
      before: 'Poucos agendamentos',
      after: 'Agenda lotada',
      results: [
        '500% aumento em leads',
        'Agenda lotada por 3 meses',
        '25.000+ seguidores',
        'Reconhecimento regional'
      ],
      strategy: 'Antes e depois de procedimentos, dicas de cuidados, lives educativas e parcerias com influencers locais.',
      timeline: '6 meses'
    },
    {
      id: 3,
      title: 'AgroTech Solutions',
      category: 'Agronegócio',
      niche: 'Tecnologia Rural',
      description: 'Empresa de tecnologia para o agronegócio que precisava de lead generation B2B e posicionamento digital.',
      image: '🌾',
      bgColor: '#059669',
      before: 'Marketing tradicional',
      after: 'Líder digital no setor',
      results: [
        '200% aumento em leads B2B',
        '5 parcerias estratégicas',
        '15.000+ seguidores especializados',
        'R$ 2M em novos contratos'
      ],
      strategy: 'Conteúdo técnico, cases de implementação, webinars e networking digital com produtores rurais.',
      timeline: '12 meses'
    },
    {
      id: 4,
      title: 'Psicóloga Dra. Ana Costa',
      category: 'Saúde Mental',
      niche: 'Psicologia Clínica',
      description: 'Profissional da psicologia que buscava ampliar sua base de pacientes através do marketing digital ético.',
      image: '🧠',
      bgColor: '#7C3AED',
      before: 'Consultório vazio',
      after: 'Lista de espera',
      results: [
        'Consultório com lista de espera',
        '300% aumento em consultas',
        '20.000+ seguidores',
        'Referência em ansiedade'
      ],
      strategy: 'Conteúdo educativo sobre saúde mental, desmistificação da terapia e campanhas de conscientização.',
      timeline: '10 meses'
    },
    {
      id: 5,
      title: 'RestaurantePlus',
      category: 'Alimentação',
      niche: 'Restaurante Gourmet',
      description: 'Restaurante gourmet que precisava aumentar o movimento presencial e delivery durante a pandemia.',
      image: '🍽️',
      bgColor: '#DC2626',
      before: '30% ocupação',
      after: 'Casa sempre cheia',
      results: [
        '200% aumento no movimento',
        '400% crescimento no delivery',
        '35.000+ seguidores',
        'Expansão para 2ª unidade'
      ],
      strategy: 'Food content, bastidores da cozinha, menu digital e promoções exclusivas para seguidores.',
      timeline: '8 meses'
    },
    {
      id: 6,
      title: 'FitLife Academia',
      category: 'Fitness',
      niche: 'Academia Premium',
      description: 'Academia premium que buscava atrair mais alunos e posicionar-se como referência em fitness na região.',
      image: '💪',
      bgColor: '#EA580C',
      before: '200 alunos',
      after: '800+ alunos',
      results: [
        '300% aumento na base de alunos',
        '18.000+ seguidores engajados',
        'Reconhecimento como melhor academia',
        'Inauguração de 2ª unidade'
      ],
      strategy: 'Transformações de alunos, treinos ao vivo, dicas de nutrição e desafios fitness.',
      timeline: '14 meses'
    }
  ];

  const categories = [
    { name: 'Todos', filter: 'all', icon: '🎯' },
    { name: 'Advocacia', filter: 'Advocacia', icon: '⚖️' },
    { name: 'Saúde & Beleza', filter: 'Saúde & Beleza', icon: '💄' },
    { name: 'Agronegócio', filter: 'Agronegócio', icon: '🌾' },
    { name: 'Saúde Mental', filter: 'Saúde Mental', icon: '🧠' },
    { name: 'Alimentação', filter: 'Alimentação', icon: '🍽️' },
    { name: 'Fitness', filter: 'Fitness', icon: '💪' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredCases = selectedCategory === 'all' 
    ? cases 
    : cases.filter(case_ => case_.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Cases de Sucesso - Resultados Reais de Clientes | Vox Creative</title>
        <meta name="description" content="Veja cases reais de clientes da Vox Creative: advocacia, estética, agronegócio, psicologia e mais. Resultados comprovados em marketing digital." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                📈 Cases de Sucesso
              </div>
              <h1 className={styles.heroTitle}>
                Resultados{' '}
                <span className={styles.highlight}>reais</span>{' '}
                que falam por si
              </h1>
              <p className={styles.heroDescription}>
                Descubra como ajudamos empresas de diferentes segmentos a 
                alcançar resultados extraordinários através de estratégias 
                personalizadas e execução impecável.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statLabel}>Clientes Atendidos</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>Projetos Entregues</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Segmentos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className={styles.filtersSection}>
          <div className={styles.container}>
            <div className={styles.filtersHeader}>
              <h2 className={styles.filtersTitle}>Filtrar por Segmento</h2>
            </div>
            <div className={styles.filtersGrid}>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`${styles.filterButton} ${selectedCategory === category.filter ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.filter)}
                >
                  <span className={styles.filterIcon}>{category.icon}</span>
                  <span className={styles.filterName}>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Grid */}
        <section className={styles.casesSection}>
          <div className={styles.container}>
            <div className={styles.casesGrid}>
              {filteredCases.map((case_, index) => (
                <Card key={case_.id} variant="elevated" className={styles.caseCard}>
                  <div 
                    className={styles.caseHeader}
                    style={{ backgroundColor: case_.bgColor }}
                  >
                    <div className={styles.caseIcon}>
                      {case_.image}
                    </div>
                    <div className={styles.caseCategory}>{case_.category}</div>
                    <h3 className={styles.caseTitle}>{case_.title}</h3>
                  </div>
                  
                  <div className={styles.caseContent}>
                    <div className={styles.caseNiche}>
                      <strong>Nicho:</strong> {case_.niche}
                    </div>
                    
                    <p className={styles.caseDescription}>
                      {case_.description}
                    </p>
                    
                    {/* Antes e Depois */}
                    <div className={styles.beforeAfter}>
                      <div className={styles.beforeAfterItem}>
                        <span className={styles.label}>Antes:</span>
                        <span className={styles.value}>{case_.before}</span>
                      </div>
                      <div className={styles.arrow}>→</div>
                      <div className={styles.beforeAfterItem}>
                        <span className={styles.label}>Depois:</span>
                        <span className={styles.value}>{case_.after}</span>
                      </div>
                    </div>
                    
                    {/* Resultados */}
                    <div className={styles.results}>
                      <h4 className={styles.resultsTitle}>Principais Resultados:</h4>
                      <ul className={styles.resultsList}>
                        {case_.results.map((result, resultIndex) => (
                          <li key={resultIndex} className={styles.resultItem}>
                            <span className={styles.checkIcon}>✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Estratégia */}
                    <div className={styles.strategy}>
                      <h4 className={styles.strategyTitle}>Estratégia Utilizada:</h4>
                      <p className={styles.strategyText}>{case_.strategy}</p>
                    </div>
                    
                    {/* Timeline */}
                    <div className={styles.timeline}>
                      <span className={styles.timelineLabel}>Tempo para resultado:</span>
                      <span className={styles.timelineValue}>{case_.timeline}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredCases.length === 0 && (
              <div className={styles.noResults}>
                <p>Nenhum case encontrado para esta categoria.</p>
                <Button 
                  onClick={() => setSelectedCategory('all')}
                  variant="secondary"
                  size="medium"
                >
                  Ver Todos os Cases
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Metodologia */}
        <section className={styles.methodologySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Nossa{' '}
                <span className={styles.highlight}>Metodologia</span>
              </h2>
              <p className={styles.sectionDescription}>
                Processo estruturado que garante resultados consistentes em todos os projetos.
              </p>
            </div>

            <div className={styles.methodologySteps}>
              <div className={styles.methodologyStep}>
                <div className={styles.stepNumber}>1</div>
                <h4 className={styles.stepTitle}>Diagnóstico</h4>
                <p className={styles.stepDescription}>
                  Análise completa da marca, concorrência e público-alvo
                </p>
              </div>
              
              <div className={styles.methodologyStep}>
                <div className={styles.stepNumber}>2</div>
                <h4 className={styles.stepTitle}>Estratégia</h4>
                <p className={styles.stepDescription}>
                  Desenvolvimento de estratégia personalizada baseada em dados
                </p>
              </div>
              
              <div className={styles.methodologyStep}>
                <div className={styles.stepNumber}>3</div>
                <h4 className={styles.stepTitle}>Execução</h4>
                <p className={styles.stepDescription}>
                  Implementação das ações com monitoramento constante
                </p>
              </div>
              
              <div className={styles.methodologyStep}>
                <div className={styles.stepNumber}>4</div>
                <h4 className={styles.stepTitle}>Otimização</h4>
                <p className={styles.stepDescription}>
                  Análise de resultados e otimizações contínuas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Quer ser nosso próximo case de sucesso?
              </h2>
              <p className={styles.ctaDescription}>
                Vamos conversar sobre como podemos ajudar sua marca a alcançar 
                resultados extraordinários como os que você viu aqui.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  🚀 Quero Meu Case!
                </Button>
                <Button href="/servicos/agencia" variant="secondary" size="large">
                  📋 Ver Nossos Serviços
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
