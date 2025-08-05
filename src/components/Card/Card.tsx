import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

/**
 * Componente de card reutilizável
 * Usado para exibir conteúdo em containers organizados
 */
export default function Card({
  children,
  variant = 'default',
  className = '',
  onClick,
  ariaLabel
}: CardProps) {
  const cardClasses = `${styles.card} ${styles[variant]} ${className}`;

  return (
    <div
      className={cardClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
