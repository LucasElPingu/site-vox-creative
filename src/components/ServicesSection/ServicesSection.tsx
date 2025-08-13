import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ServicesSection.module.css';

/**
 * Seção de serviços da página inicial
 * Exibe os 4 principais serviços da agência
 */
export default function ServicesSection() {
  const services = [
    {
      icon: '📱',
      title: 'Social Media',
      description: 'Gestão completa das suas redes sociais com conteúdo estratégico, planejamento editorial e engajamento real.',
      features: ['Planejamento Editorial', 'Criação de Conteúdo', 'Gestão de Comunidade', 'Relatórios Mensais'],
      link: '/servicos/agencia',
      highlight: false
    },
    {
      icon: '🎨',
      title: 'Design Estratégico',
      description: 'Design que vende! Criamos peças visuais que comunicam, convencem e convertem seus seguidores em clientes.',
      features: ['Design para Redes', 'Identidade Visual', 'Materiais Promocionais', 'Templates Personalizados'],
      link: '/servicos/agencia',
      highlight: true
    },
    {
      icon: '🚀',
      title: 'Tráfego Pago',
      description: 'Campanhas otimizadas no Google Ads, Facebook e Instagram para gerar leads qualificados e vendas.',
      features: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'Otimização de ROI'],
      link: '/servicos/agencia',
      highlight: false
    },
    {
      icon: '🖨️',
      title: 'Impressos Gráficos',
      description: 'Produtos gráficos de alta qualidade: cartões, panfletos, banners e muito mais para sua empresa.',
      features: ['Cartão de Visita', 'Panfletos', 'Banners', 'Material Promocional'],
      link: '/servicos/grafica',
      highlight: false
    }
  ];

  return (
    <section className={styles.servicesSection} id="servicos">
      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            ⭐ Nossos Serviços
          </div>
          <h2 className={styles.title}>
            Soluções completas para sua{' '}
            <span className={styles.highlight}>marca crescer</span>
          </h2>
          <p className={styles.description}>
            Oferecemos um portfólio completo de serviços digitais e gráficos 
            para levar sua marca ao próximo nível no mercado.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <Card 
              key={index}
              variant="elevated" 
              className={`${styles.serviceCard} ${service.highlight ? styles.featured : ''}`}
            >
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              
              <p className={styles.serviceDescription}>
                {service.description}
              </p>
              
              <ul className={styles.featureList}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.feature}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className={styles.serviceAction}>
                <Button 
                  href={service.link} 
                  variant={service.highlight ? "primary" : "secondary"}
                  size="medium"
                >
                  Saiba Mais
                </Button>
              </div>
              
              {service.highlight && (
                <div className={styles.featuredBadge}>
                  ⭐ Mais Popular
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Call-to-action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Precisa de uma solução personalizada?
            </h3>
            <p className={styles.ctaDescription}>
              Nossa equipe está pronta para criar um plano exclusivo para suas necessidades.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="primary" size="large">
                💬 Falar com Especialista
              </Button>
              <Button href="/planos" variant="secondary" size="large">
                📋 Ver Todos os Planos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
