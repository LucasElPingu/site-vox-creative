import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './depoimentos.module.css';

/**
 * Página de Depoimentos - Testemunhos reais de clientes
 */
export default function Depoimentos() {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. Carlos Silva',
      handle: '@dr.carlossilva.adv',
      profession: 'Advogado Criminal',
      location: 'São Paulo - SP',
      type: 'video',
      content: 'A Vox Creative transformou completamente minha presença digital. Em 8 meses saí de zero para 50 mil seguidores e tripliquei minha carteira de clientes. O investimento se pagou em apenas 3 meses!',
      result: '300% aumento em clientes',
      image: '👨‍💼',
      rating: 5,
      date: 'Dezembro 2024'
    },
    {
      id: 2,
      name: 'Fernanda Costa',
      handle: '@belezafernadacosta',
      profession: 'Esteticista',
      location: 'Goiânia - GO',
      type: 'print',
      content: 'Trabalho incrível! A equipe entendeu perfeitamente meu público e criou uma estratégia que realmente funciona. Minha agenda está lotada há 3 meses seguidos. Profissionais excepcionais!',
      result: 'Agenda lotada por 3 meses',
      image: '👩‍⚕️',
      rating: 5,
      date: 'Novembro 2024'
    },
    {
      id: 3,
      name: 'João Agronegócios',
      handle: '@joaoagrotech',
      profession: 'Empresário Rural',
      location: 'Mato Grosso',
      type: 'video',
      content: 'Nunca imaginei que o digital pudesse impactar tanto meu negócio no agro. A Vox conseguiu me conectar com produtores de todo o Brasil. Fechei contratos de mais de R$ 2 milhões!',
      result: 'R$ 2M em novos contratos',
      image: '👨‍🌾',
      rating: 5,
      date: 'Outubro 2024'
    },
    {
      id: 4,
      name: 'Dra. Ana Psicóloga',
      handle: '@dra.anapsicologia',
      profession: 'Psicóloga Clínica',
      location: 'Recife - PE',
      type: 'print',
      content: 'O cuidado da equipe com a ��tica e sensibilidade do meu segmento foi impressionante. Conseguiram aumentar minha base de pacientes mantendo a seriedade profissional. Consultório sempre cheio!',
      result: 'Lista de espera ativa',
      image: '👩‍⚕️',
      rating: 5,
      date: 'Setembro 2024'
    },
    {
      id: 5,
      name: 'Roberto Chef',
      handle: '@restauranteplus',
      profession: 'Chef Proprietário',
      location: 'Salvador - BA',
      type: 'video',
      content: 'Durante a pandemia achei que teria que fechar. A Vox salvou meu restaurante! Criaram estratégias pro delivery que aumentaram as vendas em 400%. Hoje tenho 2 unidades!',
      result: '400% crescimento delivery',
      image: '👨‍🍳',
      rating: 5,
      date: 'Agosto 2024'
    },
    {
      id: 6,
      name: 'Mariana Fitness',
      handle: '@fitlifeacademia',
      profession: 'Personal Trainer',
      location: 'Brasília - DF',
      type: 'print',
      content: 'Profissionais incríveis! Me ajudaram a construir uma marca forte no fitness. Saí de 200 para 800 alunos em pouco mais de 1 ano. A academia virou referência na cidade!',
      result: '300% aumento de alunos',
      image: '👩‍💪',
      rating: 5,
      date: 'Julho 2024'
    },
    {
      id: 7,
      name: 'Lucas Dentista',
      handle: '@dr.lucasodonto',
      profession: 'Cirurgião Dentista',
      location: 'Curitiba - PR',
      type: 'video',
      content: 'Excelente trabalho! A estratégia de conteúdo educativo me posicionou como referência em implantes. Triplicaram meus agendamentos em apenas 6 meses. Super recomendo!',
      result: '200% mais agendamentos',
      image: '👨‍⚕️',
      rating: 5,
      date: 'Junho 2024'
    },
    {
      id: 8,
      name: 'Patrícia Arquiteta',
      handle: '@patriciaarquitetura',
      profession: 'Arquiteta',
      location: 'Florianópolis - SC',
      type: 'print',
      content: 'A Vox entendeu perfeitamente meu estilo e público. Criaram um Instagram lindo que atrai exatamente o tipo de cliente que quero. Projetos de alto padrão não param de chegar!',
      result: 'Projetos de alto padrão',
      image: '👩‍💼',
      rating: 5,
      date: 'Maio 2024'
    }
  ];

  const stats = [
    { number: '98%', label: 'Clientes Satisfeitos', icon: '😊' },
    { number: '2.5x', label: 'Aumento Médio em Vendas', icon: '📈' },
    { number: '6 meses', label: 'Tempo Médio para Resultados', icon: '⏱️' },
    { number: '100+', label: 'Depoimentos Positivos', icon: '💬' }
  ];

  return (
    <>
      <Head>
        <title>Depoimentos de Clientes - Histórias de Sucesso Reais | Vox Creative</title>
        <meta name="description" content="Veja depoimentos reais de clientes da Vox Creative. Histórias de sucesso em diversos segmentos: advocacia, estética, agronegócio, psicologia e mais." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                💬 Depoimentos Reais
              </div>
              <h1 className={styles.heroTitle}>
                O que nossos clientes{' '}
                <span className={styles.highlight}>falam sobre nós</span>
              </h1>
              <p className={styles.heroDescription}>
                Histórias reais de empresários que transformaram seus negócios 
                com nossa ajuda. Veja depoimentos autênticos e resultados comprovados.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Histórias de{' '}
                <span className={styles.highlight}>Sucesso</span>
              </h2>
              <p className={styles.sectionDescription}>
                Cada depoimento representa uma jornada única de crescimento e sucesso. 
                Conheça as experiências dos nossos clientes.
              </p>
            </div>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.id} variant="elevated" className={styles.testimonialCard}>
                  <div className={styles.testimonialHeader}>
                    <div className={styles.clientInfo}>
                      <div className={styles.clientAvatar}>
                        {testimonial.image}
                      </div>
                      <div className={styles.clientDetails}>
                        <h4 className={styles.clientName}>{testimonial.name}</h4>
                        <p className={styles.clientHandle}>{testimonial.handle}</p>
                        <p className={styles.clientProfession}>{testimonial.profession}</p>
                        <p className={styles.clientLocation}>{testimonial.location}</p>
                      </div>
                    </div>
                    <div className={styles.testimonialType}>
                      {testimonial.type === 'video' ? '🎥' : '📸'}
                      <span>{testimonial.type === 'video' ? 'Vídeo' : 'Print'}</span>
                    </div>
                  </div>
                  
                  <div className={styles.testimonialContent}>
                    <div className={styles.rating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className={styles.star}>⭐</span>
                      ))}
                    </div>
                    
                    <blockquote className={styles.testimonialText}>
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className={styles.result}>
                      <div className={styles.resultIcon}>🚀</div>
                      <span className={styles.resultText}>{testimonial.result}</span>
                    </div>
                    
                    <div className={styles.testimonialDate}>
                      {testimonial.date}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className={styles.videoSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Depoimentos em{' '}
                <span className={styles.highlight}>Vídeo</span>
              </h2>
              <p className={styles.sectionDescription}>
                Veja alguns dos nossos clientes falando sobre sua experiência em vídeos autênticos.
              </p>
            </div>

            <div className={styles.videoGrid}>
              <Card variant="elevated" className={styles.videoCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.playButton}>▶️</div>
                  <div className={styles.videoDuration}>2:15</div>
                </div>
                <div className={styles.videoInfo}>
                  <h4 className={styles.videoTitle}>Dr. Carlos Silva - Advocacia</h4>
                  <p className={styles.videoDescription}>
                    Como triplicou sua carteira de clientes em 8 meses
                  </p>
                </div>
              </Card>

              <Card variant="elevated" className={styles.videoCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.playButton}>▶️</div>
                  <div className={styles.videoDuration}>1:45</div>
                </div>
                <div className={styles.videoInfo}>
                  <h4 className={styles.videoTitle}>João Agronegócios</h4>
                  <p className={styles.videoDescription}>
                    R$ 2 milhões em contratos através do digital
                  </p>
                </div>
              </Card>

              <Card variant="elevated" className={styles.videoCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.playButton}>▶️</div>
                  <div className={styles.videoDuration}>3:20</div>
                </div>
                <div className={styles.videoInfo}>
                  <h4 className={styles.videoTitle}>Roberto Chef</h4>
                  <p className={styles.videoDescription}>
                    De quase falência a 2 unidades do restaurante
                  </p>
                </div>
              </Card>
            </div>

            <div className={styles.videoNote}>
              <p>
                💡 <strong>Nota:</strong> Por questões de privacidade, alguns depoimentos em vídeo 
                estão disponíveis apenas mediante solicitação. Entre em contato para acessar 
                nosso portfólio completo.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className={styles.trustSection}>
          <div className={styles.container}>
            <div className={styles.trustContent}>
              <h3 className={styles.trustTitle}>
                Por que nossos clientes confiam na Vox Creative?
              </h3>
              <div className={styles.trustPoints}>
                <div className={styles.trustPoint}>
                  <div className={styles.trustIcon}>🎯</div>
                  <h4>Resultados Mensuráveis</h4>
                  <p>Todos os depoimentos são baseados em métricas reais e resultados comprováveis.</p>
                </div>
                <div className={styles.trustPoint}>
                  <div className={styles.trustIcon}>🤝</div>
                  <h4>Transparência Total</h4>
                  <p>Processo transparente com relatórios detalhados e acompanhamento constante.</p>
                </div>
                <div className={styles.trustPoint}>
                  <div className={styles.trustIcon}>⚡</div>
                  <h4>Agilidade</h4>
                  <p>Resultados visíveis já nos primeiros meses de trabalho conjunto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Pronto para ser nosso próximo depoimento?
              </h2>
              <p className={styles.ctaDescription}>
                Junte-se a mais de 100 empresários que já transformaram seus negócios 
                com nossa ajuda. Vamos escrever sua história de sucesso juntos!
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  🚀 Quero Meu Sucesso!
                </Button>
                <Button href="/cases" variant="secondary" size="large">
                  📊 Ver Cases Completos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
