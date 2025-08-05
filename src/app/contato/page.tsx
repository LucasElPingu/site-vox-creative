'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './contato.module.css';

/**
 * Página de Contato com formulário funcional
 */
export default function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const interests = [
    'Social Media + Design',
    'Tráfego Pago',
    'Identidade Visual',
    'Impressos Gráficos',
    'Consultoria Estratégica',
    'Outros'
  ];

  const teamContacts = [
    {
      name: 'Eduarda Cotrim',
      position: 'Commercial Director',
      city: 'Embu das Artes - SP',
      whatsapp: '5511999999999',
      image: '👩‍💼',
      specialty: 'Estratégia comercial e relacionamento'
    },
    {
      name: 'Thatiane Camargo',
      position: 'Head of Design',
      city: 'Goiânia - GO',
      whatsapp: '5562999999999',
      image: '👩‍🎨',
      specialty: 'Design e identidade visual'
    },
    {
      name: 'Amanda Silva',
      position: 'Social Media Manager',
      city: 'Guanambi - BA',
      whatsapp: '5577999999999',
      image: '👩‍💻',
      specialty: 'Social media e conteúdo'
    },
    {
      name: 'Carlos Santos',
      position: 'Atendimento Nacional',
      city: 'Recife - PE',
      whatsapp: '5581999999999',
      image: '👨‍💼',
      specialty: 'Suporte e atendimento'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Em um ambiente real, aqui faria o envio para uma API
      console.log('Dados do formulário:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        instagram: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contato - Fale Conosco | Vox Creative</title>
        <meta name="description" content="Entre em contato com a Vox Creative. Formulário de contato, WhatsApp direto e informações da nossa equipe em 4 cidades do Brasil." />
      </Head>
      
      <Layout>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                💬 Fale Conosco
              </div>
              <h1 className={styles.heroTitle}>
                Vamos conversar sobre{' '}
                <span className={styles.highlight}>seu projeto</span>?
              </h1>
              <p className={styles.heroDescription}>
                Estamos prontos para ajudar sua marca a crescer no digital. 
                Entre em contato e descubra como podemos trabalhar juntos!
              </p>
            </div>
          </div>
        </section>

        {/* Formulário e Informações */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactGrid}>
              {/* Formulário */}
              <div className={styles.formContainer}>
                <Card variant="elevated" className={styles.formCard}>
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Envie sua mensagem</h2>
                    <p className={styles.formDescription}>
                      Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={styles.input}
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={styles.input}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="instagram" className={styles.label}>
                        Instagram ou Nome da Empresa
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="@seuinstagram ou Nome da Empresa"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="interest" className={styles.label}>
                        Interesse *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        required
                        className={styles.select}
                      >
                        <option value="">Selecione seu interesse</option>
                        {interests.map((interest, index) => (
                          <option key={index} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className={styles.textarea}
                        placeholder="Conte-nos mais sobre seu projeto, objetivos e como podemos ajudar..."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className={styles.successMessage}>
                        ✅ Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className={styles.errorMessage}>
                        ❌ Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      disabled={isSubmitting}
                      className={styles.submitButton}
                    >
                      {isSubmitting ? '📤 Enviando...' : '📨 Enviar Mensagem'}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Informações de Contato */}
              <div className={styles.infoContainer}>
                <Card variant="bordered" className={styles.infoCard}>
                  <h3 className={styles.infoTitle}>Informações de Contato</h3>
                  
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>📧</div>
                      <div>
                        <strong>E-mail</strong>
                        <p>contato@voxcreative.com.br</p>
                      </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>📱</div>
                      <div>
                        <strong>WhatsApp</strong>
                        <p>(11) 9 9999-9999</p>
                      </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>🌍</div>
                      <div>
                        <strong>Atendimento</strong>
                        <p>Todo o Brasil</p>
                      </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                      <div className={styles.contactIcon}>⏰</div>
                      <div>
                        <strong>Horário</strong>
                        <p>Seg à Sex: 8h às 18h</p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.quickContact}>
                    <h4>Contato Rápido</h4>
                    <Button 
                      href="https://wa.me/5511999999999" 
                      variant="whatsapp"
                      size="large"
                      target="_blank"
                      className={styles.whatsappButton}
                    >
                      💬 Falar no WhatsApp
                    </Button>
                  </div>
                </Card>

                <Card variant="bordered" className={styles.socialCard}>
                  <h4 className={styles.socialTitle}>Nossas Redes Sociais</h4>
                  <div className={styles.socialLinks}>
                    <a href="https://instagram.com/voxcreative" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      📷 Instagram
                    </a>
                    <a href="https://facebook.com/voxcreative" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      👥 Facebook
                    </a>
                    <a href="https://linkedin.com/company/voxcreative" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      💼 LinkedIn
                    </a>
                    <a href="https://youtube.com/voxcreative" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      🎥 YouTube
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section className={styles.teamSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>
                Fale diretamente com nossa{' '}
                <span className={styles.highlight}>equipe</span>
              </h2>
              <p className={styles.sectionDescription}>
                Cada membro da nossa equipe está localizado em uma cidade diferente, 
                garantindo atendimento personalizado em todo o Brasil.
              </p>
            </div>

            <div className={styles.teamGrid}>
              {teamContacts.map((member, index) => (
                <Card key={index} variant="elevated" className={styles.teamCard}>
                  <div className={styles.memberImage}>{member.image}</div>
                  <div className={styles.memberInfo}>
                    <h4 className={styles.memberName}>{member.name}</h4>
                    <p className={styles.memberPosition}>{member.position}</p>
                    <p className={styles.memberCity}>{member.city}</p>
                    <p className={styles.memberSpecialty}>{member.specialty}</p>
                    <Button 
                      href={`https://wa.me/${member.whatsapp}`}
                      variant="whatsapp" 
                      size="medium"
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

        {/* Cidades */}
        <section className={styles.citiesSection}>
          <div className={styles.container}>
            <div className={styles.citiesContent}>
              <h3 className={styles.citiesTitle}>
                Atendimento Nacional com Presença Local
              </h3>
              <p className={styles.citiesDescription}>
                Estamos presentes em 4 cidades estratégicas, oferecendo atendimento 
                personalizado com proximidade regional e visão nacional.
              </p>
              <div className={styles.citiesList}>
                <div className={styles.city}>📍 Embu das Artes - SP</div>
                <div className={styles.city}>📍 Goiânia - GO</div>
                <div className={styles.city}>📍 Guanambi - BA</div>
                <div className={styles.city}>📍 Recife - PE</div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
