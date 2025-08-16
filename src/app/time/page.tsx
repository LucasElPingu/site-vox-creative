import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './time.module.css';

/**
 * Página do Time - Conheça a equipe da Vox Creative
 */
export default function Time() {
  const teamMembers = [
    {
      id: 1,
      name: 'Eduarda Cotrim',
      position: 'Commercial Director & Paid Media Strategist',
      city: 'Embu das Artes - SP',
      photo: '👩‍💼',
      whatsapp: '5511999999999',
      specialty: 'Estratégia comercial e tráfego pago',
      experience: '5+ anos',
      description: 'Especialista em estratégia comercial e tráfego pago, Eduarda lidera a expansão nacional da Vox Creative. Com mais de 5 anos de experiência em marketing digital, é responsável pelos resultados de ROI dos nossos clientes.',
      skills: ['Google Ads', 'Facebook Ads', 'Estratégia Comercial', 'ROI', 'Negociação'],
      certifications: ['Google Ads Certified', 'Facebook Blueprint'],
      achievements: [
        'Responsável por R$ 5M+ em vendas geradas',
        'Média de 300% ROI nos clientes',
        'Certificação Google Partner'
      ]
    },
    {
      id: 2,
      name: 'Thatiane Camargo',
      position: 'Head of Design & Brand Strategist',
      city: 'Goiânia - GO',
      photo: '👩‍🎨',
      whatsapp: '5562999999999',
      specialty: 'Design estratégico e identidade visual',
      experience: '6+ anos',
      description: 'Responsável por toda identidade visual e design estratégico da Vox. Com olhar apurado e experiência sólida, transforma marcas através de design que realmente converte e engaja.',
      skills: ['Identidade Visual', 'Design Estratégico', 'Branding', 'UI/UX', 'Ilustração'],
      certifications: ['Adobe Certified Expert', 'Design Thinking'],
      achievements: [
        '200+ identidades visuais criadas',
        'Prêmio Regional de Design 2023',
        'Aumento médio de 250% no engajamento'
      ]
    },
    {
      id: 3,
      name: 'Amanda Silva',
      position: 'Social Media Manager & Designer Jr.',
      city: 'Guanambi - BA',
      photo: '👩‍💻',
      whatsapp: '5577999999999',
      specialty: 'Gestão de redes sociais e conteúdo',
      experience: '3+ anos',
      description: 'Especialista em conteúdo digital e gestão de redes sociais, Amanda domina as melhores práticas para engajamento e conversão. Focada em criar conexões autênticas entre marca e público.',
      skills: ['Social Media', 'Copywriting', 'Planejamento Editorial', 'Analytics', 'Trends'],
      certifications: ['Meta Certified', 'HubSpot Content Marketing'],
      achievements: [
        '50M+ impressões geradas',
        'Taxa média de engajamento 8%+',
        'Crescimento orgânico 400%+'
      ]
    },
    {
      id: 4,
      name: 'Carlos Santos',
      position: 'Client Success & Atendimento Geral',
      city: 'Recife - PE',
      photo: '👨‍💼',
      whatsapp: '5581999999999',
      specialty: 'Atendimento ao cliente e sucesso',
      experience: '4+ anos',
      description: 'Responsável pela experiência completa do cliente na Vox Creative. Carlos garante que cada projeto seja executado com excelência e que nossos clientes tenham todo o suporte necessário.',
      skills: ['Customer Success', 'Gestão de Projetos', 'Comunicação', 'CRM', 'Análise'],
      certifications: ['Customer Success Certified', 'Project Management'],
      achievements: [
        '98% taxa de satisfação dos clientes',
        '95% taxa de retenção',
        'Tempo médio de resposta: 2h'
      ]
    }
  ];

  const companyValues = [
    {
      icon: '🎯',
      title: 'Foco em Resultados',
      description: 'Cada membro do time é orientado por métricas e resultados reais para nossos clientes.'
    },
    {
      icon: '🤝',
      title: 'Colaboração',
      description: 'Trabalhamos em equipe, compartilhando conhecimento e experiências para entregar o melhor.'
    },
    {
      icon: '📚',
      title: 'Aprendizado Contínuo',
      description: 'Investimos constantemente em capacitação e atualização nas melhores práticas do mercado.'
    },
    {
      icon: '💎',
      title: 'Excelência',
      description: 'Buscamos a excelência em cada projeto, desde o planejamento até a execução final.'
    }
  ];

  const locations = [
    {
      city: 'Embu das Artes',
      state: 'SP',
      icon: '🏢',
      description: 'Sede principal com foco em estratégia comercial e tráfego pago',
      contact: 'Eduarda Cotrim'
    },
    {
      city: 'Goiânia',
      state: 'GO',
      icon: '🎨',
      description: 'Centro de design e identidade visual',
      contact: 'Thatiane Camargo'
    },
    {
      city: 'Guanambi',
      state: 'BA',
      icon: '📱',
      description: 'Hub de social media e gestão de conteúdo',
      contact: 'Amanda Silva'
    },
    {
      city: 'Recife',
      state: 'PE',
      icon: '💬',
      description: 'Central de atendimento e sucesso do cliente',
      contact: 'Carlos Santos'
    }
  ];

  return (
    <>
      <Head>
        <title>Nosso Time - Conheça a Equipe da Vox Creative</title>
        <meta name="description" content="Conheça a equipe da Vox Creative: Eduarda Cotrim, Thatiane Camargo, Amanda Silva e Carlos Santos. Profissionais especializados em 4 cidades do Brasil." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                👥 Nosso Time
              </div>
              <h1 className={styles.heroTitle}>
                Conheça as pessoas por trás dos{' '}
                <span className={styles.highlight}>resultados</span>
              </h1>
              <p className={styles.heroDescription}>
                Uma equipe nacional de especialistas apaixonados por transformar 
                marcas em referências. Cada membro contribui com sua expertise 
                única para o sucesso dos nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Nossa{' '}
                <span className={styles.highlight}>Equipe</span>
              </h2>
              <p className={styles.sectionDescription}>
                Profissionais qualificados e certificados, cada um especialista 
                em sua área de atuação.
              </p>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <Card key={member.id} variant="elevated" className={styles.memberCard}>
                  <div className={styles.memberHeader}>
                    <div className={styles.memberPhoto}>
                      {member.photo}
                    </div>
                    <div className={styles.memberBasicInfo}>
                      <h3 className={styles.memberName}>{member.name}</h3>
                      <p className={styles.memberPosition}>{member.position}</p>
                      <p className={styles.memberCity}>{member.city}</p>
                      <div className={styles.memberExperience}>
                        <span className={styles.experienceLabel}>Experiência:</span>
                        <span className={styles.experienceValue}>{member.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.memberContent}>
                    <div className={styles.memberSpecialty}>
                      <strong>Especialidade:</strong> {member.specialty}
                    </div>
                    
                    <p className={styles.memberDescription}>
                      {member.description}
                    </p>
                    
                    <div className={styles.memberSkills}>
                      <h4 className={styles.skillsTitle}>Habilidades:</h4>
                      <div className={styles.skillsTags}>
                        {member.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className={styles.skillTag}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.memberCertifications}>
                      <h4 className={styles.certificationsTitle}>Certificações:</h4>
                      <ul className={styles.certificationsList}>
                        {member.certifications.map((cert, certIndex) => (
                          <li key={certIndex} className={styles.certificationItem}>
                            <span className={styles.certIcon}>🏆</span>
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.memberAchievements}>
                      <h4 className={styles.achievementsTitle}>Principais Conquistas:</h4>
                      <ul className={styles.achievementsList}>
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className={styles.achievementItem}>
                            <span className={styles.checkIcon}>✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.memberContact}>
                      <Button 
                        href={`https://wa.me/${member.whatsapp}`}
                        variant="whatsapp" 
                        size="medium"
                        target="_blank"
                      >
                        💬 Falar com {member.name.split(' ')[0]}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className={styles.valuesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Nossos{' '}
                <span className={styles.highlight}>Valores</span>
              </h2>
              <p className={styles.sectionDescription}>
                Os princípios que guiam nossa equipe e moldam nossa cultura organizacional.
              </p>
            </div>

            <div className={styles.valuesGrid}>
              {companyValues.map((value, index) => (
                <div key={index} className={styles.valueItem}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className={styles.locationsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Presença{' '}
                <span className={styles.highlight}>Nacional</span>
              </h2>
              <p className={styles.sectionDescription}>
                Equipe distribuída estrategicamente em 4 cidades para atender 
                todo o Brasil com proximidade regional.
              </p>
            </div>

            <div className={styles.locationsGrid}>
              {locations.map((location, index) => (
                <Card key={index} variant="bordered" className={styles.locationCard}>
                  <div className={styles.locationIcon}>{location.icon}</div>
                  <h4 className={styles.locationName}>
                    {location.city} - {location.state}
                  </h4>
                  <p className={styles.locationDescription}>
                    {location.description}
                  </p>
                  <div className={styles.locationContact}>
                    <strong>Responsável:</strong> {location.contact}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsContent}>
              <h3 className={styles.statsTitle}>Nosso Time em Números</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Anos de Experiência Combinada</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Certificações Profissionais</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statLabel}>Clientes Atendidos</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>4</span>
                  <span className={styles.statLabel}>Cidades de Atuação</span>
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
                Vamos trabalhar juntos?
              </h2>
              <p className={styles.ctaDescription}>
                Nossa equipe está pronta para ajudar sua marca a alcançar 
                o próximo nível. Entre em contato e descubra como podemos 
                transformar seus resultados.
              </p>
              <div className={styles.ctaButtons}>
                <Button href="/contato" variant="primary" size="large">
                  💬 Falar com a Equipe
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
