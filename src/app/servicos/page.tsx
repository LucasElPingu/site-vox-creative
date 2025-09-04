import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import styles from './servicos.module.css';

export const metadata = {
  title: "Nossos Serviços",
  description: "Conheça os serviços da VOX CREATIVE: marketing digital, design gráfico e estratégias para empresas e empreendedores.",
};

export default function ServicosPage() {
  const services = [
    {
      icon: "📱",
      title: "Marketing Digital",
      description: "Estratégias completas para redes sociais, gestão de conteúdo e presença digital marcante para sua marca.",
      features: ["Gestão de redes sociais", "Criação de conteúdo", "Estratégia digital", "Análise de métricas"],
      link: "/servicos/agencia"
    },
    {
      icon: "🎨",
      title: "Design Gráfico", 
      description: "Identidade visual completa, materiais impressos e digitais com design minimalista e moderno.",
      features: ["Identidade visual", "Materiais impressos", "Design digital", "Branding completo"],
      link: "/servicos/grafica"
    },
    {
      icon: "💼",
      title: "Consultoria Empresarial",
      description: "Orientação especializada para empresas e empreendedores que querem construir uma marca de sucesso.",
      features: ["Posicionamento de marca", "Estratégia de negócio", "Mentoria personalizada", "Plano de crescimento"],
      link: "/contato"
    }
  ];

  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Serviços que <span className={styles.highlight}>transformam</span> sua marca
            </h1>
            <p className={styles.description}>
              Oferecemos soluções completas em marketing digital e design,
              desenvolvidas para empresas e empreendedores que buscam resultados reais.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <Card key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.feature}>
                      <span className={styles.featureIcon}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  href={service.link}
                  variant="primary" 
                  className={styles.serviceButton}
                >
                  Saiba Mais
                </Button>
              </Card>
            ))}
          </div>

          <div className={styles.cta}>
            <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
            <p className={styles.ctaDescription}>
              Entre em contato e vamos conversar sobre como podemos ajudar sua marca a crescer.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="primary" size="large">
                📞 Falar Conosco
              </Button>
              <Button 
                href="https://wa.me/5511949548700" 
                variant="whatsapp" 
                size="large"
                target="_blank"
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
