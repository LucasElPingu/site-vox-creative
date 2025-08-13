'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../Button/Button';
import styles from './Header.module.css';

/**
 * Componente de cabeçalho principal
 * Contém navegação, logo e menu mobile responsivo
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detecta scroll para alterar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu mobile ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    {
      href: '/servicos',
      label: 'Serviços',
      submenu: [
        { href: '/servicos/agencia', label: 'Agência' },
        { href: '/servicos/grafica', label: 'Gráfica' }
      ]
    },
    { href: '/contato', label: 'Contato' }
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="VOX CREATIVE - Página inicial">
            <span className={styles.logoText}>VOX</span>
            <span className={styles.logoAccent}>CREATIVE</span>
          </Link>

          {/* Navegação Desktop */}
          <nav className={styles.nav} role="navigation" aria-label="Navegação principal">
            <ul className={styles.navList}>
              {navigationItems.map((item) => (
                <li key={item.href} className={styles.navItem}>
                  {item.submenu ? (
                    <div className={styles.dropdown}>
                      <Link
                        href={item.href}
                        className={`${styles.navLink} ${pathname.startsWith(item.href) ? styles.active : ''}`}
                      >
                        {item.label}
                        <span className={styles.dropdownArrow}>▼</span>
                      </Link>
                      <ul className={styles.submenu}>
                        {item.submenu.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className={`${styles.submenuLink} ${pathname === subItem.href ? styles.active : ''}`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão CTA */}
          <div className={styles.headerActions}>
            <Button href="/contato" variant="primary" size="medium">
              Falar Conosco
            </Button>

            {/* Menu Mobile Toggle */}
            <button
              className={styles.mobileMenuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
            >
              <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <nav role="navigation" aria-label="Navegação mobile">
            <ul className={styles.mobileNavList}>
              {navigationItems.map((item) => (
                <li key={item.href} className={styles.mobileNavItem}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <ul className={styles.mobileSubmenu}>
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className={`${styles.mobileSubmenuLink} ${pathname === subItem.href ? styles.active : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className={styles.mobileNavItem}>
                <Button href="/contato" variant="primary" size="large" className={styles.mobileCtaButton}>
                  Falar Conosco
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
