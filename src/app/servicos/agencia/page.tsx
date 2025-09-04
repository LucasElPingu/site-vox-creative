import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout/Layout';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import styles from './agencia.module.css';

/**
 * Página de Serviços da Agência - Planos de Social Media, Design e Tráfego Pago
 */
export default function ServicosAgencia() {
  const socialMediaPlans = [
    {
      name: 'Essencial',
      price: 'R$ 897',
      period: '/mês',
      description: 'Ideal para quem está começando no digital',
      features: [
        '12 posts mensais',
        '6 stories por semana',
        'Planejamento editorial',
        'Gestão de comentários',
        'Relatório mensal básico',
        'Suporte via WhatsApp'
      ],
      highlight: false,
      buttonText: 'Contratar Essencial'
    },
    {
      name: 'Profissional',
      price: 'R$ 1.497',
      period: '/mês',
      description: 'O mais escolhido pelos nossos clientes',
      features: [
        '20 posts mensais',
        '10 stories por semana',
        'Planejamento editorial completo',
        'Gestão ativa de comunidade',
        'Stories em destaque',
        'Relatório mensal avançado',
        'Suporte prioritário',
        'Consultoria estratégica'
      ],
      highlight: true,
      buttonText: 'Contratar Profissional'
    },
    {
      name: 'Premium',
      price: 'R$ 2.297',
      period: '/mês',
      description: 'Para marcas que querem dominar o digital',
      features: [
        '30 posts mensais',
        'Stories ilimitados',
        'Planejamento estratégico',
        'Gestão de múltiplas redes',
        'Reels profissionais',
        'Stories em destaque',
        'Relatório executivo',
        'Consultoria semanal',
        'Suporte 24h'
      ],
      highlight: false,
      buttonText: 'Contratar Premium'
    },
    {
      name: 'Enterprise',
      price: 'R$ 3.497',
      period: '/mês',
      description: 'Solução completa para grandes empresas',
      features: [
        'Conteúdo ilimitado',
        'Gestão multiplataforma',
        'Estratégia personalizada',
        'Team dedicado',
        'Criação de campanhas',
        'Influencer marketing',
        'Relatórios personalizados',
        'Consultoria executiva',
        'Suporte dedicado'
      ],
      highlight: false,
      buttonText: 'Contratar Enterprise'
    }
  ];

  const trafficPlan = {
    name: 'Tráfego Pago Fixo',
    price: 'R$ 1.997',
    period: '/mês',
    description: 'Gestão completa das suas campanhas pagas',
    features: [
      'Gestão de Google Ads',
      'Gestão de Facebook Ads',
      'Gestão de Instagram Ads',
      'Otimização de conversões',
      'Relatórios semanais',
      'Landing pages otimizadas',
      'Pixel e conversões',
      'Suporte especializado'
    ],
    investment: 'Investimento em mídia não incluso (mínimo R$ 1.000/mês)',
    buttonText: 'Contratar Tráfego Fixo'
  };

  const extras = [
    {
      title: 'Identidade Visual Completa',
      description: 'Logo, manual da marca, papelaria e aplicações',
      price: 'A partir de R$ 2.500',
      icon: '🎨',
      features: ['Logo + versões', 'Manual da marca', 'Papelaria básica', '3 revisões incluídas']
    },
    {
      title: 'Consultoria de Posicionamento',
      description: 'Estratégia completa de posicionamento da marca',
      price: 'R$ 1.500',
      icon: '🎯',
      features: ['Análise competitiva', 'Definição de persona', 'Tom de voz', 'Estratégia de conteúdo']
    },
    {
      title: 'Design Estratégico Avulso',
      description: 'Criação de peças pontuais com estratégia',
      price: 'A partir de R$ 150',
      icon: '🖼️',
      features: ['Design personalizado', 'Formatos otimizados', 'Entrega em 48h', '2 revisões incluídas']
    }
  ];

  return (
    <>
      <Head>
        <title>Serviços de Agência - Social Media, Design e Tráfego Pago | Vox Creative</title>
        <meta name="description" content="Planos completos de Social Media, Design Estratégico e Tráfego Pago. Escolha o plano ideal para fazer sua marca crescer no digital com a Vox Creative." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                🚀 Serviços de Agência
              </div>
              <h1 className={styles.heroTitle}>
                Planos completos para sua marca{' '}
                <span className={styles.highlight}>dominar o digital</span>
              </h1>
              <p className={styles.heroDescription}>
                Social Media, Design Estratégico e Tráfego Pago em planos pensados 
                para diferentes momentos do seu negócio. Escolha o ideal para você.
              </p>
            </div>
          </div>
        </section>

        {/* Planos de Social Media */}
        <section className={styles.plansSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Planos de{' '}
                <span className={styles.highlight}>Social Media + Design</span>
              </h2>
              <p className={styles.sectionDescription}>
                Gestão completa das suas redes sociais com design estratégico incluso. 
                Todos os planos incluem criação de conteúdo, planejamento editorial e gestão.
              </p>
            </div>

            <div className={styles.plansGrid}>
              {socialMediaPlans.map((plan, index) => (
                <Card 
                  key={index}
                  variant="elevated" 
                  className={`${styles.planCard} ${plan.highlight ? styles.featured : ''}`}
                >
                  {plan.highlight && (
                    <div className={styles.featuredBadge}>
                      ⭐ Mais Popular
                    </div>
                  )}
                  
                  <div className={styles.planHeader}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <div className={styles.planPrice}>
                      <span className={styles.price}>{plan.price}</span>
                      <span className={styles.period}>{plan.period}</span>
                    </div>
                    <p className={styles.planDescription}>{plan.description}</p>
                  </div>
                  
                  <div className={styles.planContent}>
                    <ul className={styles.featuresList}>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={styles.feature}>
                          <span className={styles.checkIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      href="/contato" 
                      variant={plan.highlight ? "primary" : "secondary"}
                      size="large"
                      className={styles.planButton}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className={styles.planNote}>
              <p>💡 <strong>Contrato mínimo:</strong> 6 meses • <strong>Desconto anual:</strong> 10% OFF</p>
            </div>
          </div>
        </section>

        {/* Tráfego Pago */}
        <section className={styles.trafficSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Tráfego Pago</span> Profissional
              </h2>
              <p className={styles.sectionDescription}>
                Gestão especializada das suas campanhas pagas com foco em resultados e ROI otimizado.
              </p>
            </div>

            <div className={styles.trafficContainer}>
              <Card variant="elevated" className={styles.trafficCard}>
                <div className={styles.trafficHeader}>
                  <div className={styles.trafficIcon}>🚀</div>
                  <h3 className={styles.trafficName}>{trafficPlan.name}</h3>
                  <div className={styles.trafficPrice}>
                    <span className={styles.price}>{trafficPlan.price}</span>
                    <span className={styles.period}>{trafficPlan.period}</span>
                  </div>
                  <p className={styles.trafficDescription}>{trafficPlan.description}</p>
                </div>
                
                <div className={styles.trafficContent}>
                  <ul className={styles.featuresList}>
                    {trafficPlan.features.map((feature, index) => (
                      <li key={index} className={styles.feature}>
                        <span className={styles.checkIcon}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className={styles.investmentNote}>
                    <p>💰 {trafficPlan.investment}</p>
                  </div>
                  
                  <Button 
                    href="/contato" 
                    variant="primary"
                    size="large"
                  >
                    {trafficPlan.buttonText}
                  </Button>
                </div>
              </Card>

              <Card variant="bordered" className={styles.customTrafficCard}>
                <div className={styles.customTrafficContent}>
                  <div className={styles.customIcon}>🎯</div>
                  <h4 className={styles.customTitle}>Tráfego Pago Personalizado</h4>
                  <p className={styles.customDescription}>
                    Cada negócio é único. Criamos estratégias de tráfego pago 
                    100% personalizadas para suas necessidades específicas.
                  </p>
                  <ul className={styles.customFeatures}>
                    <li>Estratégia personalizada</li>
                    <li>Orçamento flexível</li>
                    <li>Múltiplas plataformas</li>
                    <li>Consultoria dedicada</li>
                  </ul>
                  <Button 
                    href="https://wa.me/5511949548700" 
                    variant="whatsapp"
                    target="_blank"
                    size="medium"
                  >
                    💬 Falar no WhatsApp
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Extras */}
        <section className={styles.extrasSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Serviços{' '}
                <span className={styles.highlight}>Complementares</span>
              </h2>
              <p className={styles.sectionDescription}>
                Serviços adicionais para complementar sua estratégia digital e fortalecer sua marca.
              </p>
            </div>

            <div className={styles.extrasGrid}>
              {extras.map((extra, index) => (
                <Card key={index} variant="bordered" className={styles.extraCard}>
                  <div className={styles.extraIcon}>{extra.icon}</div>
                  <h4 className={styles.extraTitle}>{extra.title}</h4>
                  <p className={styles.extraDescription}>{extra.description}</p>
                  <div className={styles.extraPrice}>{extra.price}</div>
                  <ul className={styles.extraFeatures}>
                    {extra.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                  <Button href="/contato" variant="secondary" size="medium">
                    Solicitar Orçamento
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Pronto para levar sua marca ao próximo nível?
              </h2>
              <p className={styles.ctaDescription}>
                Vamos conversar sobre qual plano é o ideal para o momento atual do seu negócio.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  💬 Falar com Especialista
                </Button>
                <Button href="/planos" variant="secondary" size="large">
                  📊 Comparar Todos os Planos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
