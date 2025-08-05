import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'whatsapp';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  target?: '_blank' | '_self';
  ariaLabel?: string;
}

/**
 * Componente de botão reutilizável
 * Suporta diferentes variantes de estilo e pode ser usado como link ou botão
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  target = '_self',
  ariaLabel
}: ButtonProps) {
  const baseClasses = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

  // Se tem href, renderiza como link
  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  // Senão, renderiza como botão
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
