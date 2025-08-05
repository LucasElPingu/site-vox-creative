'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import styles from './lgpd.module.css';

/**
 * Página LGPD com formulário para gestão de dados pessoais
 */
export default function LGPD() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requestType: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const requestTypes = [
    'Confirmação da existência de tratamento',
    'Acesso aos meus dados',
    'Correção de dados incompletos ou incorretos',
    'Anonimização ou eliminação de dados',
    'Portabilidade dos dados',
    'Eliminação de dados tratados com consentimento',
    'Revogação do consentimento',
    'Informações sobre compartilhamento',
    'Outra solicitação'
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
    
    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Solicitação LGPD:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        requestType: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Erro ao enviar solicitação:', error);
    }
  };

  return (
    <>
      <Head>
        <title>LGPD - Lei Geral de Proteção de Dados | Vox Creative</title>
        <meta name="description" content="Exercite seus direitos conforme a LGPD. Solicite acesso, correção ou exclusão dos seus dados pessoais na Vox Creative." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Layout>
        <div className={styles.container}>
          {/* Hero */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlight}>LGPD</span> - Lei Geral de Proteção de Dados
              </h1>
              <p className={styles.heroDescription}>
                Exercite seus direitos conforme a Lei Geral de Proteção de Dados. 
                Aqui você pode solicitar informações, correções ou exclusão dos seus dados pessoais.
              </p>
            </div>
          </section>

          <div className={styles.content}>
            {/* Informações sobre a LGPD */}
            <section className={styles.infoSection}>
              <h2 className={styles.sectionTitle}>Seus Direitos</h2>
              <div className={styles.rightsGrid}>
                <Card variant="bordered" className={styles.rightCard}>
                  <div className={styles.rightIcon}>ℹ️</div>
                  <h4>Confirmação</h4>
                  <p>Confirmar se tratamos seus dados pessoais</p>
                </Card>
                
                <Card variant="bordered" className={styles.rightCard}>
                  <div className={styles.rightIcon}>👁️</div>
                  <h4>Acesso</h4>
                  <p>Acessar seus dados que estão sendo tratados</p>
                </Card>
                
                <Card variant="bordered" className={styles.rightCard}>
                  <div className={styles.rightIcon}>✏️</div>
                  <h4>Correção</h4>
                  <p>Corrigir dados incompletos ou incorretos</p>
                </Card>
                
                <Card variant="bordered" className={styles.rightCard}>
                  <div className={styles.rightIcon}>🗑️</div>
                  <h4>Eliminação</h4>
                  <p>Solicitar a exclusão dos seus dados</p>
                </Card>
                
                <Card variant="bordered" className={styles.rightCard}>
                  <div className={styles.rightIcon}>📋</div>
                  <h4>Portabilidade</h4>
                  <p>Obter seus dados em formato estruturado</p>
                </Card>
                
                <Card variant="bordered" className={styles.rightCard}>
                  <div className={styles.rightIcon}>🚫</div>
                  <h4>Revogação</h4>
                  <p>Revogar consentimento a qualquer momento</p>
                </Card>
              </div>
            </section>

            {/* Formulário */}
            <section className={styles.formSection}>
              <div className={styles.formGrid}>
                <div className={styles.formInfo}>
                  <h2 className={styles.formTitle}>Faça sua Solicitação</h2>
                  <p className={styles.formDescription}>
                    Preencha o formulário abaixo para exercer seus direitos conforme a LGPD. 
                    Responderemos sua solicitação em até 15 dias úteis.
                  </p>
                  
                  <div className={styles.processSteps}>
                    <h4>Como funciona:</h4>
                    <ol className={styles.stepsList}>
                      <li>Preencha o formulário com sua solicitação</li>
                      <li>Analisamos e verificamos sua identidade</li>
                      <li>Processamos sua solicitação</li>
                      <li>Enviamos a resposta por e-mail</li>
                    </ol>
                  </div>
                  
                  <div className={styles.contactInfo}>
                    <h4>Outras formas de contato:</h4>
                    <p>📧 lgpd@voxcreative.com.br</p>
                    <p>📱 (11) 9 9999-9999</p>
                  </div>
                </div>

                <Card variant="elevated" className={styles.formCard}>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Nome Completo *
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
                      <label htmlFor="phone" className={styles.label}>
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.input}
                        placeholder="(11) 9 9999-9999"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="requestType" className={styles.label}>
                        Tipo de Solicitação *
                      </label>
                      <select
                        id="requestType"
                        name="requestType"
                        value={formData.requestType}
                        onChange={handleInputChange}
                        required
                        className={styles.select}
                      >
                        <option value="">Selecione o tipo de solicitação</option>
                        {requestTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Descrição da Solicitação *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className={styles.textarea}
                        placeholder="Descreva detalhadamente sua solicitação relacionada aos seus dados pessoais..."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className={styles.successMessage}>
                        ✅ Solicitação enviada com sucesso! Responderemos em até 15 dias úteis.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className={styles.errorMessage}>
                        ❌ Erro ao enviar solicitação. Tente novamente ou entre em contato por e-mail.
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      className={styles.submitButton}
                    >
                      📨 Enviar Solicitação
                    </Button>
                  </form>
                </Card>
              </div>
            </section>

            {/* Informações sobre tratamento */}
            <section className={styles.treatmentSection}>
              <h2 className={styles.sectionTitle}>Como Tratamos seus Dados</h2>
              <div className={styles.treatmentInfo}>
                <Card variant="bordered" className={styles.treatmentCard}>
                  <h4>📝 Dados Coletados</h4>
                  <ul>
                    <li>Nome e e-mail (formulários)</li>
                    <li>Telefone (WhatsApp)</li>
                    <li>Empresa/Instagram (cotações)</li>
                    <li>IP e cookies (navegação)</li>
                  </ul>
                </Card>
                
                <Card variant="bordered" className={styles.treatmentCard}>
                  <h4>🎯 Finalidades</h4>
                  <ul>
                    <li>Prestação de serviços</li>
                    <li>Comunicação comercial</li>
                    <li>Suporte ao cliente</li>
                    <li>Melhorias no site</li>
                  </ul>
                </Card>
                
                <Card variant="bordered" className={styles.treatmentCard}>
                  <h4>🔒 Segurança</h4>
                  <ul>
                    <li>Criptografia SSL</li>
                    <li>Servidores seguros</li>
                    <li>Acesso restrito</li>
                    <li>Backups protegidos</li>
                  </ul>
                </Card>
                
                <Card variant="bordered" className={styles.treatmentCard}>
                  <h4>⏱️ Retenção</h4>
                  <ul>
                    <li>Durante prestação do serviço</li>
                    <li>Conforme obrigação legal</li>
                    <li>Até revogação do consentimento</li>
                    <li>Máximo 5 anos (exceto lei)</li>
                  </ul>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
