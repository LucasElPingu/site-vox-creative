import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Footer.module.css';

/**
 * Componente de rodapé principal
 * Contém links de navegação, informações de contato e redes sociais
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos/agencia', label: 'Agência' },
    { href: '/servicos/grafica', label: 'Gráfica' },
    { href: '/planos', label: 'Planos' },
    { href: '/contato', label: 'Contato' }
  ];

  const services = [
    { href: '/servicos/agencia', label: 'Social Media' },
    { href: '/servicos/agencia', label: 'Design Estratégico' },
    { href: '/servicos/agencia', label: 'Tráfego Pago' },
    { href: '/servicos/grafica', label: 'Impressos Gráficos' },
    { href: '/servicos/agencia', label: 'Identidade Visual' },
    { href: '/servicos/agencia', label: 'Consultoria' }
  ];

  const legalLinks = [
    { href: '/politica-privacidade', label: 'Política de Privacidade' },
    { href: '/termos', label: 'Termos de Uso' },
    { href: '/lgpd', label: 'LGPD' }
  ];

  const socialLinks = [
    {
      href: 'https://www.instagram.com/vox_creativ',
      label: 'Instagram',
      icon: '📷'
    }
  ];

  const cities = [
    'Embu das Artes - SP',
    'Goiânia - GO', 
    'Guanambi - BA',
    'Recife - PE'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Seção principal do footer */}
        <div className={styles.footerMain}>
          <div className={styles.footerGrid}>
            {/* Coluna da empresa */}
            <div className={styles.footerColumn}>
              <div className={styles.logo}>
                <span className={styles.logoText}>Vox</span>
                <span className={styles.logoAccent}>Creative</span>
              </div>
              <p className={styles.description}>
                Agência nacional de marketing digital com sede em 4 cidades. 
                Sua marca com identidade, estratégia e resultado real.
              </p>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={`Seguir no ${social.label}`}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links rápidos */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Links Rápidos</h4>
              <ul className={styles.linkList}>
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Serviços */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Serviços</h4>
              <ul className={styles.linkList}>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link href={service.href} className={styles.footerLink}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato e cidades */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Atendimento Nacional</h4>
              <p className={styles.contactInfo}>
                📧 contato@voxcreative.com.br<br />
                📱 (11) 94954-8700
              </p>
              <div className={styles.cities}>
                <h5>Nossas Cidades:</h5>
                <ul className={styles.cityList}>
                  {cities.map((city, index) => (
                    <li key={index}>{city}</li>
                  ))}
                </ul>
              </div>
              <Button
                href="https://wa.me/5511949548700"
                variant="whatsapp"
                size="medium"
                target="_blank"
              >
                💬 WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className={styles.footerDivider}></div>

        {/* Seção inferior */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <div className={styles.copyright}>
              <p>&copy; {currentYear} Vox Creative. Todos os direitos reservados.</p>
            </div>
            <nav className={styles.legalNav} aria-label="Links legais">
              <ul className={styles.legalLinks}>
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.legalLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
