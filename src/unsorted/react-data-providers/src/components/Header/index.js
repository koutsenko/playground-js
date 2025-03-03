import React from 'react';

import Logo from 'components/Logo';

import styles from './index.module.css';

function Header() {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header']}>
        <Logo />
      </div>
    </header>
  );
}

export default Header;
