'use client';

import Head from 'next/head';
import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import styles from './blog.module.css';

/**
 * Página do Blog - Artigos e conteúdos educativos
 */
export default function Blog() {
  const articles = [
    {
      id: 1,
      title: 'Qual plano de social media é ideal para minha empresa?',
      excerpt: 'Descubra como escolher o plano de social media perfeito baseado no tamanho da sua empresa, objetivos e orçamento disponível.',
      content: 'Escolher o plano de social media ideal pode ser um desafio. Neste artigo, vamos abordar os principais fatores que você deve considerar...',
      category: 'Social Media',
      readTime: '5 min',
      date: '15 de Janeiro, 2025',
      author: 'Amanda Silva',
      image: '📱',
      tags: ['Social Media', 'Planejamento', 'Estratégia']
    },
    {
      id: 2,
      title: 'Diferença entre tráfego pago e orgânico: qual escolher?',
      excerpt: 'Entenda as principais diferenças entre tráfego pago e orgânico, quando usar cada estratégia e como combinar ambas para melhores resultados.',
      content: 'O tráfego é fundamental para qualquer negócio digital. Mas qual a diferença entre tráfego pago e orgânico?...',
      category: 'Tráfego Pago',
      readTime: '7 min',
      date: '12 de Janeiro, 2025',
      author: 'Eduarda Cotrim',
      image: '🚀',
      tags: ['Tráfego Pago', 'SEO', 'Google Ads']
    },
    {
      id: 3,
      title: 'Como usar design para se destacar no Instagram',
      excerpt: 'Aprenda técnicas de design estratégico para criar posts que realmente chamam atenção e geram engajamento no Instagram.',
      content: 'O Instagram é uma plataforma visual por excelência. Um bom design pode ser o diferencial entre passar despercebido ou viralizar...',
      category: 'Design',
      readTime: '6 min',
      date: '10 de Janeiro, 2025',
      author: 'Thatiane Camargo',
      image: '🎨',
      tags: ['Design', 'Instagram', 'Engajamento']
    },
    {
      id: 4,
      title: 'Vale a pena contratar agência de marketing em 2025?',
      excerpt: 'Análise completa dos prós e contras de contratar uma agência de marketing digital versus fazer tudo internamente.',
      content: 'Com o mercado digital cada vez mais competitivo, muitas empresas se perguntam se vale a pena contratar uma agência...',
      category: 'Negócios',
      readTime: '8 min',
      date: '8 de Janeiro, 2025',
      author: 'Carlos Santos',
      image: '💼',
      tags: ['Agência', 'ROI', 'Estratégia']
    },
    {
      id: 5,
      title: 'Identidade visual: primeiro passo para sua marca',
      excerpt: 'Por que a identidade visual é fundamental para qualquer negócio e como ela impacta a percepção dos seus clientes.',
      content: 'A identidade visual é muito mais que um logo bonito. É a primeira impressão que sua marca causa no público...',
      category: 'Branding',
      readTime: '5 min',
      date: '5 de Janeiro, 2025',
      author: 'Thatiane Camargo',
      image: '✨',
      tags: ['Identidade Visual', 'Branding', 'Logo']
    },
    {
      id: 6,
      title: 'Como medir ROI em marketing digital',
      excerpt: 'Aprenda a calcular e acompanhar o retorno sobre investimento das suas campanhas de marketing digital.',
      content: 'Medir ROI é essencial para entender se seus investimentos em marketing estão trazendo resultado...',
      category: 'Analytics',
      readTime: '9 min',
      date: '3 de Janeiro, 2025',
      author: 'Eduarda Cotrim',
      image: '📊',
      tags: ['ROI', 'Métricas', 'Analytics']
    }
  ];

  const categories = [
    { name: 'Todos', count: articles.length },
    { name: 'Social Media', count: 1 },
    { name: 'Tráfego Pago', count: 1 },
    { name: 'Design', count: 1 },
    { name: 'Negócios', count: 1 },
    { name: 'Branding', count: 1 },
    { name: 'Analytics', count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredArticles = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Blog - Dicas de Marketing Digital e Design | Vox Creative</title>
        <meta name="description" content="Blog da Vox Creative com dicas de marketing digital, social media, design e estratégias para fazer sua marca crescer. Conteúdo atualizado semanalmente." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                📚 Blog Vox Creative
              </div>
              <h1 className={styles.heroTitle}>
                Conhecimento que{' '}
                <span className={styles.highlight}>impulsiona</span> resultados
              </h1>
              <p className={styles.heroDescription}>
                Dicas práticas, estratégias comprovadas e insights do mercado 
                digital para ajudar sua marca a crescer de forma consistente.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <div className={styles.categoriesHeader}>
              <h2 className={styles.categoriesTitle}>Explore por Categoria</h2>
            </div>
            <div className={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`${styles.categoryButton} ${selectedCategory === category.name ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryCount}>({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className={styles.articlesSection}>
          <div className={styles.container}>
            <div className={styles.articlesGrid}>
              {filteredArticles.map((article) => (
                <Card key={article.id} variant="elevated" className={styles.articleCard}>
                  <div className={styles.articleHeader}>
                    <div className={styles.articleIcon}>{article.image}</div>
                    <div className={styles.articleMeta}>
                      <span className={styles.articleCategory}>{article.category}</span>
                      <span className={styles.articleDate}>{article.date}</span>
                    </div>
                  </div>
                  
                  <div className={styles.articleContent}>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                    
                    <div className={styles.articleInfo}>
                      <div className={styles.articleAuthor}>
                        <span className={styles.authorLabel}>Por:</span>
                        <span className={styles.authorName}>{article.author}</span>
                      </div>
                      <div className={styles.articleReadTime}>
                        <span className={styles.timeIcon}>⏱️</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className={styles.articleTags}>
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      href={`/blog/${article.id}`} 
                      variant="secondary" 
                      size="medium"
                      className={styles.readMoreButton}
                    >
                      Ler Artigo Completo
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <div className={styles.noArticles}>
                <p>Nenhum artigo encontrado nesta categoria.</p>
                <Button 
                  onClick={() => setSelectedCategory('Todos')}
                  variant="secondary"
                  size="medium"
                >
                  Ver Todos os Artigos
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <Card variant="elevated" className={styles.newsletterCard}>
              <div className={styles.newsletterContent}>
                <div className={styles.newsletterText}>
                  <div className={styles.newsletterIcon}>📧</div>
                  <h3 className={styles.newsletterTitle}>
                    Receba nossos conteúdos em primeira mão
                  </h3>
                  <p className={styles.newsletterDescription}>
                    Cadastre-se em nossa newsletter e receba semanalmente dicas 
                    exclusivas de marketing digital direto no seu e-mail.
                  </p>
                  <ul className={styles.newsletterBenefits}>
                    <li>📈 Estratégias práticas e testadas</li>
                    <li>🎯 Dicas exclusivas para assinantes</li>
                    <li>🚀 Cases de sucesso detalhados</li>
                    <li>💡 Tendências do mercado digital</li>
                  </ul>
                </div>
                <div className={styles.newsletterForm}>
                  <form className={styles.form}>
                    <input 
                      type="email" 
                      placeholder="Seu melhor e-mail"
                      className={styles.emailInput}
                      required
                    />
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="large"
                    >
                      📧 Quero Receber
                    </Button>
                  </form>
                  <p className={styles.privacyNote}>
                    ✅ Seus dados estão seguros. Não enviamos spam.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Featured Content */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>
                Quer conteúdo personalizado para sua marca?
              </h3>
              <p className={styles.featuredDescription}>
                Nossa equipe pode criar uma estratégia de conteúdo exclusiva 
                para suas redes sociais e blog corporativo.
              </p>
              <div className={styles.featuredButtons}>
                <Button href="/servicos/agencia" variant="primary" size="large">
                  🎯 Ver Planos de Social Media
                </Button>
                <Button href="/contato" variant="secondary" size="large">
                  💬 Solicitar Consultoria
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
