import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import CasesPreview from '../components/CasesPreview/CasesPreview';

/**
 * Página inicial do site VOX CREATIVE
 * Combina todas as seções principais: Hero, Sobre, Serviços, Cases
 */
export default function Home() {
  return (
    <Layout>
      {/* Seção Hero - Apresentação principal */}
      <Hero />
      
      {/* Mini seção "Quem Somos" */}
      <AboutSection />
      
      {/* Cards com os 4 serviços principais */}
      <ServicesSection />
      
      {/* Preview dos cases de sucesso */}
      <CasesPreview />
    </Layout>
  );
}
