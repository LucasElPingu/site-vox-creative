import Head from 'next/head';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import styles from './planos.module.css';

/**
 * Página de Planos - Comparação completa de todos os serviços
 * Correção: tipagem para permitir featureValues[plan.name] sem mudar a lógica.
 */

// TIPAGENS ADICIONADAS (sem mudar a lógica)
type PlanKey = 'Essencial' | 'Profissional' | 'Premium' | 'Enterprise';

type SocialPlan = {
  name: PlanKey;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
};

type TrafficPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  note: string;
  isCustom: boolean;
};

export default function Planos() {
  const socialMediaPlans: SocialPlan[] = [
    {
      name: 'Essencial',
      price: 'R$ 897',
      description: 'Ideal para quem está começando',
      features: [
        '12 posts mensais',
        '6 stories por semana',
        'Planejamento editorial',
        'Gestão de comentários',
        'Relatório mensal básico',
        'Suporte via WhatsApp'
      ],
      highlight: false
    },
    {
      name: 'Profissional',
      price: 'R$ 1.497',
      description: 'O mais escolhido pelos clientes',
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
      highlight: true
    },
    {
      name: 'Premium',
      price: 'R$ 2.297',
      description: 'Para marcas que querem dominar',
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
      highlight: false
    },
    {
      name: 'Enterprise',
      price: 'R$ 3.497',
      description: 'Solução completa empresarial',
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
      highlight: false
    }
  ];

  const trafficPlans: TrafficPlan[] = [
    {
      name: 'Tráfego Pago Fixo',
      price: 'R$ 1.997',
      description: 'Gestão completa das campanhas',
      features: [
        'Google Ads + Facebook Ads',
        'Instagram Ads',
        'Otimização de conversões',
        'Landing pages otimizadas',
        'Relatórios semanais',
        'Pixel e conversões',
        'Suporte especializado'
      ],
      note: 'Investimento em mídia não incluso (mín. R$ 1.000/mês)',
      isCustom: false
    },
    {
      name: 'Tráfego Personalizado',
      price: 'Sob consulta',
      description: 'Estratégia 100% personalizada',
      features: [
        'Estratégia exclusiva',
        'Múltiplas plataformas',
        'Orçamento flexível',
        'Consultoria dedicada',
        'Métricas customizadas',
        'Integração com CRM',
        'Suporte prioritário'
      ],
      note: 'Valores conforme necessidades específicas',
      isCustom: true
    }
  ];

  const comparisonFeatures: string[] = [
    'Posts mensais',
    'Stories por semana',
    'Planejamento editorial',
    'Gestão de comunidade',
    'Stories em destaque',
    'Relatórios',
    'Suporte',
    'Consultoria',
    'Reels profissionais',
    'Campanhas'
  ];

  // TIPAGEM DO MAPA DE VALORES (sem mudar conteúdo)
  const featureValues: Record<PlanKey, string[]> = {
    Essencial: ['12 posts', '6 stories', '✓', 'Básica', '✗', 'Mensal', 'WhatsApp', '✗', '✗', '✗'],
    Profissional: ['20 posts', '10 stories', '✓', 'Ativa', '✓', 'Avançado', 'Prioritário', 'Estratégica', '✗', '✗'],
    Premium: ['30 posts', 'Ilimitado', '✓', 'Ativa', '✓', 'Executivo', '24h', 'Semanal', '✓', '✗'],
    Enterprise: ['Ilimitado', 'Ilimitado', '✓', 'Dedicada', '✓', 'Personalizado', 'Dedicado', 'Executiva', '✓', '✓']
  };

  return (
    <>
      <Head>
        <title>Planos e Preços - Social Media, Design e Tráfego Pago | Vox Creative</title>
        <meta
          name="description"
          content="Compare todos os planos da Vox Creative: Social Media, Design Estratégico e Tráfego Pago. Escolha o ideal para sua marca crescer no digital."
        />
      </Head>

      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>🧩 Planos & Preços</div>
              <h1 className={styles.heroTitle}>
                Escolha o plano ideal para <span className={styles.highlight}>sua marca crescer</span>
              </h1>
              <p className={styles.heroDescription}>
                Compare todos os nossos planos de Social Media, Design e Tráfego Pago. Encontre a solução perfeita
                para o momento atual do seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* Planos Social Media */}
        <section className={styles.plansSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Planos <span className={styles.highlight}>Social Media + Design</span>
              </h2>
              <p className={styles.sectionDescription}>
                Gestão completa das suas redes sociais com design estratégico incluso. Contrato mínimo de 6 meses.
              </p>
            </div>

            <div className={styles.plansGrid}>
              {socialMediaPlans.map((plan, index) => (
                <Card key={index} variant="elevated" className={`${styles.planCard} ${plan.highlight ? styles.featured : ''}`}>
                  {plan.highlight && <div className={styles.featuredBadge}>⭐ Mais Popular</div>}

                  <div className={styles.planHeader}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <div className={styles.planPrice}>
                      <span className={styles.price}>{plan.price}</span>
                      <span className={styles.period}>/mês</span>
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

                    <Button href="/contato" variant={plan.highlight ? 'primary' : 'secondary'} size="large" className={styles.planButton}>
                      Escolher Plano
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tabela Comparativa */}
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Comparação <span className={styles.highlight}>Detalhada</span>
              </h2>
              <p className={styles.sectionDescription}>Veja lado a lado todas as funcionalidades de cada plano.</p>
            </div>

            <div className={styles.comparisonTable}>
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th className={styles.featureHeader}>Recursos</th>
                      {socialMediaPlans.map((plan, index) => (
                        <th key={index} className={`${styles.planHeader} ${plan.highlight ? styles.featured : ''}`}>
                          {plan.name}
                          <span className={styles.tablePrice}>{plan.price}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index}>
                        <td className={styles.featureCell}>{feature}</td>
                        {socialMediaPlans.map((plan, planIndex) => (
                          <td key={planIndex} className={styles.valueCell}>
                            {featureValues[plan.name][index]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Tráfego Pago */}
        <section className={styles.trafficSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Planos de <span className={styles.highlight}>Tráfego Pago</span>
              </h2>
              <p className={styles.sectionDescription}>
                Gestão especializada das suas campanhas pagas com foco em ROI e conversões.
              </p>
            </div>

            <div className={styles.trafficGrid}>
              {trafficPlans.map((plan, index) => (
                <Card key={index} variant="elevated" className={styles.trafficCard}>
                  <div className={styles.trafficHeader}>
                    <div className={styles.trafficIcon}>{plan.isCustom ? '🎯' : '🚀'}</div>
                    <h3 className={styles.trafficName}>{plan.name}</h3>
                    <div className={styles.trafficPrice}>
                      <span className={styles.price}>{plan.price}</span>
                      {!plan.isCustom && <span className={styles.period}>/mês</span>}
                    </div>
                    <p className={styles.trafficDescription}>{plan.description}</p>
                  </div>

                  <div className={styles.trafficContent}>
                    <ul className={styles.featuresList}>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={styles.feature}>
                          <span className={styles.checkIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className={styles.trafficNote}>
                      <p>💡 {plan.note}</p>
                    </div>

                    <Button
                      href={plan.isCustom ? 'https://wa.me/5511999999999' : '/contato'}
                      variant={plan.isCustom ? 'whatsapp' : 'primary'}
                      size="large"
                      target={plan.isCustom ? '_blank' : undefined}
                    >
                      {plan.isCustom ? '💬 Falar no WhatsApp' : 'Contratar Plano'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Resumido */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Dúvidas <span className={styles.highlight}>Frequentes</span>
              </h2>
            </div>

            <div className={styles.faqGrid}>
              <Card variant="bordered" className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>Posso trocar de plano?</h4>
                <p className={styles.faqAnswer}>
                  Sim! Você pode fazer upgrade a qualquer momento. Para downgrade, é necessário aguardar o fim do ciclo
                  atual.
                </p>
              </Card>

              <Card variant="bordered" className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>Qual o contrato mínimo?</h4>
                <p className={styles.faqAnswer}>
                  6 meses para Social Media e 3 meses para Tráfego Pago. Oferecemos 10% de desconto para contratos
                  anuais.
                </p>
              </Card>

              <Card variant="bordered" className={styles.faqCard}>
                <h4 className={styles.faqQuestion}>Posso pausar o serviço?</h4>
                <p className={styles.faqAnswer}>
                  Oferecemos pausa de até 30 dias por ano útil, ideal para férias ou períodos específicos do seu
                  negócio.
                </p>
              </Card>
            </div>

            <div className={styles.faqCta}>
              <Button href="/faq" variant="secondary" size="large">
                📋 Ver Todas as Perguntas
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Ainda com dúvidas sobre qual plano escolher?</h2>
              <p className={styles.ctaDescription}>
                Nossa equipe está pronta para ajudar você a encontrar a solução perfeita para suas necessidades e
                orçamento.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  💬 Falar com Especialista
                </Button>
                <Button href="https://wa.me/5511999999999" variant="whatsapp" size="large" target="_blank">
                  📱 WhatsApp Direto
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
