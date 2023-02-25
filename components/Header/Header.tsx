import React from 'react';
import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <span className={s.logo}>VNUK</span>
    </header>
  );
}

export default Header;
