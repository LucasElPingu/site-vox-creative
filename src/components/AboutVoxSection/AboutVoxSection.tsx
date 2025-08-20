import React from 'react';
import Card from '../Card/Card';
import styles from './AboutVoxSection.module.css';

/**
 * Seção "Sobre a Vox" - Institucional
 * Origem do nome, tempo de atuação e valores principais
 */
export default function AboutVoxSection() {
  const stats = [
    {
      number: '4+',
      label: 'Anos de Mercado',
      description: 'Desde 2020 no mercado'
    },
    {
      number: '4',
      label: 'Especialistas',
      description: 'Equipe qualificada'
    },
    {
      number: '50+',
      label: 'Projetos',
      description: 'Entregues com excelência'
    }
  ];

  const coreValues = [
    {
      icon: '🗣️',
      title: 'Nossa Voz',
      description: 'VOX significa "voz" em latim. Acreditamos que toda marca tem uma voz única que merece ser ouvida no mercado.'
    },
    {
      icon: '🚀',
      title: 'Inovação',
      description: 'Estamos sempre à frente das tendências, explorando novas tecnologias e estratégias para nossos clientes.'
    },
    {
      icon: '🎯',
      title: 'Resultados',
      description: 'Focamos em entregar resultados concretos e mensuráveis que impactem diretamente o crescimento dos negócios.'
    },
    {
      icon: '🤝',
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros, sendo verdadeiros parceiros na jornada de crescimento das marcas.'
    }
  ];

  return (
    <section className={styles.aboutVoxSection}>
      <div className={styles.container}>
        {/* Header da seção */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            📖 Sobre a Vox
          </div>
          <h2 className={styles.title}>
            A origem do nosso <span className={styles.highlight}>propósito</span>
          </h2>
          <p className={styles.description}>
            A VOX CREATIVE começou em 2020, em Guanambi – Bahia, e ao longo do tempo
            expandiu sua atuação para Goiânia, Embu e Recife. Nascemos com uma missão clara:
            dar voz às marcas que querem se destacar no mundo digital. Nosso nome vem
            do latim &ldquo;vox&rdquo;, que significa voz - e é exatamente isso que fazemos:
            amplificamos a voz única de cada marca.
          </p>
        </div>

        {/* Estatísticas */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statDescription}>{stat.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* História e origem */}
        <div className={styles.storySection}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h3 className={styles.storyTitle}>Por que VOX?</h3>
              <p className={styles.storyParagraph}>
                <strong>*[TEXTO TEMPORÁRIO - AGUARDANDO INFORMAÇÕES REAIS DA CLIENTE]*</strong>
              </p>
              <p className={styles.storyParagraph}>
                O nome VOX foi escolhido porque acreditamos que cada marca tem uma voz única 
                e poderosa. Nossa missão é ajudar essas vozes a serem ouvidas no mercado digital, 
                criando identidades visuais marcantes e estratégias que fazem a diferença.
              </p>
              <p className={styles.storyParagraph}>
                Com uma equipe de 4 especialistas apaixonados por design e marketing digital, 
                construímos nossa reputação baseada em resultados reais e relacionamentos 
                duradouros com nossos clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Valores principais */}
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Nossos Valores Principais</h3>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <Card key={index} variant="bordered" className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Disclaimer temporário */}
        <div className={styles.disclaimer}>
          <p>
            <strong>📝 Nota:</strong> Algumas informações desta seção são temporárias e 
            serão atualizadas com os dados reais fornecidos pela cliente.
          </p>
        </div>
      </div>
    </section>
  );
}
