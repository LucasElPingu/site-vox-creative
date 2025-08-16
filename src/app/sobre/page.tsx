import React from 'react';
import Layout from '../../components/Layout/Layout';
import AboutVoxSection from '../../components/AboutVoxSection/AboutVoxSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import Button from '../../components/Button/Button';
import styles from './sobre.module.css';

export const metadata = {
  title: "Sobre Nós - Nossa História e Valores",
  description: "Conheça a VOX CREATIVE e nossa equipe. Agência especializada em jovens empreendedores com design minimalista e estratégias eficazes.",
};

/**
 * Página Sobre - História, missão, visão, valores e equipe da VOX CREATIVE
 */
export default function Sobre() {
  return (
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
              <span className={styles.highlight}>VOX CREATIVE</span>
            </h1>
            <p className={styles.heroDescription}>
              Mais que uma agência, somos parceiros na jornada de crescimento da sua marca. 
              Conheça nossa história, nossos valores e a equipe que faz a diferença.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Sobre a Vox */}
      <AboutVoxSection />

      {/* Seção Quem Somos */}
      <TeamSection />

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
              <Button href="/servicos" variant="secondary" size="large">
                🎯 Ver Nossos Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
