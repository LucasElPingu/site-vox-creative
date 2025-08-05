'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './faq.module.css';

/**
 * Página de Perguntas Frequentes (FAQ)
 */
export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: 'Contratos e Prazos',
      questions: [
        {
          question: 'Qual é o tempo mínimo de contrato?',
          answer: 'Nosso contrato mínimo é de 6 meses para todos os planos de Social Media e Design. Isso garante tempo suficiente para implementar a estratégia e obter resultados consistentes. Para Tráfego Pago, o mínimo é de 3 meses devido à natureza dos testes de campanhas.'
        },
        {
          question: 'Posso cancelar o contrato antes do prazo?',
          answer: 'O cancelamento antecipado é possível mediante pagamento de multa equivalente a 30% do valor restante do contrato. Preferimos conversar antes para entender suas necessidades e encontrar uma solução que funcione para ambas as partes.'
        },
        {
          question: 'Como funciona a renovação do contrato?',
          answer: 'Entramos em contato 30 dias antes do vencimento para discutir a renovação. Clientes que renovam por 12 meses ganham 10% de desconto. A renovação pode incluir ajustes no plano conforme o crescimento da sua marca.'
        }
      ]
    },
    {
      category: 'Atendimento e Especialização',
      questions: [
        {
          question: 'Vocês atendem todos os nichos de mercado?',
          answer: 'Sim! Temos experiência em diversos segmentos: advocacia, medicina, estética, agronegócio, varejo, e-commerce, serviços, entre outros. Nossa equipe estuda cada nicho para criar estratégias específicas e eficazes.'
        },
        {
          question: 'Como funciona o atendimento sendo uma agência nacional?',
          answer: 'Temos equipe especializada em 4 cidades (SP, GO, BA, PE) garantindo atendimento próximo e personalizado. Usamos ferramentas digitais para reuniões e acompanhamento, mas mantemos o toque humano e regional que nossos clientes valorizam.'
        },
        {
          question: 'Que tipo de suporte vocês oferecem?',
          answer: 'Oferecemos suporte via WhatsApp (horário comercial), e-mail e reuniões mensais de alinhamento. Clientes dos planos Premium e Enterprise têm suporte prioritário e acesso a reuniões semanais.'
        }
      ]
    },
    {
      category: 'Serviços e Processos',
      questions: [
        {
          question: 'É obrigatório o cliente aparecer nos conteúdos?',
          answer: 'Não é obrigatório! Criamos estratégias flexíveis: você pode aparecer pessoalmente, usar apenas a marca, ou combinar ambos. Analisamos o perfil do seu público e suas preferências para definir a melhor abordagem.'
        },
        {
          question: 'Posso contratar apenas design ou apenas tráfego pago?',
          answer: 'Sim! Oferecemos serviços modulares. Você pode contratar apenas Design Estratégico avulso (a partir de R$ 150 por peça) ou somente Tráfego Pago. Também temos a consultoria de posicionamento como serviço independente.'
        },
        {
          question: 'Como é o processo de criação de conteúdo?',
          answer: 'Seguimos um processo estruturado: 1) Briefing e alinhamento, 2) Criação do planejamento editorial, 3) Aprovação do cliente, 4) Produção das peças, 5) Nova aprovação, 6) Publicação e monitoramento. Tudo com transparência total.'
        }
      ]
    },
    {
      category: 'Tráfego Pago',
      questions: [
        {
          question: 'Vocês fazem tráfego pago para e-commerce?',
          answer: 'Sim! Temos ampla experiência com e-commerce: campanhas de vendas, remarketing, catálogo de produtos, campanhas sazonais e otimização de conversões. Trabalhamos com Google Ads, Facebook Ads e Instagram Shopping.'
        },
        {
          question: 'Qual o investimento mínimo em mídia paga?',
          answer: 'Para o plano fixo de Tráfego Pago, o investimento mínimo em mídia é R$ 1.000/mês (não incluso na mensalidade). Para tráfego personalizado, definimos conforme seus objetivos e orçamento disponível.'
        },
        {
          question: 'Como vocês otimizam o ROI das campanhas?',
          answer: 'Utilizamos análise de dados, testes A/B constantes, segmentação avançada de públicos, otimização de landing pages e acompanhamento de métricas de conversão. Fornecemos relatórios semanais com insights e sugestões de melhorias.'
        }
      ]
    },
    {
      category: 'Produtos Gráficos',
      questions: [
        {
          question: 'Vocês entregam produtos gráficos fora da cidade de vocês?',
          answer: 'Sim! Entregamos em todo o Brasil via Correios ou transportadoras. Os custos de frete são calculados conforme o destino e peso do pedido. Para grandes volumes, podemos negociar condições especiais de envio.'
        },
        {
          question: 'Qual o prazo de produção dos materiais gráficos?',
          answer: 'Cartões de visita: 3-5 dias úteis, Panfletos: 5-7 dias úteis, Banners: 7-10 dias úteis, Materiais especiais: consulte-nos. Prazos podem variar conforme a complexidade e quantidade. Oferecemos produção expressa quando necessário.'
        },
        {
          question: 'Posso solicitar uma amostra antes de fazer o pedido grande?',
          answer: 'Claro! Para pedidos acima de 1000 unidades, fornecemos amostras sem custo. Isso garante que você aprove a qualidade antes da produção final. A amostra é produzida em até 2 dias úteis.'
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Perguntas Frequentes (FAQ) | Vox Creative</title>
        <meta name="description" content="Tire suas dúvidas sobre nossos serviços de marketing digital, contratos, prazos, tráfego pago e produtos gráficos. FAQ completo da Vox Creative." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                ❓ Perguntas Frequentes
              </div>
              <h1 className={styles.heroTitle}>
                Tire suas{' '}
                <span className={styles.highlight}>dúvidas</span> aqui
              </h1>
              <p className={styles.heroDescription}>
                Compilamos as perguntas mais comuns dos nossos clientes. 
                Se não encontrar sua resposta, entre em contato conosco!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className={styles.faqCategory}>
                <div className={styles.categoryHeader}>
                  <h2 className={styles.categoryTitle}>{category.category}</h2>
                </div>
                
                <div className={styles.questionsContainer}>
                  {category.questions.map((faq, questionIndex) => {
                    const faqIndex = categoryIndex * 100 + questionIndex; // Criar índice único
                    const isOpen = openFAQ === faqIndex;
                    
                    return (
                      <Card key={questionIndex} variant="bordered" className={styles.faqCard}>
                        <button
                          className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                          onClick={() => toggleFAQ(faqIndex)}
                          aria-expanded={isOpen}
                        >
                          <span className={styles.questionText}>{faq.question}</span>
                          <span className={styles.questionIcon}>
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        
                        <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
                          <div className={styles.answerContent}>
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.quickLinksSection}>
          <div className={styles.container}>
            <div className={styles.quickLinksContent}>
              <h3 className={styles.quickLinksTitle}>Links Úteis</h3>
              <div className={styles.quickLinksGrid}>
                <Card variant="elevated" className={styles.quickLinkCard}>
                  <div className={styles.quickLinkIcon}>📋</div>
                  <h4 className={styles.quickLinkTitle}>Ver Planos</h4>
                  <p className={styles.quickLinkDescription}>
                    Compare todos os nossos planos de Social Media e Tráfego Pago
                  </p>
                  <Button href="/planos" variant="secondary" size="medium">
                    Ver Planos
                  </Button>
                </Card>
                
                <Card variant="elevated" className={styles.quickLinkCard}>
                  <div className={styles.quickLinkIcon}>🖨️</div>
                  <h4 className={styles.quickLinkTitle}>Produtos Gráficos</h4>
                  <p className={styles.quickLinkDescription}>
                    Conheça nossa linha completa de impressos gráficos
                  </p>
                  <Button href="/servicos/grafica" variant="secondary" size="medium">
                    Ver Produtos
                  </Button>
                </Card>
                
                <Card variant="elevated" className={styles.quickLinkCard}>
                  <div className={styles.quickLinkIcon}>📈</div>
                  <h4 className={styles.quickLinkTitle}>Cases de Sucesso</h4>
                  <p className={styles.quickLinkDescription}>
                    Veja resultados reais alcançados pelos nossos clientes
                  </p>
                  <Button href="/cases" variant="secondary" size="medium">
                    Ver Cases
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Não encontrou sua resposta?
              </h2>
              <p className={styles.ctaDescription}>
                Nossa equipe está pronta para esclarecer todas as suas dúvidas 
                e ajudar você a escolher a melhor solução para sua marca.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  💬 Falar Conosco
                </Button>
                <Button 
                  href="https://wa.me/5511999999999" 
                  variant="whatsapp" 
                  size="large"
                  target="_blank"
                >
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
