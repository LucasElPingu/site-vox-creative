import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './sobre.module.css';

/**
 * Página Sobre - História, missão, visão, valores e diferenciais da Vox Creative
 */
export default function Sobre() {
  const values = [
    {
      icon: '🎯',
      title: 'Foco em Resultados',
      description: 'Toda estratégia é baseada em dados reais e métricas que importam para o seu negócio.'
    },
    {
      icon: '🤝',
      title: 'Transparência',
      description: 'Comunicação clara, relatórios detalhados e processo aberto com nossos clientes.'
    },
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Sempre atualizados com as últimas tendências e tecnologias do mercado digital.'
    },
    {
      icon: '💎',
      title: 'Qualidade',
      description: 'Padrão de excelência em cada entrega, do planejamento à execução final.'
    }
  ];

  const differentials = [
    {
      title: 'Atendimento Personalizado',
      description: 'Cada cliente tem necessidades únicas. Criamos estratégias exclusivas para cada marca.',
      icon: '👥'
    },
    {
      title: 'Presença Nacional',
      description: 'Com sede em 4 cidades, oferecemos proximidade regional com visão nacional.',
      icon: '🌍'
    },
    {
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados em cada área: design, social media, tráfego e gráfica.',
      icon: '⭐'
    },
    {
      title: 'Resultados Mensuráveis',
      description: 'Relatórios completos e métricas claras para acompanhar o crescimento da sua marca.',
      icon: '📊'
    }
  ];

  const teamMembers = [
    {
      name: 'Eduarda Cotrim',
      position: 'Commercial Director',
      city: 'Embu das Artes - SP',
      description: 'Especialista em estratégia comercial e relacionamento com clientes. Lidera a expansão nacional da agência.',
      whatsapp: '5511999999999',
      image: '👩‍💼'
    },
    {
      name: 'Thatiane Camargo',
      position: 'Head of Design',
      city: 'Goiânia - GO',
      description: 'Responsável por toda identidade visual e design estratégico. Mais de 5 anos criando marcas memoráveis.',
      whatsapp: '5562999999999',
      image: '👩‍🎨'
    },
    {
      name: 'Amanda Silva',
      position: 'Social Media Manager',
      city: 'Guanambi - BA',
      description: 'Especialista em conteúdo digital e gestão de redes sociais. Focada em engajamento e conversão.',
      whatsapp: '5577999999999',
      image: '👩‍💻'
    },
    {
      name: 'Carlos Santos',
      position: 'Atendimento Nacional',
      city: 'Recife - PE',
      description: 'Responsável pelo atendimento e suporte aos clientes em todo território nacional.',
      whatsapp: '5581999999999',
      image: '👨‍💼'
    }
  ];

  return (
    <>
      <Head>
        <title>Sobre Nós - Nossa História e Valores | Vox Creative</title>
        <meta name="description" content="Conheça a história da Vox Creative, nossa missão, visão, valores e a equipe que trabalha para fazer sua marca crescer no digital." />
      </Head>
      
      <Layout>
        {/* Hero da página */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                📖 Nossa História
              </div>
              <h1 className={styles.heroTitle}>
                Conheça a{' '}
                <span className={styles.highlight}>Vox Creative</span>
              </h1>
              <p className={styles.heroDescription}>
                Uma agência nacional nascida da paixão por transformar marcas em referências. 
                Descubra nossa história, valores e a equipe que trabalha todos os dias para 
                fazer sua marca brilhar no digital.
              </p>
            </div>
          </div>
        </section>

        {/* História */}
        <section className={styles.historySection}>
          <div className={styles.container}>
            <div className={styles.historyContent}>
              <div className={styles.textContent}>
                <h2 className={styles.sectionTitle}>Nossa História</h2>
                <div className={styles.historyText}>
                  <p>
                    A <strong>Vox Creative</strong> nasceu em 2022 com um propósito claro: 
                    democratizar o acesso a estratégias de marketing digital de alta qualidade. 
                    Começamos pequenos, mas com grandes sonhos e a certeza de que toda marca 
                    merece ter sua voz ouvida no mercado.
                  </p>
                  <p>
                    Nossa jornada começou em <strong>Embu das Artes (SP)</strong>, e rapidamente 
                    expandimos nossa presença para <strong>Goiânia (GO)</strong>, 
                    <strong>Guanambi (BA)</strong> e <strong>Recife (PE)</strong>. Essa 
                    expansão estratégica nos permite oferecer atendimento personalizado 
                    com proximidade regional, mas sempre com visão nacional.
                  </p>
                  <p>
                    Hoje, somos uma agência completa que oferece desde social media e design 
                    estratégico até tráfego pago e impressos gráficos. Nosso maior orgulho 
                    são os resultados alcançados por nossos clientes e as marcas que ajudamos 
                    a se tornarem referência em seus segmentos.
                  </p>
                </div>
              </div>
              <div className={styles.timelineVisual}>
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>🚀</div>
                    <div className={styles.timelineContent}>
                      <h4>2022</h4>
                      <p>Fundação em Embu das Artes</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>🌍</div>
                    <div className={styles.timelineContent}>
                      <h4>2023</h4>
                      <p>Expansão Nacional</p>
                    </div>
                  </div>
                  <div className={styles.timelineItem}>
                    <div className={styles.timelineIcon}>📈</div>
                    <div className={styles.timelineContent}>
                      <h4>2024</h4>
                      <p>100+ Clientes Atendidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <div className={styles.missionVisionGrid}>
              <Card variant="elevated" className={styles.mvCard}>
                <div className={styles.mvIcon}>🎯</div>
                <h3 className={styles.mvTitle}>Missão</h3>
                <p className={styles.mvText}>
                  Transformar marcas em referências através de estratégias digitais 
                  eficientes, design marcante e resultados mensuráveis, democratizando 
                  o acesso ao marketing de alta qualidade.
                </p>
              </Card>
              
              <Card variant="elevated" className={styles.mvCard}>
                <div className={styles.mvIcon}>👁️</div>
                <h3 className={styles.mvTitle}>Visão</h3>
                <p className={styles.mvText}>
                  Ser a agência de marketing digital mais reconhecida do Brasil, 
                  conhecida pela excelência em resultados e pelo relacionamento 
                  próximo com nossos clientes.
                </p>
              </Card>
            </div>

            <div className={styles.valuesHeader}>
              <h2 className={styles.sectionTitle}>Nossos Valores</h2>
              <p className={styles.sectionDescription}>
                Os princípios que guiam todas as nossas decisões e relacionamentos.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <Card key={index} variant="bordered" className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className={styles.differentialsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Por que escolher a{' '}
                <span className={styles.highlight}>Vox Creative</span>?
              </h2>
              <p className={styles.sectionDescription}>
                Nossos diferenciais estratégicos que fazem a diferença para sua marca.
              </p>
            </div>

            <div className={styles.differentialsGrid}>
              {differentials.map((diff, index) => (
                <div key={index} className={styles.differentialCard}>
                  <div className={styles.differentialIcon}>{diff.icon}</div>
                  <h4 className={styles.differentialTitle}>{diff.title}</h4>
                  <p className={styles.differentialDescription}>{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Conheça nosso{' '}
                <span className={styles.highlight}>time</span>
              </h2>
              <p className={styles.sectionDescription}>
                Profissionais especializados e apaixonados por fazer sua marca crescer.
              </p>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <Card key={index} variant="elevated" className={styles.teamCard}>
                  <div className={styles.memberImage}>{member.image}</div>
                  <div className={styles.memberInfo}>
                    <h4 className={styles.memberName}>{member.name}</h4>
                    <p className={styles.memberPosition}>{member.position}</p>
                    <p className={styles.memberCity}>{member.city}</p>
                    <p className={styles.memberDescription}>{member.description}</p>
                    <Button 
                      href={`https://wa.me/${member.whatsapp}`}
                      variant="whatsapp" 
                      size="small"
                      target="_blank"
                    >
                      💬 WhatsApp
                    </Button>
                  </div>
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
                Pronto para fazer parte da nossa história?
              </h2>
              <p className={styles.ctaDescription}>
                Vamos conversar sobre como podemos ajudar sua marca a alcançar 
                o próximo nível no digital.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  💬 Falar Conosco
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
