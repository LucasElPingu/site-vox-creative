import React from 'react';
import Head from 'next/head';
import Layout from '../../../components/Layout/Layout';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import styles from './grafica.module.css';

/**
 * Página de Serviços Gráficos - Produtos impressos de alta qualidade
 */
export default function ServicosGrafica() {
  const products = [
    {
      name: 'Cartão de Visita',
      description: 'Primeira impressão que marca! Cartões profissionais em papel especial com acabamento premium.',
      image: '💼',
      features: ['Papel Couché 300g', 'Verniz Localizado', 'Formato Personalizado', 'Entrega em 3-5 dias'],
      priceFrom: 'A partir de R$ 120',
      popular: true
    },
    {
      name: 'Panfleto / Flyer',
      description: 'Divulgue seu negócio com panfletos chamativos e informativos que convertem.',
      image: '📄',
      features: ['Papel Couché 150g', 'Impressão Colorida', 'Diversos Formatos', 'Grande Tiragem'],
      priceFrom: 'A partir de R$ 180',
      popular: false
    },
    {
      name: 'Banner Impresso',
      description: 'Destaque sua marca com banners resistentes para eventos e pontos de venda.',
      image: '🏷️',
      features: ['Lona Vinílica', 'Impressão HD', 'Ilhoses Inclusos', 'Tamanhos Personalizados'],
      priceFrom: 'A partir de R$ 45/m²',
      popular: false
    },
    {
      name: 'Pasta Personalizada',
      description: 'Organize documentos com estilo usando pastas com sua identidade visual.',
      image: '📁',
      features: ['Papel Duplex 300g', 'Bolsos Internos', 'Acabamento Profissional', 'Design Exclusivo'],
      priceFrom: 'A partir de R$ 380',
      popular: false
    },
    {
      name: 'Imã de Geladeira',
      description: 'Marketing que gruda! Imãs personalizados que mantêm sua marca sempre visível.',
      image: '🧲',
      features: ['Imã Flexível', 'Corte Personalizado', 'Impressão Resistente', 'Ótimo Custo-Benefício'],
      priceFrom: 'A partir de R$ 220',
      popular: true
    },
    {
      name: 'Envelope Personalizado',
      description: 'Correspondência profissional com envelopes que transmitem credibilidade.',
      image: '✉️',
      features: ['Papel Offset 90g', 'Janela Opcional', 'Impressão Colorida', 'Formatos Diversos'],
      priceFrom: 'A partir de R$ 280',
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: 'Adesivos Personalizados',
      description: 'Vinil adesivo para veículos, vitrines e decoração',
      icon: '🏷️'
    },
    {
      title: 'Crachás e Identificação',
      description: 'Crachás profissionais para eventos e empresas',
      icon: '🆔'
    },
    {
      title: 'Material para Eventos',
      description: 'Convites, certificados e materiais promocionais',
      icon: '🎉'
    },
    {
      title: 'Impressão de Grande Formato',
      description: 'Outdoors, faixas e displays promocionais',
      icon: '📏'
    }
  ];

  const whyChoose = [
    {
      icon: '✨',
      title: 'Qualidade Premium',
      description: 'Utilizamos materiais de primeira linha e tecnologia de impressão avançada.'
    },
    {
      icon: '🚚',
      title: 'Entrega Nacional',
      description: 'Enviamos para todo o Brasil com embalagem segura e rastreamento.'
    },
    {
      icon: '🎨',
      title: 'Design Incluso',
      description: 'Nossa equipe cria o design personalizado sem custo adicional.'
    },
    {
      icon: '⏱️',
      title: 'Prazos Garantidos',
      description: 'Cumprimos rigorosamente os prazos acordados para sua tranquilidade.'
    }
  ];

  return (
    <>
      <Head>
        <title>Produtos Gráficos - Impressos Personalizados | Vox Creative</title>
        <meta name="description" content="Cartões de visita, panfletos, banners e materiais gráficos personalizados. Qualidade premium com entrega em todo o Brasil. Orçamento online na Vox Creative." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                🖨️ Produtos Gráficos
              </div>
              <h1 className={styles.heroTitle}>
                Impressos de{' '}
                <span className={styles.highlight}>alta qualidade</span>{' '}
                para sua marca
              </h1>
              <p className={styles.heroDescription}>
                Do cartão de visita ao banner publicitário, criamos e produzimos 
                materiais gráficos que fortalecem sua identidade visual e impactam 
                seu público-alvo.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5.000+</span>
                  <span className={styles.statLabel}>Produtos Entregues</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Brasil</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>24h</span>
                  <span className={styles.statLabel}>Design Grátis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produtos Principais */}
        <section className={styles.productsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Nossos{' '}
                <span className={styles.highlight}>Produtos</span>
              </h2>
              <p className={styles.sectionDescription}>
                Linha completa de produtos gráficos com qualidade profissional 
                e preços competitivos. Todos incluem design personalizado.
              </p>
            </div>

            <div className={styles.productsGrid}>
              {products.map((product, index) => (
                <Card 
                  key={index}
                  variant="elevated" 
                  className={`${styles.productCard} ${product.popular ? styles.popular : ''}`}
                >
                  {product.popular && (
                    <div className={styles.popularBadge}>
                      ⭐ Mais Pedido
                    </div>
                  )}
                  
                  <div className={styles.productHeader}>
                    <div className={styles.productImage}>{product.image}</div>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                  </div>
                  
                  <div className={styles.productContent}>
                    <div className={styles.productPrice}>{product.priceFrom}</div>
                    
                    <ul className={styles.productFeatures}>
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={styles.feature}>
                          <span className={styles.checkIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      href="/contato" 
                      variant={product.popular ? "primary" : "secondary"}
                      size="large"
                      className={styles.productButton}
                    >
                      Quero Este Produto
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Por que escolher */}
        <section className={styles.whyChooseSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Por que escolher nossa{' '}
                <span className={styles.highlight}>gráfica</span>?
              </h2>
            </div>

            <div className={styles.whyChooseGrid}>
              {whyChoose.map((item, index) => (
                <div key={index} className={styles.whyChooseItem}>
                  <div className={styles.whyChooseIcon}>{item.icon}</div>
                  <h4 className={styles.whyChooseTitle}>{item.title}</h4>
                  <p className={styles.whyChooseDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços Adicionais */}
        <section className={styles.additionalSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Outros{' '}
                <span className={styles.highlight}>Serviços</span>
              </h2>
              <p className={styles.sectionDescription}>
                Além dos produtos principais, oferecemos uma linha completa 
                de soluções gráficas para todas as suas necessidades.
              </p>
            </div>

            <div className={styles.additionalGrid}>
              {additionalServices.map((service, index) => (
                <Card key={index} variant="bordered" className={styles.additionalCard}>
                  <div className={styles.additionalIcon}>{service.icon}</div>
                  <h4 className={styles.additionalTitle}>{service.title}</h4>
                  <p className={styles.additionalDescription}>{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Orçamento Personalizado */}
        <section className={styles.customQuoteSection}>
          <div className={styles.container}>
            <Card variant="elevated" className={styles.customQuoteCard}>
              <div className={styles.customQuoteContent}>
                <div className={styles.customQuoteText}>
                  <div className={styles.customQuoteIcon}>📋</div>
                  <h3 className={styles.customQuoteTitle}>
                    Precisa de algo personalizado?
                  </h3>
                  <p className={styles.customQuoteDescription}>
                    Trabalhamos com projetos sob medida! Seja qual for sua necessidade 
                    gráfica, nossa equipe está pronta para criar a solução ideal.
                  </p>
                  <ul className={styles.customQuoteFeatures}>
                    <li>• Orçamento sem compromisso</li>
                    <li>• Projetos exclusivos</li>
                    <li>• Consultoria especializada</li>
                    <li>• Prazos flexíveis</li>
                  </ul>
                </div>
                <div className={styles.customQuoteActions}>
                  <Button 
                    href="https://wa.me/5511949548700" 
                    variant="whatsapp"
                    size="large"
                    target="_blank"
                  >
                    💬 Orçamento WhatsApp
                  </Button>
                  <Button 
                    href="/contato" 
                    variant="secondary"
                    size="large"
                  >
                    📧 Orçamento E-mail
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Processo */}
        <section className={styles.processSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Como{' '}
                <span className={styles.highlight}>funciona</span>
              </h2>
              <p className={styles.sectionDescription}>
                Processo simples e transparente do pedido à entrega
              </p>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h4 className={styles.stepTitle}>Faça seu Pedido</h4>
                <p className={styles.stepDescription}>
                  Entre em contato via WhatsApp ou formulário com suas necessidades
                </p>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h4 className={styles.stepTitle}>Design Grátis</h4>
                <p className={styles.stepDescription}>
                  Criamos o design personalizado sem custo adicional em até 24h
                </p>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h4 className={styles.stepTitle}>Aprovação</h4>
                <p className={styles.stepDescription}>
                  Você aprova o design e confirmamos todos os detalhes do pedido
                </p>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h4 className={styles.stepTitle}>Produção</h4>
                <p className={styles.stepDescription}>
                  Produzimos com qualidade premium seguindo rigorosamente os prazos
                </p>
              </div>
              
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h4 className={styles.stepTitle}>Entrega</h4>
                <p className={styles.stepDescription}>
                  Enviamos com embalagem segura e código de rastreamento
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Pronto para imprimir sua marca?
              </h2>
              <p className={styles.ctaDescription}>
                Solicite seu orçamento personalizado e dê o próximo passo 
                na profissionalização da sua marca.
              </p>
              <div className={styles.ctaButtons}>
                <Button 
                  href="https://wa.me/5511949548700" 
                  variant="whatsapp" 
                  size="large"
                  target="_blank"
                >
                  💬 WhatsApp Direto
                </Button>
                <Button href="/contato" variant="primary" size="large">
                  📧 Solicitar Orçamento
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
