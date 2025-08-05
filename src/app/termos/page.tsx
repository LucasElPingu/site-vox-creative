import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import styles from '../politica-privacidade/legal.module.css';

/**
 * Página de Termos de Uso
 */
export default function Termos() {
  return (
    <>
      <Head>
        <title>Termos de Uso | Vox Creative</title>
        <meta name="description" content="Termos de Uso da Vox Creative. Condições gerais para utilização do site e contratação dos nossos serviços." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Layout>
        <div className={styles.container}>
          <div className={styles.legalContent}>
            <h1 className={styles.pageTitle}>Termos de Uso</h1>
            <p className={styles.lastUpdated}>Última atualização: Janeiro de 2025</p>
            
            <div className={styles.content}>
              <section className={styles.section}>
                <h2>1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o site da Vox Creative, você concorda em cumprir 
                  e estar vinculado a estes Termos de Uso. Se não concordar com 
                  qualquer parte destes termos, não use nosso site.
                </p>
              </section>

              <section className={styles.section}>
                <h2>2. Descrição dos Serviços</h2>
                <p>A Vox Creative oferece serviços de:</p>
                <ul>
                  <li>Marketing digital e social media</li>
                  <li>Design estratégico e identidade visual</li>
                  <li>Tráfego pago (Google Ads, Facebook Ads)</li>
                  <li>Produtos gráficos personalizados</li>
                  <li>Consultoria em marketing digital</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Uso do Site</h2>
                <h3>3.1 Uso Permitido</h3>
                <p>Você pode usar nosso site para:</p>
                <ul>
                  <li>Conhecer nossos serviços</li>
                  <li>Entrar em contato conosco</li>
                  <li>Solicitar orçamentos</li>
                  <li>Ler nosso blog</li>
                </ul>
                
                <h3>3.2 Uso Proibido</h3>
                <p>É proibido:</p>
                <ul>
                  <li>Usar o site para fins ilegais</li>
                  <li>Tentar hackear ou danificar o site</li>
                  <li>Copiar conteúdo sem autorização</li>
                  <li>Fazer spam ou enviar vírus</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>4. Contratos de Serviço</h2>
                <h3>4.1 Contratação</h3>
                <p>
                  A contratação dos nossos serviços é formalizada através de 
                  contrato específico, com condições detalhadas.
                </p>
                
                <h3>4.2 Prazo Mínimo</h3>
                <ul>
                  <li>Social Media: 6 meses</li>
                  <li>Tráfego Pago: 3 meses</li>
                  <li>Produtos Gráficos: sem prazo mínimo</li>
                </ul>
                
                <h3>4.3 Pagamento</h3>
                <p>
                  Os valores e condições de pagamento são estabelecidos no 
                  contrato específico de cada serviço.
                </p>
              </section>

              <section className={styles.section}>
                <h2>5. Propriedade Intelectual</h2>
                <p>
                  Todo conteúdo do site (textos, imagens, logos, design) é 
                  propriedade da Vox Creative e está protegido por direitos autorais.
                </p>
                <p>
                  Os materiais criados para clientes seguem as condições 
                  estabelecidas em contrato específico.
                </p>
              </section>

              <section className={styles.section}>
                <h2>6. Responsabilidades</h2>
                <h3>6.1 Da Vox Creative</h3>
                <ul>
                  <li>Prestar os serviços contratados com qualidade</li>
                  <li>Manter a confidencialidade dos dados dos clientes</li>
                  <li>Cumprir prazos acordados</li>
                  <li>Fornecer suporte adequado</li>
                </ul>
                
                <h3>6.2 Do Cliente</h3>
                <ul>
                  <li>Fornecer informações necessárias</li>
                  <li>Efetuar pagamentos nos prazos acordados</li>
                  <li>Aprovar materiais em tempo hábil</li>
                  <li>Cumprir as condições contratuais</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>7. Limitação de Responsabilidade</h2>
                <p>
                  A Vox Creative não se responsabiliza por danos indiretos, 
                  lucros cessantes ou perdas decorrentes do uso do site ou serviços, 
                  exceto nos casos previstos em lei.
                </p>
              </section>

              <section className={styles.section}>
                <h2>8. Cancelamento</h2>
                <p>
                  O cancelamento de serviços deve seguir as condições estabelecidas 
                  no contrato específico. Cancelamentos antecipados podem estar 
                  sujeitos a multas conforme previsto em contrato.
                </p>
              </section>

              <section className={styles.section}>
                <h2>9. Modificações</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site.
                </p>
              </section>

              <section className={styles.section}>
                <h2>10. Lei Aplicável</h2>
                <p>
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa 
                  será resolvida no foro da comarca de São Paulo/SP.
                </p>
              </section>

              <section className={styles.section}>
                <h2>11. Contato</h2>
                <p>Para dúvidas sobre estes termos:</p>
                <ul>
                  <li>E-mail: contato@voxcreative.com.br</li>
                  <li>WhatsApp: (11) 9 9999-9999</li>
                  <li>Site: www.voxcreative.com.br</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
