import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout/Layout';
import styles from './legal.module.css';

/**
 * Página de Política de Privacidade
 */
export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | Vox Creative</title>
        <meta name="description" content="Política de Privacidade da Vox Creative. Saiba como tratamos e protegemos seus dados pessoais de acordo com a LGPD." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <Layout>
        <div className={styles.container}>
          <div className={styles.legalContent}>
            <h1 className={styles.pageTitle}>Política de Privacidade</h1>
            <p className={styles.lastUpdated}>Última atualização: Janeiro de 2025</p>
            
            <div className={styles.content}>
              <section className={styles.section}>
                <h2>1. Informações Gerais</h2>
                <p>
                  Esta Política de Privacidade descreve como a Vox Creative ("nós", "nossa" ou "empresa") 
                  coleta, usa, armazena e protege as informações pessoais dos usuários ("você" ou "usuário") 
                  de nosso site e serviços.
                </p>
              </section>

              <section className={styles.section}>
                <h2>2. Dados Coletados</h2>
                <h3>2.1 Dados fornecidos diretamente</h3>
                <ul>
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Nome da empresa</li>
                  <li>Instagram ou rede social</li>
                  <li>Mensagens e comunicações</li>
                </ul>
                
                <h3>2.2 Dados coletados automaticamente</h3>
                <ul>
                  <li>Endereço IP</li>
                  <li>Tipo de navegador</li>
                  <li>Páginas visitadas</li>
                  <li>Tempo de permanência no site</li>
                  <li>Dados de cookies</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>3. Finalidade do Tratamento</h2>
                <p>Utilizamos seus dados pessoais para:</p>
                <ul>
                  <li>Fornecer nossos serviços de marketing digital</li>
                  <li>Responder suas solicitações e dúvidas</li>
                  <li>Enviar propostas comerciais</li>
                  <li>Melhorar nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Enviar comunicações de marketing (com seu consentimento)</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>4. Base Legal</h2>
                <p>O tratamento de seus dados pessoais se baseia em:</p>
                <ul>
                  <li>Consentimento do titular</li>
                  <li>Execução de contrato</li>
                  <li>Legítimo interesse</li>
                  <li>Cumprimento de obrigação legal</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>5. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, 
                  exceto quando necessário para:
                </p>
                <ul>
                  <li>Prestação de nossos serviços</li>
                  <li>Cumprimento de obrigações legais</li>
                  <li>Proteção de nossos direitos</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>6. Segurança dos Dados</h2>
                <p>
                  Implementamos medidas técnicas e administrativas adequadas para proteger 
                  seus dados pessoais contra acesso não autorizado, alteração, divulgação 
                  ou destruição.
                </p>
              </section>

              <section className={styles.section}>
                <h2>7. Retenção de Dados</h2>
                <p>
                  Mantemos seus dados pessoais pelo tempo necessário para cumprir as 
                  finalidades descritas nesta política, ou conforme exigido por lei.
                </p>
              </section>

              <section className={styles.section}>
                <h2>8. Seus Direitos</h2>
                <p>Você tem direito a:</p>
                <ul>
                  <li>Confirmação da existência de tratamento</li>
                  <li>Acesso aos dados</li>
                  <li>Correção de dados incompletos ou incorretos</li>
                  <li>Anonimização, bloqueio ou eliminação</li>
                  <li>Portabilidade dos dados</li>
                  <li>Eliminação dos dados tratados com consentimento</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2>9. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar sua experiência em nosso site. 
                  Você pode gerenciar suas preferências de cookies através das 
                  configurações do seu navegador.
                </p>
              </section>

              <section className={styles.section}>
                <h2>10. Alterações</h2>
                <p>
                  Esta política pode ser atualizada periodicamente. Notificaremos 
                  sobre mudanças significativas através do nosso site.
                </p>
              </section>

              <section className={styles.section}>
                <h2>11. Contato</h2>
                <p>Para exercer seus direitos ou esclarecer dúvidas:</p>
                <ul>
                  <li>E-mail: privacidade@voxcreative.com.br</li>
                  <li>WhatsApp: (11) 9 9999-9999</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
