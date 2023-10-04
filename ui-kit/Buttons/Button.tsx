import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import s from './Button.module.scss';

interface iButton {
  children: ReactNode;
  variant: 'outlined' | 'contained';
  size: 'medium' | 'small';
  onClick?: () => void;
  typeSubmit?: boolean;
  error?: boolean;
  isLink?: boolean;
  href?: string;
  targetBlank?: boolean;
}

function Button({ children, variant, size, onClick, targetBlank, typeSubmit, error, isLink, href }: iButton) {
  if (isLink) {
    return (
      <Link
        target={targetBlank ? '_blank' : '_self'}
        type={typeSubmit ? 'submit' : 'button'}
        className={clsx(s[size], s[variant], error && s.error)}
        href={href ?? '#'}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={typeSubmit ? 'submit' : 'button'}
      className={clsx(s[size], s[variant], error && s.error)}
    >
      {children}
    </button>
  );
}

export default Button;
